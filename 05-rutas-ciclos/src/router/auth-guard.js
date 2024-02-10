export const isAuthenticatedGuard = (to, from, next) => {

  return new Promise( ()=> {

    const random = Math.random() * 100

    if (random > 50) {
      console.log('Está autenticado');
      next()
    } else {
      console.log('No está autenticado, Bloqueado por: isAuthenticatedGuard');
      next({name: 'pokemon-home'})
    }

  })

}