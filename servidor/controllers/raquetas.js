const { request, response } = require("express");
const Raqueta = require("../models/raqueta");

const RaquetaList =[];
const getAllRaquetas = (req = request, res = response) => {
    const { searchTerm } = req.query;
    Raqueta.find({title: RegExp(searchTerm)}).then(// RegExp sirve para crear expresiones regulares 
        (result)=>{
            res.status(200).json({
                RaquetaList: result,
           
            });
        }

    ).catch(
        (error)=>{
            res.status(500).json({
                msg:"error a pasar datos"
            });
        })
    }
const createRaqueta = (req = request, res = response) => {

            const newRaqueta= Raqueta({
                id,
                title,
                price,
                category,
                description,
                image,
            });
            newRaqueta.save().then((result)=>{
                 res.status(200).json({
                 msg: "Success"
            });
        
            }).catch((error)=>{
                res.status(500).json({
                        msg:"error a pasar datos"
                    });
            })
           
        };


module.exports={getAllRaquetas, createRaqueta}