const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

// API to resolve bank account
app.get("/resolve-account", async (req, res) => {
  const { account_number, bank_code } = req.query;
  try {
    const response = await axios.get("https://api.paystack.co/bank/resolve", {
      params: { account_number, bank_code },
      headers: { Authorization: "Bearer " + process.env.PAYSTACK_SECRET_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(400).json({ status: false, error: "Could not resolve account" });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
