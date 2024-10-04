import express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

// get express application
const app = express();
// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// applying the routes to the basepath '/api'
app.use("/api", routes);

// Error handling middleware (optional)
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send({
    message: "Internal Server Error",
    error: err.message || "Unknown error",
  });
});

app.get("/", (req, res) => {
  const user = {
    firstName: "ภีรภัทร์",
    lastName: "ขอดแก้ว",
    id: "6604101368"
  };
  res.json(user);
});

app.put("/books", (req, res) => {
  const { nickname } = req.body;

  // Logic to update a book would go here
  res.json({
    message: "User updated to nickname",
    nickname
  });
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;

  // Logic to delete a book by ID would go here
  res.json({
    message: `Book with id ${id} has been deleted`
  });
});


export default app;