import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const DropdownMenu = (props) => {
    const onChange = (event) => {
        props.setDrink(event.value)
    }

    return (
        <div style={{ width: "15em", margin: "auto" }}>
            <Dropdown options={props.options} onChange={onChange} value={props.options[0]} placeholder="Select an option" />
        </div>
    )
}

export default DropdownMenu
