// fyi : res (response) merupakan parameter yang digunakan untuk mengirimkan balasan dari server (express) ke client (browser)
// fyi : req (request) merupakan parameter yang digunakan untuk menerima permintaan dari client (browser) ke server (express)
// untuk dokumen mengenai express lebih lanjutnya bisa dibaca di dokumentasinya (https://expressjs.com/en/4x/api.html#app) 

const express = require('express');
const bodyParser = require('body-parser')
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

const mahasiswaCont = [
{
  nama : 'John Doe',
  nim : '1234567890',
},
{
  nama : 'Jane Doe2',
  nim : '1234567891',
}]

// dokumentasi ejs : https://ejs.co/#features
app.set('view engine', 'ejs');

// pada render, kita dapat mengirimkan data ke file view, seperti contoh berikut:
app.get('/', (req, res) => {
    console.log('Here is the request: ', req)
    res.render(
      'index', 
      { 
        name : 'John Doe', 
        ip : req.ip,
        mahasiswaCont
      }, 
      (err, html) => {
        if(err) res.send(`${err}, File not found`);
        res.send(html);
    })
});

// mengambil id
app.get('/users/:id/Category/:id2', (req, res) => {
  res.send(`User id is ${req.params.id}, dengan id cat : ${req.params.id2}`)
})  

app.get('/about', (req, res) => {
  res.render('about', (err, html) => {
    if(err) res.send(`${err}, File not found`);
    res.send(html);
  })
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

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
})
