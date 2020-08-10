const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usersController = {}

usersController.register = (req, res) => {
    const body = req.body 
    const user = new User(body)
    bcryptjs.genSalt()
        .then((salt) => {
            bcryptjs.hash(user.password, salt)
                .then((encrypted) => {
                    user.password = encrypted
                    user.save()
                        .then((user) => {
                            res.json(user)
                        })
                        .catch((err) => {
                            res.json(err)
                        })
                })
        })
}

usersController.login = (req, res) => {
    const body = req.body 
    User.findOne({ email: body.email }) 
        .then((user) => {
            if(!user) {
                res.json({ 
                    errors: 'invalid email or password'
                })
            }

            bcryptjs.compare(body.password, user.password)
                .then((match) => {
                    if(match) {
                        const tokenData = {
                            _id: user._id,
                            email: user.email,
                            username: user.username
                        }
                        const token = jwt.sign(tokenData, 'dct123', { expiresIn: '2d'})
                        res.json({
                            token: `Bearer ${token}`
                        })
                    } else {
                        res.json({ errors: 'invalid email or password'})
                    }
                })
        })
}

usersController.logout= (req, res) => {
    
    if(req.header('Authorization')) {
        res.json({
            notice : 'You are successfully logged out'
        })
   }
}

usersController.account = (req, res) => {
    res.json(req.user)
}



module.exports = usersController