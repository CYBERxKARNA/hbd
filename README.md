# 🎂 Sneha's 21st Birthday Website ✨

A heartfelt, interactive, single-page birthday website created with love for **Sneha** on her 21st birthday (5 October 2026).

Built purely with **HTML5, CSS3, and Vanilla JavaScript** — no build tools, no npm, and no frameworks required! You can double-click `index.html` to open it in any browser right away.

---

## 📁 Project Structure

```text
sneha BDAY/
├── index.html              # Main HTML markup and structure
├── style.css               # Pastel aesthetic, glassmorphism, animations & mobile responsive styles
├── script.js               # Interactive logic, friendship timer, photo lightbox, flip cards, cake & music
├── README.md               # Guide to customize and deploy
└── assets/
    ├── music.mp3           # Optional background music file (replace with Sneha's favorite song)
    └── photos/             # Photo gallery folder (photo1.jpg ... photo12.jpg)
        ├── photo1.jpg
        ├── photo2.jpg
        └── ...
```

---

## 🎨 How to Customize

All primary settings are conveniently located right at the top of **[`script.js`](file:///c:/Users/Kartik/OneDrive/Desktop/sneha%20BDAY/script.js)** and inside **[`index.html`](file:///c:/Users/Kartik/OneDrive/Desktop/sneha%20BDAY/index.html)**.

### 1. Preview Mode vs. Birthday Unlock Screen
In **[`script.js`](file:///c:/Users/Kartik/OneDrive/Desktop/sneha%20BDAY/script.js)**:
```javascript
const UNLOCK_FOR_PREVIEW = true; // Set to 'false' to lock site with a countdown until 5 Oct 2026!
```
- When `UNLOCK_FOR_PREVIEW = true`, the full website is instantly accessible for testing and previewing.
- When `UNLOCK_FOR_PREVIEW = false`, anyone opening before 5 October 2026 sees an elegant countdown timer lock screen with a preview bypass button.

### 2. Updating Photos & Captions
Photos are loaded from `assets/photos/`. We have already copied 12 of your best real photos into `assets/photos/photo1.jpg` through `photo12.jpg`.

To change any image or edit its caption, open **[`script.js`](file:///c:/Users/Kartik/OneDrive/Desktop/sneha%20BDAY/script.js)** and modify the `PHOTO_GALLERY` array:
```javascript
const PHOTO_GALLERY = [
  {
    src: 'assets/photos/photo1.jpg',
    caption: 'Happiest Birthday Sneha! Celebrating 21 incredible years ✨🎂',
    alt: 'Sneha birthday celebration'
  },
  // Add, reorder, or edit captions as you like!
];
```

### 3. Editing the Birthday Letter
Open **[`index.html`](file:///c:/Users/Kartik/OneDrive/Desktop/sneha%20BDAY/index.html)** and locate `#letter-body-content`. You can edit or paste your letter directly inside the `<p class="letter-paragraph">` tags:
```html
<div class="letter-body" id="letter-body-content">
  <p class="letter-paragraph">
    [PASTE YOUR BIRTHDAY LETTER HERE]
  </p>
</div>
```
The sign-off is already styled as:
```html
<span class="sign-name">– Kartik</span>
```

### 4. Customizing the Message Flip Cards
In **[`script.js`](file:///c:/Users/Kartik/OneDrive/Desktop/sneha%20BDAY/script.js)**, you can customize the 6 interactive cards under `MESSAGE_CARDS`:
```javascript
const MESSAGE_CARDS = [
  {
    emoji: '🌧️',
    title: "Open when you're sad",
    theme: 'theme-rose',
    backTitle: 'A Gentle Reminder',
    message: "..."
  },
  // Customize all 6 cards with your personal inside jokes and messages
];
```

### 5. Friendship Start Date
The friendship counter is calculated using exact calendar math starting from **23 November 2024 (00:00 local time)**:
```javascript
const FRIENDSHIP_START_DATE = new Date(2024, 10, 23, 0, 0, 0); // Month is 0-indexed (10 = November)
```

### 6. Adding Background Music
1. Add an audio file named `music.mp3` into the `assets/` directory.
2. Clicking the floating **"Play Music"** button in the top-right corner will play it!
3. *Bonus:* If no MP3 is found or if it fails to load, the site has a built-in magical **Web Audio music box** that plays a dreamy acoustic melody automatically so there's never silent disappointment!

---

## 🚀 How to Deploy For Free

### Option A: GitHub Pages (Recommended & 100% Free)
1. Create a free account on [GitHub.com](https://github.com) if you don't already have one.
2. Create a new public repository (e.g. `sneha-21st-birthday`).
3. Upload all the files (`index.html`, `style.css`, `script.js`, and the `assets/` folder).
4. Go to **Settings** > **Pages** in your repository.
5. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
6. GitHub will generate a link in ~1 minute (e.g., `https://yourusername.github.io/sneha-21st-birthday/`). Send that link to Sneha!

### Option B: Netlify Drop (Fastest, No Git Required)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this entire project folder into the browser window.
3. In 10 seconds, Netlify will give you a live HTTPS link!
4. You can even customize the URL name in Site Settings (e.g. `sneha-turns-21.netlify.app`).

---

## ✨ Features Included

- 🌸 **Dreamy Aesthetic**: Soft pastel gradients (blush pink, lavender, peach, gold accents) with glassmorphism cards.
- 🎈 **Floating Background Particles**: Drifting balloons, hearts, and sparkles.
- 💌 **3D Interactive Envelope**: Flap folds open and reveals the birthday letter.
- 💛 **Live Calendar Friendship Counter**: Updates every second with accurate calendar years, months, days, hours, minutes, and seconds + total days tally.
- 📸 **Photo Gallery with Lightbox**: Hover zoom, caption display, next/previous buttons, and mobile swipe gestures.
- 🎴 **3D Flip Message Cards**: Tap-to-flip cards with personalized reminders.
- 🕯️ **Interactive Birthday Cake**: Clickable candles that blow out with smoke animation, triggering a grand confetti explosion and vibrant fireworks display!
- 🎵 **Music Player**: Floating player with animated sound wave bars and built-in synthesizer fallback.
- ✨ **Cursor Sparkle Trail**: Delicate sparkle trail following the cursor on desktop.
- 📱 **Mobile-First & Accessible**: Fully responsive, touch-friendly, and respects `prefers-reduced-motion`.
