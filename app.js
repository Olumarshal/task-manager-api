const express = require("express")
const app = express();
const tasks = require("./routes/task.route");
const Database = require("./db/connect")
const notFound = require('./middleware/not_found')
const errorHandler = require('./middleware/error_handler')

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes

app.use("/api/v1/tasks", tasks)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await Database.connectToDB();
    app.listen(port, console.log(`Server is listening on port ${port}...`))

  } catch (error) {
    console.log(error)
  }
}

start();