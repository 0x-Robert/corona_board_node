const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({message: "Hello coronaboard"});
});

const port = process.env.PORT || 8888;
app.listen(port, ()=>{
    console.log(`"Server is running on port ${port}"`)
})
