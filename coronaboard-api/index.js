const express = require('express')
const bodyParser = require('body-parser')
const {sequelize} = require('./database')

async function launchServer(){
    const app = express()
    app.use(bodyParser.json())
    
    app.get('/', (req, res) => {
        res.json({message: "Hello coronaboard"});
    });


    try{

        await sequelize.sync();
        console.log('database is ready')
    }catch(error){
        console.log('unable to connect to the database')
        console.log(error);
        process.exit(1)
    }

    const port = process.env.PORT || 8888;
    app.listen(port, ()=>{
    console.log(`"Server is running on port ${port}"`)
});
}

launchServer();




