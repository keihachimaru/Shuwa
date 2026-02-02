import '@/styles/Navbar.css';
import { useState } from 'react';

type Tab = {
    name: string,
    url: string,
}

const Navbar = () => {
    const [tabs] = useState<Tab[]>([
        {
            name: "Concepto Izakaya",
            url: "/concepto"
        },
        {
            name: "Carta",
            url: "/carta"
        },
        {
            name: "Sakes",
            url: "/sakes"
        },
        {
            name: "Donde estamos",
            url: "/lugar"
        },
        {
            name: "Eventos",
            url: "/eventos"
        },
        {
            name: "Contacto",
            url: "/contacto"
        },
        {
            name: "Reservar",
            url: "/reserva"
        },
    ]);



    return (
        <div className="navbar">
            {
                tabs.map((t: Tab) => (
                    <a 
                        className="tab"
                        href={t.url}
                        key={t.name}
                    >
                        { t.name }
                    </a>
                ))    
            }
        </div>
    )
}

export default Navbar;