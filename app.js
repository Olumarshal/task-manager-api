const express = require("express");
const app = express();

const tasks = require("./Routes/tasks");

const port = 3000;
// Middleware
// app.use(express.json());

// Routes
app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

// app.use("/api/v1/tasks", tasks);


app.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
})
