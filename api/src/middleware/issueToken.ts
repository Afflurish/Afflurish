import { Response } from 'express';
import JWT from 'jsonwebtoken';

import { ENV } from '@@constants/index.js';
import type { AuthUser, AuthPayload } from '@@types/auth.js';

async function issueToken(res: Response, user: AuthUser) {
    const options = {
        expiresIn: "12h"
    };

    const token = JWT.sign(user, ENV.JWT_TOKEN, options);
    const payload: AuthPayload = {
        user,
        token
    };

    return res.json({ results: payload });
};

export default issueToken;