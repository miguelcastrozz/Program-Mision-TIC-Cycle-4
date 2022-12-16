import "./../sytlesheets/PanelUsuario.css";
import PanelTransaction from "./PanelTransaction";
import {useEffect, useState} from "react";

export default function PanelUsuario() {

    const user = "Juan"

    async function fetchTransactions() {
        const respuesta = await fetch("http://localhost:8080/api/transaction/" + user);
        const documents = await respuesta.json();
        setDocuments(documents); /* Ahora actualizamos los documentos del fetch se encuentran en el estado guardado */
    }

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, [])

    return (
        <section className="panel">
            <div className="container">
                <div className="balance card flex">
                    <h1>Saldo</h1>
                    <p className="value">$ 1.512.123</p>
                </div>
            </div>
            <div className="movements card">
                <h1>Mis movimientos</h1>
                <div className="transactions card flex">{
                    documents.map((transaction) =>
                        <PanelTransaction data={transaction} user={user} />
                    )}
                </div>
            </div>
        </section>

    );
}
