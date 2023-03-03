const bcrypt = require("bcrypt");
const Joi = require("joi");
const express = require("express");
const { User } = require("../models/user");

const router = express.Router()

router.post("/", async(req, res)=>{
    
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(3).mmax(200).require().email(),
        password: Joi.string().min(6).max(200).required(),
    });
        const {error} = schema.validation(req.body)
    if (error) return res.status(400).send(error.details[0].message);
        
    let user = await User.findOne({ email: req.body.email });
    
    if (user) return res.status(400).send("usuario ja existe");
    
    user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    
    
})