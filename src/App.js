import "./App.css";

import header from "./images/bg-pattern-card.svg";
import victor from "./images/image-victor.jpg";

import top from "./images/bg-pattern-top.svg";
import bottom from "./images/bg-pattern-bottom.svg"

const footerContent = [
    { number: "80K", title: "Followers" },
    { number: "803K", title: "Likes" },
    { number: "1.4K", title: "Photos" },
];

function App() {
    return (
        <div className="App">
            <img
                src={top}
                alt="Decoration Top"
                className="app__decoration__top"
            />
            <img
                src={bottom}
                alt="Decoration Bottom"
                className="app__decoration__bottom"
            />

            <div className="card">
                <img src={header} alt="Profile Card" className="card__header" />
                <div className="card__body">
                    <img src={victor} alt="Victor Crest" />
                    <h1>
                        Victor Crest <span>26</span>
                    </h1>
                    <p>London</p>
                </div>
                <div className="card__footer">
                    {footerContent.map((item) => (
                        <div className="card__footer__item">
                            <h2>{item.number}</h2>
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
