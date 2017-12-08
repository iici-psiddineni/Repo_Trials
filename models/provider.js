
const mongoose = require('mongoose');

const ProviderShema = mongoose.Schema({
    fist_name:{
        type: String,
        required: false
    },
    last_name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: false
    }    
});

const Provider = module.exports = mongoose.model('Provider', ProviderShema);