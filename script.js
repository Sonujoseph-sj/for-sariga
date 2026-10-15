// for-sariga/script.js
// Edit the `story` array to change any text. Everything else runs the chat.

const story = [
  {
    type: "next",
    say: [
      "Hii Sariga 👋",
      "It's me. Sonu. Your favourite headache.",
      "I made you a whole website. With code. At night. Instead of sleeping.",
      "Before we start, some rules:",
      "1. Answer honestly.\n2. No quarrelling with the website.\n3. Okay you can quarrel. But you will lose.",
    ],
    reply: "Okay okay, start 🙄",
  },
  {
    type: "yesno",
    say: ["Question one. Very easy.", { text: "🥺", sticker: true }, "Do you love me?"],
    yes: "Yes 🙈",
    no: "No",
    taunts: ["Nope 😜", "Too slow!", "Try the other one", "Hehe", "Not today", "Wrong button 😂"],
    after: ["I KNEW IT.", "Screenshot taken. No take-backs. 📸"],
  },
  {
    type: "yesno",
    say: ["Wait wait wait.", { text: "🫣", sticker: true }, "Why are you blushing?"],
    yes: "Okay fine, a little 🙈",
    no: "I'm not blushing",
    taunts: ["You are 😏", "Cheeks are red 🍅", "Liar liar", "Caught you", "Blushing confirmed", "Still blushing 😂"],
    after: ["Your cheeks are literally red right now.", "Like a little tomato. 🍅", "The cutest tomato in Kerala."],
  },
  {
    type: "choices",
    say: ["Next one is tricky. Think carefully.", "Who started our last fight?"],
    options: [
      { label: "Me 😇", after: ["Wow. Honesty?", "Who are you and what did you do with my Sariga? 😳"] },
      { label: "You, obviously 😤", after: ["Okay fine. It was me.", "It's always me. I have accepted this. 😌"] },
      { label: "I don't remember 🙄", after: ["Convenient. Very convenient. 😑"] },
    ],
    then: ["Anyway. We fight. A lot. 😅", "But at the end we always come back to each other.", "That's the part I care about."],
  },
  {
    type: "yesno",
    say: ["So promise me something.", "After every fight, you will still come back to me?"],
    yes: "Always 🤍",
    no: "Never",
    taunts: ["Haha no", "Nice try", "Not allowed", "Come back here", "Wrong answer 😤"],
    after: ["Same.", "Even when you are angry, I am still your person.", "You can't get rid of me. Sorry. 🤷‍♂️"],
  },
  {
    type: "next",
    say: [
      "You know what's funny?",
      "Six, seven months ago you were just a name on my phone.",
      "Now you are the first person I talk to in the morning and the last one at night.",
      "Every single day.",
    ],
    reply: "Awww 🥹",
  },
  {
    type: "choices",
    say: ["Okay. Scientific question.", "Who is the cutest person in this relationship?"],
    options: [
      { label: "Sariga 😌", after: ["Correct. Chubby cheeks win every time. 🥰"] },
      { label: "Sariga, obviously", after: ["Correct. Chubby cheeks win every time. 🥰"] },
      { label: "Sonu", morph: "Sariga 💅", after: ["See? Even the button knows. 😂", "Chubby cheeks win every time. 🥰"] },
    ],
  },
  {
    type: "yesno",
    say: [
      "Remember our movie? And our drive? 🍿🚗",
      "Everything was so nice. I keep replaying it in my head.",
      "So. Another movie and another long drive with me?",
    ],
    yes: "Yesss 🚗🍿",
    no: "No thanks",
    taunts: ["Seatbelt on 🚗", "Too late", "Ticket booked", "Nope", "Get in the car 😂"],
    after: ["Deal.", "You pick the movie. I bring the snacks.", "You eat all my snacks. As usual. 😑"],
  },
  {
    type: "choices",
    say: ["Small confession.", "Sometimes you act like a little baby. 👶", "True or not?"],
    options: [
      { label: "No! I'm a grown up 😤", after: ["Said exactly like a baby. 😂"] },
      { label: "Maybe a little 🙄", after: ["A little? Okay baby. 😂"] },
    ],
    then: ["And I love it.", "You are my child. My favourite one. My only one. 🧸"],
  },
  {
    type: "next",
    say: [
      "Okay. Serious for one minute. Only one. Then back to teasing.",
      "I know saying \"I love you\" out loud is hard for you sometimes.",
      "That's okay. You don't have to say it before you are ready.",
      "I hear it anyway. In \"did you eat?\". In every fight you come back from. In how you talk to me every single day.",
      "(Also, I have heard it a few times on some late nights. Don't act like you don't remember. 😏)",
    ],
    reply: "Sonuuuu 🙈",
  },
  {
    type: "yesno",
    say: ["Last question before your surprise.", "Are you mine?"],
    yes: "Yours 💗",
    no: "No",
    taunts: ["You are mine", "Hehe no", "Too slow", "Not an option", "Mine mine mine"],
    after: ["Good. Because I am yours.", "Already decided. No discussion. 😌"],
  },
  {
    type: "letter",
    say: ["I wrote you a letter. 💌", "But it's a shy letter. Like someone I know.", "Tap it. It might need some convincing."],
  },
  {
    type: "final",
    say: ["So. Now you know.", { text: "I love you, Sariga 💗", big: true }, "You don't have to say it out loud.", "Just tap it this time?"],
    yes: "I love you too 💗",
    no: "Nope",
    taunts: ["Nope? Nope.", "Say it back 🥺", "I'm waiting", "Hehe", "Not escaping", "Tap the pink one"],
    after: ["YOU SAID IT. 😭💗", "Okay, technically you tapped it. Still counts.", "I love you more. Not negotiable."],
  },
];

