import UsuariosTarjeta from "../components/UsuariosTarjeta";

export default function Users() {

    const datosUsuarios = {
        nombre: "Juanito",
        ciudad: "Barranquilla"
    }

    return (
        <div>
            <h1>Estos son los usuarios de nuestra aplicación</h1>
            <UsuariosTarjeta datosUsuarios={datosUsuarios} ></UsuariosTarjeta>
        </div>
    );

}
