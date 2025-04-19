const express = require('express')
const cors = require("cors")

const app = express()
app.use(cors());

module.exports = () => {
    const port = process.env.APP_PORT;
    app.listen(port , () => {
        console.log(`app is running on port ${port}`);
    })
}