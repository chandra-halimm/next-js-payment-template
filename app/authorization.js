const jwt = require("jsonwebtoken");
const { NextResponse } = require("next/server");
require("dotenv").config(); // Load environment variables

const authMiddleware = (handler) => async (req, res) => {
  // ambil token dari header
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.TRANSACTION_TOKEN);
    req.order_id = decoded.order_id;
    // Call the actual API route handler
    return await handler(req, res);
  } catch (err) {
    console.error("Token verification failed", err);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
};

module.exports = authMiddleware;
