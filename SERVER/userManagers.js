const fs = require("fs");
const FILE_PATH = "./users.json";

function addUser(newUser, callback) {
  fs.readFile(FILE_PATH, (err, data) => {
    if (err) {
      console.log("Error reading file, creating a new one...");
      data = "[]"; 
    }

    const users = JSON.parse(data);
    users.push(newUser);

    fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.log("Error writing to file");
        return callback(err);
      }
      callback(null);
    });
  });
}
