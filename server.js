const express = require("express");

const app = express();

app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Motu" },
    { id: 2, name: "Patlu" },
    { id: 3, name: "John" },
    { id: 4, name: "Tom" }
  ];
  res.json(users);
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
