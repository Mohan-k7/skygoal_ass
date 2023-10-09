import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";
//import ENV from '../config.js'

async function connect(){

    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

    mongoose.set('strictQuery', true)
    // const db = await mongoose.connect(getUri);
    const db = await mongoose.connect("mongodb+srv://mohan:mohan@cluster0.yvc1agc.mongodb.net/xxx?retryWrites=true&w=majority");
    console.log("Database Connected")
    return db;
}

export default connect;