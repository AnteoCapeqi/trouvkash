import React from "react";
import axios from "axios";

export default function Terminals() {
return (
axios.get("/terminals").then(response => {
console.log(response.data);
}),
err => {
console.log(err);
}
);
}

export default Terminals;
