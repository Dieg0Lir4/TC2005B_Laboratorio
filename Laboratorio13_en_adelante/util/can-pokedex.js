module.exports = (request, response, next) => {
    let canPokedex = false;
    for (let permiso of request.session.permisos) {
        if (permiso.name === 'ver pokedex') {
            canPokedex = true;
        }
    }

    if (canPokedex) {
        next();
    }else{
        response.redirect('/perfil/login');
    }
}
