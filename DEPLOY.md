# 🚀 Deploy to Render — Step by Step

---

## Step 1 — Create MongoDB Atlas Database (Free)

1. Go to **https://cloud.mongodb.com** → Sign up free
2. Click **Build a Database** → choose **M0 Free**
3. Choose any cloud region → Click **Create**
4. **Database Access** → Add New User:
   - Username: `myapp`
   - Password: click **Autogenerate** → copy it
   - Role: **Read and write to any database** → Add User
5. **Network Access** → Add IP Address → click **Allow Access from Anywhere** (`0.0.0.0/0`) → Confirm
6. Go back to **Database** → Click **Connect** → **Drivers**
7. Copy the connection string. It looks like:
   ```
   mongodb+srv://myapp:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
8. Replace `<password>` with your actual password and add `/mywebsite` before the `?`:
   ```
   mongodb+srv://myapp:yourpassword@cluster0.xxxxx.mongodb.net/mywebsite?retryWrites=true&w=majority
   ```
   **Save this — you'll need it in Step 3.**

---

## Step 2 — Push to GitHub

1. Go to **https://github.com** → New repository → name it `my-cooking-website` → Create
2. Open PowerShell in your `ProjectFixed` folder:
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-cooking-website.git
git push -u origin main
```
> ⚠️ `.env` is in `.gitignore` so it will NOT be pushed — your secrets stay safe.

---

## Step 3 — Deploy on Render

1. Go to **https://render.com** → Sign in with GitHub
2. Click **New +** → **Web Service**
3. Connect your `my-cooking-website` GitHub repo
4. Render auto-detects Node.js. Confirm:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Scroll down → **Environment Variables** → Add these one by one:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `10000` |
| `MONGO_URI` | your Atlas connection string from Step 1 |
| `JWT_SECRET` | any random text like `mySecretKey_abc123XYZ_!@#` |
| `JWT_EXPIRE` | `7d` |
| `CLIENT_URL` | leave blank for now |

6. Click **Create Web Service**
7. Wait 2–3 minutes for build to finish
8. Your site is live at: `https://my-cooking-website.onrender.com`

---

## Step 4 — Set CLIENT_URL (fixes CORS)

1. Copy your Render URL (e.g. `https://my-cooking-website.onrender.com`)
2. In Render → your service → **Environment** tab
3. Add/update: `CLIENT_URL` = `https://my-cooking-website.onrender.com`
4. Click **Save Changes** → Render redeploys automatically

---

## ✅ Your pages on Render

| Page | URL |
|------|-----|
| Login | `https://your-app.onrender.com/` |
| Sign Up | `https://your-app.onrender.com/Login.html` |
| Dashboard | `https://your-app.onrender.com/Dash.html` |
| Health Check | `https://your-app.onrender.com/api/health` |

---

## ⚠️ Troubleshooting

| Problem | Fix |
|---------|-----|
| App crashes on start | Check Render logs → usually wrong `MONGO_URI` or missing env var |
| MongoDB connection error | Check Atlas Network Access → must allow `0.0.0.0/0` |
| Login/signup not working | Check browser console for CORS errors → set `CLIENT_URL` in Render |
| Site loads but login fails | Make sure `MONGO_URI` points to Atlas, not `localhost` |
| Free tier slow first load | Normal — Render free tier sleeps after 15 min. First request takes ~30s |
