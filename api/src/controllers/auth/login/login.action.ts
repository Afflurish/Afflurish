import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';

import { User } from '../../../entities/index.js';
import { issueToken } from '../../../middleware/index.js';

import { entities, errors } from '../../../utils/index.js';

export interface LoginBody {
    email?: string,
    password?: string
};

async function login(req: Request, res: Response, next: NextFunction) {

    const { email, password }: LoginBody = req.body;

    if(!email || !password) {
        return errors.sendResponse({ res, status: 400, message: "Invalid Request" });
    }

    const [user, err] = await entities.findOne<User>(User, {
        where: {
            email: email.toLowerCase()
        },

    });

    if(err || !user) {
        return errors.sendEntitiesResponse<User>({
            res,
            err,
            message: "Invalid Email or Password",
            entityReturn: user,
            missingEntityReturnMessage: "Invalid Email or Password"
        });
    }

    const hasCorrectPassword = await bcrypt.compare(password, user.password);

    if(!hasCorrectPassword) {
        return errors.sendResponse({ res, status: 401, message: "Invalid Email or Password" });
    }

    /* Don't send hashed user password as payload */
    return issueToken(res, {
        id: user.id,
        display_name: user.display_name,
        email: user.email
    });
};

export default login;