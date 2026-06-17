# 🧴 GlowMate — AI-Powered Skincare Analysis Web Application

> **Type:** Full-Stack Serverless SPA &nbsp;|&nbsp; **Infrastructure cost:** $0 (Firebase free tier + Groq API) &nbsp;|&nbsp; **Status:** Completed 2026  
> ⚠️ Source code is private to protect proprietary API integrations and custom algorithm logic.

---

## 🌟 What It Does

GlowMate lets users photograph a skincare product and instantly get a **personalised compatibility score (0–100)**
based on their unique skin type, concerns, allergies, and pregnancy status — not generic ratings.

---

## ✨ Key Features

- **Computer Vision Pipeline** — Meta Llama 4 Scout (Vision) reads and parses ingredient lists directly from product photos. No manual typing.
- **Custom Ingredient Matching Engine** — 4-strategy lookup pipeline: key normalisation, 80+ INCI synonym mappings, partial string matching, and Levenshtein fuzzy matching to handle OCR errors and inconsistent naming.
- **Real-time Personalisation** — Reads each user's skin profile from Firestore and generates a dynamic compatibility score per user per product.
- **AI Chatbot** — Context-aware skincare assistant via Groq's LPU inference API (10–20× faster than OpenAI), using each user's stored profile — no repetitive onboarding.
- **Firebase Auth + Firestore** — Secure login, scan history, and personal skin diary.
- **Zero Backend Infrastructure** — Fully serverless on Firebase free tier.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| AI Vision | Meta Llama 4 Scout via Groq API |
| AI Chat | Meta Llama 3.1 via Groq API |
| Auth & Database | Firebase Authentication + Firestore |
| Architecture | Serverless SPA |
| Version Control | Git (branch-based strategy) |

---

## 📸 Screenshots

<!-- Add screenshots here — drag and drop images into this editor on GitHub -->
> _App walkthrough screenshots coming soon_

---

## 🧠 Technical Highlights

- Engineered `flattenKey()` normalisation function for consistent ingredient lookup regardless of formatting differences
- Built a 4-stage fuzzy matching pipeline to handle real-world OCR errors from product photo scans
- Achieved real-time personalisation with zero latency by pre-loading user profiles from Firestore at session start
- Chose Groq over OpenAI for 10–20× faster inference at no cost during development