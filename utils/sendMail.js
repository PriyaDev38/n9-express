import nodemailer from "nodemailer";

//The main thing in this file is transporeter info and mailInfo
let transporterInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    //User and pass must be genuine
    user: "oedzpriya1@gmail.com",
    pass: "gjwe uxfo ifex frqf",
  },
};
export const sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo);
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error has occured", error.message);
  }
};
