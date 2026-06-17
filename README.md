# 🧴 GlowMate — AI-Powered Skincare Analysis Web Application

> **Type:** Full-Stack Serverless SPA &nbsp;|&nbsp; **Infrastructure cost:** $0 (Firebase free tier + Groq API) &nbsp;|&nbsp; **Status:** Completed 2026  
> ⚠️ Source code is private to protect proprietary API integrations and custom algorithm logic.
> 
## 🌐 Live Demo
👉 [Try GlowMate Live](https://glowmate-ai-skincare.vercel.app)

**Login with Google** → take a photo of a skincare product → get instant analysis!
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
> _App walkthrough screenshots_<img width="950" height="397" alt="image" src="https://github.com/user-attachments/assets/9061d9a3-3f05-46b0-a278-59b229ca4a75" />
<img width="944" height="407" alt="image" src="https://github.com/user-attachments/assets/5ea34150-c56f-487f-a8b7-97cf449e24c8" />
<img width="943" height="412" alt="image" src="https://github.com/user-attachments/assets/d3dc0698-0f41-4378-b2a1-e08f5b99b330" />
<img width="734" height="402" alt="image" src="https://github.com/user-attachments/assets/2ba7c8f6-9f5c-4be7-aeae-db862fc38ba1" />
<img width="736" height="407" alt="image" src="https://github.com/user-attachments/assets/6093db02-f7b2-458e-aac3-d7a0a0e5bccc" />
<img width="932" height="394" alt="image" src="https://github.com/user-attachments/assets/c0e54a29-8000-40ae-b779-5f6a46a53c39" />
<img width="632" height="409" alt="image" src="https://github.com/user-attachments/assets/279dc415-243e-4d87-bbb2-26e0c639a5cb" />
<img width="638" height="407" alt="image" src="https://github.com/user-attachments/assets/ff37c4b2-2340-43e9-8eca-f3c427f7af14" />
<img width="635" height="406" alt="image" src="https://github.com/user-attachments/assets/6d512999-0b12-47d9-b077-0535c7107e6b" />
<img width="581" height="410" alt="image" src="https://github.com/user-attachments/assets/ec92bca1-7641-4cfb-b16e-a795193b73bf" />
<img width="938" height="409" alt="image" src="https://github.com/user-attachments/assets/ed54046f-8271-4102-8428-1988c0540886" />



---

## 🧠 Technical Highlights

- Engineered `flattenKey()` normalisation function for consistent ingredient lookup regardless of formatting differences
- Built a 4-stage fuzzy matching pipeline to handle real-world OCR errors from product photo scans
- Achieved real-time personalisation with zero latency by pre-loading user profiles from Firestore at session start
- Chose Groq over OpenAI for 10–20× faster inference at no cost during development
