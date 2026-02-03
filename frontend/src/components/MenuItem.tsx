import type { Item } from '@/types';
import '@/styles/MenuItem.css';

type Props = {
    data: Item;
}

const MenuItem = ({ data }: Props) => {
    return (
        <div className="menu-item">
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
        </div>
    )
};

export default MenuItem;