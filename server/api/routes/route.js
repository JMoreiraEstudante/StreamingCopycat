'use strict';

// create App function
module.exports = function (app) {
    var controller = require('../controllers/controller');

    // todoList Routes

    // get post para video
    app
        .route("/video")
        .get(controller.todosVideos)
        .post(controller.addVideo);

    // get video por nome
    app
        .route("/video/nome/:nome")
        .get(controller.nomeVideos)

    // get video por id
    app
        .route("/video/id/:id")
        .get(controller.detailVideo)

    // get categoria de video
    app
        .route("/video/categoria/:categoria")
        .get(controller.categoriaVideos)

    // get post para usuario
    app
        .route("/usuarios")
        .get(controller.todosUsuarios)
        .post(controller.addUser);

    // get para usuario com certo id
    app
        .route("/usuario/:id")
        .get(controller.idUsuarios)

    // get post para lista
    app
        .route("/lista")
        .get(controller.todasListas)
        .post(controller.addLista);

    // get para lista com usuario
    app
        .route("/lista/:user")
        .get(controller.userLista)

    app
        .route("/lista/update/:id")
        .put(controller.updateLista);
};