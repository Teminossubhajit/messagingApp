const express = require("express");
const cors = require("cors");
require('dotenv').config();
const connectDb = require('./config/connectDB');
const router = require('./routes/index');
const cookieParser=require('cookie-parser');
const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser())
const PORT = process.env.PORT || 8080;

app.get('/', (request, response) => {
    response.json({
        message: "server running at " + PORT
    });
});

// api endpoint
app.use('/api', router);

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log("server running at " + PORT);
    });
});
