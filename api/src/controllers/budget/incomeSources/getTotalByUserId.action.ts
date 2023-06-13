import type { Request, AuthenticatedResponse, NextFunction } from '@@types/express.js';

import { IncomeSource } from '@@entities/index.js';

import { entities, errors } from '@@utils/index.js';

async function getTotalByUserId(req: Request, res: AuthenticatedResponse, next: NextFunction) {

    const { id } = req.params;
    const { user } = res.locals.auth;

    if(!id || id !== user.id) {
        return errors.sendResponse({ res, status: 401, message: "Unauthorized" });
    }

    const [incomeSources, err] = await entities.find<IncomeSource>(IncomeSource, {
        where: {
            user: {
                id
            }
        },
        select: {
            amount: true
        }
    });

    if(err || !incomeSources) {
        return errors.sendEntitiesResponse({
            res,
            err,
            message: "Unable to get Income Source Total",
            entityReturn: incomeSources,
            missingEntityReturnMessage: "No Income Sources Returned"
        });    
    }

    const total = incomeSources.reduce((a, b) => a + b.amount, 0);

    return res.json({ 
        results: {
            total
        }    
    });
};

export default getTotalByUserId;