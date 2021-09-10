'use strict';

const passport = require('passport');
//verificar se está logado
const isAuth = require('./authMiddleware').isAuth;

// create App function
module.exports = function (app) {
    var controller = require('../controllers/controller');

    //authentication routes
    //login
    app.
        route("/login")
        .get((req, res, next) => {

            const form = '<h1>Login Page</h1><form method="POST" action="/login">\
            Enter Username:<br><input type="text" name="nome">\
            <br>Enter Password:<br><input type="password" name="senha">\
            <br><br><input type="submit" value="Submit"></form>';

            res.send(form);

        })
        .post(passport.authenticate('local' ,{ failureRedirect: '/login-failure' }),
            function (req, res) {
                res.send(req.user);
            }
        );

    app.
        route("/login-failure")
        .get((req, res, next) => {
            res.status(401).json('Error');
        })

    app.
        route("/logout")
        .get((req, res, next) => {
            req.logout();
        });

    //register
    app.
        route("/register")
        .get((req, res, next) => {
            const form = '<h1>Register Page</h1><form method="post" action="register">\
                    Enter Username:<br><input type="text" name="nome">\
                    <br>Enter Password:<br><input type="password" name="senha">\
                    <br><br><input type="submit" value="Submit"></form>';

            res.send(form);
        })
        .post(controller.addUser);

    //react routes
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
        .route(isAuth, "/usuarios")
        .get(controller.todosUsuarios)

    // get para usuario com certo id
    app
        .route(isAuth, "/usuario/:id")
        .get(controller.idUsuarios)

    // get post para conta
    app
        .route("/contas")
        .get(controller.todasContas)
        .post(controller.addConta);

    // get para conta com certo id
    app
        .route("/conta/id/:id")
        .get(controller.idConta)

    // get para conta com certo user
    app
        .route("/conta/user/:user")
        .get(controller.userContas)

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