const questions = document.querySelectorAll('.faq-question');
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