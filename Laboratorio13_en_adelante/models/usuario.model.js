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

    static fetchPermissions(username){
        return db.execute('SELECT p.name FROM permisos p JOIN roles_permisos rp ON p.id = rp.permisosID JOIN roles r ON rp.rolID = r.id JOIN usuarios_roles ur ON r.id = ur.rolID JOIN usuarios u ON ur.usuarioID = u.id WHERE u.username = ?;', [username]);
    }

}
