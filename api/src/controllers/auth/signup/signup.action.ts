import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';

import { User } from '../../../entities/index.js';

import { entities, errors } from '../../../utils/index.js';

export interface SignupBody {
    email?: string,
    password?: string
};

async function signup(req: Request, res: Response, next: NextFunction) {

    const { email, password }: SignupBody = req.body;

    if(!email || !password) {
        return errors.sendResponse({ res, status: 400, message: "Invalid Request" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [user, err] = await entities.insert<User>(User, {
        email,
        password: hashedPassword
    });

    if(err || !user) {
        return errors.sendEntitiesResponse<User>({
            res,
            err,
            message: "Unable to register user",
            entityReturn: user,
            missingEntityReturnMessage: "No User Returned"
        });
    }

    return res.sendStatus(200);
};

export default signup;