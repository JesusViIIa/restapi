var mongoose = require('mongoose');
import config from "./config";

var mongoDB = config.MONGO_URI;

(async()=>{
    try {
        const db= await mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log(db.connection.name);
    } catch (error) {
        console.log(error);
    }
})();

 