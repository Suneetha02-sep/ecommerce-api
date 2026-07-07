#  E-Commerce Product REST API

A simple RESTful API built using **Node.js** and **Express.js** that manages product data. The project demonstrates the fundamentals of REST API development using the MVC (Model-View-Controller) architecture.

---

##  Features

- View all products
- Add a new product
- Delete a product by ID
- RESTful API design
- MVC Architecture
- JSON request and response handling
- Tested using Postman

---

##  Tech Stack

- Node.js
- Express.js
- JavaScript (ES Modules)
- Postman

---

##  Project Structure

```
ecommerce-api/
│
├── controllers/
│   └── productController.js
│
├── models/
│   └── productModel.js
│
├── routes/
│   └── productRoutes.js
│
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

##  Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-api.git
```

### 2. Navigate to the Project

```bash
cd ecommerce-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
npm start
```

Server will run at:

```
http://localhost:4000
```

---

##  API Endpoints

### 1. Get All Products

**GET**

```
GET /api/products
```

#### Response

```json
[
  {
    "id":1,
    "name":"Laptop",
    "price":55000,
    "category":"Electronics"
  }
]
```

---

### 2. Add Product

**POST**

```
POST /api/products
```

#### Request Body

```json
{
    "id":4,
    "name":"Bluetooth Speaker",
    "price":3500,
    "category":"Electronics"
}
```

#### Response

```json
{
    "message":"Product Added Successfully",
    "products":[]
}
```

---

### 3. Delete Product

**DELETE**

```
DELETE /api/products/:id
```

Example:

```
DELETE /api/products/2
```

#### Success Response

```json
{
    "message":"Product Deleted Successfully"
}
```

#### Error Response

```json
{
    "message":"Product Not Found"
}
```

---

##  Testing

This API can be tested using:

- Postman
- Thunder Client
- REST Client Extension
- cURL

Import the provided Postman Collection to test all endpoints quickly.

---

##  Sample Products

```json
[
  {
    "id":1,
    "name":"Laptop",
    "price":55000,
    "category":"Electronics"
  },
  {
    "id":2,
    "name":"Shoes",
    "price":3000,
    "category":"Fashion"
  },
  {
    "id":3,
    "name":"Headphones",
    "price":2000,
    "category":"Electronics"
  }
]
```

---

##  Learning Outcomes

- REST API development
- Express.js routing
- MVC architecture
- Handling HTTP methods (GET, POST, DELETE)
- JSON request and response
- API testing with Postman

---

##  Future Enhancements

- Connect with MongoDB
- Implement Update (PUT/PATCH) API
- Add User Authentication (JWT)
- Input Validation
- Error Handling Middleware
- Product Search & Filtering
- Database Persistence

---

##  Author

**Vemagiri Suneetha**

GitHub: https://github.com/Suneetha02-sep

LinkedIn: https://www.linkedin.com/in/suneetha-vemagiri-8018042ab
