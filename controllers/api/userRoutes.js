const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        })
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ 
            where: {
            email: req.body.email
        }})

        if (!userData) {
            res.status(400).json({
                message: 'beep bop Wrong email or password! boop'
            })
        return;
        
        }
    const goodPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
        res.status(400).json({
            message: 'bop beep incorrect password! '
        })
    }
    } catch (err) {
        res.status()
    }
})