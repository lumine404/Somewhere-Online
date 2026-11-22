const questions = document.querySelectorAll(".faq-question");
const answers = document.querySelectorAll('.faq-answer');

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
       
        const answer = answers[index];
        const icon = question.querySelector('span');

        const isOpen = answer.classList.toggle('show'); 
        
        if (isOpen) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
        question.setAttribute('aria-expanded', String(isOpen));

    });
});

const container = document.querySelector(".marquee-container");
const track = document.querySelector(".marquee-track");
const group = document.querySelector(".marquee-group");

const duplicate = group.cloneNode(true);
track.appendChild(duplicate);

const loopWidth = group.offsetWidth;
let pos = 0;
const speed = 0.3;
let isPaused = false;


container.addEventListener("mouseenter", () => {
    isPaused = true;
});

container.addEventListener("mouseleave", () => {
    isPaused = false;
});

function animate() {
    if(!isPaused){
        pos += speed;

        if (pos >= loopWidth) {
            pos -= loopWidth;
        }
        track.style.transform = `translateX(${-pos}px)`;
    }
    
    requestAnimationFrame(animate);
}
animate();