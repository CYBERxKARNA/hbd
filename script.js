/**
 * ===================================================================
 * SNEHA'S 21ST BIRTHDAY CELEBRATION SCRIPT
 * Easily customizable settings, interactive modules, and magic effects
 * ===================================================================
 */

// ===================================================================
// ⚙️ 1. USER CONFIGURATION (EDIT THESE EASILY!)
// ===================================================================

/**
 * PREVIEW MODE TOGGLE:
 * - Set to TRUE to view the full website immediately (default for preview).
 * - Set to FALSE if you want the website to lock with a countdown until Sneha's birthday on 5 Oct 2026.
 */
const UNLOCK_FOR_PREVIEW = true;

/**
 * Sneha's Birthday Date (5 October 2026, 00:00 Local Time)
 */
const BIRTHDAY_DATE = new Date('2026-10-05T00:00:00');

/**
 * Friendship Start Date: 23 November 2024 (00:00 Local Time)
 * (Note: in JavaScript months are 0-indexed, so 10 = November)
 */
const FRIENDSHIP_START_DATE = new Date(2024, 10, 23, 0, 0, 0);

/**
 * All Media Gallery (ALL 60 Photos and Videos in their Original Sizes)
 */
const ALL_MEDIA_GALLERY = [
  {
    "src": "1st year.jpg",
    "type": "image",
    "caption": "1st Year College Memories \ud83c\udf38"
  },
  {
    "src": "BOMBASTIC SIDEYE.jpeg",
    "type": "image",
    "caption": "Bombastic Side Eye \ud83d\udc40"
  },
  {
    "src": "CUTIEE.mp4",
    "type": "video",
    "caption": "Absolute Cutieee \ud83d\udc96"
  },
  {
    "src": "Doraemon & Nobita.jpeg",
    "type": "image",
    "caption": "Doraemon & Nobita Duo \ud83d\udc99\ud83d\udc9b"
  },
  {
    "src": "Happiest Birthdayy Snehaaaa!!!!.png",
    "type": "image",
    "caption": "Happiest Birthday Sneha! \ud83c\udf82"
  },
  {
    "src": "a lil bit educated.jpeg",
    "type": "image",
    "caption": "A Lil Bit Educated \ud83c\udf93"
  },
  {
    "src": "alienshitt.mp4",
    "type": "video",
    "caption": "Alien Shenanigans \ud83d\udc7d"
  },
  {
    "src": "aunt typa vlogss.mp4",
    "type": "video",
    "caption": "Aunt Typa Vlogs \ud83d\udc85"
  },
  {
    "src": "badhai ho aapko bhi.jpg",
    "type": "image",
    "caption": "Badhai Ho Aapko Bhi \ud83c\udf89"
  },
  {
    "src": "badhai ho.jpg",
    "type": "image",
    "caption": "Badhai Ho! \u2728"
  },
  {
    "src": "blwehh!!.jpg",
    "type": "image",
    "caption": "Blehhhh! Unhinged moments \ud83d\ude1c"
  },
  {
    "src": "cheyotic-five.jpg",
    "type": "image",
    "caption": "Chaotic Five Squad \ud83d\udcab"
  },
  {
    "src": "chopped sneha.jpg",
    "type": "image",
    "caption": "Chopped Sneha \ud83d\ude02"
  },
  {
    "src": "dancing dancing.jpg",
    "type": "image",
    "caption": "Dancing Dancing Vibes \ud83d\udc83"
  },
  {
    "src": "do anmol ratn.mp4",
    "type": "video",
    "caption": "Do Anmol Ratn \ud83d\udc8e"
  },
  {
    "src": "doraemonnnnnobita.jpg",
    "type": "image",
    "caption": "Doraemon & Nobita Forever \u2728"
  },
  {
    "src": "down angle.jpg",
    "type": "image",
    "caption": "Down Angle Clicks \ud83d\udcf8"
  },
  {
    "src": "dunno what she is praying for!!.jpg",
    "type": "image",
    "caption": "Dunno What She Is Praying For \ud83d\ude4f"
  },
  {
    "src": "eyyooo.jpg",
    "type": "image",
    "caption": "Eyyooo \ud83d\ude0e"
  },
  {
    "src": "fits-us.jpg",
    "type": "image",
    "caption": "Fits Us Perfectly \ud83d\udc6f\u200d\u2640\ufe0f"
  },
  {
    "src": "fivey agen.jpg",
    "type": "image",
    "caption": "Fivey Again \ud83c\udf1f"
  },
  {
    "src": "fiveyy.jpg",
    "type": "image",
    "caption": "The Five Vibe \ud83e\udd73"
  },
  {
    "src": "furrrrr.mp4",
    "type": "video",
    "caption": "Furrrrr Moments \ud83d\udc3e"
  },
  {
    "src": "garba x sneha.jpg",
    "type": "image",
    "caption": "Garba x Sneha Nights \ud83e\ude94"
  },
  {
    "src": "hehebehe.mp4",
    "type": "video",
    "caption": "Hehebehe Giggles \ud83e\udd2d"
  },
  {
    "src": "in front of a toilet.jpg",
    "type": "image",
    "caption": "Bathroom Aesthetic \ud83d\udebd\u2728"
  },
  {
    "src": "lebanese original.jpg",
    "type": "image",
    "caption": "Lebanese Original \ud83c\udf38"
  },
  {
    "src": "lebanese shit.jpg",
    "type": "image",
    "caption": "Lebanese Energy \ud83d\udc96"
  },
  {
    "src": "mataa aa gyii.jpg",
    "type": "image",
    "caption": "Mataa Aa Gyii \ud83d\ude06"
  },
  {
    "src": "mid-pic.jpg",
    "type": "image",
    "caption": "Mid-Pic Candid \ud83d\udcf8"
  },
  {
    "src": "mwehehehe.jpg",
    "type": "image",
    "caption": "Mwehehehe Evil Grin \ud83d\ude08"
  },
  {
    "src": "ofc the black dress girlie.jpg",
    "type": "image",
    "caption": "Of Course the Black Dress Girlie \ud83d\udda4\u2728"
  },
  {
    "src": "ommfoo.jpg",
    "type": "image",
    "caption": "Ommfoo Vibes \ud83d\udd25"
  },
  {
    "src": "pigeon collector.mp4",
    "type": "video",
    "caption": "Pigeon Collector \ud83d\udd4a\ufe0f"
  },
  {
    "src": "reel cover.jpg",
    "type": "image",
    "caption": "Reel Cover Pose \ud83c\udfac"
  },
  {
    "src": "rndm collage.webp",
    "type": "image",
    "caption": "Random Memories Collage \ud83c\udfa8"
  },
  {
    "src": "seni juni agen.jpg",
    "type": "image",
    "caption": "Seni Juni Again \ud83e\udd1d"
  },
  {
    "src": "seni-juni clicks.jpg",
    "type": "image",
    "caption": "Seni-Juni Clicks \ud83d\udcf7"
  },
  {
    "src": "she's so sus.jpg",
    "type": "image",
    "caption": "She's So Sus \ud83e\uddd0"
  },
  {
    "src": "she-rabbit.jpg",
    "type": "image",
    "caption": "She Rabbit \ud83d\udc30"
  },
  {
    "src": "squad pic.jpg",
    "type": "image",
    "caption": "Squad Goals \ud83e\udd42"
  },
  {
    "src": "squad vieo.mp4",
    "type": "video",
    "caption": "Squad Video Reel \ud83c\udfa5"
  },
  {
    "src": "stop doing this lebanese shitt!! plss.mp4",
    "type": "video",
    "caption": "Stop This Pleaseee \ud83d\ude02"
  },
  {
    "src": "sun-dae on sunday.jpg",
    "type": "image",
    "caption": "Sun-dae on Sunday \ud83c\udf68"
  },
  {
    "src": "thwipp!!.jpg",
    "type": "image",
    "caption": "Thwipp! \ud83d\udd77\ufe0f"
  },
  {
    "src": "top angle.jpg",
    "type": "image",
    "caption": "Top Angle Masterpiece \ud83d\udcd0"
  },
  {
    "src": "total 6 pairs of ears.jpg",
    "type": "image",
    "caption": "Total 6 Pairs of Ears \ud83d\udc42"
  },
  {
    "src": "trio-agen.jpg",
    "type": "image",
    "caption": "Trio Again \ud83c\udf08"
  },
  {
    "src": "trio-tic.mp4",
    "type": "video",
    "caption": "Trio Chaos Reel \ud83c\udf7f"
  },
  {
    "src": "trio-us.jpg",
    "type": "image",
    "caption": "Trio Us \ud83c\udf3b"
  },
  {
    "src": "uhmm aestheticc.jpg",
    "type": "image",
    "caption": "Uhmm Aesthetic \ud83c\udf3f"
  },
  {
    "src": "unc typa vlogss.mp4",
    "type": "video",
    "caption": "Unc Typa Vlogs \ud83d\udcf9"
  },
  {
    "src": "v.jpg",
    "type": "image",
    "caption": "Peace Sign V \u270c\ufe0f"
  },
  {
    "src": "vid1.mp4",
    "type": "video",
    "caption": "Memories in Motion 1 \ud83c\udf9e\ufe0f"
  },
  {
    "src": "vid2.mp4",
    "type": "video",
    "caption": "Memories in Motion 2 \ud83c\udf9e\ufe0f"
  },
  {
    "src": "vid3.mp4",
    "type": "video",
    "caption": "Memories in Motion 3 \ud83c\udf9e\ufe0f"
  },
  {
    "src": "vid4.mp4",
    "type": "video",
    "caption": "Memories in Motion 4 \ud83c\udf9e\ufe0f"
  },
  {
    "src": "wierdo.jpg",
    "type": "image",
    "caption": "Our Favorite Weirdo \ud83e\udd2a"
  },
  {
    "src": "zabardast khatta.jpg",
    "type": "image",
    "caption": "Zabardast Khatta \ud83c\udf4b"
  }
];

