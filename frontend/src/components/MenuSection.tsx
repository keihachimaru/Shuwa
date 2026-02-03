import type { Item } from '@/types';
import '@/styles/MenuSection.css';
import MenuItem from '@/components/MenuItem';

type Props = {
    section: string,
    items: Item[],
}

const MenuSection = ({ section, items } : Props) => {
    const sectionName = section.split("[")
    const sectionDetail = sectionName.length>1?sectionName[1].slice(0,-1):""

    return (
        <div 
            className={[
                "menu-section",
                section.includes("!")?"accented":""
            ].join(" ")}
            id={ section.split(" ").join("-").toLocaleLowerCase() }
        >

            <div
                className="section-title"
            >
                <div
                    className="title"
                >
                    { sectionName[0] } 
                </div>
                <div
                    className="detail"
                >
                    { sectionDetail }
                </div>
            </div>
            <div
                className="section-contents"
            >
                {
                    items.map(i => (
                        <MenuItem data={i} key={i.nombre}/>
                    ))
                }
            </div>
        </div>
    );
};

export default MenuSection;