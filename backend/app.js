const express = require('express');
require('dotenv');
const app = express();
const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use(express.json());