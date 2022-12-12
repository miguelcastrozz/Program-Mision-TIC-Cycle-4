import "../../sytlesheets/forms.css";

export default function input({ children, type, value, onChange }) {
    return (
        <input className="input"
               type={type}
               placeholder={children}
               value={value}
               onChange={onChange}
        ></input>)
}
