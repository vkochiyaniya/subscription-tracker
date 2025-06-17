import express from 'express';
import {PORT} from './config/env.js';

const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to the home page!');
});
app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${ PORT }`);
});

export default app;
