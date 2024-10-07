import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { dbConnector } from "@/app/lib/dbConnector";
import { RowDataPacket } from "mysql2";

// Dummy user data (replace with real authentication logic)
// const users = [
//     { username: "admin", password: "admin123" },
//     { username: "user", password: "user123" },
// ];

// Secret key for JWT (store this securely, e.g., in an env variable)
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
// console.log(JWT_SECRET)
// Token expiration time (adjust as needed)
const JWT_EXPIRATION = "1h"; // 1 hour


export async function POST(req: Request) {
    try {

        const [resultSet, fs] = await dbConnector.query<RowDataPacket[]>("select * from User")
        // console.log(resultSet)

        const jsobj = await req.json();
        // if (!jsobj) {
        //     return NextResponse.json(
        //         { error: "Need body for processing" },
        //         { status: 401 }
        //     );
        // }
        const { username, password } = jsobj
        // console.log("A")
        // console.log(resultSet)

        // Find the user in the dummy users array
        const user = resultSet.find(
            (u) => u.userName === username && u.password === password
        );

        if (!user) {
            // Invalid credentials
            return NextResponse.json(
                { error: "Invalid username or password" },
                { status: 401 }
            );
        }


        // Create a JWT token
        const token = jwt.sign({ username }, JWT_SECRET, {
            expiresIn: JWT_EXPIRATION,
        });

        // Set the token in an HTTP-only cookie
        const response = NextResponse.json({ message: "Login successful!" });

        response.cookies.set("token", token, {
            httpOnly: true, // Prevent access from JavaScript
            secure: process.env.NODE_ENV === "production", // Set `secure` flag in production
            maxAge: 60 * 60, // 1 hour expiration
            path: "/", // Token is valid site-wide
        });

        return response;
    } catch (error) {
        return NextResponse.json({
            error: "Error processing request",
            error2: error
        }, { status: 400 });
    }
}