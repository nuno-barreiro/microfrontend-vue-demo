export interface UserInfo {
    username: string,
    firstName: string,
    lastName: string
}

export function emptyUser(): UserInfo {
    return {
        firstName: '',
        lastName: '',
        username: ''
    };
}

export function login(username: string, password:string): UserInfo | null {
    if (username === 'user' &&  password === 'pass') {
        return {
            username,
            firstName: "John",
            lastName: "Doe"
        };
    }

    return emptyUser();
}

export function saveProfile(user: UserInfo): void {
    return;
}