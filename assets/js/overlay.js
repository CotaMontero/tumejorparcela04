document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-proximos');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            const modal = this.nextElementSibling;
            if (modal.classList.contains('overlay-proximo')) {
                modal.style.visibility = 'visible'; /* Mostrar el modal */
                modal.style.opacity = '1'; /* Hacerlo visible con opacidad */
            }
        });
        button.addEventListener('mouseout', function() {
            const modal = this.nextElementSibling;
            if (modal.classList.contains('overlay-proximo')) {
                modal.style.visibility = 'hidden'; /* Ocultar el modal */
                modal.style.opacity = '0'; /* Hacerlo invisible con opacidad */
            }
        });
    });
});
