module.exports = (request, response, next) => {
    let canAdd = false;
    for (let permiso of request.session.permisos) {
        if (permiso.name === 'ver tabla de tipos') {
            canAdd = true;
        }
    }

    if (canAdd) {
        next();
    }else{
        response.redirect('/perfil/login');
    }
}