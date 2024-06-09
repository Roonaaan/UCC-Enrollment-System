import pg from 'pg';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Database Connection
const pool = new pg.Pool({ // Use 'pg.Pool' instead of 'Pool'
    connectionString: "postgres://default:NpLQ8gFc1dsD@ep-aged-meadow-a1op3qk0-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require", // Get connection string from environment variable
    ssl: {
        rejectUnauthorized: false, // Use this option only if necessary
    }
});

// Login
export const login = async (req, res) => {
    let client;

    try {
        client = await pool.connect();
        const result = await client.query("SELECT * FROM tblaccount WHERE account_email = $1", [req.body.email]);

        if (result.rows.length === 0) {
            return res.status(401).json("User not found!");
        }

        const { role, account_password, ...userData } = result.rows[0];

        // Check if the user has the 'Admin' role
        if (role === 'Admin') {
            return res.status(401).json("Access denied. Only employees are allowed to log in.");
        }

        if (!account_password) {
            return res.status(400).json({ error: "Password not set for this user" });
        }

        const checkPassword = bcrypt.compareSync(req.body.password, account_password);

        if (!checkPassword) {
            return res.status(401).json("Incorrect email or password!");
        }

        res.status(200).json(userData);
    } catch (error) {
        console.error(error); // Log the actual error message
        res.status(500).json({ error: error.message }); // Send the actual error message (if appropriate)
    } finally {
        if (client) {
            await client.release();
        }
    }
};