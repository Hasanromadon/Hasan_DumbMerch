require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const app = express();
app.use(cors());
const port = 5000;

app.use(express.json());

// Add endpoint grouping and router
app.use('/api/v1/', routes);
app.use('/uploads', express.static('uploads'));
app.get('*', (req, res) => {
  res.status(404).send({
    status: 'failed',
    message: 'Page not found',
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
