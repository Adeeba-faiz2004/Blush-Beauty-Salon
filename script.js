// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  const icon = menuBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
  });
});

// Booking Form → WhatsApp (only automation for contact)
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const message = document.getElementById('message').value.trim();

  let text = `*New Booking – Blush Beauty by Sajida*%0A%0A`;
  text += `*Name:* ${name}%0A`;
  text += `*Phone:* ${phone}%0A`;
  text += `*Service:* ${service}%0A`;
  if (date) text += `*Preferred Date:* ${date}%0A`;
  if (message) text += `*Message:* ${message}%0A`;
  text += `%0A_Sent from Website_`;

  const btn = document.getElementById('submitBtn');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Opening WhatsApp...';
  btn.disabled = true;

  setTimeout(() => {
    window.open(`https://wa.me/923422149499?text=${text}`, '_blank');
    btn.innerHTML = '<i class="fab fa-whatsapp text-2xl mr-3"></i> Send Booking Request';
    btn.disabled = false;
  }, 500);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Scroll fade-in animation (automation)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Fallback images for video thumbnails if YouTube thumbnails are unavailable.
document.querySelectorAll('img[data-fallback]').forEach((image) => {
  image.addEventListener('error', () => {
    if (image.src !== image.dataset.fallback) {
      image.src = image.dataset.fallback;
    }
  });
});
