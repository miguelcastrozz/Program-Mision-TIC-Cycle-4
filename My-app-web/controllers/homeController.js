// CRUD

let publicaciones = [];

export function crearPublication(req, res) {
    let id = Math.random().toString(36).slice(2);
    let publication = {
        "Nuestra publication": req.body.publicacion, /* Lo que salga en el body de la petición */
        id
    }
    res.json(publication);
    publicaciones.push(publication); /* push: Agrega un elemento al final del arreglo */
}

export function leerPublicaciones(req, res) {
    res.json(publicaciones);
}

export function leerPublication(req, res) {
    let id = req.params.id;
    for (let i = 0; i < publicaciones[i]; i++) {
        var publication = publicaciones[i];
        if (publication.id === id) {
            break;
        }
    }
    res.json(publication);
}
