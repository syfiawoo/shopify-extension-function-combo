# Shopify Checkout Extension and Encryption Service

This project includes a Shopify checkout extension and an Encryption Service. The Shopify extension is designed to enhance the checkout process by applying discounts based on encrypted pricing, while the Encryption Service provides an API for encrypting data.
## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Components](#components)

## Overview

This repository contains two main components:

1. **Shopify Checkout Extension**: A React-based extension that integrates with Shopify's checkout process. It calculates the total price of cart items, encrypts this total via the encryption service, and applies discounts if certain conditions are met.

2. **Encryption Service**: An Express-based API service that encrypts data using the AES-128-CBC algorithm and returns the encrypted data in base64 format.

## Installation

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/syfiawoo/shopify-extension-function-combo.git
    cd shopify-extension-function-combo
    ```

2. **Access Components**:
    - **Encryption Service**: Navigate to the [encryption-app](encryption-app) directory for setup and usage instructions.
    - **Shopify Checkout Extension**: Navigate to the [extension-function-combo](extension-function-combo) directory for setup and usage instructions.

## Components

### Encryption Service

The Encryption Service is a standalone API that provides encryption capabilities. It is designed to be used as part of the Shopify checkout extension but can independently be used for other encryption needs.

- **Directory**: [encryption-app](encryption-app)
- **Features**:
  - Encrypts data using AES-128-CBC.
  - Returns encrypted data in base64 format.
  - Configurable via environment variables for encryption key and IV.

### Shopify Checkout Extension

The Shopify Checkout Extension enhances the checkout experience by integrating encrypted pricing and automatic discount application.

- **Directory**: [extension-function-combo](extension-function-combo)
- **Features**:
  - Fetches and encrypts product prices.
  - Applies discounts based on decrypted total prices.
  - Built using React and TypeScript, leveraging Shopify's UI Extensions API.

For detailed setup and usage instructions, please refer to the respective directories.

---

This README provides a high-level overview of the project components and instructions for accessing them. For more detailed information, please refer to the documentation within each component's directory.
