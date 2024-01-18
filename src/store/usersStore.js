import { makeAutoObservable } from "mobx";
import storageService from "../services/storageService";
import { defaultAuthedUser, defaultUsers } from "../constants/users";

class UsersStore {
    users = storageService.getStorageItem('users') || defaultUsers;
    authedUser = storageService.getStorageItem('authedUser') || defaultAuthedUser;

    constructor() {
        makeAutoObservable(this);
    }

    // TODO:
    // addUser(user) {
    //     this.boards.push(user)
    // }
}

const usersStore = new UsersStore();

export default usersStore;