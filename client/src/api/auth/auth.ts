import type { UserState } from '../../store/authSlice';
import { ENV } from '../../constants';
import { apiRequests } from '../../utils';

const baseEndpoint = ENV.API_URL + "/auth";

export function login(email: string, password: string) {
    const endpoint = `${baseEndpoint}/login`;
    return apiRequests.request<UserState, { email: string, password: string }>({
        endpoint,
        method: "post",
        data: {
            email, password
        }
    });
};

export function signup(email: string, password: string) {
    const endpoint = `${baseEndpoint}/signup`;
    return apiRequests.noResponseRequest<{ email: string, password: string }>({
        endpoint,
        method: "post",
        data: {
            email, password
        }
    });
};