const letter = [
  "My dear Sariga,",
  "We started as two strangers talking on a screen. I did not know then that you would become my favourite part of every day.",
  "You are childish, funny, a little dramatic, and the sweetest person I know. You make me laugh even when I am trying to be angry with you. Yes, we fight. But every time, we find our way back, and I love us a little more after.",
  "I know some things from before still hurt, and some words are hard to say. You never have to hurry for me. I can feel your love. I see it every day.",
  "Thank you for that movie, that drive, and every silly conversation. I want many more of all of them. Let's keep growing together, slowly and stubbornly, the way we do.",
  "You are my baby, my best friend, and my favourite person to quarrel with.",
  "I love you, Sariga. So much.",
];
const signature = "Yours, always,\nSonu";

/* ---------- Setup ---------- */
const $ = (sel) => document.querySelector(sel);
const thread = $("#thread");
const dock = $("#dock");
const statusEl = $("#status");
const heartsLayer = $("#hearts");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const sleep = (ms) => new Promise((r) => setTimeout(r, reduceMotion ? Math.min(ms, 200) : ms));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

let step = 0;
const pointer = { x: -9999, y: -9999 };

function scrollDown() {
  requestAnimationFrame(() => { thread.scrollTop = thread.scrollHeight; });
}

function bubble(text, who = "me", opts = {}) {
  const row = document.createElement("div");
  row.className = `row ${who}`;
  const b = document.createElement("div");
  b.className = "bubble" + (opts.sticker ? " sticker" : "") + (opts.big ? " big" : "");
  b.textContent = text;
  row.appendChild(b);
  thread.appendChild(row);
  scrollDown();
  return row;
}

async function typing(ms) {
  statusEl.textContent = "typing…";
  const row = document.createElement("div");
  row.className = "row me";
  row.innerHTML = '<div class="bubble typing" aria-label="Sonu is typing"><i></i><i></i><i></i></div>';
  thread.appendChild(row);
  scrollDown();
  await sleep(ms);
  row.remove();
  statusEl.textContent = "online";
}

async function say(messages = []) {
  for (const m of messages) {
    const msg = typeof m === "string" ? { text: m } : m;
    await typing(Math.min(1700, 450 + msg.text.length * 22));
    bubble(msg.text, "me", msg);
    await sleep(220);
  }
}

function makeBtn(label, cls, onClick) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = `btn ${cls}`;
  btn.textContent = label;
  if (onClick) btn.addEventListener("click", onClick);
  return btn;
}

function clearDock() {
  dock.replaceChildren();
  document.querySelectorAll(".runaway.loose").forEach((b) => b.remove());
}

function hint(text) {
  const p = document.createElement("p");
  p.className = "dock-hint";
  p.textContent = text;
  dock.appendChild(p);
}

async function answer(text, after) {
  clearDock();
  bubble(text, "her");
  await sleep(350);
  await say(after);
}

