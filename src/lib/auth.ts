/**
 *auth middleware for user authentication and authorization public routes
*/

export const publicRoute = [
    '/'
]

/**
 * auth middleware for user authentication and authorization private routes
 * @param {string} role - user role
 * @param {string} path - route path
 * @param {string} method - route method
 * @param {string} action - route action
*/

export const privateRoute=[
    '/dashboard',
    '/dashboard/user/page',
    '/dashboard/admin',
]

export const authRoute = ['/auth/signin', '/auth/signup'];

export const adminRoute = ['/dashboard/admin/page'];
export const userRoute = ['/dashboard/user/page'];


export const REDIRECT_URL = '/auth/signin'
export const adminRedirect = '/dashboard/admin/page'
export const userRedirect = '/dashboard/user/page'