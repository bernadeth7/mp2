const express = require ("express");
const app = express();
const cors = require('cors')

app.use(cors())
// load the env thru dotenv
require('dotenv').config();
// LOAD ROUTER
const postsRouter = require('./routes/posts.router');
//use the following to receive response data
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const PORT = process.env.PORT || 3002;
//create default router
app.use("/api", postsRouter);
app.listen(PORT, ()=>{
    console.log("Server is Running...")

})
