import { NextFunction, Request, Response } from "express";
import { auth } from "express-oauth2-jwt-bearer"

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body);

        const token = req.body.did
        console.log(token);
        res.json({data:req.body, "token": token})
    } catch (error) {
        console.log(error);

    }
}