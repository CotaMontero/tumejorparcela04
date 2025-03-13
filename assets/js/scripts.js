//JS Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentSlide = 0;
    
    function showSlide(index) {
        // Ocultar todos los slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Mostrar el slide actual
        slides[index].classList.add('active');
        
        // Actualizar dots
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event Listeners
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Click en los dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto play
    // setInterval(nextSlide, 5000);

    // Mostrar el primer slide
    showSlide(currentSlide);
}); 

//JS Gallery scroll horizontal
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    gallery.addEventListener('mousedown', (e) => {
        isDown = true;
        gallery.classList.add('active');
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mouseleave', () => {
        isDown = false;
        gallery.classList.remove('active');
    });

    gallery.addEventListener('mouseup', () => {
        isDown = false;
        gallery.classList.remove('active');
    });

    gallery.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2; // * 2 para hacer el scroll más rápido
        gallery.scrollLeft = scrollLeft - walk;
    });

    // Touch events (mantener estos también)
    gallery.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
        gallery.classList.add('active');
    });

    gallery.addEventListener('touchend', () => {
        gallery.classList.remove('active');
    });

    gallery.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const x = e.touches[0].pageX - gallery.offsetLeft;
        const walk = (x - startX);
        gallery.scrollLeft = scrollLeft - walk;
    });
}); 

//JS openPhoto
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");
    const prevButton = document.querySelector(".modal-arrow.prev");
    const nextButton = document.querySelector(".modal-arrow.next");

    let currentGalleryItems = []; // Array para almacenar las imágenes de la galería actual
    let currentImageIndex = 0; // Índice de la imagen actual en el modal

    function openModal(imageSrc, galleryItems, index) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
        currentGalleryItems = galleryItems;
        currentImageIndex = index;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    prevButton.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
        modalImg.src = currentGalleryItems[currentImageIndex].src;
    });

    nextButton.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % currentGalleryItems.length;
        modalImg.src = currentGalleryItems[currentImageIndex].src;
    });

    const allGalleries = document.querySelectorAll(".gallery-container");

    allGalleries.forEach(gallery => {
        const galleryItems = gallery.querySelectorAll(".gallery-item img");

        galleryItems.forEach((image, index) => {
            image.addEventListener("click", () => {
                openModal(image.src, galleryItems, index);
            });
        });
    });
});


