import API from "./api";

interface APIResponse<T = any> {
    status: boolean;
    message: string;
    data?: T;
}
export const SME_IPO_UPCOMING_API = async (): Promise<APIResponse> => {
    return await API.get('/sme_ipo/all').then(response => {
        if(response) {
            return {status: true, message: response, data: response};
        } else
            return {status: false, message: response.message};
    }).catch(err => {
        return {status: false, message: err.message}
    })
}

export const SME_IPO_LISTED_API = async (): Promise<APIResponse> => {
    return await API.get('/sme_ipo/listed').then(response => {
        if(response) {
            return {status: true, message: response, data: response};
        } else
            return {status: false, message: response.message};
    }).catch(err => {
        return {status: false, message: err.message}
    })
}

export const SINGLE_SME_IPO_API = async(id): Promise<APIResponse> => {
    console.log("id=========>",`/sme_ipo/${id}`);
    return await API.get(`/sme_ipo/${296}`).then(response => {
        console.log("434343434343",response)
        if(response) {
            console.log("respons+++++++++++++++++++e",response)
            return {status: true, message: response, data: response};
        } else
            console.log("84684654552138552588522525585224558+++++++++++++++++++e",response)
            return {status: false, message: response.message};
    }).catch(err => {
        return {status: false, message: err.message}
    })
}
