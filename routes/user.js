const User = require('../api/models/User'); 
const express = require('express');
const router = express.Router()


router.post('/createcustomer', async (req, res) => {
    const newUser =  new User(req.body);({
        Name: 'Ade',
        email: 'besito4real@gmail.com',
        password: 'xxxxxxxxx',
        img: 'selfie'
    })

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json("internal server error");
    };
});



module.exports = router