import mongoose from "mongoose";
const addressSehcma = mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref: 'user',
        require: true
    },
    village: {
        type: String,
        require: true,
    },
    district:{
      type: String,
      require: true,
    },
    province : {
        type: String,
        require: true,
    },
    latitude: {
        type: String,
        
    },
    longtitude: {
      type: String,
      
    },
    is_Active: {
    type: Boolean,
    default: true,
    },
}, {timstamps: true,});
const Address = mongoose.model('address',addressSehcma);
export default Address;