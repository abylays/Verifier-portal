/**
 * File containing various browser routes.
 * */

interface Routes {
    ROOT: string,
    LOGIN: string,
    SIGNUP: string,
    SIGNUP_CONFIRM: string,
    INTRO: string,
    CREATE_TOKEN: string,
    API_KEY: string,
    ISSUER: string,
    LOAN_PAGE: string
}

export const routes: Routes = {
    CREATE_TOKEN: '/create_token',
    ROOT: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    SIGNUP_CONFIRM: '/confirm-signup',
    INTRO: '/intro',
    API_KEY: '/api-key',
    ISSUER: '/issuer',
    LOAN_PAGE: '/loan'

}
