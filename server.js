const express = require('express');

const app = express();

app.get('/api/get', (req,res) => {
    res.send({message : 'Nodejs AWS Deployment'});
})  

app.listen(9000, () => {
    console.log('Server is running on port 9000');
    })