/* ---------- Runaway button ---------- */
function makeRunaway(btn, taunts, yesBtn) {
  btn.classList.add("runaway");
  let last = 0;
  let dodges = 0;

  const flee = (e) => {
    if (e && e.cancelable) e.preventDefault();
    if (e) e.stopPropagation();
    const now = performance.now();
    if (now - last < 140) return;
    last = now;
    dodges++;
    moveAway(btn, taunts);
    if (yesBtn) yesBtn.style.transform = `scale(${Math.min(1 + dodges * 0.06, 1.35)})`;
  };

  btn.addEventListener("pointerenter", flee);
  btn.addEventListener("pointerdown", flee);
  btn.addEventListener("touchstart", flee, { passive: false });
  btn.addEventListener("click", flee);
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { flee(e); btn.blur(); }
  });
  btn._flee = flee;
  return btn;
}

function moveAway(btn, taunts) {
  const start = btn.getBoundingClientRect();

  // First escape: leave a placeholder in the dock and float the button on the page.
  if (!btn.classList.contains("loose")) {
    const ghost = document.createElement("span");
    ghost.className = "runaway-ghost";
    ghost.style.width = `${start.width}px`;
    ghost.style.height = `${start.height}px`;
    btn.replaceWith(ghost);
    btn.classList.add("loose");
    btn.style.left = `${start.left}px`;
    btn.style.top = `${start.top}px`;
    document.body.appendChild(btn);
    void btn.offsetWidth;
  }

  puff(start.left + start.width / 2, start.top + start.height / 2);
  btn.textContent = pick(taunts);

  const w = btn.offsetWidth;
  const h = btn.offsetHeight;
  const m = 16;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const yes = document.querySelector(".dock .btn-yes");
  const yr = yes ? yes.getBoundingClientRect() : null;
  const px = pointer.x > -1000 ? pointer.x : start.left + start.width / 2;
  const py = pointer.y > -1000 ? pointer.y : start.top + start.height / 2;

  let x = m, y = 90;
  for (let i = 0; i < 40; i++) {
    const cx = m + Math.random() * Math.max(1, vw - w - m * 2);
    const cy = 90 + Math.random() * Math.max(1, vh - h - 90 - m - 20);
    const farFromPointer = Math.hypot(cx + w / 2 - px, cy + h / 2 - py) > 170;
    const clearOfYes = !yr || cx + w < yr.left - 20 || cx > yr.right + 20 || cy + h < yr.top - 20 || cy > yr.bottom + 20;
    x = cx; y = cy;
    if (farFromPointer && clearOfYes) break;
  }
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
  btn.style.transform = `rotate(${Math.random() * 16 - 8}deg)`;
}

function puff(x, y) {
  const s = document.createElement("span");
  s.className = "puff";
  s.textContent = "💨";
  s.style.left = `${x - 13}px`;
  s.style.top = `${y - 13}px`;
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 750);
}

// Desktop: flee before the mouse even touches it.
document.addEventListener("pointermove", (e) => {
  pointer.x = e.clientX;
  pointer.y = e.clientY;
  if (e.pointerType !== "mouse") return;
  document.querySelectorAll(".runaway").forEach((btn) => {
    const r = btn.getBoundingClientRect();
    const dx = Math.max(r.left - e.clientX, 0, e.clientX - r.right);
    const dy = Math.max(r.top - e.clientY, 0, e.clientY - r.bottom);
    if (Math.hypot(dx, dy) < 45) btn._flee();
  });
});
document.addEventListener("touchstart", (e) => {
  const t = e.touches[0];
  if (t) { pointer.x = t.clientX; pointer.y = t.clientY; }
}, { passive: true, capture: true });

window.addEventListener("resize", () => {
  document.querySelectorAll(".runaway.loose").forEach((btn) => {
    const maxX = window.innerWidth - btn.offsetWidth - 16;
    const maxY = window.innerHeight - btn.offsetHeight - 16;
    btn.style.left = `${Math.min(parseFloat(btn.style.left), maxX)}px`;
    btn.style.top = `${Math.min(parseFloat(btn.style.top), maxY)}px`;
  });
});

/* ---------- Hearts ---------- */
function hearts(count = 24) {
  const symbols = ["💗", "💕", "♥", "💖", "✨", "🌸"];
  for (let i = 0; i < count; i++) {
    const h = document.createElement("span");
    h.className = "heart-fly";
    h.textContent = pick(symbols);
    h.style.left = `${Math.random() * 100}%`;
    h.style.fontSize = `${16 + Math.random() * 22}px`;
    h.style.animationDuration = `${3 + Math.random() * 3}s`;
    h.style.animationDelay = `${Math.random() * 0.8}s`;
    h.style.setProperty("--spin", `${Math.random() * 80 - 40}deg`);
    heartsLayer.appendChild(h);
    setTimeout(() => h.remove(), 7000);
  }
}

