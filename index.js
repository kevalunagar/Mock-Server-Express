const express = require('express');
const app = express();

const userData = [{
    'name' : 'keval',
    'id' : 1
},
{
    'name' : 'mahesh',
    'id' : 2
}]
app.listen(3000, () => {
    console.log("App Started");
})

app.get('/users', (req, res)=> {
    res.json(userData);
})

