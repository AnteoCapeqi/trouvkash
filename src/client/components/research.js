import * as React from "react";

function Research() {
    return (
        <section>
            <div id={"searchbar"}>
                <form action={""} className={"formulaire"}>
                    <input
                        className={"champ"}
                        placeholder={"    Search a terminals..."}
                        type={"input"}
                    />
                </form>
            </div>
        </section>
    );
}

export default Research;
