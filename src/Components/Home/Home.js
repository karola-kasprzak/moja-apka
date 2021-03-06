import React, { useState } from "react";
import "./Home.css";

function Home() {
    const [filterColorPalette, setFilterColorPalette] = useState([
        "Gray",
        "Red",
        "Yellow",
    ]);
    const [animation, setAnimation] = useState("");

    const [filterColor, setFilterColor] = useState(filterColorPalette[0]);

    const changeFilterColor = () => {
        const currentFilterIndex = filterColorPalette.indexOf(filterColor);

        currentFilterIndex + 1 === filterColorPalette.length
            ? setFilterColor(filterColorPalette[0])
            : setFilterColor(filterColorPalette[currentFilterIndex + 1]);
    };

    return (
        <div className={"HomeContainer " + filterColor + animation}>
            <article className="Home-article">
                <div>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium cum consequatur tempora itaque? Temporibus
                        explicabo tempore accusamus aut! Ducimus, provident?
                    </p>
                    <button onClick={changeFilterColor}>Change Color</button>
                </div>
            </article>
        </div>
    );
}

export default Home;
