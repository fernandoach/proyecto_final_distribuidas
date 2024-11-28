/* 
  crear servidor para gestionar peliculas. 
  con gestion de comtarios. 
  gestion de directores, escritores, franquicias, lista de usuario. 
  debe con inicio de sesión
*/

import express from 'express'

const server = express()

server.get('/', (req, res) => {
  return res.json('ok')
})

server.listen(3000, () => {
  console.log('server on => http://127.0.0.1:3000')
})