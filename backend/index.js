const express = require('express')
const app = express()
var cors = require('cors')
const port = 5001
const mongoDB = require('./db');
const path = require('path'); // Import the path module
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello Worrrld!')
})


app.use(cors({
  origin: '*', // Allow requests from this origin
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Content-Type',
}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers","Content-Type");
  next();
  })

app.use(express.json())
app.use('/api',require('./Routes/Createuser'))
app.use('/api',require('./Routes/Upload-Papers'))
app.use('/api',require('./Routes/UploadEmail'))
app.use('/api',require( './Routes/Reviews'))
app.use('/api',require( './Routes/DisplayReviews'))
app.use('/api',require('./Routes/DisplayPaper'))
app.use('/api',require('./Routes/DeletePaper'))
app.use('/api',require('./Routes/UpdatePaper'))
app.use('/api',require( './Routes/DisplayUsersCount'))
app.use('/api',require( './Routes/Files-count'))
app.use('/api',require( './Routes/DisplayUser'))
app.use('/api',require( './Routes/ContactMail'))
app.use('/api',require( './Routes/CheckRecord'))
app.use('/api',require( './Routes/UpdateUser'))
app.use('/api',require( './Routes/FindUser'))
app.use('/api',require( './Routes/DeleteUser'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log('Hello World!');
