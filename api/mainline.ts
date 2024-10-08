import API from "./api";

interface APIResponse<T = any> {
    status: boolean;
    message: string;
    data?: T;
}
export const MAINLINE_ALL_API = async (): Promise<APIResponse> => {
    return await API.get('/mainline_ipo/all').then(response => {
        if(response) {
            return {status: true, message: response, data: response};
        } else
            return {status: false, message: response.message};
    }).catch(err => {
        return {status: false, message: err.message}
    })
}

export const MAINLINE_LISTED_API = async (): Promise<APIResponse> => {
    return await API.get('/mainline_ipo/listed').then(response => {
        if(response) {
            return {status: true, message: response, data: response};
        } else
            return {status: false, message: response.message};
    }).catch(err => {
        return {status: false, message: err.message}
    })
}
