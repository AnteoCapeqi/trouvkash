import React, {useState, useEffect} from "react";

import Banks from "./terminals";
import Mapl from "./map";
import axios from "axios";

const Main = () => {
    const [position, setPosition] = useState([]);
    const [terminals, setTerminals] = useState([]);

    const getTerminals = (longitude, latitude) => {
        console.log(longitude);
        axios
            .get(`/terminals?latitude=${latitude}&longitude=${longitude}`)
            .then(res => {
                if (res.data !== null) {
                    setTerminals(res.data);
                }
            });
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            const tab = [];
            tab[0] = pos.coords.latitude;
            tab[1] = pos.coords.longitude;
            setPosition(tab);
        });
    }, []);

    useEffect(() => {
        getTerminals(position[1], position[0]);
    }, [position]);

    return (
        <section>
            <div>
                <h1>{"Terminals"}</h1>
                <Banks terminals={terminals} />
            </div>

            <div>
                <Mapl />
            </div>
        </section>
    );
};
export default Main;
