import "../../sytlesheets/forms.css";

export default function Button({children, onClick, type }) {
    return (
        <button
            className="button"
            onClick={onClick}
            type={type}
        ><b>{children}</b></button>)
}

// alerta(): Ejecuta la función alerta
// alerta: Implementación de la función alerta
// () => alerta("Miguel"): Función anónima que ejecuta la función alerta, para parámetros
// Con parámetros toca crear función anónima: () => nombre(parámetros)
