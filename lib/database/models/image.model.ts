import mongoose, { Schema, models } from "mongoose";

export interface IImage extends Document {
    type: string;
    transformationType: string;
    publicId: string;
    secureurl: URL;
    width?: number;
    height?: number;
    config?: object; // Or use any if you're not sure about the shape of the object
    transformationUrl?: URL;
    aspectRatio?: number;
    color?: string;
    prompt?: string;
    auther: {
        _id: string;
        firstname: string;
        lastname:string;
    }; // Assuming User is an interface or type definition
    createdAt?: Date;
    updatedAt?: Date;
  }
  

const ImageSchema =  new Schema({
    type :{type:String,required:true},
    transformationType:{type:String,required:true},
    publicId:{type:String,required:true},
    secureurl:{type:URL,required:true},
    width:{type:Number},
    height:{type:Number},
    config:{type:Object},
    transformationUrl:{type:URL,required:true},
    aspectRatio:{type:Number,required:true},
    color:{type:String,required:true},
    prompt:{type:String,required:true},
    auther:{type:Schema.Types.ObjectId,ref:'User'},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}
})

const Image = models?.Image || mongoose.model('Image',ImageSchema)

export default Image