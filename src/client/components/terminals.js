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
<<<<<<< HEAD
                {this.state.banks.map(banks => (
                    <li>{banks.address} </li>
                    // <li>{"Surya aime les fessée !"} </li>
=======
                {this.state.banks.map(elem => (
                    <li key={elem._id}>{elem.address} </li>
>>>>>>> e42c8eb74ce5ffa730994f498d7e30690747d345
                ))}
            </ul>
        );
    }
}
