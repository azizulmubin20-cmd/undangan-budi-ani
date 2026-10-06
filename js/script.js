// ================= DATA CLIENT =================
// Ganti data di bawah ini sesuai dengan client
const weddingData = {
    groom: {
        nickname: "[PRIA]",
        fullName: "[NAMA LENGKAP MEMPELAI PRIA]",
        description: "Putra dari Bapak [NAMA AYAH] & Ibu [NAMA IBU]"
    },
    bride: {
        nickname: "[WANITA]",
        fullName: "[NAMA LENGKAP MEMPELAI WANITA]",
        description: "Putri dari Bapak [NAMA AYAH] & Ibu [NAMA IBU]"
    },
    quote: {
        text: "“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri...”",
        source: "[SUMBER KUTIPAN / AR-RUM 21]"
    },
    events: {
        akad: {
            date: "Sabtu, [TANGGAL] [BULAN] [TAHUN]",
            time: "08:00 WIB - Selesai",
            location: "[LOKASI AKAD NIKAH, GEDUNG/MASJID]",
            mapUrl: "#URL_MAPS_AKAD"
        },
        resepsi: {
            date: "Sabtu, [TANGGAL] [BULAN] [TAHUN]",
            time: "11:00 WIB - 14:00 WIB",
            location: "[LOKASI RESEPSI, JALAN/GEDUNG]",
            mapUrl: "#URL_MAPS_RESEPSI"
        }
    },
    gift: {
        bankName: "[NAMA BANK]",
        accountNumber: "[1234567890]",
        accountName: "a.n [NAMA PEMILIK]",
        address: "[ALAMAT LENGKAP PENGIRIMAN HADIAH FISIK]"
    },
    story: [
        { year: "2020", title: "Pertama Bertemu", desc: "[CERITA SINGKAT PERTEMUAN]" },
        { year: "2022", title: "Menjalin Hubungan", desc: "[CERITA SINGKAT JADIAN]" },
        { year: "2023", title: "Lamaran", desc: "[CERITA SINGKAT LAMARAN]" }
    ],
    whatsapp: "[628XXXXXXXXXX]", // Nomor WA tujuan RSVP
    countdownDate: "Oct 31, 2026 08:00:00" // FORMAT: MMM DD, YYYY HH:MM:SS
};
// ===============================================

