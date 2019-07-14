const express = require('express')
const app = express()
const Chatkit = require('@pusher/chatkit-server');
const cors = require('cors');
const chatkit = new Chatkit.default({
  instanceLocator:"v1:us1:366d4bfd-9da9-4a3c-8b98-fb24d065efc5",
  key: "05568a47-1501-4b4b-a6c1-f28cab08ef31:yXMOAkskk+m2lMbJjNoaAwTjfUeiF+5w6+bF4psbUZs=",
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());

app.post('/user',(req,res)=>
{
    const {userId}= req.body
    const {user_name}=req.body
    console.log(req.body)
    // const username=req.query.name
    chatkit.createUser({
      id: userId,
      name: user_name
    })
      .then((user) => {
        console.log('Success', user);
      }).catch((err) => {
        console.log(err);
      });
}
)



app.post('/authenticate', (req, res) => {
    const authData = chatkit.authenticate({
      userId: req.query.user_id
    });
  
    res.status(authData.status)
       .send(authData.body);
  })
require('./routes')(app)

require('mongoose').connect('mongodb://localhost/users_db', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(3001))
  .catch(error => console.log(error))
