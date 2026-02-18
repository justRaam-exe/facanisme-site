new TypeIt("#typing-desc", {
  strings: [
    "Anime Face Recognition System",
    "Anime Face Analysis System",
    "Anime Recommendation System Based on Character"
  ],
  speed: 70,
  breakLines: false,
  loop: true,
  nextStringDelay: 1600
}).go();

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar-sec');
  if (window.scrollY > 10) {
    nav.classList.add('bg-[#2B4970]', 'shadow-xl', 'py-2');
    nav.classList.remove('bg-transparent', 'py-4');
  } else {
    nav.classList.remove('bg-[#2B4970]', 'shadow-xl', 'py-2');
    nav.classList.add('bg-transparent', 'py-4');
  }
});