import API from "./api";

interface APIResponse<T = any> {
    status: boolean;
    message: string;
    data?: T;
}
export const GMP_API = async (): Promise<APIResponse> => {
    return await API.get('/grey_market_premium/all').then(response => {
        if(response) {
            return {status: true, message: response, data: response};
        } else
            return {status: false, message: response.message};
    }).catch(err => {
        return {status: false, message: err.message}
    })
}
