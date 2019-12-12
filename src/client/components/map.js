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

    const getTerminals = (longitude, latitude) => {
        axios
            .get(`/terminals?latitude=${latitude}&longitude=${longitude}`)
            .then(res => {
                if (res.data !== null) {
                    setTerminals(res.data);
                }
            });
    };

    useEffect(() => {
        getTerminals([position[1], position[0]]);
    }, []);

    const afficheTerminaux = elem => (
        <Marker key={elem._id} position={[elem.latitude, elem.longitude]}>
            <Popup>{elem.address}</Popup>
        </Marker>
    );

    const changepos = event => {
        const newPoint = event.target.getCenter();
        getTerminals(newPoint.lng, newPoint.lat);
    };

    return (
        <Map onMoveEnd={changepos} center={position} zoom={10} id={"maps"}>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <Marker position={position}>
                <Popup>{"je suis ici"}</Popup>
            </Marker>
            {terminals.map(elem => afficheTerminaux(elem))}
        </Map>
    );
}

export default mapl;
