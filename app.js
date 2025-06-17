import express from 'express'
const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to the home page!');
});
app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000');
});

export default app;
