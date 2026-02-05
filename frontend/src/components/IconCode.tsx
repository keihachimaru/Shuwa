import '@/styles/IconCode.css';
import sesameImg from '@/assets/sesame.png';
import fishImg from '@/assets/fish.png';
import eggImg from '@/assets/egg.png';
import peanutImg from '@/assets/peanut.png';
import soySauceImg from '@/assets/soy-sauce.png';
import molluscImg from '@/assets/mollusc.png';
import glutenImg from '@/assets/gluten.png';
import almondImg from '@/assets/almond.png';
import glutenFreeImg from '@/assets/gluten-free.png';
import mustardImg from '@/assets/mustard.png';
import crustaceanImg from '@/assets/crustacean.png';
import dairyImg from '@/assets/dairy.png';
import vegetarianImg from '@/assets/vegetarian.png';
import shuwashuwaImg from '@/assets/shuwashuwa.png';

const IconCode = () => {
    const images = [
        {
            name: "Sésamo",
            src: sesameImg
        },
        {
            name: "Pescado",
            src: fishImg
        },
        {
            name: "Huevo",
            src: eggImg
        },
        {
            name: "Cacahuetes",
            src: peanutImg
        },
        {
            name: "Soja",
            src: soySauceImg
        },
        {
            name: "Moluscos",
            src: molluscImg
        },
        {
            name: "Cacahuetes",
            src: glutenImg
        },
        {
            name: "Frutos secos",
            src: almondImg
        },
        {
            name: "Sin gluten",
            src: glutenFreeImg
        },
        {
            name: "Mostaza",
            src: mustardImg
        },
        {
            name: "Crustáceos",
            src: crustaceanImg
        },
        {
            name: "Lácteos",
            src: dairyImg
        },
        {
            name: "Vegetariano",
            src: vegetarianImg
        }
    ];
    return (
        <div className="icon-codes">
            <img 
                className="logo"
                src={shuwashuwaImg}
            />
            <div className="codes">
                {images.map((i, idx) => (
                    <div
                        className="icon-code"
                        key={idx}
                    >
                        <span
                            className="label"
                        >
                            { i.name }
                        </span>
                        <img
                            className="icon"
                            src={i.src}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconCode;