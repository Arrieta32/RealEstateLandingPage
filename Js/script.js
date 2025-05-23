document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            let valid = true;
            let errorMsg = '';

            // Ejemplo de validación: campos requeridos
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(function (field) {
                if (!field.value.trim()) {
                    valid = false;
                    errorMsg += `El campo "${field.name}" es obligatorio.\n`;
                }
            });

            // Puedes agregar más validaciones aquí (email, teléfono, etc.)

            if (!valid) {
                e.preventDefault();
                alert(errorMsg);
            }
        });
    }
});