# Cashew Miner Backend

This is the backend server for the Cashew Miner app.

## 🚀 How it works
- Built with **Node.js + Express**
- Uses **Paystack API** to resolve Nigerian bank accounts
- Deployed on **Render.com**

## 📂 Files
- `server.js` → Main backend server
- `package.json` → Dependencies and start script

## ▶️ How to Deploy (on phone)
1. Create a GitHub repository (e.g., `cashew-miner-backend`).
2. Upload these three files:  
   - `server.js`  
   - `package.json`  
   - `README.md`
3. Go to [Render](https://render.com) → create new Web Service.
4. Connect your GitHub repo.
5. In **Build Command**:  
   ```
   npm install
   ```
6. In **Start Command**:  
   ```
   npm start
   ```
7. Add environment variable:  
   - **Key**: `PAYSTACK_SECRET_KEY`  
   - **Value**: your Paystack Secret Key

Your backend will be live at:  
```
https://your-app-name.onrender.com
```

## 📡 API Endpoint
- Resolve account:
  ```
  GET /resolve-account?account_number=1234567890&bank_code=999
  ```

---

Enjoy 🚀
