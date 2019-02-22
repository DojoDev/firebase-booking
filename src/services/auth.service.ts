import { UserModel } from './../models/user.model';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';





@Injectable()
export class AuthService{
    user: Observable<firebase.User>;

    constructor(private angularFireAuth: AngularFireAuth){
        this.user = angularFireAuth.authState;
    }

    createUser(user: UserModel) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      }
}