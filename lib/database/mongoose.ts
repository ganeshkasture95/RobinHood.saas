import mongoose, { Mongoose } from "mongoose"

const MONGODB_URL= process.env.MONGODB_URL

interface MongooseConnection{
    conn:Mongoose|null
    promise:Promise<Mongoose>|null
}

// in express we connect the mongo db with the app only onse
// but in next js we  need to do it every time a new request comes
// because Next js runs in server less invironment

let chached : MongooseConnection = (global as any).mongoose


if(!chached){
    chached = (global as any ).mongoose = {
        conn:null,promise:null
    }
}

export const connectToDatabase = async ()=>{

    if(chached.conn){
        return chached.conn
    }

    if(!MONGODB_URL) throw new Error("Mising Mongo Db UrlPlease define the MONGODB_URL env variable inside .env.local")

    chached.promise = mongoose.connect(MONGODB_URL,{dbName:'robinhood-Immage',bufferCommands:false})
    chached.conn = await chached.promise

    return chached.conn
}


// server less connection are short but more scalable / efficient



