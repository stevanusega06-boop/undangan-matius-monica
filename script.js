/* =====================================
   MUSIC
===================================== */

const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;


/* =====================================
   BUKA UNDANGAN
===================================== */

openBtn.addEventListener("click", function () {

    // Mulai musik
    music.play()
        .then(function () {

            musicPlaying = true;

            musicBtn.innerHTML = "♫";

        })
        .catch(function (error) {

            console.log("Musik gagal:", error);

        });


    // Jalankan animasi cover
    cover.classList.add("opened");


    // Setelah animasi, scroll ke slide 2
    setTimeout(function () {

        document.querySelector(".intro").scrollIntoView({
            behavior: "smooth"
        });

    }, 500);

});


/* =====================================
   KEMBALI KE COVER
===================================== */

window.addEventListener("scroll", function () {

    // Kalau sudah kembali ke paling atas
    if (window.scrollY <= 50) {

        cover.classList.remove("opened");

    }

});

openBtn.addEventListener("click", function () {

    /* =========================
       PLAY MUSIC
    ========================= */

    music.play()
        .then(function () {

            musicPlaying = true;

            musicBtn.innerHTML = "♫";

        })
        .catch(function (error) {

            console.log(
                "Musik tidak dapat dimainkan:",
                error
            );

        });


    /* =========================
       ANIMASI COVER
    ========================= */

    const cover =
        document.getElementById("cover");


    cover.classList.add("opened");


    /* =========================
       PINDAH KE SLIDE INTRO
    ========================= */

    setTimeout(function () {

        document.querySelector(".intro")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 500);

});


/* =========================
   TOGGLE MUSIC
========================= */

musicBtn.addEventListener("click", function () {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicBtn.innerHTML = "🔇";

    } else {

        music.play();

        musicPlaying = true;

        musicBtn.innerHTML = "♫";

    }

});


/* =====================================
   COUNTDOWN
===================================== */


/*
    GANTI TANGGAL DI SINI

    Format:

    Tahun-Bulan-Tanggal Jam:Menit:Detik

*/

const weddingDate =
    new Date(
        "November 11, 2026 09:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days")
            .innerHTML = "00";

        document.getElementById("hours")
            .innerHTML = "00";

        document.getElementById("minutes")
            .innerHTML = "00";

        document.getElementById("seconds")
            .innerHTML = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60))
            /
            1000
        );


    document.getElementById("days")
        .innerHTML =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .innerHTML =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .innerHTML =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .innerHTML =
        String(seconds).padStart(2, "0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =====================================
   ANIMASI SAAT SLIDE MASUK
===================================== */

const slides =
    document.querySelectorAll(".slide");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        const content =
                            entry.target
                                .querySelector(
                                    ".content"
                                );

                        if (content) {

                            content.style.animation =
                                "none";

                            content.offsetHeight;

                            content.style.animation =
                                "fadeUp 1s ease both";

                        }

                    }

                }
            );

        },

        {
            threshold: 0.4
        }

    );


slides.forEach(
    function (slide) {

        observer.observe(slide);

    }
);