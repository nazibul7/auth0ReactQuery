import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import jwt from "jsonwebtoken"

declare global {
    namespace Express {
        interface Request {
            userId: string;
            auth0Id: string;
        }
    }
}

export const verifyJwt = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.sendStatus(401);
    }
    const token = authorization.split(" ")[1];
    try {
        const decoded = jwt.decode(token) as jwt.JwtPayload;
        const auth0Id = decoded.sub;

        const user = await User.findOne({ auth0Id });
        console.log(user);
        
        if (!user) {
            return res.sendStatus(401);
        }

        req.auth0Id = auth0Id as string;
        req.userId = user._id.toString();
        next();
    } catch (error) {
        return res.sendStatus(401);
    }
}