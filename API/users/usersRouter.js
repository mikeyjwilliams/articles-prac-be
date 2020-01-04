const express = require('express');
const router = express.Router();
const dbUser = require('./usersModel');

/**
 * GET
 * EndPoint: `/users/`
 */
router.get('/', async (req, res) => {
    try {
        const users = await dbUser.locate();
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

/**
 * POST
 * Endpoint: `/users`
 * NOTICE we cannot update the user name.
 */
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

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const removal = await dbUser.remove(id);
        res.status(200).json(removal);
    } catch (err) {
        console.log(err);
        res.status(500).json({ errorMessage: 'server error, deleting user' })
    }
})

/**
 * WE CANNOT
 *  - UPDATE
 *  USERS
 */



module.exports = router;