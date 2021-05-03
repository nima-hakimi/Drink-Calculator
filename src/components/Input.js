import React from 'react'

const Input = (props) => {
    const textAreaChange = (event) => props.setMultiplier(event.target.value)
    const style = {
        marginTop: "1em",
        width: "15em",
        height: "32px",
        paddingLeft: 8
    }

    return (
        <div>
            <input style={style} type="textarea" onChange={textAreaChange} />
        </div>
    )
}

export default Input
