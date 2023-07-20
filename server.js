const express = require('express');
const { connectToMongoDB } = require('./db/db.js');
const enquiryRoutes = require('./routes/enquiry.routes');
const userRoutes = require('./routes/user.routes');
const cors = require('cors'); // Import the CORS package

const app = express();
app.use(cors());

const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(enquiryRoutes);


connectToMongoDB().then((db) => {
  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
});
