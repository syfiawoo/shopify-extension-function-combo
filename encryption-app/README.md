# Encryption Service

This project provides a simple encryption service using the Express library. The service exposes an API endpoint to encrypt data using the AES-128-CBC algorithm. The encrypted data is returned in base64 format.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. **Install the Dependencies**:
    ```sh
    npm install
    ```

2. **Configure Environment Variables**:
    - Create a `.env` file in the root directory and add the following environment variables:
    ```env
    ENCRYPTION_KEY=your_encryption_key
    ENCRYPTION_IV=your_initialization_vector
    ```

## Usage

1. **Start the Server**:
    ```sh
    npm start
    ```

2. **Access the Service**:
    - The server will start at `http://localhost:3000`.

3. Create a tunnel as SHopify blocks request to localhost

## API Endpoint

### POST /encrypt

Encrypts the provided data using AES-128-CBC and returns the encrypted data in base64 format.

- **URL**: `/encrypt`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
    ```json
    {
      "data": "string to be encrypted"
    }
    ```
- **Response**:
    - **Success** (200):
        ```json
        {
          "encryptedData": "base64_encrypted_string"
        }
        ```
    - **Error** (400):
        ```json
        {
          "error": "Data is required"
        }
        ```
    - **Error** (500):
        ```json
        {
          "error": "Encryption failed"
        }
        ```

## Environment Variables

The following environment variables are used in this project:

- `ENCRYPTION_KEY`: The encryption key used for AES-128-CBC encryption (must be 16 bytes, represented as 32 hexadecimal characters).
- `ENCRYPTION_IV`: The initialization vector used for AES-128-CBC encryption (must be 16 bytes, represented as 32 hexadecimal characters).

