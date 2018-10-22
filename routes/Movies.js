const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const model = require('../dbContext/models/index');

router.use(bodyParser.urlencoded({extended : false}));

router.get("/", (req,res,next)=>{
    res.end('Hello world');
    
})

// Get all Movies
router.get("/movie", (req,res,next)=>{
    model.Movie.findAll({})
    .then((result) => {
        return res.send({error:false, data:result, message : "Movie list"});
    }).catch((err) => {
        return res.send({error:true, message : err});
    });
})

// Create movie :ERROR
router.post("/movie/create", (req,res,next)=>{
    const {
        title,
        description
    } = req.body;
    model.Movie.create({
        title : title,
        description : description
    }).then((result)=>{
        return res.status(201).send({error:false, data:result, message :"Create new Movie"});
    }).catch((err)=>{
        return res.send({error:true, data:result, message :err});
    })
    
})
// Update /id
router.put("/movie/update/:id", (req,res,next)=>{
    const movie_id = req.params.id;
    const {title, description} = req.body;
    model.Movie.update({title:title, description:description},
        {where : {id:movie_id}}
        ).then((result)=>{
            return res.status(201).send({error:false, data:result, message :"Update movie ID:"+movie_id});
        }).catch((err)=>{
            return res.send({error:true, data:result, message :err});
        })
})
// Delete /id
router.delete("/movie/delete/:id", (req,res,next)=>{
    const movie_id = req.params.id;
    model.Movie.destroy({
        where :{id : movie_id}
    }).then((result)=>{
        return res.send({error:false, data:result, message :"Delete movie ID:"+movie_id});
    }).catch((err)=>{
        return res.send({error:true, data:result, message :err});
    })
})

module.exports = router;