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

    // get nome de video
    app
        .route("/video/nome/:nome")
        .get(controller.nomeVideos)

    // get categoria de video
    app
        .route("/video/categoria/:categoria")
        .get(controller.categoriaVideos)

    // get post para usuario
    app
        .route("/usuario")
        .get(controller.todosUsuarios)
        .post(controller.addUser);

    // get post para lista
    app
        .route("/lista")
        .get(controller.todasListas)
        .post(controller.addLista);

        // get post para lista
    app
        .route("/lista/:id")
        .get(controller.idListaa)
};