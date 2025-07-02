import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            users: req.user_id,
        });

        res.status(201).send({sucess: true, data: subscription});
    }catch (e){
        next(e);
    }
}