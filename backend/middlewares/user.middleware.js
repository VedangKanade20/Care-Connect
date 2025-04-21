import jwt from "jsonwebtoken";

const verifyJWt = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    console.log("No token found in cookies");
    return res.status(401).json({ error: "No token provided in cookies" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded._id) {
      return res.status(401).json({ error: "Token missing user ID" });
    }
    //else
    req.user = { id: decoded._id };

    next();
  } catch (error) {
    console.error("JWT ERROR: ", error);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token has expired" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid Token" });
    }
    return res.status(500).json({ error: "Token verification failed" });
  }
};
