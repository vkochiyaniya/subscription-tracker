import  {Router} from "express";

const userRouter = new Router();

userRouter.get('/', (req, res) => res.send({title: 'Get all user'}));

userRouter.get('/:id', (req, res) => res.send({title: 'Get user details'}));

userRouter.post('/', (req, res) => res.send({title: 'Create new user'}));

userRouter.put('/:id', (req, res) => res.send({title: 'Updateuser'}));

userRouter.delete('/:id', (req, res) => res.send({title: 'Delete user'}));

export default userRouter;

