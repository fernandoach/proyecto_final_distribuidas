/*
  crear servidor para gestionar peliculas.
  con gestion de comtarios.
  gestion de directores, escritores, franquicias, lista de usuario.
  debe con inicio de sesión
*/

import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { authRoutes } from './routes/authRoutes.js'
import { morganMiddleware } from './middlewares/morganMiddleware.js'
import morgan from 'morgan'
import { usuariosRoutes } from './routes/usuariosRoutes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const server = express()

// middleware's
server.use(express.json())
server.set('view engine', 'ejs')
server.use(express.static('public'))
server.set('views', join(__dirname, 'views'))
server.use('/auth', authRoutes)
server.use('/usuarios', usuariosRoutes)
server.use(morgan(morganMiddleware))

server.get('/', (req, res) => {
  return res.render('home/index.ejs')
})

server.listen(3000, () => {
  console.log('server on => http://127.0.0.1:3000')
})
