import express from 'express'

const usuariosRoutes = express.Router()

usuariosRoutes.get('/register', (req, res) => {
  return res.render('usuarios/register.ejs')
})

export { usuariosRoutes }
