import "../../sytlesheets/forms.css";

export default function Button2({children, onClick, type }) {
    return (
        <button
            className="button-2"
            onClick={onClick}
            type={type}
        >{children}</button>)
}

// alerta(): Ejecuta la función alerta
// alerta: Implementación de la función alerta
// () => alerta("Miguel"): Función anónima que ejecuta la función alerta, para parámetros
// Con parámetros toca crear función anónima: () => nombre(parámetros)
