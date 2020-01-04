const express = require('express');
const router = express.Router();
const dbUser = require('./usersModel');

/**
 * GET
 * EndPoint: `/users/`
 */
router.get('/', async (req, res) => {
    try {
        const users = await find();
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(400).json({ message: 'Error no users available. to display' })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ errorMessage: 'server error: trying to retrieve users.' })
    }
})

router.post('/', async (req, res) => {
    try {
        if (!req.body.username) {
            res.status(400).json({ message: 'please enter unique username' })
        }
        if (!req.body.password) {
            res.status(400).json({ message: 'please enter a password' });
        }
        const userData = {
            username: req.body.username,
            password: req.body.password
        }
        const user = await dbUser.addUser(userData)
        res.status(201).json(user);

    } catch (err) {
        console.log(err);
        res.status(500).json({ errorMessage: 'Server error posting user data' })
    }
})


module.exports = router;