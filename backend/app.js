const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:80']
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.post('/login', async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
   
    if (userName !== 'werner' || password !== '12345') {
        return res.status(422).json({
            message: 'Invalid credentials.',
            errors: { credentials: 'Invalid username or password entered.' },
        });
    }

    res.status(200)
    res.send('User logged in!');
})

app.listen(PORT, (error) =>{
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);
