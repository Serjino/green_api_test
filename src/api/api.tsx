import axios, { AxiosError, AxiosPromise, AxiosStatic, CancelToken } from 'axios'
import qs from 'qs'
import { config } from '../global/config'

export interface ILoginData {
    idInstance: string,
    apiTokenInstance: string,
}

export interface IQueryObj {
    [key: string]: string | number | undefined
}

export function parseObjectToQueryString(query: any) {
    if (!query) {
        return ''
    }
    else {
        return "?" + qs.stringify(query, { arrayFormat: 'repeat' })
    }
}


const shouldIntercept = (error: AxiosError) => {
    try {
        return error?.response?.status === 401
    } catch (e) {
        return false;
    }
};

const logout = () => {
    localStorage.removeItem('auth')
    window.location.reload()
}


function logoutIfTokenDeadInterceptor(axiosClient: AxiosStatic, customOptions = {}) {
    const options = {
        shouldIntercept,
        logout,
        ...customOptions,
    };

    const interceptor = (error: any) => {
        if (options.shouldIntercept(error)) {
            // if (!error.config.url.includes('/editor/login')) {
            options.logout()
            // }
            return Promise.reject(error);
        }
    };

    axiosClient.interceptors.response.use(undefined, interceptor);
};

logoutIfTokenDeadInterceptor(axios)

export const req = new class {
    private getTargetURL(method: string) {
        const authData = JSON.parse(localStorage!.getItem('auth')!) as ILoginData
        return `${config.apiHost}/waInstance${authData.idInstance}/${method}/${authData.apiTokenInstance}`
    }
    private getHeaders() {
        const HEADERS = {}
        return {
            ...HEADERS,
        }
    }
    get(
        method: string,
        params?: Object
    ): AxiosPromise {
        return axios(
            this.getTargetURL(method), {
            params,
            headers: this.getHeaders(), paramsSerializer: params => {
                return qs.stringify(params, { arrayFormat: 'repeat' })
            },
        }
        )
    }

    post(method: string,
        body?: Object,
        params?: { [key: string]: string | number },
    ): AxiosPromise {
        let URLWithParams = this.getTargetURL(method) + parseObjectToQueryString(params)
        return axios.post(
            URLWithParams, body, { headers: this.getHeaders() },
        )
    }

    put(url: string, params?: Object, token?: { Authorization: string }): AxiosPromise {
        return axios.put(
            config.apiHost + url, params, this.getHeaders()
        )
    }

    delete(method: string, entityID: string, params?: Object, token?: { Authorization: string }): AxiosPromise {
        let urlWithEntityID = this.getTargetURL(method) + '/' + entityID
        return axios.delete(
            urlWithEntityID, { params, headers: token ?? this.getHeaders() }
        )
    }
}()

// export function successHandler(message: string) {
//     ReactDOM.render(<Snack message={message} randomKey={Math.random()} severity="success" />, document.getElementById('snack'))
// }

// export function errorHandler(error: AxiosError | any) {
//     console.log('errorHandler: ', error);
//     ReactDOM.render(<Snack error={error.response} randomKey={Math.random()} severity="error" />, document.getElementById('snack'))
// }
// export function errorUploadHandler(error: AxiosError | any, type?: string) {
//     console.log('errorUploadHandler: ', error);
//     ReactDOM.render(<Snack error={error} randomKey={Math.random()} severity="error" type={type} />, document.getElementById('snack'))
// }
