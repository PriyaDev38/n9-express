// hashing
import bcrypt from "bcrypt";
//generate hascode
let Password = "password@123";
let hashedPassword = await bcrypt.hash(Password, 10);
console.log(hashedPassword);
//compare hash password
// let loginPassword = "password@123";
// let isvalidPassword = await bcrypt.compare(loginPassword, hashedPassword);
// console.log(isvalidPassword);
let password = "456";
let hashedpassword = await bcrypt.hash(password, 10);
console.log(hashedpassword);


// bcrypt.hash(password, 10)