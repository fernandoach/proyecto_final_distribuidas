import express from 'express'

const authRoutes = express.Router()

authRoutes.get('/login', (req, res) => {
  return res.render('auth/login.ejs')
})

export { authRoutes }
