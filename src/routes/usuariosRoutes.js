import express from 'express'
import multer from 'multer'
import { addNewUsuario } from '../services/addNewUsuario.js'
import bcrypt from 'bcrypt'
import { useRegisterSchema } from '../schemas/userRegisterSchema.js'

const storage = multer.memoryStorage()
const upload = multer({ storage })

const usuariosRoutes = express.Router()

usuariosRoutes.get('/register', (req, res) => {
  return res.render('usuarios/register.ejs')
})

usuariosRoutes.post('/register', upload.single('avatar'), async (req, res) => {
  try {
    const { nombre, genero, fechaNacimiento, email, passwd, repasswd } = req.body
    const avatar = req.file.buffer
    await useRegisterSchema.validateAsync({ nombre, genero, fechaNacimiento, email, passwd, repasswd })
    const newPassword = await bcrypt.hash(passwd, 12)
    const query = await addNewUsuario(nombre, genero, fechaNacimiento, email, newPassword, avatar)
    return res.json({ message: `${query} rows affected` })
  } catch (error) {
    return res.json(error.message)
  }
})

export { usuariosRoutes }
