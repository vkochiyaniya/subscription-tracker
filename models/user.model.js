import mongoose from 'mongoose';
//import mongoose comming from mongoose

//define userSchema
const userSchema = new mongoose.Schema({
    //pass object that allow u to define how your specific model gonna look like
    //give each user a name then make a object to define more info about that name
    //for example it will be of type string , along side rquired will passed a array[] its true and also we can deifne error message if something gone wrong
    name: {
        type: String,
        required: [true, 'User Name is required'],
        trim: true, //trmit - by saying trim true if we have some empety spaces in there
        minLength: 2, //mimunum length of 2 character
        mxLength: 50, //max length of 50 charcter
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        //regular expression to check for email
        //u can just seahrch it or us ai to write regular expression
        //no once write by hands nowere days
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        //we not gonna trim or mess with password any way
        minLength: 6,
    }
},
    {timestamps: true},
);

//create new model of that schema  //Model typically start with a capital later
const User = mongoose.model('User', userSchema);
//export the model
export default User;

//then we gonna create instances of that model
//such as different user
//which is something look like this
//{'name', 'John Doe', email: 'johny@gmail.com', password: 'password233'}
//we get to that by something User.create using the create method then passing over the information
//User.create({})
//but we will do it later not now