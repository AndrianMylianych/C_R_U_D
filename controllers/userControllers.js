const userServices = require('../services/userServices');

module.exports = {
    getUsers: async (req, res) => {
        res.json(await userServices.getUser());
    },

    getUserById: async (req, res) => {
        res.json(await userServices.getUsers(req.params.userId));
    },

    createUser: async (req, res) => {
        res.json(await userServices.insertUser(req.body));
    },

    updateUser: async (req, res) => {
        res.json(await userServices.updateUser(req.params.userId, req.body));
    },

    deleteUser: async (req, res) => {
        res.json(await userServices.deleteUser(req.params.userId));
    }
}