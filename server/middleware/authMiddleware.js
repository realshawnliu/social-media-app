import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorisation");
    if (!token) {
      return res.status(403).send("Access Denied");
    } else {
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
