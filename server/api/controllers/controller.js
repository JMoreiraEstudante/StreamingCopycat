// import Todo Models
const User = require("../models/user");
const Video = require("../models/video");
const Lista = require("../models/lista");

// DEFINE CONTROLLER FUNCTIONS
//pegando todas as listas
exports.todasListas = (req, res) => {
    Lista.find({}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//pegando a lista de um certo usuario
exports.userLista = (req, res) => {
    Lista.findOne({'user':req.params.user}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//adicioando uma lista
exports.addLista = (req, res) => {
    let novo = new Lista(req.body);
    novo.save((err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(todo);
    });
};

//adicioando um video a uma lista
exports.updateLista = (req, res) => {
    Lista.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//pegando todos os videos
exports.todosVideos = (req, res) => {
    Video.find({}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//pegando todos os videos
exports.nomeVideos = (req, res) => {
    Video.find({'nome':req.params.nome}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//pegando todos os videos
exports.categoriaVideos = (req, res) => {
    Video.find({categoria: { $elemMatch: {$eq: req.params.categoria} }}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//pegando todos os usuarios
exports.todosUsuarios = (req, res) => {
    User.find({}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//pegando um user por nome
exports.idUsuarios = (req, res) => {
    User.findOne({'_id':req.params.id}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//adicioando um video
exports.addVideo = (req, res) => {
    let novo = new Video(req.body);
    novo.save((err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(todo);
    });
};

//adicioando um usuario
exports.addUser = (req, res) => {
    let novo = new User(req.body);
    novo.save((err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(todo);
    });
};