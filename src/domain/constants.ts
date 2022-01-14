import Cookies from 'js-cookie'

const AUTH_KEY_HEADER = 'isloggedin'

export const isLoggedIn = () => {
    const result = Cookies.get(AUTH_KEY_HEADER)
    if (result === undefined) return false
    else return result
}

