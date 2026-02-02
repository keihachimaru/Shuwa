import Navbar from "@/components/Navbar";
import Papa from "papaparse";
import { useEffect, useState } from "react";

const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTI7dYkDQH8Oyf1W4f_mxY97Z32RbUZdcnBzQXfCBld6xIiqHOEUvdJGpBFto2i5UvnRB2GRRvZTZP/pub?output=csv"

type Item = {
    nombre: string,
    descripción: string,
    precio: number,
    foto: string,
    seccion: string,
    notas: string[],
}

type Row = {
    Nombre: string,
    Descripción: string,
    Precio: number,
    Foto: string,
    Sección: string,
    Notas: string,
}


const Menu = () => {
    const [data, setData] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
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

    return (
        <>
            <Navbar/>
            { JSON.stringify(data) }
        </>
    )
}
export default Menu;