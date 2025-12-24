const nameInput = document.getElementById('nameInput');
const inputSection = document.getElementById('inputSection');
const envelopeWrapper = document.getElementById('envelopeWrapper');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const errorMsg = document.getElementById('errorMsg');
const video = document.getElementById('giftVideo');

nameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkName();
    }
});

function checkName() {
    const name = nameInput.value.trim().toLowerCase();
    
    if (name === '') {
        errorMsg.textContent = 'Please enter a name';
        return;
    }
    
    if (name === 'Elizabeth') {
        errorMsg.textContent = '';
        inputSection.style.display = 'none';
        envelopeWrapper.classList.add('show');
    } else {
        errorMsg.textContent = 'This message isn\'t for you... 💔';
    }
}

function openEnvelope() {
    envelope.classList.add('opening');
    
    setTimeout(() => {
        envelopeWrapper.style.display = 'none';
        letter.classList.add('show');
        video.play().catch(e => console.log('Video autoplay prevented:', e));
    }, 1000);
}
