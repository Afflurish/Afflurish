import axios from 'axios';
import type { AxiosResponse } from 'axios';

import type { HandleAxiosReturn } from '../types/promises';
import type {
    AxiosApiResponse,
    AxiosPaginatedApiResponse,
    ApiPaginatedResponse
} from '../types/api';

import * as promises from './promises';

type ApiResponse<T> = AxiosApiResponse<T>;
type PaginatedApiResponse<T> = AxiosPaginatedApiResponse<T>;

type RequestMethods = "get" | "post" | "put" | "patch" | "delete";

interface CommonRequestParams {
    endpoint: string,
    method: RequestMethods,
    authToken?: string
};

interface RequestParams<T> extends CommonRequestParams {
    data?: T
};

export function generateRequest<T>(method: RequestMethods, endpoint: string, authToken?: string, data?: T) {
    const authHeaders = {
        Authorization: `Bearer ${authToken}`
    };

    const headers = authToken ? authHeaders : {};

    const request = axios({ url: endpoint, method, data, headers });

    return request;
};

export async function noResponseRequest<T>({ method, endpoint, authToken, data }: RequestParams<T>): Promise<HandleAxiosReturn<boolean>> {
    const request = generateRequest(method, endpoint, authToken, data);

    const [res, err] = await promises.handleApi<AxiosResponse<unknown>>(request);

    if(err) {
        return [undefined, err];
    }

    return [true, undefined];
};

export async function request<T, D = void>({ method, endpoint, authToken, data }: RequestParams<D>): Promise<HandleAxiosReturn<T>> {
    const request = generateRequest(method, endpoint, authToken, data);

    const [res, err] = await promises.handleApi<ApiResponse<T>>(request);

    if(err) {
        return [undefined, err];
    }

    return [res?.data.results, undefined];
};

export async function paginatedRequest<T>({ method, endpoint, authToken }: CommonRequestParams): Promise<HandleAxiosReturn<ApiPaginatedResponse<T>>> {
    const request = generateRequest(method, endpoint, authToken);

    const [res, err] = await promises.handleApi<PaginatedApiResponse<T>>(request);

    if(err) {
        return [undefined, err];
    }

    return [res?.data, undefined];
};