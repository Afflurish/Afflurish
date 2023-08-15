import { ENV } from '../../constants';

import type { AuthState } from '../../store/authSlice';
import type { ApiPaginationParams, PaginatedResponse } from '../../types/api';
import type { HandleAxiosReturn } from '../../types/promises';

import { apiRequests } from '../../utils';

const baseEndpoint = ENV.API_URL + "/budget";

export interface IncomeSource {
    id: number,
    amount: number,
    label: string,
    updated_at: Date,
    created_at: Date
};

export interface IncomeSourceCreate {
    amount: number,
    label: string
};

export async function getByUserId(auth: AuthState, params: ApiPaginationParams): Promise<PaginatedResponse<IncomeSource>> {
    const endpoint = `${baseEndpoint}/income/user/id/${auth.user.id}?page=${params.page ?? 1}`;
    return apiRequests.paginatedRequest<IncomeSource>({
        endpoint,
        method: "get",
        authToken: auth.token
    });
};

export async function getTotalByUserId(auth: AuthState): Promise<HandleAxiosReturn<{ total: number }>> {
    const endpoint = `${baseEndpoint}/income/user/id/${auth.user.id}/total`;
    return apiRequests.request<{ total: number }>({
        endpoint,
        method: "get",
        authToken: auth.token
    });
};

export async function create(auth: AuthState, incomeSource: IncomeSourceCreate): Promise<HandleAxiosReturn<IncomeSource>> {
    const endpoint = `${baseEndpoint}/income`;
    return apiRequests.request<IncomeSource, IncomeSourceCreate>({
        endpoint,
        method: "post",
        data: incomeSource,
        authToken: auth.token
    });
};