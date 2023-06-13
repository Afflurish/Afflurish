import { Request, Response, NextFunction } from '@@types/express.js';
import JWT from 'jsonwebtoken';

import { ENV } from '@@constants/index.js';
import { errors } from '@@utils/index.js';

import type { AuthUser } from '@@types/auth.js';

export interface JWTAuthData extends AuthUser {
    iat: number,
    exp: number
};

async function verifyToken(req: Request, res: Response, next: NextFunction) {
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader === 'undefined') {
        return res.status(403).json({ message: "Unauthorized" });
    }

    const bearer: Array<string> = bearerHeader.split(" ");
    const bearerToken: string = bearer[1];

    JWT.verify(bearerToken, ENV.JWT_TOKEN, (err, authData) => {
        if(err) {
            switch(err.toString()) {
                case "TokenExpiredError: jwt expired":
                    return errors.sendResponse({ 
                        res, 
                        status: 403, 
                        message: "Token Expired"
                    });
                default:
                    return errors.sendResponse({ 
                        res, 
                        err, 
                        status: 403, 
                        message: "Invalid Token" 
                    });
            };
        }

        const { id, display_name, email } = authData as JWTAuthData;

        res.locals.auth = {
            user: {
                id,
                display_name,
                email
            },
            token: bearerToken
        };

        return next();
    });
};

export default verifyToken;