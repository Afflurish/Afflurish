import { Response } from 'express';
import JWT from 'jsonwebtoken';

import { ENV } from '../constants/index.js';
import { AuthPayload } from '../types/auth.js';

interface Payload extends AuthPayload {

};

async function issueToken(res: Response, payload: Payload) {
    const options = {
        expiresIn: "12h"
    };

    const token = JWT.sign(payload, ENV.JWT_TOKEN, options);

    payload.token = token;

    return res.json({ results: payload });
};

export default issueToken;