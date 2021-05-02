import React from 'react'

const Input = (props) => {
    const textAreaChange = (event) => props.setMultiplier(event.target.value)
    const style = {
        marginTop: "1em",
        width: "17.5em",
        height: "2em"
    }

    return (
        <div>
            <input style={style} type="textarea" onChange={textAreaChange} />
        </div>
    )
}

export default Input
