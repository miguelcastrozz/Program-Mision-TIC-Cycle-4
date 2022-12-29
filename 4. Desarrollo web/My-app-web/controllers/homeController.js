// CRUD

let publicaciones = [];

export function crearPublication(req, res) {
    let id = Math.random().toString(36).slice(2);
    let publication = {
        "nuestra publication": req.body.publicacion, /* req.body.publicación: Extrae el cuerpo de la petición que se envía en este caso con Postman enviamos un JSON publicación */
        id
    }
    res.json(publication);
    publicaciones.push(publication); /* push: Agrega un elemento al final del arreglo, es decir al arreglo publicaciones se le agrega el elemento publication */
}

export function leerPublicaciones(req, res) {
    res.json(publicaciones);
}

export function leerPublication(req, res) {
    let id = req.params.id;
    for (let i = 0; i < publicaciones.length; i++) {
        var publication = publicaciones[i];
        if (publication.id === id) { /* Si el ID de la publicación del arreglo es igual al ID que se envía por parámetro entonces se regresa la publicación */
            break;
        }
    }
    res.json(publication);

    /*
    let publication = null;

    publicaciones.forEach(element => {
        if (element.id === id) {
            publication = element;
        }
    })
    */
}
