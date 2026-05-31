// Fungsi scroll ke section contact
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Pesan selamat datang
window.addEventListener('load', function() {
    console.log('Website berhasil dimuat!');
});
