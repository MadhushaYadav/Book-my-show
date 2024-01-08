const express = require('express');
const app = express();
require('dotenv').config();// load environment variables
const port = 3001;
const dbConfig=require("./config/dbConfig");
const userRoute=require("./routes/userRoutes");

// const fs=require('fs')

// const data=JSON.parse(fs.readFileSync('data.json'));

// const products=data.products;
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.get('/newApi', (req, res) => {
//     console.log("kjhgffg");
//     res.send('Hello from /newApi!');
//   });

//   app.get('/products',(req,res)=>{
//     console.log("hjggfdgh")
//     res.send(products);
//   })

//   const middleware=(req,res,next)=>{

//   }

app.use(express.json());
app.use("/",userRoute)

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

//kHx0xMWlSidLEUDH
