const express = require('express');
const graphqlHttp = require('express-graphql');
const schema = require('./schema.js');
const cors = require('cors');
const app = express();
const path = require('path');

// Allow Cross-Origin
app.use(cors());

const port = process.env.PORT || 4000;

app.use('/graphql', graphqlHttp({
    schema,
    graphiql: true
}))


app.use(express.static('public'));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'public','index.html'));
})
 
app.listen(port ,()=>{
    console.log(`Server started on ${port}`);
})