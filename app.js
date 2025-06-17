import express from 'express'
//import express from express

//intialize the app and call it as function
const app = express();

//create your first route
//app. instance then call method for http call you wann make(post,get etc...)
app.get('/', (req, res)=>{
    res.send('Welcome to the home page!');
});
//frist parmeter will be path where this route will be reachable
//here which is homepage so '/'
//scond parameter we can pass an call back function
// ()=>{} arrow function
//where argument is requste and response

//this is not engoubh now u need to make the server listen for the requsteb trying to access spceific route
app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000');
});

//do not forgate export
export default app;
