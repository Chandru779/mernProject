const express = require('express');
const cors = require('cors');
const db = require('./app/models')

const app = express();

var corsOptions = {
    origin:'http://localhost:8081'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("connected to the DataBase");
})
.catch(err => {
    console.log("Cannot connect to the DataBase");
    process.exit();
})

//simple route 
app.get('/' , (req,res) => {
    res.json({message:"Welcome to the MERN project"})
});

const PORT = process.env.PORT || 8080 ;
app.listen(PORT, () =>{
    console.log(`Server is Running at ${PORT}` );
});