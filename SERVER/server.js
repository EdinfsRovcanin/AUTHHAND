const express = require("express");
const fs = require("fs");
const cors = require("cors");
const {addFavoriteSchema} = require("./schemas/addFavoritesSchema")
const {userSchema} = require("./schemas/userSchema")
 

const app = express();

app.use(express.json());
app.use(cors());

const FILE_PATH = "favorites.json";




app.post("/add-favorite", (req, res) => {
  
  const { error, value } = addFavoriteSchema.validate(req.body); 
  if (error) {
    return res.status(400).json(error.details[0].message); ''
  }

  
  const { user: userId, imageUrl } = value; 
  fs.readFile(FILE_PATH, (err, data) => {
    let favorites = [];
    if (!err && data.length) {
      try {
        favorites = JSON.parse(data);
      } catch (parseErr) {
        console.error("Error parsing favorites data:", parseErr);
        return res.status(500).send("Failed to parse favorites data.");
      }
    }

    let userEntry = favorites.find((entry) => entry.user === userId);
    if (userEntry) {
      if (!userEntry.favoriteImages.some((img) => img.url === imageUrl)) {
        userEntry.favoriteImages.push({ url: imageUrl });
      }
    } else {
      favorites.push({ user: userId, favoriteImages: [{ url: imageUrl }] });
    }

    fs.writeFile(FILE_PATH, JSON.stringify(favorites, null, 2), (writeErr) => {
      if (writeErr) {
        console.error("Error writing to favorites file:", writeErr);
        return res.status(500).send("Failed to save favorites.");
      }
      res.send("Favorite image added successfully.");
    });
  });
});



app.get("/favorites", (req, res) => {
  
  const { error, value } = userSchema.validate({ userId: req.query.userId }); 
  if (error) {
    return res.status(400).send(error.details[0].message); 
  }

  const userId = value.userId; 

  fs.readFile(FILE_PATH, (err, data) => {
    if (err) {
      console.error("Error reading the favorites file:", err);
      return res.status(500).send("Unable to read favorites");
    }

    const favorites = JSON.parse(data);
    // Filtrera favoriter baserat på userId
    const userFavorites = favorites
      .filter((fav) => fav.user === userId)
      .map((fav) => fav.favoriteImages)
      .flat();
    res.json(userFavorites);
  });
});

app.listen(3000, () => console.log("Server is up and running on port 3000"));
