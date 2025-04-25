import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      console.log("User Authenticated: ", req.user);
      next();
    } catch (err) {
      console.error(err);
      throw new Error("Not Authorized, token failed");
    }
  } else {
    throw new Error("No token Found");
  }
});

const restrictToAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized. Only for administrators.");
  }
};

const restrictToNGOStaff = (staffType) => (req, res, next) => {
  if (
    req.user &&
    req.user.role === "NGO_Staff" &&
    req.user.isNGOStaffWithType(staffType)
  ) {
    next();
  } else {
    res.status(401);
    throw new Error(
      `Not authorized. Only for NGO Staff with ${staffType} role.`
    );
  }
};

const restrictToDonor = (req, res, next) => {
  if (req.user && req.user.role === "Donor") {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized. Only for donors.");
  }
};

export { protect, restrictToAdmin, restrictToDonor, restrictToNGOStaff };
// This is for cookies-based Approach
// const verifyJWt = (req, res, next) => {
//   const token = req.cookies.token;

//   if (!token) {
//     console.log("No token found in cookies");
//     return res.status(401).json({ error: "No token provided in cookies" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (!decoded._id) {
//       return res.status(401).json({ error: "Token missing user ID" });
//     }
//     //else
//     req.user = { id: decoded._id };

//     next();
//   } catch (error) {
//     console.error("JWT ERROR: ", error);
//     if (error.name === "TokenExpiredError") {
//       return res.status(401).json({ error: "Token has expired" });
//     } else if (error.name === "JsonWebTokenError") {
//       return res.status(401).json({ error: "Invalid Token" });
//     }
//     return res.status(500).json({ error: "Token verification failed" });
//   }
// };
