require("dotenv").config()

const express = require("express")
const path = require("path")
const cors = require("cors")

const port = process.env.PORT

const app = express()

// config JSON and form data response
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Solve CORS
app.use(cors({ credentials: true, origin: "https://wonderful-beach-06bb7f20f.3.azurestaticapps.net" }))

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

// DB connection
require("./config/db.js")

// routes
const router = require("./routes/Router.js")

// Modify the base URL for the routes
app.use("/api", router) // All routes will be prefixed with "/api"

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})