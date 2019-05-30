const express = require('express');
const app = express();
const fs = require('fs');
const port = 3500;
let content;



function parseCsv(data){
    let result = [];
    for(let i = 0; i < data.length; i++){
        result.push(data[i].split(","));
    }
    for(let i = 0; i < result.length; i++){
        for(let k = 0; k < result[i].length; k++){
            result[i][k] = result[i][k].trim();
            result[i][k] = result[i][k].replace(new RegExp(`"`,'g'),``);
        }
    }
    return result;
}
app.use((req,res,next)=>{
    console.log('Reading CSV file...')
    content = fs.readFileSync('./cities.csv','utf-8').split("\n");
    next();
})



app.get('', (req, res, next) =>{
    res.set('Content-type', 'application/json').send(JSON.stringify(parseCsv(content)));
    console.log('Response sent');
})

app.listen(port, ()=> console.log('listening'));