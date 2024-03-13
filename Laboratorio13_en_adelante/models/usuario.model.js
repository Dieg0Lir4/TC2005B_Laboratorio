const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    save(){
        //return db.execute('INSERT INTO usuarios (username, password) VALUES (?, ?)', [this.username, this.password]);
        return bcrypt.hash(this.password, 12)
            .then((password_cifrado) => {
                return db.execute(
                    `INSERT INTO usuarios (username, password) 
                    VALUES (?, ?)`, 
                    [this.username, password_cifrado]);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    static fetchOne(username){
        return db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
    }
}

