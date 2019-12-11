import React, {useState, useEffect} from "react";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import axios from "axios";

function mapl() {
    const [position, setPosition] = useState([0, 0]);
    const [terminals, setTerminals] = useState([]);
    // eslint-disable-next-line no-shadow,no-unused-vars
    navigator.geolocation.getCurrentPosition(pos => {
        const tab = [];
        tab[0] = pos.coords.latitude;
        tab[1] = pos.coords.longitude;
        setPosition(tab);
    });
    const obj = {
        id: 1,
        position: [51.0569, 4.37117],
        address: "mon adresse",
    };

    useEffect(() => {
        axios.get("/terminals").then(res => {
            setTerminals(res.data);
        });
    }, []);

    const SearchSuggestions = elem => (
        <Marker key={elem._id} position={[elem.latitude, elem.longitude]}>
            <Popup>{elem.address}</Popup>
        </Marker>
    );
    return (
        <Map center={position} zoom={13} id={"maps"}>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <Marker position={position}>
                <Popup>{"Votre position"}</Popup>
            </Marker>
            {terminals.map(elem => SearchSuggestions(elem))}
        </Map>
    );
}

export default mapl;
