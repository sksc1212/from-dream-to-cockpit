/* ===========================================
FROM DREAM TO COCKPIT
script.js
Version 1.0
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ===========================
       Navbar Background on Scroll
    =========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 60) {

            navbar.style.background = "rgba(15,39,71,.96)";
            navbar.style.boxShadow = "0 12px 35px rgba(0,0,0,.15)";

        }

        else {

            navbar.style.background = "rgba(15,39,71,.75)";
            navbar.style.boxShadow = "none";

        }

    });

    /* ===========================
       Smooth Scrolling
    =========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ===========================
       Fade Animation
    =========================== */

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold:0.15

        }

    );

    document.querySelectorAll(

        ".timeline-item,.achievement-card,.intro-box,.hero-card,.section-heading"

    ).forEach(el=>{

        el.classList.add("fade-up");

        observer.observe(el);

    });

    /* ===========================
       Active Navigation
    =========================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", ()=>{

        let current = "";

        sections.forEach(section=>{

            const sectionTop = section.offsetTop - 120;

            if(pageYOffset >= sectionTop){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")=="#"+current){

                link.classList.add("active");

            }

        });

    });

    /* ===========================
       Hero Card Hover Effect
    =========================== */

    const heroCard = document.querySelector(".hero-card");

    if(heroCard){

        heroCard.addEventListener("mousemove",(e)=>{

            const rect = heroCard.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width)-0.5)*10;

            const rotateX = ((y / rect.height)-0.5)*-10;

            heroCard.style.transform=

            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;

        });

        heroCard.addEventListener("mouseleave",()=>{

            heroCard.style.transform=

            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

        });

    }

    /* ===========================
       Counter Animation
    =========================== */

    const counters = document.querySelectorAll(".number");

    counters.forEach(counter=>{

        const text = counter.innerText;

        const value = parseInt(text);

        if(isNaN(value)) return;

        let current = 0;

        const interval = setInterval(()=>{

            current++;

            counter.innerText=current+"%";

            if(current>=value){

                counter.innerText=text;

                clearInterval(interval);

            }

        },18);

    });

    /* ===========================
       Scroll To Top Button
    =========================== */

    const topBtn=document.createElement("div");

    topBtn.innerHTML="↑";

    topBtn.className="top-button";

    document.body.appendChild(topBtn);

    topBtn.style.position="fixed";

    topBtn.style.right="25px";

    topBtn.style.bottom="25px";

    topBtn.style.width="50px";

    topBtn.style.height="50px";

    topBtn.style.borderRadius="50%";

    topBtn.style.background="#C8A24C";

    topBtn.style.color="#fff";

    topBtn.style.display="flex";

    topBtn.style.alignItems="center";

    topBtn.style.justifyContent="center";

    topBtn.style.cursor="pointer";

    topBtn.style.fontSize="22px";

    topBtn.style.opacity="0";

    topBtn.style.pointerEvents="none";

    topBtn.style.transition=".35s";

    topBtn.style.zIndex="999";

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topBtn.style.opacity="1";

            topBtn.style.pointerEvents="auto";

        }

        else{

            topBtn.style.opacity="0";

            topBtn.style.pointerEvents="none";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });
    /* Mobile Menu */

const mobileBtn = document.querySelector(".mobile-btn");
const navLinks = document.querySelector(".nav-links");

if (mobileBtn && navLinks) {

    mobileBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

}

});

/* ===========================================
END OF FILE
=========================================== */