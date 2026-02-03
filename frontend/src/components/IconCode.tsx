import '@/styles/IconCode.css';

const IconCode = () => {
    const images = [
        {
            name: "Sésamo",
            src: "../src/assets/sesame.png"
        },
        {
            name: "Pescado",
            src: "../src/assets/fish.png"
        },
        {
            name: "Huevo",
            src: "../src/assets/egg.png"
        },
        {
            name: "Cacahuetes",
            src: "../src/assets/peanut.png"
        },
        {
            name: "Soja",
            src: "../src/assets/soy-sauce.png"
        },
        {
            name: "Moluscos",
            src: "../src/assets/mollusc.png"
        },
        {
            name: "Cacahuetes",
            src: "../src/assets/gluten.png"
        },
        {
            name: "Frutos secos",
            src: "../src/assets/almond.png"
        },
        {
            name: "Sin gluten",
            src: "../src/assets/gluten-free.png"
        },
        {
            name: "Mostaza",
            src: "../src/assets/mustard.png"
        },
        {
            name: "Crustáceos",
            src: "../src/assets/crustacean.png"
        },
        {
            name: "Lácteos",
            src: "../src/assets/dairy.png"
        },
        {
            name: "Vegetariano",
            src: "../src/assets/vegetarian.png"
        }
    ];
    return (
        <div className="icon-codes">
            <img 
                className="logo"
                src={"../src/assets/shuwashuwa.png"}
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