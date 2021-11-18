const express = require('express');

const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const usersRoutes = require('./routes/usersRoute');

app.use(cors());
app.use(express.json());
app.use('/', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
