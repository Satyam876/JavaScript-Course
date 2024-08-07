class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value;
    }
}

const userOne = new User("satyam123", "satyam@999")

console.log(userOne.password)