// DOM Elements & Initialization
document.addEventListener('DOMContentLoaded', () => {
    injectData();
    initOpeningScreen();
    initCountdown();
    initObserver();
    initNavScroll();
    initGallery();
    
    // Set Current Year in Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// 1. Inject Data Client ke HTML
function injectData() {
    // Names
    document.getElementById('os-groom').innerText = weddingData.groom.nickname;
    document.getElementById('os-bride').innerText = weddingData.bride.nickname;
    document.getElementById('hero-groom').innerText = weddingData.groom.nickname;
    document.getElementById('hero-bride').innerText = weddingData.bride.nickname;
    document.getElementById('footer-groom').innerText = weddingData.groom.nickname;
    document.getElementById('footer-bride').innerText = weddingData.bride.nickname;
    
    // Dates
    document.getElementById('hero-date').innerText = weddingData.events.akad.date;
    document.getElementById('footer-date').innerText = weddingData.events.akad.date;
    
    // Quote
    document.getElementById('quote-text').innerText = weddingData.quote.text;
    document.getElementById('quote-source').innerText = weddingData.quote.source;
    
    // Profiles
    document.getElementById('groom-name').innerText = weddingData.groom.fullName;
    document.getElementById('groom-desc').innerText = weddingData.groom.description;
    document.getElementById('bride-name').innerText = weddingData.bride.fullName;
    document.getElementById('bride-desc').innerText = weddingData.bride.description;
    
    // Events
    document.getElementById('akad-date').innerText = weddingData.events.akad.date;
    document.getElementById('akad-time').innerText = weddingData.events.akad.time;
    document.getElementById('akad-location').innerText = weddingData.events.akad.location;
    document.getElementById('akad-map').href = weddingData.events.akad.mapUrl;
    
    document.getElementById('resepsi-date').innerText = weddingData.events.resepsi.date;
    document.getElementById('resepsi-time').innerText = weddingData.events.resepsi.time;
    document.getElementById('resepsi-location').innerText = weddingData.events.resepsi.location;
    document.getElementById('resepsi-map').href = weddingData.events.resepsi.mapUrl;
    
    // Gift
    document.getElementById('bank-name').innerText = weddingData.gift.bankName;
    document.getElementById('bank-account').innerText = weddingData.gift.accountNumber;
    document.getElementById('bank-owner').innerText = weddingData.gift.accountName;
    document.getElementById('gift-address').innerText = weddingData.gift.address;
    
    // Story Timeline
    const timelineContainer = document.getElementById('timeline-container');
    timelineContainer.innerHTML = '';
    weddingData.story.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="timeline-item animate-on-scroll">
                <p class="timeline-year">${item.year}</p>
                <h4 class="timeline-title">${item.title}</h4>
                <p class="timeline-desc">${item.desc}</p>
            </div>
        `;
    });
}

// 2. Opening Screen & Audio Control
function initOpeningScreen() {
    const btnOpen = document.getElementById('btn-open-invitation');
    const openingScreen = document.getElementById('opening-screen');
    const mainContent = document.getElementById('main-content');
    const bottomNav = document.getElementById('bottom-nav');
    const musicControl = document.getElementById('music-control');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false;

    btnOpen.addEventListener('click', () => {
        openingScreen.classList.add('slide-up');
        setTimeout(() => {
            openingScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            bottomNav.classList.remove('hidden');
            musicControl.classList.remove('hidden');
            
            // Play Music
            bgMusic.play().then(() => { isPlaying = true; }).catch(e => console.log("Auto-play prevented"));
        }, 800);
    });

    musicControl.addEventListener('click', () => {
        const icon = musicControl.querySelector('i');
        if (isPlaying) {
            bgMusic.pause();
            icon.classList.replace('ph-speaker-high', 'ph-speaker-slash');
        } else {
            bgMusic.play();
            icon.classList.replace('ph-speaker-slash', 'ph-speaker-high');
        }
        isPlaying = !isPlaying;
    });
}

// 3. Countdown Timer
function initCountdown() {
    const countDownDate = new Date(weddingData.countdownDate).getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("cd-days").innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("cd-days").innerText = days < 10 ? '0'+days : days;
        document.getElementById("cd-hours").innerText = hours < 10 ? '0'+hours : hours;
        document.getElementById("cd-minutes").innerText = minutes < 10 ? '0'+minutes : minutes;
        document.getElementById("cd-seconds").innerText = seconds < 10 ? '0'+seconds : seconds;
    }, 1000);
}

// 4. Scroll Animation (Intersection Observer)
function initObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// 5. Active Navigation on Scroll
function initNavScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// 6. Gallery Lightbox
function initGallery() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const images = document.querySelectorAll('.gallery-img');
    const closeBtn = document.querySelector('.lightbox-close');

    images.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', () => lightbox.classList.add('hidden'));
    lightbox.addEventListener('click', (e) => {
        if(e.target !== lightboxImg) lightbox.classList.add('hidden');
    });
}

// 7. Copy Rekening
window.copyRekening = function() {
    const account = weddingData.gift.accountNumber;
    navigator.clipboard.writeText(account).then(() => {
        alert("Nomor rekening berhasil disalin: " + account);
    });
}

// 8. RSVP WhatsApp Logic
document.getElementById('btn-rsvp-wa').addEventListener('click', () => {
    const name = document.getElementById('rsvp-name').value;
    const status = document.getElementById('rsvp-status').value;
    const pax = document.getElementById('rsvp-pax').value;
    const message = document.getElementById('rsvp-message').value;

    if (!name || !status) {
        alert("Mohon isi Nama dan Konfirmasi Kehadiran.");
        return;
    }

    const text = `Halo, saya ${name}.%0A%0ASaya ingin mengkonfirmasi bahwa saya *${status}* undangan pernikahan ini.%0AJumlah tamu: ${pax} orang.%0A%0AUcapan: ${message}`;
    const waUrl = `https://wa.me/${weddingData.whatsapp}?text=${text}`;
    
    window.open(waUrl, '_blank');
});