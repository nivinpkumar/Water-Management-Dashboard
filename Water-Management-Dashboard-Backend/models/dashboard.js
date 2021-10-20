const mongoose = require('mongoose');


const DashboardDataSchema = mongoose.Schema({
    year:{
        type:String,
        required:true
    },
    consumption_rate:{
        type:Number,
        required:true
    },
    ph_value:{
        type:Number,
        required:true
    }
});

const DashboardData = module.exports = mongoose.model('DashboardData', DashboardDataSchema);