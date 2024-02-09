const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Customer } = require('./model'); // Adjust the path accordingly

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://thirana:eAhMUKTpphk5Bi78@cluster0.szb6ogj.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});


// Example route for fetching users
app.get('/customers', async (req, res) => {
   
  try {
    const customers = await Customer.find();
    res.json(customers);
   
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
console.log(Customer);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});