
// require('dotenv').config()

// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");


// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));


// const contactEmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASSWORD,
//     },
//   });
  
//   contactEmail.verify((error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Ready to Send");
//     }
//   });

//   router.post("/contact", (req, res) => {
//     const name = req.body.name;

//     const email = req.body.email;
//     const message = req.body.message;
//     const mail = {
//       from: name,
//       to: "agdevelop3r@gmail.com",
//       subject: "Contact Form Submission",
//       html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Message: ${message}</p>
//              <img src="https://pngimg.com/uploads/thank_you/thank_you_PNG86.png" />`,
        

//     };
//     contactEmail.sendMail(mail, (error) => {
//       if (error) {
//         res.json({ status: "ERROR" });
//       } else {
//         res.json({ status: "Message Sent" });
//       }
//     });
//   });