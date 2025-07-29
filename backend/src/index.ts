import express from "express"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 8000
const app = express()

app.get("/", (req,res) => {

    return res.send("Hello there")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})