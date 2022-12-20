// Las funciones asíncronas retornan promesas
export async function login(name, password) {
    const respuesta = await fetch("http://localhost:8080/login", {
        method: "GET",
        headers: {
            name: name,
            password: password
        }
    });
    if (!respuesta.ok) return null; /* Si la respuesta no esta ok */
    const document = await respuesta.json(); /* Convertimos la respuesta a json */
    return document.token;
}
