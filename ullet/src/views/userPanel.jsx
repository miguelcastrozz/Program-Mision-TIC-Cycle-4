import "./../sytlesheets/PanelUsuario.css";
import PanelTransaction from "./PanelTransaction";
import {useContext, useEffect, useState} from "react";
import UserContext from "./../context/UserContext";
import {useNavigate} from "react-router-dom";

export default function UserPanel() {

    const {user} = useContext(UserContext);

    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) { /* Cargando la página web. Si no hay usuario, redirigimos a la página de login */
            return navigate("/login")
        }
        fetchTransactions();
    }, []);

    async function fetchTransactions() {
        const respuesta = await fetch("http://localhost:8080/api/transaction/" + user);
        const documents = await respuesta.json();
        setDocuments(documents); /* Ahora actualizamos los documentos del fetch se encuentran en el estado guardado */
    }

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
                        <PanelTransaction data={transaction} user={user} key={transaction._id} />
                    )}
                </div>
            </div>
        </section>
    );

}
