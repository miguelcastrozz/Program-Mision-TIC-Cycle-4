import "./../sytlesheets/PanelUsuario.css";
import PanelTransaction from "./PanelTransaction";
import {useContext, useEffect, useState} from "react";
import UserContext from "../context/UserContext";
import {useNavigate} from "react-router-dom";
import {getTransactions} from "../services/transactionService";
import TokenContext from "../context/TokenContext";

export default function UserPanel() {

    const {user} = useContext(UserContext);
    const {token} = useContext(TokenContext);
    const [cookies, setCookies] = useCookies(["token", "user"]);

    const usuarioActual = user ? user : cookies.user;
    const tokenActual = token ? token : cookies.token;

    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!usuarioActual) { /* Cargando la página web. Si no hay usuario, redirigimos a la página de login */
            return navigate("/login")
        }
        fetchTransactions();
    }, []);

    async function fetchTransactions() {
        const documents = await getTransactions(tokenActual);
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
                        <PanelTransaction data={transaction} user={usuarioActual} key={transaction._id} />
                    )}
                </div>
            </div>
        </section>
    );

}
