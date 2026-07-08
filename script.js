// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.style) {
            const animation = entry.target.dataset?.animation || 'fadeInUp 1s ease-out forwards';
            entry.target.style.animation = animation;
        }
    });
}, observerOptions);

// Observe elements for animation
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.countdown-box, .event-detail-item, .button-group').forEach(el => {
            observer.observe(el);
        });
    });
} else {
    document.querySelectorAll('.countdown-box, .event-detail-item, .button-group').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// SMOOTH SCROLL ON BUTTON CLICK
// ============================================
document.querySelector('.hero-btn').addEventListener('click', () => {
    document.querySelector('.countdown-section').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.querySelector('.countdown-section').scrollIntoView({ behavior: 'smooth' });
});

// ============================================
// COUNTDOWN TIMER
// ============================================
function updateCountdown() {
    // Target date: July 24, 2026, 7:30 AM
    const targetDate = new Date('2026-07-24T07:30:00').getTime();
    
    const updateTimer = () => {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;
        
        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            
            // Update DOM with padded values
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
            
            // Add pulse animation when seconds change
            animatePulse();
        } else {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    };
    
    // Update immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
}

function animatePulse() {
    const boxes = document.querySelectorAll('.countdown-number');
    boxes.forEach(box => {
        box.style.animation = 'none';
        // Trigger reflow
        void box.offsetWidth;
        box.style.animation = 'pulse 0.6s ease-out';
    });
}

// Add pulse animation keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); color: #FFD700; }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Start countdown on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCountdown);
} else {
    updateCountdown();
}

// ============================================
// BUTTON EVENT LISTENERS
// ============================================
document.querySelector('.btn-primary').addEventListener('click', () => {
    alert('Cách đến địa điểm sự kiện:\n\n280 Ân Dương Vương, Phường 4, Quận 5, TP.HCM\n\nMở Google Maps...');
    // In real app, you would open Google Maps
    window.open('https://maps.google.com/?q=280+Ân+Dương+Vương+Phường+4+Quận+5+TPHCM', '_blank');
});

document.querySelector('.btn-secondary').addEventListener('click', () => {
    // Create calendar event
    const eventDate = '20260724T073000';
    const eventEndDate = '20260724T103000';
    const eventTitle = 'Khác Kiệt Graduation Ceremony';
    const eventDescription = 'Lễ Tốt Nghiệp Khác Kiệt - Hội trường B';
    const eventLocation = '280 Ân Dương Vương, Phường 4, Quận 5, TP.HCM';
    
    // Google Calendar link
    const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(eventTitle)}&dates=${eventDate}/${eventEndDate}&location=${encodeURIComponent(eventLocation)}&details=${encodeURIComponent(eventDescription)}`;
    
    window.open(googleCalendarUrl, '_blank');
});

// ============================================
// PARALLAX EFFECT ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroHeight = hero.offsetHeight;
        if (scrollPosition < heroHeight) {
            hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    }
});

// ============================================
// ENHANCED SECTION VISIBILITY
// ============================================
const sections = document.querySelectorAll('section, footer');

sections.forEach((section, index) => {
    section.style.opacity = '0';
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.style.opacity === '0') {
                entry.target.style.transition = 'opacity 1s ease-out';
                entry.target.style.opacity = '1';
                
                // Add stagger effect to child elements
                const children = entry.target.querySelectorAll('*');
                children.forEach((child, childIndex) => {
                    if (!child.classList.contains('countdown-number')) {
                        child.style.animation = `fadeInUp ${0.6 + (childIndex * 0.05)}s ease-out`;
                    }
                });
            }
        });
    }, {
        threshold: 0.2
    });
    
    observer.observe(section);
});

// ============================================
// INTERACTIVE BUTTON EFFECTS
// ============================================
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 10px 30px rgba(180, 151, 66, 0.4)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
    
    button.addEventListener('click', function() {
        // Ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple effect styling
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    
    // Could be used for a progress bar
    document.documentElement.style.setProperty('--scroll-progress', scrolled + '%');
});

// ============================================
// FOOTER BACK TO TOP ANIMATION
// ============================================
document.querySelector('.footer').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// ACCESSIBILITY: REDUCE MOTION SUPPORT
// ============================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none !important';
        el.style.transition = 'none !important';
    });
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in-out';

// Force fade in after all resources loaded
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);

// ============================================
// RSVP FORM SUBMISSION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvpForm');
    const formMessage = document.getElementById('formMessage');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const attendance = document.querySelector('input[name="attendance"]:checked').value;
            const message = document.getElementById('message').value;
            
            // Show loading state
            const submitBtn = rsvpForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
            submitBtn.disabled = true;
            formMessage.textContent = '';
            
            // Create FormData object
            const formData = new FormData(rsvpForm);
            
            // Send form using fetch
            fetch(rsvpForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    // Success
                    formMessage.classList.remove('error');
                    formMessage.classList.add('success');
                    formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Xác nhận tham gia của bạn đã được gửi thành công! Kiểm tra email của bạn.';
                    rsvpForm.reset();
                    
                    // Scroll to message
                    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                formMessage.classList.remove('success');
                formMessage.classList.add('error');
                formMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp.';
                
                // Scroll to message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            })
            .finally(() => {
                // Restore button after 2 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            });
        });
    }
});
