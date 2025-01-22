export function userRedirect(roles: string[]) {
    if (roles.includes('admin')) {
        window.location.href = '/admin';
    } else {
        window.location.href = '/consumer';
    }
}