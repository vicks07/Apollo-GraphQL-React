const express = require('express');
const graphqlHttp = require('express-graphql');
const schema = require('./schema.js');

const app = express();



const port = process.env.PORT || 4000;

app.use('/graphql', graphqlHttp({
    schema,
    graphiql: true
}))
 
app.listen(port ,()=>{
    console.log(`Server started on ${port}`);
})