const express = require('express');
const bodyParser = require('body-parser')
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Here is the request: ', req)
    res.render('index')
});

app.get('/form', (req, res) => {
    res.send(`
      <form method="post" action="/submit-form">
        <input type="text" name="username" placeholder="Username">
        <input type="password" name="password" placeholder="Password">
        <button type="submit">Submit</button>
      </form>
    `)
  })
  
app.post('/submit-form', (req, res) => {
    console.log(req.body)
    res.send(req.body.username)
    res.send('Form submitted')
})

// const userRoute = require('./routes/users');

// app.use('/users', userRoute);

app.listen(port)
