import React from "react";

function PassportInput(props) {
    return (

        <div>
            <h1>{props.title}</h1>
            <input
                placeholder={props.usernamePlaceholder}
                onChange={props.stateFunctionUsername} />

            <input placeholder={props.passwordPlaceholder}
                onChange={props.stateFunctionPassword} />

            <button onClick={props.clickHandler}>Submit</button>
        </div>
    )

}

export default PassportInput;