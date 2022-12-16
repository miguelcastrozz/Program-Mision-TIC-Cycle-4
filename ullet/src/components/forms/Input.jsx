import "../../sytlesheets/forms.css";

export default function input({ children, type, onChange, placeholder }) {
    return (
        <label className="input" >{children}
            <input type={type} onChange={onChange} placeholder={placeholder} ></input>
        </label>
    );
}
