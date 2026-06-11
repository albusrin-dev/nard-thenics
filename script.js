document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. MOBILE RESPONSIVE NAVIGATION MENU
    // ==========================================================================
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.style.display === 'flex';
            
            if (isOpen) {
                navMenu.style.display = 'none';
                menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = 'rgba(11, 12, 16, 0.98)';
                navMenu.style.padding = '2rem 1.5rem';
                navMenu.style.gap = '1.5rem';
                navMenu.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
                
                menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            }
        });
    }

    // ==========================================================================
    // 2. E-COMMERCE AUTOMATIC SELECTION & SCROLL ENGINE
    // ==========================================================================
    const productTriggers = document.querySelectorAll('.buy-trigger');
    const selectedField = document.getElementById('selected-product-field');

    if (productTriggers && selectedField) {
        productTriggers.forEach(button => {
            button.addEventListener('click', () => {
                // Fetch product data parameter from target card template element
                const productName = button.getAttribute('data-product');
                
                // Inject selection into readonly submission ledger field
                selectedField.value = `Ordering: ${productName}`;
                
                // Automatically scroll screen viewport down smoothly to form execution point
                document.getElementById('order-anchor').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            });
        });
    }

    // ==========================================================================
    // 3. STORE REGISTRY & PRE-ORDER FORM SUBMISSION
    // ==========================================================================
    const waitlistForm = document.getElementById('waitlistForm');

    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const clientName = document.getElementById('waitlist-name').value;
            const clientPhone = document.getElementById('waitlist-phone').value;
            let currentSelection = selectedField.value || "General Store Inquiry";

            // Clean up text display for the confirmation modal
            currentSelection = currentSelection.replace('Ordering: ', '');

            showHardcoreConfirmationModal(
                `⚡ RESERVATION SECURED!`,
                `Salamat, <strong>${clientName}</strong>! Inilagay na namin ang mobile number mo (${clientPhone}) sa priority pipeline natin para sa <strong>${currentSelection}</strong>.`,
                `Coach Nelson's fulfillment team will text you directly within 24 hours to arrange payment methods and delivery dispatch details from Victoria, Tarlac.`
            );

            waitlistForm.reset();
        });
    }

    // ==========================================================================
    // 4. ELITE COACHING INTAKE SYSTEM (THE DM FILTER)
    // ==========================================================================
    const coachingForm = document.getElementById('coachingApplicationForm');

    if (coachingForm) {
        coachingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('client-name').value;
            const phone = document.getElementById('client-phone').value;
            const goalSelect = document.getElementById('fitness-goal');
            const goalText = goalSelect.options[goalSelect.selectedIndex].text;
            const struggle = document.getElementById('current-struggle').value;

            // Generate unique intake identifier
            const assessmentId = 'PC-' + Math.floor(1000 + Math.random() * 9000);

            showHardcoreConfirmationModal(
                `🏋️ APPLICATION RECEIVED!`,
                `Solid choice, <strong>${name}</strong>! Your application profile for <strong>"${goalText}"</strong> has been uploaded to Coach Nelson's review queue.`,
                `<strong>Your Assessment ID is ${assessmentId}</strong>. Coach Nelson or an assistant from the Ronel's Fitness core pipeline will review your hurdles within 24 hours. Humanda ka na para sa susunod na <strong>Physique Check!</strong>`
            );

            coachingForm.reset();
        });
    }

    // ==========================================================================
    // 5. HARDCORE FITNESS CONFIRMATION MODAL SYSTEM
    // ==========================================================================
    function showHardcoreConfirmationModal(title, bodyText, noticeText) {
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'fitness-modal-overlay';
        
        modalOverlay.style.position = 'fixed';
        modalOverlay.style.top = '0';
        modalOverlay.style.left = '0';
        modalOverlay.style.width = '100%';
        modalOverlay.style.height = '100%';
        modalOverlay.style.backgroundColor = 'rgba(11, 12, 16, 0.95)';
        modalOverlay.style.display = 'flex';
        modalOverlay.style.alignItems = 'center';
        modalOverlay.style.justifyContent = 'center';
        modalOverlay.style.zIndex = '9999';
        modalOverlay.style.padding = '1.5rem';

        const modalBox = `
            <div style="background: #1f2833; border: 2px solid #ccff00; max-width: 500px; width: 100%; padding: 2.5rem; border-radius: 8px; color: #fff; font-family: 'Poppins', sans-serif; box-shadow: 0 0 30px rgba(204, 255, 0, 0.2); text-align: center;">
                <div style="font-size: 3rem; color: #ccff00; margin-bottom: 1rem;"><i class="fa-solid fa-bolt"></i></div>
                <h3 style="font-family: 'Oswald', sans-serif; font-size: 1.8rem; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 1rem; color: #fff;">${title}</h3>
                <p style="font-size: 0.95rem; line-height: 1.6; color: #f3f4f6; margin-bottom: 1.5rem;">${bodyText}</p>
                <p style="font-size: 0.85rem; line-height: 1.5; color: #9ca3af; background: #0b0c10; padding: 1rem; border-left: 3px solid #ccff00; text-align: left; margin-bottom: 2rem;">${noticeText}</p>
                <button id="modalDismissBtn" style="width: 100%; background: #ccff00; color: #0b0c10; border: none; padding: 1rem; font-family: 'Oswald', sans-serif; font-weight: 700; text-transform: uppercase; font-size: 1.1rem; letter-spacing: 1px; border-radius: 4px; cursor: pointer; transition: 0.2s;">
                    LET'S GO!
                </button>
            </div>
        `;

        modalOverlay.innerHTML = modalBox;
        document.body.appendChild(modalOverlay);

        document.getElementById('modalDismissBtn').addEventListener('click', () => {
            modalOverlay.remove();
        });
    }
});