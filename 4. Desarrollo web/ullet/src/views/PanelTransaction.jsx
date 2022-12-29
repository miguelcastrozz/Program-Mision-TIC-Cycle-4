import "./../sytlesheets/PanelUsuario.css"

export default function PanelTransaction({data, user}) {

    const {from, to, value, createAt} = data;
    const date = createAt.substr(0,10); /* De la fecha solo toma los primeros 10 caracteres */

    if (from === user) {
        return (
            <div className="transaction grid card" style={{marginLeft: "auto"}}>
                <p className="from">{to}</p>
                <p className="positive-value">$ {value}</p>
                <p className="date">{date}</p>
            </div>
        );
    } else {
        return (
            <div className="transaction grid card">
                <p className="from">{from}</p>
                <p className="positive-value">$ {value}</p>
                <p className="date">{date}</p>
            </div>
        );
    }

}
