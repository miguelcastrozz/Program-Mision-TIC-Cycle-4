export async function getTransactions(token) {
    const respuesta = fetch("http://localhost:8080/api/transaction", {
        method: "GET",
        headers: {
            token: token,
        }
    });
    if (respuesta.ok) {
        return respuesta.json();
    } else {
        return [];
    }
}