const express = require("express");
const { createAcc } = require("./types");
const { account } = require("./database");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/register", async function (req, res) {
  const creatAcc = req.body;
  const parsedCreatAcc = createAcc.safeParse(creatAcc);
  if (!parsedCreatAcc.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
    return;
  }

  // Mongo works
  await account.create({
    email: creatAcc.email,
    password: creatAcc.password,
  });

  res.json({
    msg: "Account created",
  });
});

// Changed to POST to handle login data in the request body
app.post("/login", async function (req, res) {
  const { email, password } = req.body; // Extract email and password from the request body

  try {
    const user = await account.findOne({ email, password });

    if (user) {
      return res.json({ msg: "User logged in successfully" });
    } else {
      return res.status(401).json({ msg: "Invalid email or password" }); // 401 Unauthorized status code
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ msg: "Server error" }); // 500 Internal Server Error
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