/**
 * Message Cards (Flip Cards):
 * Front: emoji & title | Back: heartfelt personal message
 */
const MESSAGE_CARDS = [
  {
    emoji: '🌧️',
    title: "Open when you are sad",
    theme: 'theme-rose',
    backTitle: 'A Gentle Reminder',
    message: "Awww koi pareshaan hai kyaa??\n\nkoi baat nhi you'll always have tiktik and yaya by your side..."
  },
  {
    emoji: '🌟',
    title: "My wish for you",
    theme: 'theme-gold',
    backTitle: 'To Your 21st Year',
    message: "I wish you find all the things, all the love, all the people you long for...\n\ni wish good luck and a very prosperous life for you...\n\nfor it might be the last birthday we'd be celebrating together."
  },
  {
    emoji: '😂',
    title: "Open when you need a Laugh",
    theme: 'theme-peach',
    backTitle: 'Remember This?',
    message: "If you remember... I have always made you laugh...\n\nso if you want to laugh or giggle.. YOU HAVE MY NUMBER DUDE!!!"
  },
  {
    emoji: '🤞',
    title: "A promise to you",
    theme: 'theme-sky',
    backTitle: 'Friendship Promise',
    message: "I will never ever stop annoying you...\n\nno matter what happens.. You cannot do anything about that.\nalso I will never ever leave you behind.. mwehehehe...\nyou are so stuck with me in this life. blehh!!"
  }
];

