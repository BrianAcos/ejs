const nodemailer = require("nodemailer");
const ejs = require("ejs");

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // use SSL
  auth: {
    user: "BrianTest509@outlook.com",
    pass: "brian123",
  },
});

ejs.renderFile(
  __dirname + "/views/template.ejs",
  {
    name: " Brian",
    link: "https://qik.com.do/r/chris-vargas",
    id: "chris-vargas",
    tickets: 3,
    referralCode: "hasoidhasoihdoiu hhasdoi",
    code: 123,
    users: ["Diego Bonilla Victoriano", "Ambar Gonzalez Lora", "Maritza Díaz "],
  },
  function (err, data) {
    if (err) {
      console.log(err);
    } else {
      var mainOptions = {
        from: '"Brian Tester" BrianTest509@outlook.com',
        to: "bacosta@baufest.com", // EMAIL TO SENT
        subject: "Email EJS Testing", // SUBJECT OF THE EMAIL
        html: data,
      };
      console.log("html data ======================>", mainOptions.html);
      transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log("Message sent: " + info.response);
        }
      });
    }
  }
);
