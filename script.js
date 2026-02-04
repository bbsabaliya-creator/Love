// Apply Config

document.querySelector("h1").innerText = TITLE_TEXT;
document.querySelectorAll("p")[0].innerText = SUB_TEXT;
document.querySelectorAll("p")[1].innerText =
  `${COME_BACK_TEXT} ${new Date(TARGET_DATE).toDateString()} 💖`;

document.getElementById("saveBtn").innerText = SCREENSHOT_TEXT;


// Music Settings

const music = document.getElementById("bgMusic");

music.autoplay = MUSIC_AUTOPLAY;
music.loop = MUSIC_LOOP;
music.volume = MUSIC_VOLUME;


// Background

document.body.style.background =
  `radial-gradient(circle, ${BACKGROUND_START}, ${BACKGROUND_END})`;


// Timer Style

const timer = document.getElementById("timer");

timer.style.background = TIMER_BG;
timer.style.color = TIMER_TEXT_COLOR;
timer.style.fontSize = TIMER_FONT_SIZE;


// GIF Settings

const gif = document.querySelector(".gif");

gif.style.width = GIF_WIDTH;

if (!GIF_VISIBLE) gif.style.display = "none";


// Button Settings

if (!SHOW_BUTTON) {
  document.getElementById("saveBtn").style.display = "none";
}


// Countdown

function updateTimer() {

  if (!SHOW_TIMER) {
    timer.style.display = "none";
    return;
  }

  const target = new Date(TARGET_DATE).getTime();
  const now = new Date().getTime();

  const diff = target - now;

  if (diff <= 0) {
    timer.innerText = READY_TEXT;
    return;
  }

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
  const m = Math.floor((diff % (1000*60*60))/(1000*60));
  const s = Math.floor((diff % (1000*60))/1000);

  timer.innerText = `${d} Days ${h}h ${m}m ${s}s 💗`;
}

setInterval(updateTimer, 1000);
updateTimer();


// Screenshot

function takeScreenshot() {

  if (!ENABLE_SCREENSHOT) return;

  const box = document.getElementById("capture");
  const btn = document.getElementById("saveBtn");

  btn.style.visibility = "hidden";

  html2canvas(box).then(canvas => {

    const link = document.createElement("a");
    link.download = SCREENSHOT_FILE_NAME;
    link.href = canvas.toDataURL();
    link.click();

    btn.style.visibility = "visible";
  });
}
