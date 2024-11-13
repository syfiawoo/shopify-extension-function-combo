import express from "express";
import bodyParser from "body-parser";
import crypto from "crypto";
import dotenv from "dotenv";
import cors from 'cors';

// Load environment variables from a .env file into process.env
dotenv.config();

// Initialize an Express application
const app = express();
const port = 3000;

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from all origins
app.use(cors());

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

/**
 * Encrypts data using AES-128-CBC algorithm
 * @param data - The data to be encrypted
 * @param key - The encryption key
 * @param iv - The initialization vector
 * @returns The encrypted data in base64 format
 */
const encryptData = (data: string, key: string, iv: string) => {
  const cipher = crypto.createCipheriv("aes-128-cbc", Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
  let encrypted = cipher.update(data, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}

// Define a POST endpoint for encryption
app.post("/encrypt", (req, res) => {

  // Extract data from the request body
  const { data } = req.body;

  // Get encryption key and IV from environment variables or use default values
  const key = process.env.ENCRYPTION_KEY || "000000";
  const iv = process.env.ENCRYPTION_IV || "000000";

  // Check if data is provided in the request body
  if (!data) {
    return res.status(400).send("Data is required"); // Return a 400 Bad Request if data is missing
  }

  try {
    // Encrypt the data
    const encryptedData = encryptData(data, key, iv);
    // Send the encrypted data as a JSON response
    res.json({ encryptedData });
  } catch (error) {
    console.error(error);
    res.status(500).json("Encryption failed"); 
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`); // Log a message when the server starts
});
