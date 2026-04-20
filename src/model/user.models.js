import mongoose ,{Schema} from "mongoose";

const userSchema = new Schema({
    avatar:{
        type:String,
        default:null
    },
    username:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:50
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:100
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    isEmailVerified:{
        type:Boolean,
        default:false
    },
    refreshToken:{
        type:String,
        default:null
    },
    forgotPasswordToken:{
        type:String,
        default:null
    },
    forgotPasswordTokenExpiry:{
        type:Date,
        default:null
    },
    emailverificationToken:{
        type:String,
        default:null
    },
    emailverificationTokenExpiry:{
        type:Date,
        default:null
    }
},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;