import {baseURL} from "@/helper/other/url-helper";

const fetchData = async (url: string, method: 'GET') => {
    const response = await fetch(`${baseURL}${url}`, {
        method,
        headers: {
            'Accept': 'application/json',
        },
    });
    return await response.json();
};

const API = {
    get: (url: string) => fetchData(url, 'GET'),
};

export default API;
