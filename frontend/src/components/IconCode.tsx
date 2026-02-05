import '@/styles/IconCode.css';

const IconCode = () => {
    const images = [
        {
            name: "Sésamo",
            src: "../../public/sesame.png"
        },
        {
            name: "Pescado",
            src: "../../public/fish.png"
        },
        {
            name: "Huevo",
            src: "../../public/egg.png"
        },
        {
            name: "Cacahuetes",
            src: "../../public/peanut.png"
        },
        {
            name: "Soja",
            src: "../../public/soy-sauce.png"
        },
        {
            name: "Moluscos",
            src: "../../public/mollusc.png"
        },
        {
            name: "Cacahuetes",
            src: "../../public/gluten.png"
        },
        {
            name: "Frutos secos",
            src: "../../public/almond.png"
        },
        {
            name: "Sin gluten",
            src: "../../public/gluten-free.png"
        },
        {
            name: "Mostaza",
            src: "../../public/mustard.png"
        },
        {
            name: "Crustáceos",
            src: "../../public/crustacean.png"
        },
        {
            name: "Lácteos",
            src: "../../public/dairy.png"
        },
        {
            name: "Vegetariano",
            src: "../../public/vegetarian.png"
        }
    ];
    return (
        <div className="icon-codes">
            <img 
                className="logo"
                src={"../../public/shuwashuwa.png"}
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