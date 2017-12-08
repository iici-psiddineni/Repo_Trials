const express = require('express');
const router = express.Router();

const Provider = require('../models/provider')

// retriving data
router.get('/providers', (req, res, next)=>{
    Provider.find(function(err, providers){
        res.json(providers);
    });
})

// add provider 
router.post('/provider', (req, res, next)=>{
    // add to database
    let newProvider = new Provider({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newProvider.save((err, provider)=>{
        if (err){
            res.json({msg: 'Failed to add provider'});
        }
        else{
            res.json({msg: 'Provider added successfully'});
        }

    });
})

// edit provider
router.delete('/provider/:id', (req, res, next)=>{
    //delete from the database
    Provider.remove({_id: req.params.id}, function(err, result){
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
})

module.exports = router;