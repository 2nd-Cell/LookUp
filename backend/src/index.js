const express = require('express');
const cors = require('cors');

// cors middleware
const corsOptions = {
    origin: 'http://localhost:3000', // replace with your frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}

cors(corsOptions);
const app = express();
const PORT = 3000;

app.post('/api', (req, res) => {
    res.json({
        message: "Hello from the server!"
    });
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);