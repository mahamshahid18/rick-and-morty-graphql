export const isUserLoggedIn = () => {
    const username = localStorage.getItem('username');

    return !!username;
}

export const loginUser = (username) => {
    if (!isUserLoggedIn(username) && username) {
        localStorage.setItem('username', username);
    }
}

export const logoutUser = () => {
    localStorage.removeItem('username');
}