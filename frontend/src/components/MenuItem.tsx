import type { Item } from '@/types';
import '@/styles/MenuItem.css';

type Props = {
    data: Item;
}

const MenuItem = ({ data }: Props) => {
    return (
        <div className="menu-item">
            { data.emphasis.length>0 &&
                <div className="emphasis">
                    { data.emphasis }
                </div>
            }
            <div className="menu-title">
                <span className="item-name">
                    { data.nombre }
                </span>
                <span className="item-price">
                    { Number(data.precio).toFixed(1)+'  ' }
                    €
                </span>
            </div>
            <div className="menu-description">
                { data.descripción }
            </div>
            <div className="menu-row">
                <div className="menu-notes">
                    {
                        data.notas.map(n => (
                            <div className="menu-note" key={n}>
                                { n }
                            </div>                        
                        ))
                    }
                </div>
                { data.icons.length && <div className="menu-icons">
                    {
                        data.icons.map(icon => (
                            icon?.length&&<img 
                                key={icon}
                                className="menu-icon"
                                src={`${icon}`}/>
                        ))
                    }
                </div>}
            </div>
        </div>
    )
};

export default MenuItem;