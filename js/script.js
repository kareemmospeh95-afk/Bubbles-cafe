//Menu Click
let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".bars");

function display() {
    if (toggle.classList.contains("active")) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    display();
});
//animate section
let sections = document.querySelectorAll(".about-section, #menu, .slid, .gallery, #contact");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollY >= section.offsetTop + 100) {
            section.classList.add("show");
        }
    });
});

//slider
const images = Array.from(document.querySelectorAll(".holder img"));
    const slideCount = images.length;
    let current = 1;

    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    // انشاء pagination
    const ul = document.createElement("ul");
    ul.id = "pagn-ul";
    for (let i = 1; i <= slideCount; i++) {
      const li = document.createElement("li");
      li.setAttribute("data-index", i);
      li.textContent = "";
      ul.appendChild(li);
    }
    document.getElementById("keys").appendChild(ul);

    const bullets = Array.from(document.querySelectorAll("#pagn-ul li"));

    bullets.forEach((bullet) => {
      bullet.addEventListener("click", function () {
        current = Number(this.getAttribute("data-index"));
        checker();
      });
    });

    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    function nextSlide() {
      if (next.classList.contains("disabled")) return;
      current++;
      checker();
    }

    function prevSlide() {
      // <-- هنا التصحيح: contains (حرف صغير)
      if (prev.classList.contains("disabled")) return;
      current--;
      checker();
    }

    function checker() {
      removeActive();
      images[current - 1].classList.add("active");
      bullets[current - 1].classList.add("active");

      prev.classList.toggle("disabled", current === 1);
      next.classList.toggle("disabled", current === slideCount);
    }

    function removeActive() {
      images.forEach(img => img.classList.remove("active"));
      bullets.forEach(b => b.classList.remove("active"));
    }

    // تهيئة أولية
    checker();
      
      
      setInterval(() => {
    if (current === slideCount) {
        current = 1;      // رجّع للأول
        checker();        // اعرض الصورة الأولى
    } else {
        nextSlide();      // كمل طبيعي
    }
}, 2500);