// ===================================================================
// 🌅 2. WEBSITE BACKGROUND IMAGE SCROLL FADE AWAY
// ===================================================================
function initHeroBannerScrollFade() {
  const bgLayer = document.getElementById('site-bg-image-layer');
  const banner = document.getElementById('hero-birthday-banner');

  function updateFade() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    // Fade away smoothly as the user scrolls down over 600px into other sections
    const fadeDistance = 600;
    const progress = Math.min(1, Math.max(0, scrollY / fadeDistance));
    const opacity = (1 - progress).toFixed(3);
    const scale = (1 - progress * 0.08).toFixed(3);
    const translateY = Math.min(scrollY * 0.15, 90).toFixed(1);

    if (bgLayer) {
      bgLayer.style.opacity = opacity;
      bgLayer.style.transform = `scale(${scale})`;
    }

    if (banner) {
      banner.style.opacity = opacity;
      banner.style.transform = `translateY(${translateY}px) scale(${scale})`;
      banner.style.pointerEvents = progress >= 0.95 ? 'none' : 'auto';
    }
  }

  window.addEventListener('scroll', updateFade, { passive: true });
  updateFade();
}

// ===================================================================
// 🎈 3. FLOATING BACKGROUND PARTICLES (BALLOONS, HEARTS, SPARKLES)
// ===================================================================
function initFloatingBackground() {
  const container = document.getElementById('floating-background');
  if (!container) return;

  const icons = ['🎈', '💖', '✨', '🌸', '🧁', '⭐', '🥂', '🎉'];
  const particleCount = window.innerWidth < 768 ? 14 : 26;

  for (let i = 0; i < particleCount; i++) {
    createFloatingElement(container, icons, i);
  }
}

function createFloatingElement(container, icons, index) {
  const el = document.createElement('div');
  el.className = 'floating-element';
  el.textContent = icons[Math.floor(Math.random() * icons.length)];

  const startX = Math.random() * 100;
  const duration = 12 + Math.random() * 14;
  const delay = Math.random() * 10;
  const fontSize = 1 + Math.random() * 1.4;

  el.style.left = `${startX}vw`;
  el.style.fontSize = `${fontSize}rem`;
  el.style.animationDuration = `${duration}s`;
  el.style.animationDelay = `-${delay}s`;
  el.style.opacity = '0.7';

  container.appendChild(el);
}

// ===================================================================
// 💌 4. BIRTHDAY LETTER ENVELOPE INTERACTION
// ===================================================================
function initEnvelope() {
  const envelope = document.getElementById('envelope-container');
  const toggleBtn = document.getElementById('toggle-envelope-btn');
  const btnText = document.getElementById('envelope-btn-text');

  if (!envelope) return;

  function toggleEnvelope() {
    const isOpen = envelope.classList.toggle('is-open');
    if (btnText) {
      btnText.textContent = isOpen ? 'Fold Letter Back ✉️' : 'Open Envelope ✉️';
    }

    if (isOpen) {
      triggerConfetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  }

  envelope.addEventListener('click', (e) => {
    if (e.target.closest('.letter-paper') && envelope.classList.contains('is-open')) {
      return;
    }
    toggleEnvelope();
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleEnvelope();
    });
  }

  envelope.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleEnvelope();
    }
  });
}