/* ---------- Steps ---------- */
async function runStep() {
  const s = story[step];
  if (!s) return;
  clearDock();
  await say(s.say);

  if (s.type === "next") {
    dock.appendChild(makeBtn(s.reply, "btn-yes", async () => {
      await answer(s.reply, s.after);
      nextStep();
    }));
  }

  if (s.type === "yesno" || s.type === "final") {
    let done = false;
    const yes = makeBtn(s.yes, "btn-yes", async () => {
      if (done) return;
      done = true;
      hearts(s.type === "final" ? 60 : 18);
      await answer(s.yes, s.after);
      if (s.type === "final") showEnd();
      else nextStep();
    });
    const no = makeRunaway(makeBtn(s.no, "btn-no"), s.taunts, yes);
    dock.append(yes, no);
  }

  if (s.type === "choices") {
    s.options.forEach((opt) => {
      const btn = makeBtn(opt.label, "btn-choice", async () => {
        await answer(btn.textContent, opt.after);
        await say(s.then);
        nextStep();
      });
      if (opt.morph) {
        const swap = () => { btn.textContent = opt.morph; };
        ["pointerenter", "pointerdown", "focus"].forEach((ev) => btn.addEventListener(ev, swap));
        btn.addEventListener("touchstart", swap, { passive: true });
      }
      dock.appendChild(btn);
    });
  }

  if (s.type === "letter") showEnvelope();
}

function nextStep() {
  step++;
  runStep();
}

/* ---------- Letter ---------- */
function showEnvelope() {
  const row = document.createElement("div");
  row.className = "row me";
  const env = document.createElement("button");
  env.type = "button";
  env.className = "envelope";
  env.setAttribute("aria-label", "Tap to open the letter");
  env.innerHTML =
    '<span class="env-back"></span><span class="env-paper">For Sariga</span>' +
    '<span class="env-front"></span><span class="env-flap"></span><span class="env-seal">💗</span>';
  row.appendChild(env);
  thread.appendChild(row);
  scrollDown();
  hint("Tap the letter 💌");

  let taps = 0;
  let busy = false;
  env.addEventListener("click", async () => {
    if (busy) return;
    busy = true;
    taps++;
    env.classList.remove("wiggle");
    void env.offsetWidth;

    if (taps === 1) {
      env.classList.add("wiggle");
      await say(["It moved! Tap again 👀"]);
    } else if (taps === 2) {
      env.classList.add("peek");
      await say(["Almost… one more tap 🥺"]);
    } else {
      env.classList.add("open");
      clearDock();
      hearts(14);
      await sleep(650);
      openLetter();
      return;
    }
    busy = false;
  });
}

function openLetter() {
  const box = $("#letterText");
  box.replaceChildren();
  letter.forEach((t) => {
    const p = document.createElement("p");
    p.textContent = t;
    box.appendChild(p);
  });
  const sign = document.createElement("p");
  sign.className = "sign";
  sign.style.whiteSpace = "pre-line";
  sign.textContent = signature;
  box.appendChild(sign);

  const overlay = $("#letterOverlay");
  overlay.hidden = false;
  overlay.querySelector(".paper").scrollTop = 0;
  $("#closeLetter").focus({ preventScroll: true });
}

$("#closeLetter").addEventListener("click", () => {
  $("#letterOverlay").hidden = true;
  nextStep();
});

/* ---------- End ---------- */
function showEnd() {
  clearDock();
  dock.appendChild(makeBtn("Start again ↺", "btn-choice", () => {
    thread.replaceChildren();
    step = 0;
    runStep();
  }));
}

/* ---------- Lock screen ---------- */
function tickClock() {
  const now = new Date();
  $("#gateClock").textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  $("#gateDate").textContent = now.toLocaleDateString([], { weekday: "long", day: "numeric", month: "long" });
}
tickClock();
const clockTimer = setInterval(tickClock, 15000);

$("#openChat").addEventListener("click", () => {
  clearInterval(clockTimer);
  $("#gate").classList.add("gone");
  setTimeout(() => $("#gate").remove(), 650);
  runStep();
});
