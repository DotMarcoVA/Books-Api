// Importar Promise MySQL
import mysql from "promise-mysql";
// Importar configuracion de las variables constantes de acceso a la Base de Datos
// import config from "./constants.js";
import { HOST, DB, USER, PASSWORD } from "./constants.js";
console.log(HOST, DB, USER, PASSWORD);

// Funcion de Conexion a la Base de Datos, recibiendo como parametro la Configuracion
const connection = mysql.createConnection({
    host: HOST,
    database: DB,
    user: USER,
    password: PASSWORD,
});

// Inicializacion de la conexion
const getConnection = () => {
    return connection;
};

// Exportar la conexion como Modulo
export { getConnection };
