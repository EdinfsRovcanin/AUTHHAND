const express = require("express");
const fs = require("fs");
const cors = require("cors")
const app = express();

app.use(express.json()); // Tolkar JSON-body
app.use(cors())
const FILE_PATH = "favorites.json";

app.post("/add-favorite", (req, res) => {
  const { imageUrl } = req.body; // Extrahera imageUrl från request body

  // Läser och uppdaterar favoritbilderna
  fs.readFile(FILE_PATH, (err, data) => {
    let favorites = [];
    if (!err) {
      favorites = JSON.parse(data);
    }

    favorites.push({ imageUrl });

    fs.writeFile(FILE_PATH, JSON.stringify(favorites, null, 2), () => {
      res.send("Favorite image added successfully");
    });
  });
});

app.listen(3000, () => console.log("Server is up and running on port 3000"));
