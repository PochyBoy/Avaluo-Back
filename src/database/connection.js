import sql from "mssql";
import config from "../config";

export const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

let dbConect = 'Server=0.0.0.0,60610;Database=dbavaluos;User Id=sa;Password=admin;Encrypt=false'
let dbservidor = `Driver={ODBC Driver 13 for SQL Server};Server=tcp:servidorpaul.database.windows.net,1433;Database=dbavaluos;Uid=Admin123;Pwd=Paulx1995x-;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;`

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbservidor);
    return pool;
  } catch (error) {
    console.error(error);
  }

};


export { sql };
