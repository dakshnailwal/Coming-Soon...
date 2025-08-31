
        const modalOverlay = document.querySelector('.modal-overlay');
        const modalForm = document.getElementById('modal-form');

        function showModal() {
            modalOverlay.classList.add('visible');
        }

        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('modal-email');
            const userEmail = emailInput.value;
            alert(`A signal has been sent to ${userEmail}. Stay close.`);
            modalOverlay.classList.remove('visible');
            emailInput.value = '';
        });

        // Close modal when clicking outside
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {a
                modalOverlay.classList.remove('visible');
            }
        });

