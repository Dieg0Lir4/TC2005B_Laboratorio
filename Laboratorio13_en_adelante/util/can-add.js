module.exports = (request, response, next) => {
    let canAdd = false;
    for (let permiso of request.session.permisos) {
        if (permiso.name === 'agregar pokemon') {
            canAdd = true;
        }
    }

    if (canAdd) {
        next();
    }else{
        response.redirect('/perfil/login');
    }
}