// Savings Interest Calculator
function calculateSavingsInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please fill in all fields');
        return;
    }

    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    document.getElementById('savingsResult').innerHTML = `
        <p>Interest: ₹${interest.toFixed(2)}</p>
        <p>Total Amount: ₹${totalAmount.toFixed(2)}</p>
    `;
}

// FD Interest Calculator
function calculateFDInterest() {
    const fdPrincipal = parseFloat(document.getElementById('fdPrincipal').value);
    const fdRate = parseFloat(document.getElementById('fdRate').value);
    const fdTime = parseFloat(document.getElementById('fdTime').value);

    if (isNaN(fdPrincipal) || isNaN(fdRate) || isNaN(fdTime)) {
        alert('Please fill in all fields');
        return;
    }

    const fdInterest = (fdPrincipal * fdRate * fdTime) / 100;
    const fdTotalAmount = fdPrincipal + fdInterest;

    document.getElementById('fdResult').innerHTML = `
        <p>Interest: ₹${fdInterest.toFixed(2)}</p>
        <p>Total Amount: ₹${fdTotalAmount.toFixed(2)}</p>
    `;
}

// FAQ Toggle Functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('faq-answer-visible');
    });
});



