/**
 * File containing various API endpoints.
 * */

interface Endpoints {
    SIGNUP: string,
    LOGIN: string,
    LOGOUT: string,
    WALLET_CREDENTIALS: string,
    WALLET_SIGN_CREDENTIALS: string,
    VC_BUILD_UNSIGNED: string,
    DID_RESOLVE_DID: string,
    VERIFIER_VERIFY_VCS: string,
    VERIFIER_VERIFY_PRESENTATION: string,
    BUILD_CREDENTIAL_REQUEST: string,
    GENERATE_CREDENTIAL_REQUEST_TOKEN: string,
}

export const endpoints: Endpoints = {
    SIGNUP: '/users/signup',
    LOGIN: '/users/login',
    LOGOUT: '/users/logout',
    WALLET_CREDENTIALS: '/wallet/credentials',
    VC_BUILD_UNSIGNED: '/vc/build-unsigned',
    WALLET_SIGN_CREDENTIALS: '/wallet/sign-credential',
    DID_RESOLVE_DID: '/did/resolve-did',
    VERIFIER_VERIFY_VCS: '/verifier/verify-vcs',
    VERIFIER_VERIFY_PRESENTATION: '/verifier/verify-share-response',
    BUILD_CREDENTIAL_REQUEST: '/verifier/build-credential-request',
    GENERATE_CREDENTIAL_REQUEST_TOKEN: 'wallet/credential-share-token/generate-request-token'
}
