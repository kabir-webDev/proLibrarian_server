import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
// import bcrypt from "bcrypt";
import userModel from "./model/new_user.js";
import bookModel from "./model/new_book.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const DB_URL = "mongodb://localhost:27017/pro_librarian";

const PORT = 5000;

// app.post("/user", async (req, res) => {
//   const userName = req.body.name;
//   const password = await bcrypt.hash(req.body.password, 10);
//   try {
//     const response = await userModel.create({
//       userName,
//       password,
//     });
//     setTimeout(function () {
//       res.json({ status: "Success" });
//       console.log("User Login Response: ", response);
//     }, 5000);
//   } catch (error) {
//     res.cookie();
//     res.json({ status: "error" });
//   }
// });

app.post("/add-user", async (req, res) => {
  const user = req.body;
  console.log(user);
  const newUser = new userModel(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.cookie();
    res.json({ status: error.message });
  }
});

// app.post("/delete-user",(req,res)=>{
//   const
// })

app.post("/add-book", async (req, res) => {
  const book = req.body;
  console.log(book);
  const newBook = new bookModel(book);
  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.json({ status: error.message });
  }
});

app.get("/single-user/:id", async (req, res) => {
  try {
    const response = await userModel.findById(req.params.id);
    res.status(201).json(response);
    console.log("Response: ", response);
  } catch (error) {
    res.json({ status: error.message });
  }
});

app.get("/all-user", async (req, res) => {
  try {
    const response = await userModel.find({});
    res.status(201).json(response);
    console.log("Response: ", response);
  } catch (error) {
    res.cookie();
    res.json({ status: error.message });
  }
});

app.get("/all-book", async (req, res) => {
  try {
    const response = await bookModel.find({});
    res.status(201).json(response);
    console.log("Response: ", response);
  } catch (error) {
    res.cookie();
    res.json({ status: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("This is the ultimate backend response");
});

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => {
      console.log("App is Running");
    });
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });
