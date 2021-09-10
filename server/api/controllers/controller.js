// import Todo Models
const User = require("../models/user");
const Video = require("../models/video");
const Lista = require("../models/lista");
const Conta = require("../models/conta");

//authentication
const genPassword = require('../../lib/passwordUtils').genPassword;

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
    Lista.findOne({ 'user': req.params.user }, (err, todo) => {
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
    Video.find({ 'nome': req.params.nome }, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//pegando um video
exports.detailVideo = (req, res) => {
    Video.findOne({ '_id': req.params.id }, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//pegando todos os videos
exports.categoriaVideos = (req, res) => {
    Video.find({ categoria: { $elemMatch: { $eq: req.params.categoria } } }, (err, todo) => {
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

//pegando um user por id
exports.idUsuarios = (req, res) => {
    User.findOne({ '_id': req.params.id }, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//pegando todas as contas
exports.todasContas = (req, res) => {
    Conta.find({}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//pegando um conta por id
exports.idConta = (req, res) => {
    Conta.findOne({ '_id': req.params.id }, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//pegando todas as contas de um user
exports.userContas = (req, res) => {
    Conta.find({ 'user': req.params.user }, (err, todo) => {
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
exports.addUser = (req, res, next) => {
    const saltHash = genPassword(req.body.senha);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.nome,
        hash: hash,
        salt: salt,
    });

    newUser.save((err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(todo);
    });
}

//adicioando uma conta
exports.addConta = (req, res) => {
    let novo = new Conta(req.body);
    novo.save((err, conta) => {
        if (err) {
            res.status(500).send(err);
        }
        //cria uma lista para esse user
        Lista({ user: conta._id }).save().then(res.status(201).json(conta));
    });
};