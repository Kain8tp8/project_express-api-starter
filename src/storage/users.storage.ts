import User from "../model/user.model";


export const users: User[] = []

export function addUser( user:User) {
    users.push(user)
}

export function allUsers() {
    return users
}

function deleteall() {
    users.length = 0
}

function remove(nickname: string) {
    let i = users.findIndex(user => user.nick === nickname)
    users.slice(i,1)
}

export default {
    addUser,
    allUsers,
    deleteall,
    remove
}