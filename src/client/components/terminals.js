import React from "react";
import axios from "axios";

export default class banks extends React.Component {
    state = {
        banks: [],
    };

    componentDidMount() {
        axios
            .get(`/terminals`)

            .then(res => {
                const banks = res.data;
                this.setState({banks});
            });
    }

    render() {
        return (
            <ul>
                {this.state.banks.map(banks => (
                    <li>{banks.address} </li>
                    // <li>{"Surya aime les fessée !"} </li>
                ))}
            </ul>
        );
    }
}
