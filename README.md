# 🐾 Adopted Trails - Pet Adoption Backend API

A scalable backend system for **Adopted Trails**, a pet adoption platform. This backend enables secure CRUD operations for pets, user-pet linking, document/image uploads, and a structured custody transfer process. It ensures authenticated access for pet owners, supporting smooth and safe pet adoption workflows.

---

## 🚀 Features

- 🔐 **User Authentication & Authorization**
  - Secure login/signup with JWT
  - Role-based access: Pet Owners & Admin

- 🐶 **Pet Management**
  - Add, update, delete pets (CRUD)
  - Link pets to specific users
  - Only pet owners can modify their pets

- 🖼️ **Image & Document Uploads**
  - Upload user and pet images
  - Upload vaccination documents
  - Periodic pet image upload system

- 📥 **Custody Transfer**
  - Initiate transfer requests
  - Owner approval required
  - Validations for secure handover

- 📊 **Admin Panel APIs (WIP)**
  - View all users and pets
  - Flag or moderate suspicious activities

---

## 🧱 Tech Stack

- **Node.js** + **Express.js** – RESTful APIs
- **MongoDB** + **Mongoose** – NoSQL database
- **TypeScript** – Type-safe development
- **Multer** – File uploads
- **JWT** – Auth token handling
- **Cloudinary / Local Storage** – For image/document hosting

---

## 🛠️ Installation

```bash
git clone https://github.com/samikshatrivedi007/adoptedtails-backend.git
cd adoptedtails-backend
npm install
