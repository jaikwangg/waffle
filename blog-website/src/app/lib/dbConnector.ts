// db.js
import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

// Load environment variables from the .env file
// dotenv.config();
// Convert the port to a number or use the default (3306) if not provided
const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306;

// console.log(process.env)


// Create a connection pool using environment variables from the .env file
export const dbConnector = mysql.createPool({
    host: process.env.DB_HOST,       // MySQL host from .env
    user: process.env.DB_USER,       // MySQL username from .env
    password: process.env.DB_PASSWORD, // MySQL password from .env
    database: process.env.DB_NAME,   // MySQL database name from .env
    port: port,
    waitForConnections: true,
    connectionLimit: 10,             // Set a limit for connections (optional)
    queueLimit: 0
});

// Export a query function that returns a promise
// export const query = (sql, params) => pool.execute(sql, params);