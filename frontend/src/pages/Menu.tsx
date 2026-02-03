import Navbar from "@/components/Navbar";
import IconCode from "@/components/IconCode";
import QuickNav from "@/components/QuickNav";
import Papa from "papaparse";
import { useEffect, useState, useMemo } from "react";
import type { Item, Row } from '@/types';
import '@/styles/Menu.css';
import MenuSection from "@/components/MenuSection";

const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTI7dYkDQH8Oyf1W4f_mxY97Z32RbUZdcnBzQXfCBld6xIiqHOEUvdJGpBFto2i5UvnRB2GRRvZTZP/pub?output=csv"

const Menu = () => {
    const [data, setData] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [current, setCurrent] = useState<string | null>(null);
    
    const items = useMemo(() => {
        const sections = [ ...new Set(data.map(i => i.seccion))]
        return Object.fromEntries(sections.map(s => ([
            s,
            data.filter(d => d.seccion===s)
        ])))
    }, [data])

    const sections = useMemo(() => ([ ...new Set(data.map(i => i.seccion))]), [data])

    function parseData() {
        Papa.parse(CSV_URL, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results : { data:  Row[] }) => {
                const data = results.data.map(
                    (d: Row) => ({
                        nombre: d.Nombre,
                        descripción: d.Descripción,
                        precio: d.Precio,
                        foto: d.Foto|| '',
                        seccion: d.Sección,
                        notas: d.Notas.split('\n').map(i => i.trim()),
                        emphasis: d.Emphasis,
                        icons: d.Icons.split(' ').map(i => i.trim())
                    })
                );
                setData(data);
                setLoading(false);
            },
            error: (err : { message: string }) => {
                setError(err.message);
                setLoading(false);
            }
        });
    }

    useEffect(() => {
        parseData();
    }, []);
    
    useEffect(() => {
        if(!error && !loading) {
            const domSections = document.querySelectorAll(".menu-section")
            const onScroll = () => {
              let currentSection: string | null = null;
              domSections.forEach((sec) => {
                const top = sec.getBoundingClientRect().top;
                if (top < 30) {
                  currentSection = sec.id || null;
                }
              });
              if(currentSection !== null) {
                const val = (currentSection as string).split('-').join(' ');
                const name = String(val).charAt(0).toUpperCase() + String(val).slice(1);

                setCurrent(name);
              }
              else {
                  setCurrent(null);
              }
            };

            window.addEventListener("scroll", onScroll);
            onScroll();

            return () => window.removeEventListener("scroll", onScroll);
        }
    }, [loading, error])

    if(loading) {
        return (
            <>
                <Navbar/>
                Loading ...
            </>
        );
    }
    else if(error) {
        return (
            <>
                <Navbar/>
                Error!
            </>
        );
    }

    return (
        <div className="menu">
            <Navbar/>
            <IconCode/>
            <QuickNav data={current} sections={sections}/>
            {sections.map(section => (
                <MenuSection
                    key={section}
                    section={section}
                    items={items[section]}
                />
            ))}
        </div>
    )
}
export default Menu;