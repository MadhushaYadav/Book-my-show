const mongoose=require("mongoose");
mongoose.connect(process.env.mongodb_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "bms_movies",
})
const connection=mongoose.connection;

connection.on('connected',()=>{
  console.log("connection successful")
})
