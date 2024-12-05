import mssql from 'mssql'
import { getConnection } from '../db/context.js'

const addNewUsuario = async (nombre, genero, fechaNacimiento
  , email, passwd, avatar) => {
  try {
    const connection = await getConnection()
    const query = await connection
      .request()
      .input('nombre', mssql.VarChar, nombre)
      .input('genero', mssql.Char, genero)
      .input('fechaNacimiento', mssql.Date, fechaNacimiento)
      .input('email', mssql.VarChar, email)
      .input('passwd', mssql.VarChar, passwd)
      .input('avatar', mssql.VarBinary, avatar)
      .query(
        `
          INSERT INTO Usuarios(nombre,genero,fechaNacimiento,email,passwd,avatar)
          VALUES(@nombre, @genero, @fechaNacimiento, @email, @passwd, @avatar);
        `
      )
    return query.rowsAffected
  } catch (error) {
    return error
  }
}

export { addNewUsuario }
