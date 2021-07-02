export class NewUser {
    name: string;
    nameUser: string;
    email: string;
    password: string;
    constructor(name: string, nameUser: string, email: string, password: string) {
        this.name = name;
        this.nameUser = nameUser;
        this.email = email;
        this.password = password;
    }
}
