//Generate Token
import jwt from "jsonwebtoken";
let infoObj = {
  id: "1234",
};
let secretKey = "n9solution";
//expiry info must be in same format
let expiryDate = {
  expiresIn: "1d",
};
//generate Token
let token = jwt.sign(infoObj, secretKey, expiryDate);
console.log(token);
//verify
let token1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQiLCJpYXQiOjE3MjA2ODM2OTgsImV4cCI6MTcyMDc3MDA5OH0.-3MI1RgQwtF7Ra1vCzpcJnCFssgkJdH9c_6WgRag2Hg";
try {
  let infoObj = jwt.verify(token1, "n9solution");
  console.log(infoObj);
} catch (error) {
  console.log(error.message);
}
