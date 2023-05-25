import type { Request, Response, NextFunction } from 'express';

import { IncomeSource } from '../../../entities/index.js';

import { entities, pagination, errors } from '../../../utils/index.js';
import { FindOneOptions } from 'typeorm';

async function getByUserId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const { limit, offset } = res.locals;
    const user = res.locals.auth;

    if(!id || id !== user.id) {
        return errors.sendResponse({ res, status: 401, message: "Unauthorized" });
    }

    const findOptions: FindOneOptions<IncomeSource> = {
        where: {
            user: {
                id
            }
        }
    };

    const [incomeSources, err] = await entities.findAndCount<IncomeSource>(IncomeSource, findOptions, {
        limit, offset
    });

    if(err || !incomeSources) {
        return errors.sendEntitiesResponse({
            res,
            err,
            message: "Unable to get Income Sources",
            entityReturn: incomeSources,
            missingEntityReturnMessage: "No Income Sources Returned"
        });
    }

    const response = pagination.paginateResponse<IncomeSource>(req, res, incomeSources);

    return res.json(response);
};

export default getByUserId;