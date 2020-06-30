import { extendObservable } from 'mobx';

class UserStore {
    consturctor(){
        extendObservable(this, {
            loading: true, 
            isLoggedIn: false,
            username: ''
        })
    }
}

export default new UserStore()