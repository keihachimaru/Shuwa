import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import Papa from "papaparse";
import { useEffect, useState, useMemo } from "react";
import type { Item, Row } from '@/types';
import '@/styles/Menu.css';

const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTI7dYkDQH8Oyf1W4f_mxY97Z32RbUZdcnBzQXfCBld6xIiqHOEUvdJGpBFto2i5UvnRB2GRRvZTZP/pub?output=csv"

const Menu = () => {
    const [data, setData] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const items = useMemo(() => {
        const sections = [ ...new Set(data.map(i => i.seccion))]
        return Object.fromEntries(sections.map(s => ([
            s,
            data.filter(d => d.seccion===s)
        ])))
    }, [data])

    const sections = useMemo(() => ([ ...new Set(data.map(i => i.seccion))]), [data])

    useEffect(() => {
        Papa.parse(CSV_URL, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results : { data:  Row[] }) => {
                console.log(results.data)
                const data = results.data.map(
                    (d: Row) => ({
                        nombre: d.Nombre,
                        descripción: d.Descripción,
                        precio: d.Precio,
                        foto: d.Foto|| '',
                        seccion: d.Sección,
                        notas: d.Notas.split('\n'),
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
    }, []);

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