import '@/styles/Navbar.css';
import { useState } from 'react';
import Logo from '@/components/Logo';
import { IoMdMenu } from "react-icons/io";

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

    const [open, setOpen] = useState(false);

    return (
        <div className="navbar">
            <Logo />
            <button
              className="hamburger"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
                <IoMdMenu size={36} color={open?"var(--color-bg-primary)":"var(--color-text-primary)"}/>
            </button>
            <nav className={`nav-links ${open ? 'open' : ''}`}>                
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
            </nav>
            <div className={`background-image ${open ? 'visible' : ''}`}></div>
        </div>
    )
}

export default Navbar;