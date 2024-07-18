import jwt from "jsonwebtoken";
import { secretKey } from "../../utils/constant.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    // Get token
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    // Verify Token
    let user = await jwt.verify(token, secretKey);
    req._id = user._id;
    console.log(user);
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Token not valid",
    });
  }
};
