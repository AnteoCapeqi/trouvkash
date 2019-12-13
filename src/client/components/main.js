import * as React from "react";

import Banks from "./terminals";
import Research from "./research";

import Mapl from "./map";

const Main = () => (
    <section>
        
        <div>
            <h1>Terminals</h1>
            <Banks />
            <Research />
        </div>

        <div>
            <Mapl />
        </div>
    </section>
);
export default Main;
