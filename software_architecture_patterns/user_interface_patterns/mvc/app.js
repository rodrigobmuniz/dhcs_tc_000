const express = require('express')
const routes = require("./src/routes/routes")
const app = express()
const port = 3000

routes(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})