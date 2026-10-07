// ============================================================
// ISI LINK DI SINI — cukup ganti tanda kutip kosong dengan URL.
// Contoh: cv: "https://drive.google.com/file/d/xxxx/view"
// Tombol yang linknya masih kosong akan menampilkan pesan
// "Link belum diisi" saat diklik.
// ============================================================
const LINKS = {
  cv: "https://drive.google.com/file/d/1TMX1rj7P7icWGEzkzIiRzFVydiACUdp4/view?usp=sharing",
  "iat-report": "https://drive.google.com/drive/folders/1F16wm90bJr1puOYfD_sgYuGsz-HpLPzp",
  "iat-design": "https://www.figma.com/design/F5EMVgnUHAZj6fCwQkfEjw/proj-1?node-id=0-1&t=eiBuucV7l0ArqRo4-1",
  "singgah-design": "https://www.figma.com/design/duqfWITCw7Yoq8o0qt93zn/SINGGAH?node-id=198-1111&t=X6ojtQFEuO91kkS8-1",
  "singgah-report": "https://drive.google.com/file/d/1xzJeIJDzyNQplXnHct4rRo_gd8Wfl2qr/view?usp=sharing",
  "singgah-youtube": "https://www.youtube.com/watch?si=pBgGS9qtKro8ujzQ&v=qBhrTQNJ-Ds&feature=youtu.be",
  "sinance-design": "https://www.figma.com/design/mXA8MO3QAkQXSUkbGHhKrZ/Super-Junior?node-id=92-1448&t=pAMmWyD0QVko4Ssg-1",
  "sinance-report": "https://drive.google.com/drive/folders/1J1oPg75sAo0FTrjVXUiDmGSU3IKIpMMR",
  "bbcc-detail": "https://lnkd.in/p/g9kbVfwY",
  email: "mailto:fadzli.noer@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-fadzli-nur-arrafi-b027a4428/?isSelfProfile=true",
  github: "https://github.com/rafii918",
};

// ---------- Pasang link ke tombol ----------
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll("[data-link]").forEach((el) => {
  const url = LINKS[el.dataset.link];
  if (url) {
    el.href = url;
    if (!url.startsWith("mailto:")) {
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  } else {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("Link belum diisi. Edit di script.js bagian LINKS.");
    });
  }
});

// ---------- Menu mobile ----------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// ---------- Animasi muncul saat scroll ----------
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

// ---------- Lightbox (klik gambar untuk memperbesar) ----------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}
document.querySelectorAll("img[data-zoom]").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// ---------- Tahun di footer ----------
document.getElementById("year").textContent = new Date().getFullYear();
