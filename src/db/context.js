import mssql from 'mssql'

const connectionSettings = {
  server: 'localhost',
  database: 'Proyecto_Final_Distribuidas',
  user: 'sa',
  password: '1234',
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
    instancename: 'SQLEXPRESS'
  },
  port: 1433
}

const getConnection = async () => {
  try {
    return await mssql.connect(connectionSettings)
  } catch (error) {
    console.log(error)
    return null
  }
}

export { getConnection }
