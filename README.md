# CCLNE Band — Repertorio (Firebase)

This is a static site hosted on Firebase Hosting with Firestore used as storage.

## Setup

### 1) Create Firebase Project
- Go to Firebase Console
- Create project
- Enable Firestore (test mode is fine to start)

### 2) Add Web App
- Project Settings → Your apps → Add app (Web)
- Copy the config object

### 3) Paste config
Open `public/firebase.js` and replace the `firebaseConfig` object values.

### 4) Install Firebase CLI
```bash
npm install -g firebase-tools
firebase login
