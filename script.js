const cursor = document.getElementById("cursor"),
  ring = document.getElementById("cursorRing");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";
});
document
  .querySelectorAll("a,button,.service-card,.project-card,.testi-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      ring.style.width = "56px";
      ring.style.height = "56px";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.width = "12px";
      cursor.style.height = "12px";
      ring.style.width = "36px";
      ring.style.height = "36px";
    });
  });
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), 100);
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
function handleSubmit() {
  const name = document.getElementById("fname").value || "Calon Klien";
  const msg = encodeURIComponent(
    "Halo Rudi Furninterior! Saya " +
      name +
      " ingin konsultasi furniture custom. Terima kasih!",
  );
  window.open("https://wa.me/6289503062857?text=" + msg, "_blank");
}
