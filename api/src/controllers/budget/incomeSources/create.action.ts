import type { Request, Response, NextFunction } from 'express';

import { IncomeSource } from '../../../entities/index.js';

import { entities, errors } from '../../../utils/index.js';

export interface Body {
    label?: string,
    amount?: number
};

async function create(req: Request, res: Response, next: NextFunction) {
    const { label, amount }: Body = req.body;

    if(!label || !amount) {
        return errors.sendResponse({ res, status: 400, message: "Invalid Body" });
    }

    const [incomeSource, err] = await entities.insert<IncomeSource>(IncomeSource, {
        user: res.locals.auth.id,
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