// ===================================================================
// 💛 5. ACCURATE FRIENDSHIP TIME COUNTER
// ===================================================================
function initFriendshipCounter() {
  const yearsEl = document.getElementById('count-years');
  const monthsEl = document.getElementById('count-months');
  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minsEl = document.getElementById('count-minutes');
  const secsEl = document.getElementById('count-seconds');
  const totalDaysEl = document.getElementById('total-days-count');

  if (!yearsEl) return;

  function updateCounter() {
    const now = new Date();
    const start = new Date(FRIENDSHIP_START_DATE);

    if (now < start) {
      yearsEl.textContent = '0';
      monthsEl.textContent = '0';
      daysEl.textContent = '0';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      if (totalDaysEl) totalDaysEl.textContent = '0';
      return;
    }

    const diffMs = now.getTime() - start.getTime();
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (totalDaysEl) {
      totalDaysEl.textContent = totalDays.toLocaleString();
    }

    let cur = new Date(start);
    let years = 0;
    while (true) {
      let nextYear = new Date(cur);
      nextYear.setFullYear(cur.getFullYear() + 1);
      if (nextYear <= now) {
        years++;
        cur = nextYear;
      } else {
        break;
      }
    }

    let months = 0;
    while (true) {
      let nextMonth = new Date(cur);
      nextMonth.setMonth(cur.getMonth() + 1);
      if (nextMonth <= now) {
        months++;
        cur = nextMonth;
      } else {
        break;
      }
    }

    let days = 0;
    while (true) {
      let nextDay = new Date(cur);
      nextDay.setDate(cur.getDate() + 1);
      if (nextDay <= now) {
        days++;
        cur = nextDay;
      } else {
        break;
      }
    }

    const remainingMs = now.getTime() - cur.getTime();
    const hours = Math.floor(remainingMs / (1000 * 60 * 60));
    const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

    yearsEl.textContent = years;
    monthsEl.textContent = months;
    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCounter();
  setInterval(updateCounter, 1000);
}

// ===================================================================
// 📸 6. PHOTO & VIDEO GALLERY (MASONRY - ORIGINAL SIZES PRESERVED)
// ===================================================================
let activeFilter = 'all';
let currentActiveMediaList = [];
let currentLightboxIndex = 0;
let galleryVideoObserver = null;

function initPhotoGallery() {
  const container = document.getElementById('gallery-container');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalVideo = document.getElementById('lightbox-video');
  const modalCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const backdrop = document.getElementById('lightbox-backdrop');

  if (!container || !modal) return;
  if ('IntersectionObserver' in window) {
    galleryVideoObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        const item = ALL_MEDIA_GALLERY[Number(target.dataset.mediaIndex)];
        if (!item || item.type !== 'video') return;
        target.innerHTML = `<div class="gallery-video-wrapper"><span class="video-badge">▶ Video</span><video src="${encodeURI(item.src)}" preload="none" muted playsinline loop autoplay></video></div><div class="gallery-overlay"><p class="gallery-caption">${item.caption}</p></div>`;
        const video = target.querySelector('video');
        if (video) video.play().catch(() => {});
        galleryVideoObserver.unobserve(target);
      });
    }, { rootMargin: '200px' });
  }

  function renderGallery() {
    container.innerHTML = '';
    currentActiveMediaList = ALL_MEDIA_GALLERY.filter(item => {
      if (activeFilter === 'all') return true;
      return item.type === activeFilter;
    });

    currentActiveMediaList.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-item';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View ${item.type} ${index + 1}: ${item.caption}`);
      card.dataset.mediaIndex = String(ALL_MEDIA_GALLERY.indexOf(item));

      const encodedSrc = encodeURI(item.src);

      if (item.type === 'video') {
      card.innerHTML = `
          <div class="gallery-video-wrapper">
            <span class="video-badge">▶ Video</span>
            <div class="gallery-video-placeholder" aria-hidden="true">▶</div>
          </div>
          <div class="gallery-overlay">
            <p class="gallery-caption">${item.caption}</p>
          </div>
        `;
        if (galleryVideoObserver) galleryVideoObserver.observe(card);
      } else {
        card.innerHTML = `
          <img src="${encodedSrc}" alt="${item.caption}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=80';">
          <div class="gallery-overlay">
            <p class="gallery-caption">${item.caption}</p>
          </div>
        `;
      }

      card.addEventListener('click', () => openLightbox(index));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      container.appendChild(card);
    });
  }

  // Filter tab events
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter') || 'all';
      renderGallery();
    });
  });

  renderGallery();

  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.removeAttribute('src');
      modalVideo.load();
      modalVideo.hidden = true;
    }
  }

  function updateLightboxContent() {
    const item = currentActiveMediaList[currentLightboxIndex];
    if (!item) return;

    const encodedSrc = encodeURI(item.src);
    modalCaption.textContent = item.caption || '';

    if (item.type === 'video') {
      if (modalImg) modalImg.hidden = true;
      if (modalVideo) {
        modalVideo.hidden = false;
        modalVideo.loop = true;
        modalVideo.preload = 'metadata';
        modalVideo.src = encodedSrc;
        modalVideo.play().catch(() => {});
      }
    } else {
      if (modalVideo) {
        modalVideo.pause();
        modalVideo.removeAttribute('src');
        modalVideo.hidden = true;
      }
      if (modalImg) {
        modalImg.hidden = false;
        modalImg.loading = 'eager';
        modalImg.decoding = 'async';
        modalImg.src = encodedSrc;
        modalImg.alt = item.caption || 'Memory with Sneha';
      }
    }
  }

  function showNextMedia() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentActiveMediaList.length;
    updateLightboxContent();
  }

  function showPrevMedia() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentActiveMediaList.length) % currentActiveMediaList.length;
    updateLightboxContent();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNextMedia);
  if (prevBtn) prevBtn.addEventListener('click', showPrevMedia);

  window.addEventListener('keydown', (e) => {
    if (modal.hasAttribute('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextMedia();
    if (e.key === 'ArrowLeft') showPrevMedia();
  });

  // Mobile Swipe Gesture Handling
  let touchStartX = 0;
  let touchEndX = 0;

  modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const threshold = 50;
    if (touchEndX < touchStartX - threshold) {
      showNextMedia();
    } else if (touchEndX > touchStartX + threshold) {
      showPrevMedia();
    }
  }
}

