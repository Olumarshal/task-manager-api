const express = require("express")
const app = express();
const tasks = require("./routes/task.route");
const Database = require("./db/connect")


// middleware
app.use(express.json())

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App")
})

app.use("/api/v1/tasks", tasks)

const port = 3000

const start = async () => {
  try {
    await Database.connectToDB();
    app.listen(port, console.log(`Server is listening on port ${port}...`))

  } catch (error) {
    console.log(error)
  }
}

start();