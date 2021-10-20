const express = require('express');
const router = express.Router();

const DashboardData = require('../models/dashboard')

router.get('/datas', (req,res,next)=>{
    DashboardData.find(function(err,DashboardData){
        res.json(DashboardData);
    })
});

router.post('/data',(req,res, next)=>{
    let newDashboardData = new DashboardData({
        year:req.body.year,
        consumption_rate: req.body.consumption_rate,
        ph_value: req.body.ph_value
    });
    newDashboardData.save((err,contact)=>{
        if(err){
            res.json({msg:'Failed to add data'});
        }
        else{
            res.json({msg:'Data added succesfully'});
        }
    });
});

router.delete('data/:id',(req,res,next)=>{
    DashboardData.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
})


module.exports = router;