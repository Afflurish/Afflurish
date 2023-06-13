import type { Request, AuthenticatedResponse, NextFunction } from '@@types/express.js';

import { IncomeSource } from '@@entities/index.js';

import { entities, errors } from '@@utils/index.js';

export interface Body {
    label?: string,
    amount?: number
};

async function create(req: Request<Body>, res: AuthenticatedResponse, next: NextFunction) {

    const { user } = res.locals.auth;
    const { label, amount } = req.body;

    if(!label || !amount) {
        return errors.sendResponse({ res, status: 400, message: "Invalid Body" });
    }

    const [incomeSource, err] = await entities.insert<IncomeSource>(IncomeSource, {
        user: { 
            id: user.id
        },
        label,
        amount
    });

    if(err || !incomeSource) {
        return errors.sendEntitiesResponse({
            res,
            err,
            message: "Unable to save Income Source",
            entityReturn: incomeSource,
            missingEntityReturnMessage: "No Income Source Returned"
        });
    }

    return res.json({ results: incomeSource });
};

export default create;