export default function UserCard({children, userData}) {
    return (
        <div>
            <h2>Estos son los usuarios de nuestra aplicación: {userData.nombre}</h2>
            <p>Ciudad: {userData.ciudad}</p>
        </div>
    );
}
