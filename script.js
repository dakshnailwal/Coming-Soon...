
        document.querySelector('.email-form').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = document.getElementById('email-input');
            const userEmail = emailInput.value;
            alert(`A signal has been sent to ${userEmail}. Stay close.`);
            emailInput.value = '';
        });
  