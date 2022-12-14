export default function UsuariosTarjeta({children, datosUsuarios}) {
    return (
        <div className="flex">
            <h4>{datosUsuarios.nombre}</h4>
            <p>Ciudad: {datosUsuarios.ciudad}</p>
        </div>
    );
}
