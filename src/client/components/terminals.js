import React from "react";

export default class banks extends React.Component {
    render() {
        //  console.log(this.props.terminals);
        return (
            <ul>
                {this.props.terminals
                    .filter(({address}) => {
                        if (address) {
                            return true;
                        }
                        return false;
                    })
                    .map(elem => (
                        <li key={elem._id}>{elem.address} </li>
                    ))}
            </ul>
        );
    }
}
