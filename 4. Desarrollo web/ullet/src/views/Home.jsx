import "../sytlesheets/Home.css"
import heroImage from "../assets/home_illustration.png"
import Button from "../components/forms/Button";

export default function Home() {
    return (
        <section className="home">
            <div className="container grid"> {/* Los contenedores deben ser internos y no externos para poder manipular lo externo */}
                <div className="headline">
                    <p className="title">Tus pagos ...</p>
                    <p className="content">Rápidos y efectivos</p>
                    <p className="support">Manejar tu plata nuca había sido tan fácil como en Ullet</p>
                    <Button>QUIERO MI CUENTA</Button>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Imagen principal"/>
                </div>
            </div>
        </section>
    );
}
