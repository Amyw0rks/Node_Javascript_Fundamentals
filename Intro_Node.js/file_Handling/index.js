// Common Asychronous File Operations
// Reading a file
const fs = require("fs")

fs.readFile("example.txt", "utf8", (err, data) => {
    if (err){
        console.log("Error reading file:", err);
        return;
    }else{
        console.log("File Content:", data)
    }
})

//Writing a file
fs.writeFile("example.txt", "Hello welocme to TechCrush as a Backend developer using Node.js", (err) => {
    if (err){
        console.log("Error writing file:", err);
        return;
    }
    console.log("content written successfully in example.txt file")
})

//Exercise  to do on my own
// 1. Appending a file
// 2. Deleting a file
// 3. Creating a folder
// 4. Reading all files in a Directory
// 5. Ensure to study the syntax and concept on Asyn-Await
