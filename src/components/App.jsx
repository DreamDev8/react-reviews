import React from "react";
import Review from "./Review";

function App() {
    return (
        <div>
            <main>
                <section>
                    <div className="heading">
                        <h1>Our Reviews</h1>
                        <div className="border-bottom"></div>
                    </div>
                    <Review />
                </section>
            </main>
            <footer>
                <h3 className="footer-h3">Challenge by Coding Addict. Coded by DreamDev.</h3>
            </footer>
        </div>

    );
}

export default App;