// ===================================================================
// 💌 7. MESSAGE CARDS (FLIP / TAP TO REVEAL)
// ===================================================================
function initMessageCards() {
  const container = document.getElementById('message-cards-container');
  if (!container) return;

  container.innerHTML = '';
  MESSAGE_CARDS.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = `flip-card ${card.theme || 'theme-rose'}`;
    cardEl.setAttribute('role', 'button');
    cardEl.setAttribute('tabindex', '0');
    cardEl.setAttribute('aria-label', `Card: ${card.title}. Tap to flip.`);

    cardEl.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="card-emoji">${card.emoji}</div>
          <h3 class="card-title">${card.title}</h3>
          <span class="card-hint">Tap to reveal 💌</span>
        </div>
        <div class="flip-card-back">
          <div class="card-back-title">${card.backTitle || 'For Sneha'}</div>
          <p>${card.message}</p>
        </div>
      </div>
    `;

    function toggleFlip() {
      const isFlipped = cardEl.classList.toggle('is-flipped');
      if (isFlipped) {
        triggerConfetti({
          particleCount: 15,
          spread: 40,
          origin: { y: 0.7 }
        });
      }
    }

    cardEl.addEventListener('click', toggleFlip);
    cardEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFlip();
      }
    });

    container.appendChild(cardEl);
  });
}

// ===================================================================
// 🎂 8. MAKE A WISH & INTERACTIVE CAKE
// ===================================================================
function initBirthdayCake() {
  const cake = document.getElementById('birthday-cake');
  const blowBtn = document.getElementById('blow-candles-btn');
  const banner = document.getElementById('wish-granted-banner');
  const statusText = document.getElementById('wish-status-text');
  const candles = document.querySelectorAll('.candle');

  let candlesBlown = false;

  function blowOutCandles() {
    if (candlesBlown) return;
    candlesBlown = true;

    candles.forEach((candle) => {
      candle.classList.add('blown-out');
    });

    if (statusText) {
      statusText.textContent = "Candles blown out! ✨ Your wish is on its way to the stars...";
    }

    if (banner) {
      banner.classList.remove('hidden');
    }

    if (blowBtn) {
      blowBtn.textContent = "Wish Made! 💖";
      blowBtn.disabled = true;
      blowBtn.style.opacity = '0.85';
    }

    playWishChime();
    triggerGrandCelebration();
  }

  if (cake) cake.addEventListener('click', blowOutCandles);
  if (blowBtn) blowBtn.addEventListener('click', blowOutCandles);
}

// ===================================================================
// 🎆 9. CELEBRATION EFFECTS: CONFETTI & FIREWORKS
// ===================================================================
function triggerConfetti(options = {}) {
  if (typeof confetti === 'function') {
    confetti({
      origin: { y: 0.6 },
      colors: ['#f472b6', '#ec4899', '#f59e0b', '#fbbf24', '#a855f7', '#60a5fa'],
      ...options
    });
    return;
  }
  createDOMConfettiFallback();
}

function triggerGrandCelebration() {
  if (typeof confetti === 'function') {
    const end = Date.now() + 3.5 * 1000;
    const colors = ['#f472b6', '#ec4899', '#f59e0b', '#fbbf24', '#a855f7', '#38bdf8', '#34d399'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } else {
    createDOMConfettiFallback();
  }

  launchFireworksEffect();
}

function createDOMConfettiFallback() {
  const colors = ['#f472b6', '#ec4899', '#fbbf24', '#a855f7', '#38bdf8'];
  for (let i = 0; i < 60; i++) {
    const el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.top = '50%';
    el.style.left = '50%';
    el.style.width = `${Math.random() * 8 + 6}px`;
    el.style.height = `${Math.random() * 12 + 6}px`;
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.borderRadius = '3px';
    el.style.zIndex = '9999';
    el.style.pointerEvents = 'none';

    const angle = Math.random() * Math.PI * 2;
    const velocity = 80 + Math.random() * 160;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity + 100;

    el.style.transition = 'all 1.2s cubic-bezier(0.25, 1, 0.5, 1)';
    document.body.appendChild(el);

    requestAnimationFrame(() => {
      el.style.transform = `translate(${tx}px, ${ty}px) rotate(${Math.random() * 720}deg)`;
      el.style.opacity = '0';
    });

    setTimeout(() => el.remove(), 1300);
  }
}

function launchFireworksEffect() {
  const canvas = document.getElementById('fireworks-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  const colors = ['#ff719a', '#ffe478', '#6ee7b7', '#93c5fd', '#c084fc', '#f43f5e'];

  function createFirework(x, y) {
    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 / particleCount) * i;
      const speed = Math.random() * 5 + 2;
      particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: Math.random() * 0.02 + 0.015,
        radius: Math.random() * 2.5 + 1.5
      });
    }
  }

  createFirework(canvas.width * 0.5, canvas.height * 0.35);
  setTimeout(() => createFirework(canvas.width * 0.25, canvas.height * 0.3), 300);
  setTimeout(() => createFirework(canvas.width * 0.75, canvas.height * 0.32), 600);
  setTimeout(() => createFirework(canvas.width * 0.45, canvas.height * 0.25), 900);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    if (particles.length > 0) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

// ===================================================================
// 🎬 10A. MEMORY SLIDESHOW
// ===================================================================
let slideshowIndex = 0;
let slideshowTimer = null;
let slideshowIsPlaying = true;
let slideshowProgressInterval = null;
const SLIDE_DURATION_IMG = 4000;
const SLIDE_DURATION_VID = 7000;
let slideshowVideoLoadToken = 0;

function initSlideshow() {
  const modal = document.getElementById('slideshow-modal');
  if (!modal) return;

  // Wire close button
  const closeBtn = document.getElementById('slideshow-close');
  if (closeBtn) closeBtn.addEventListener('click', closeSlideshow);

  // Wire prev/next/pause
  const prevBtn = document.getElementById('slideshow-prev-btn');
  const nextBtn = document.getElementById('slideshow-next-btn');
  const pauseBtn = document.getElementById('slideshow-toggle-btn');
  if (prevBtn) prevBtn.addEventListener('click', () => { clearSlideshowTimer(); showPrevSlide(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { clearSlideshowTimer(); showNextSlide(); });
  if (pauseBtn) pauseBtn.addEventListener('click', toggleSlideshowPlay);

  // Backdrop close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSlideshow();
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!modal || modal.hasAttribute('hidden')) return;
    if (e.key === 'Escape') closeSlideshow();
    if (e.key === 'ArrowRight') { clearSlideshowTimer(); showNextSlide(); }
    if (e.key === 'ArrowLeft')  { clearSlideshowTimer(); showPrevSlide(); }
    if (e.key === ' ') { e.preventDefault(); toggleSlideshowPlay(); }
  });

  // Touch swipe
  let ssSwipeStartX = 0;
  modal.addEventListener('touchstart', (e) => { ssSwipeStartX = e.changedTouches[0].screenX; }, { passive: true });
  modal.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenX - ssSwipeStartX;
    if (Math.abs(diff) > 50) {
      clearSlideshowTimer();
      diff < 0 ? showNextSlide() : showPrevSlide();
    }
  }, { passive: true });
}

function openSlideshow(startIndex) {
  const modal = document.getElementById('slideshow-modal');
  if (!modal) return;
  slideshowIndex = startIndex || 0;
  slideshowIsPlaying = true;
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  updateSlideshowSlide();
}

function closeSlideshow() {
  const modal = document.getElementById('slideshow-modal');
  if (!modal) return;
  clearSlideshowTimer();
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
  const vid = document.getElementById('slideshow-video');
  slideshowVideoLoadToken++;
  if (vid) { vid.pause(); vid.onended = null; vid.ontimeupdate = null; vid.hidden = true; }
}

function updateSlideshowSlide() {
  const all = ALL_MEDIA_GALLERY;
  if (!all || !all.length) return;
  if (slideshowIndex >= all.length) slideshowIndex = 0;
  if (slideshowIndex < 0) slideshowIndex = all.length - 1;

  const item = all[slideshowIndex];
  const img = document.getElementById('slideshow-img');
  const vid = document.getElementById('slideshow-video');
  const caption = document.getElementById('slideshow-caption');
  const counter = document.getElementById('slideshow-counter');

  if (counter) counter.textContent = `${slideshowIndex + 1} / ${all.length}`;
  if (caption) caption.textContent = item.caption || '';

  const encodedSrc = encodeURI(item.src);

  // Clear any previous auto-advance timer
  clearSlideshowTimer();

  if (item.type === 'video') {
    if (img) img.hidden = true;
    if (vid) {
      vid.hidden = false;
      vid.loop = false;
      vid.preload = 'auto';

      // Reset progress bar to 0 immediately
      const bar = document.getElementById('slideshow-progress-fill');
      if (bar) { bar.style.transition = 'none'; bar.style.width = '0%'; }

      // Remove old listeners before attaching fresh ones
      vid.onended = null;
      vid.ontimeupdate = null;

      vid.onended = () => {
        // Only auto-advance when playing (not manually paused)
        if (slideshowIsPlaying) {
          slideshowIndex = (slideshowIndex + 1) % ALL_MEDIA_GALLERY.length;
          updateSlideshowSlide();
        }
      };
      const loadToken = ++slideshowVideoLoadToken;
      const beginPlayback = () => {
        if (loadToken !== slideshowVideoLoadToken || !slideshowIsPlaying) return;
        const playPromise = vid.play();
        if (playPromise) playPromise.catch(() => {});
      };
      const loadFailure = () => {
        if (loadToken !== slideshowVideoLoadToken) return;
        if (slideshowIsPlaying) startSlideshowTimer(SLIDE_DURATION_VID);
      };
      vid.onerror = loadFailure;
      vid.oncanplay = beginPlayback;

      // Sync progress bar with actual video playback time
      vid.ontimeupdate = () => {
        if (!vid.duration || !slideshowIsPlaying) return;
        const pct = (vid.currentTime / vid.duration) * 100;
        if (bar) {
          bar.style.transition = 'none';
          bar.style.width = pct + '%';
        }
      };
      if (vid.getAttribute('src') !== encodedSrc) {
        vid.pause();
        vid.src = encodedSrc;
        vid.load();
      } else if (vid.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
        beginPlayback();
      } else {
        vid.load();
      }
    }
  } else {
    // Stop any playing video and clear its listeners
    if (vid) {
      slideshowVideoLoadToken++;
      vid.onended = null;
      vid.ontimeupdate = null;
      vid.oncanplay = null;
      vid.onerror = null;
      vid.pause();
      vid.hidden = true;
    }
    if (img) {
      img.hidden = false;
      img.loading = 'eager';
      img.decoding = 'async';
      img.src = encodedSrc;
      img.alt = item.caption || 'Memory';
    }

    // For images: use a fixed timer to auto-advance
    if (slideshowIsPlaying) startSlideshowTimer(SLIDE_DURATION_IMG);
    animateSlideshowProgress(SLIDE_DURATION_IMG);
  }

  // Update pause btn icon
  const pauseBtn = document.getElementById('slideshow-toggle-btn');
  if (pauseBtn) pauseBtn.textContent = slideshowIsPlaying ? '⏸ Pause' : '▶ Play';
}

function startSlideshowTimer(duration) {
  clearSlideshowTimer();
  slideshowTimer = setTimeout(() => {
    slideshowIndex = (slideshowIndex + 1) % ALL_MEDIA_GALLERY.length;
    updateSlideshowSlide();
  }, duration);
}

function clearSlideshowTimer() {
  if (slideshowTimer) { clearTimeout(slideshowTimer); slideshowTimer = null; }
  if (slideshowProgressInterval) { clearInterval(slideshowProgressInterval); slideshowProgressInterval = null; }
}

function animateSlideshowProgress(duration) {
  const bar = document.getElementById('slideshow-progress-fill');
  if (!bar) return;
  bar.style.transition = 'none';
  bar.style.width = '0%';
  // Force reflow
  void bar.offsetWidth;
  bar.style.transition = `width ${duration}ms linear`;
  bar.style.width = '100%';
}

function showNextSlide() {
  slideshowIndex = (slideshowIndex + 1) % ALL_MEDIA_GALLERY.length;
  updateSlideshowSlide();
}

function showPrevSlide() {
  slideshowIndex = (slideshowIndex - 1 + ALL_MEDIA_GALLERY.length) % ALL_MEDIA_GALLERY.length;
  updateSlideshowSlide();
}

function toggleSlideshowPlay() {
  slideshowIsPlaying = !slideshowIsPlaying;
  const pauseBtn = document.getElementById('slideshow-toggle-btn');
  if (pauseBtn) pauseBtn.textContent = slideshowIsPlaying ? '⏸ Pause' : '▶ Play';

  const vid = document.getElementById('slideshow-video');
  const item = ALL_MEDIA_GALLERY[slideshowIndex];

  if (slideshowIsPlaying) {
    if (item && item.type === 'video') {
      // Resume the video — the 'ended' handler will advance automatically
      if (vid && vid.paused) {
        if (vid.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) vid.play().catch(() => {});
        else vid.oncanplay = () => vid.play().catch(() => {});
      }
    } else {
      // Resume image timer from full duration (simplest correct approach)
      startSlideshowTimer(SLIDE_DURATION_IMG);
      animateSlideshowProgress(SLIDE_DURATION_IMG);
    }
  } else {
    clearSlideshowTimer();
    if (item && item.type === 'video' && vid && !vid.paused) {
      vid.pause();
    }
  }
}

// ===================================================================
// 🎵 10B. SOFT BACKGROUND MUSIC & WEB AUDIO SYNTHESIZER
// ===================================================================
let audioContextInstance = null;
let isPlayingSynth = false;

function initAudioPlayer() {
  const musicBtn = document.getElementById('music-toggle-btn');
  const audioElement = document.getElementById('bg-music');
  const musicLabel = musicBtn ? musicBtn.querySelector('.music-label') : null;

  if (!musicBtn || !audioElement) return;

  // Ensure the music file loops
  audioElement.loop = true;

  let isPlaying = false;

  async function toggleMusic() {
    if (!isPlaying) {
      try {
        await audioElement.play();
        isPlaying = true;
        updateMusicUI(true);
      } catch (err) {
        startWebAudioMusicBox();
        isPlaying = true;
        updateMusicUI(true);
      }
      // Launch the memory slideshow when music starts
      openSlideshow(0);
    } else {
      audioElement.pause();
      stopWebAudioMusicBox();
      isPlaying = false;
      updateMusicUI(false);
      closeSlideshow();
    }
  }

  function updateMusicUI(active) {
    if (active) {
      musicBtn.classList.add('playing');
      if (musicLabel) musicLabel.textContent = 'Pause Music ⏸';
    } else {
      musicBtn.classList.remove('playing');
      if (musicLabel) musicLabel.textContent = 'Play Music & Slideshow 🎬';
    }
  }

  musicBtn.addEventListener('click', toggleMusic);

  // Also wire the standalone "Start Slideshow" button if it exists
  const startSsBtn = document.getElementById('start-slideshow-btn');
  if (startSsBtn) {
    startSsBtn.addEventListener('click', () => openSlideshow(0));
  }
}

function startWebAudioMusicBox() {
  try {
    if (!audioContextInstance) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioContextInstance = new AudioCtx();
    }
    if (audioContextInstance.state === 'suspended') {
      audioContextInstance.resume();
    }

    isPlayingSynth = true;

    const melody = [
      261.63, 261.63, 293.66, 261.63, 349.23, 329.63,
      261.63, 261.63, 293.66, 261.63, 392.00, 349.23,
      261.63, 261.63, 523.25, 440.00, 349.23, 329.63, 293.66,
      466.16, 466.16, 440.00, 349.23, 392.00, 349.23
    ];

    let noteIndex = 0;

    function playNextNote() {
      if (!isPlayingSynth || !audioContextInstance) return;

      const freq = melody[noteIndex % melody.length];
      const now = audioContextInstance.currentTime;

      const osc = audioContextInstance.createOscillator();
      const gain = audioContextInstance.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

      osc.connect(gain);
      gain.connect(audioContextInstance.destination);

      osc.start(now);
      osc.stop(now + 0.95);

      noteIndex++;
      setTimeout(playNextNote, 520);
    }

    playNextNote();
  } catch (e) {
    console.warn('Web Audio synthesis unavailable:', e);
  }
}

function stopWebAudioMusicBox() {
  isPlayingSynth = false;
}

function playWishChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);

      gain.gain.setValueAtTime(0, now + idx * 0.1);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.1 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.1 + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 1.3);
    });
  } catch (e) {
    // Ignore
  }
}

// ===================================================================
// ✨ 11. DESKTOP SPARKLE CURSOR TRAIL
// ===================================================================
function initCursorSparkles() {
  if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) {
    return;
  }

  const canvas = document.getElementById('cursor-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const sparkles = [];
  let animationFrame = null;
  let lastFrameAt = 0;
  const sparkleColors = ['#f472b6', '#fbbf24', '#fbcfe8', '#a855f7', '#ffffff'];

  window.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 1; i++) {
      sparkles.push({
        x: e.clientX + (Math.random() * 10 - 5),
        y: e.clientY + (Math.random() * 10 - 5),
        size: Math.random() * 4 + 2,
        color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
        alpha: 1,
        vx: (Math.random() - 0.5) * 1.5,
        vy: Math.random() * 1.2 + 0.5,
        decay: Math.random() * 0.03 + 0.02
      });
    }
    if (sparkles.length > 80) sparkles.splice(0, sparkles.length - 80);
    if (animationFrame === null) animationFrame = requestAnimationFrame(renderSparkles);
  });

  function renderSparkles(timestamp) {
    animationFrame = null;
    if (timestamp - lastFrameAt < 33) {
      if (sparkles.length) animationFrame = requestAnimationFrame(renderSparkles);
      return;
    }
    lastFrameAt = timestamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = sparkles.length - 1; i >= 0; i--) {
      const s = sparkles[i];
      s.x += s.vx;
      s.y += s.vy;
      s.alpha -= s.decay;

      if (s.alpha <= 0) {
        sparkles.splice(i, 1);
        continue;
      }

      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.alpha;
      ctx.beginPath();
      const r = s.size;
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    if (sparkles.length) animationFrame = requestAnimationFrame(renderSparkles);
  }
}

// ===================================================================
// 🧭 12. NAVIGATION DOTS & SMOOTH SCROLL OBSERVER
// ===================================================================
function initFloatingNav() {
  const dots = document.querySelectorAll('.nav-dot');
  const sections = document.querySelectorAll('section[id]');

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetId = dot.getAttribute('data-target');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        dots.forEach(dot => {
          dot.classList.toggle('active', dot.getAttribute('data-target') === id);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(sec => observer.observe(sec));
}

// ===================================================================
// 🔒 13. BIRTHDAY LOCK & COUNTDOWN (OPTIONAL FEATURE)
// ===================================================================
function initLockScreen() {
  const lockScreen = document.getElementById('lock-screen');
  const bypassBtn = document.getElementById('bypass-lock-btn');

  if (!lockScreen) return;

  const now = new Date();
  const isBirthdayArrived = now >= BIRTHDAY_DATE;

  if (UNLOCK_FOR_PREVIEW || isBirthdayArrived) {
    lockScreen.classList.add('hidden');
    return;
  }

  lockScreen.classList.remove('hidden');

  function updateLockCountdown() {
    const current = new Date();
    const diff = BIRTHDAY_DATE.getTime() - current.getTime();

    if (diff <= 0) {
      lockScreen.classList.add('hidden');
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const dEl = document.getElementById('lock-days');
    const hEl = document.getElementById('lock-hours');
    const mEl = document.getElementById('lock-mins');
    const sEl = document.getElementById('lock-secs');

    if (dEl) dEl.textContent = String(days).padStart(2, '0');
    if (hEl) hEl.textContent = String(hours).padStart(2, '0');
    if (mEl) mEl.textContent = String(mins).padStart(2, '0');
    if (sEl) sEl.textContent = String(secs).padStart(2, '0');
  }

  updateLockCountdown();
  setInterval(updateLockCountdown, 1000);

  if (bypassBtn) {
    bypassBtn.addEventListener('click', () => {
      lockScreen.classList.add('hidden');
      triggerConfetti();
    });
  }
}

// ===================================================================
// 🎁 14. HERO BUTTON: OPEN SURPRISE
// ===================================================================
function initHeroSurprise() {
  const surpriseBtn = document.getElementById('surprise-btn');
  if (!surpriseBtn) return;

  surpriseBtn.addEventListener('click', () => {
    triggerConfetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 }
    });

    const letterSection = document.getElementById('letter');
    if (letterSection) {
      letterSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ===================================================================
// 🚀 15. INITIALIZE ALL MODULES ON DOM READY
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeroBannerScrollFade();
  initFloatingBackground();
  initLockScreen();
  initHeroSurprise();
  initEnvelope();
  initFriendshipCounter();
  initPhotoGallery();
  initMessageCards();
  initBirthdayCake();
  initSlideshow();
  initAudioPlayer();
  initFloatingNav();
  initCursorSparkles();

  console.log("%c✨ Happy 21st Birthday Sneha! Crafted with love by Kartik ✨", "color: #db2777; font-size: 16px; font-weight: bold;");
});
