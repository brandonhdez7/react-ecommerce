const express = require('express');
const path = require('path'); // NEW
const cors = require('cors')
const bodyParser = require('body-parser')
// const multer = require("multer");
var logger = require('morgan');
var cookieParser = require('cookie-parser');
const app = express();
const fileUpload = require('express-fileupload');
const stripe = require("stripe")("sk_test_9mOpq6J2IdyroHm9OcddcDLF007v4dDodC");
const helmet = require('helmet')

app.use(helmet())

app.use(bodyParser.json({
  verify: (req, res, buf) => {
    if (req.originalUrl.startsWith('/api/shop/order/process')) {
      req.rawBody = buf.toString()
    }
  }
}))

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(cors({
  origin: [/http:\/\/localhost:\d+$/],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))

app.get('/api/', (req, res) => res.send({ version: '1.0' }))

app.post('/api/shop/order', async (req, res) => {
  const order = req.body.order
  const source = req.body.source
  try {
    const stripeOrder = await stripe.orders.create(order)
    console.log(`Order created: ${stripeOrder.id}`)
    await stripe.orders.pay(stripeOrder.id, {source})
  } catch (err) {
    // Handle stripe errors here: No such coupon, sku, ect
    console.log(`Order error: ${err}`)
    return res.sendStatus(500)
  }
  return res.sendStatus(200)
})

app.post('/api/shop/order/process', async (req, res) => {
  const sig = req.headers['stripe-signature']
  try {
    const event = await stripe.webhooks.constructEvent(req.rawBody, sig, 'whsec_W3dgcZnwne1iScHeRWXQxF1UmKjUMjpf')
    console.log(`Processing Order : ${event.data.object.id}`)
    // Process payed order here
  } catch (err) {
    return res.sendStatus(500)
  }
  return res.sendStatus(200)
})


// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

//upload file
app.post('/upload', (req, res, next) => {
  console.log(req);
  let imageFile = req.files.file;

  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({file: `public/${req.body.filename}.jpg`});
  });

})


//stripe
// app.post("/charge", async (req, res) => {
//   try {
//     let {status} = await stripe.charges.create({
//       amount: 2000,
//       currency: "usd",
//       description: "An example charge",
//       source: req.body
//     });

//     res.json({status});
//   } catch (err) {
//     res.status(500).end();
//   }
// });


const Users = require("./routes/Users")
app.use('/users', Users)

app.use(express.static(DIST_DIR)); // NEW
app.get('/api', (req, res) => {
  res.send(mockResponse);
});
app.get('/', (req, res) => {
 res.sendFile(HTML_FILE); // EDIT
});
app.get('/About', (req, res) => {
  res.sendFile(HTML_FILE);
});
app.get('/Payments', (req, res) => {
  res.sendFile(HTML_FILE);
});
app.get('/Sweater', (req, res) => {
  res.sendFile(HTML_FILE);
});
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});