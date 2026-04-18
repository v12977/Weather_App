
# TEST CHANGE 🚀
# 🌦️ Weather App (React + Vite)

A responsive weather application built using **React (Vite)** that allows users to search for any city and view real-time weather information like temperature, humidity, and weather conditions.

---

## 🚀 Live Demo

👉 https://weather-app-rosy-eta-28.vercel.app/

---

## 📌 Features

* 🔍 Search weather by city name
* 🌡️ Displays temperature, min/max temperature, and feels like
* 💧 Shows humidity and weather condition
* 🖼️ Dynamic images based on weather (hot, cold, rainy)
* ⚠️ Error handling for invalid city names
* ⚡ Fast performance using Vite

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **UI Library:** Material UI (MUI)
* **API:** OpenWeatherMap API
* **Deployment:** Vercel

---

## 📂 Project Structure

```
src/
│── App.jsx
│── WeatherApp.jsx
│── SearchBox.jsx
│── InfoBox.jsx
│── App.css
│── SearchBox.css
│── InfoBox.css
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR_USERNAME/weather-app.git
cd weather-app
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run the app

```
npm run dev
```

---

## 🔑 API Configuration

This project uses OpenWeatherMap API.

Create a `.env` file:

```
VITE_API_KEY=your_api_key_here
```

Then update:

```js
const API_KEY = import.meta.env.VITE_API_KEY;
```

---

## 🚀 Deployment

Deployed on **Vercel**

* Build Command: `npm run build`
* Output Directory: `dist`

---

## 🧠 Learning Highlights

* API integration using async/await
* State management using React Hooks
* Component-based architecture
* Error handling in UI
* Using Material UI components

---

## 👨‍💻 Author

**Vikash Kumar**

---

## 📌 Future Improvements

* Add loading spinner
* Add weather icons
* Add 5-day forecast
* Improve UI/UX design

---
