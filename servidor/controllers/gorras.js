const { request, response } = require("express");
const Gorra = require("../models/gorras");

const gorraList =[];
const getAllGorras= (req = request, res = response) => {
    const { searchTerm } = req.query;
    Raqueta.find({title: RegExp(searchTerm)}).then(// RegExp sirve para crear expresiones regulares 
        (result)=>{
            res.status(200).json({
                gorraList: result,
           
            });
        }

    ).catch(
        (error)=>{
            res.status(500).json({
                msg:"error a pasar datos"
            });
        })
    }
const createGorra = (req = request, res = response) => {

            const newGorra= Gorra({
                id,
                title,
                price,
                category,
                description,
                image,
            });
            newGorra.save().then((result)=>{
                 res.status(200).json({
                 msg: "Success"
            });
        
            }).catch((error)=>{
                res.status(500).json({
                        msg:"error a pasar datos"
                    });
            })
           
        };


module.exports={getAllGorras, createGorra}