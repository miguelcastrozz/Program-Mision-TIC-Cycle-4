import React from "react";
import "./forms.css";

function alerta(mensaje) {
    alert(mensaje);
}

export default function Button(props) {
    const { children } = props /* children lo que esta dentro de la etiqueta */
    return (<button
        className="button" onClick={() => alerta("Miguel")}> {children}
    </button>)
}

// alerta(): Ejecuta la función alerta
// alerta: Implementación de la función alerta
// () => alerta("Miguel"): Función anónima que ejecuta la función alerta, para parámetros
