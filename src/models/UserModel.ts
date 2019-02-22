export class UserModel {
    id?: string = null;
    name: string = null;
    email: string = null;
    password: string = null;
    passwordConfirmation: string = null;
    isAdmin: boolean = null;
    role: string = null;
    constructor(values: Object = {}) {
        Object.keys(this).forEach(key => {
            if (values.hasOwnProperty(key)) {
                this[key] = values[key];
            }
        });
    }
}
