// Authentication State & Security Password Controls
window.AuthHandler = {
    switchAuthMode: function(mode) {
        Portal.isLoginMode = (mode === 'login');
        const signupFields = document.querySelectorAll('.signup-only');
        if (Portal.isLoginMode) {
            document.getElementById('tab-login').classList.add('active');
            document.getElementById('tab-signup').classList.remove('active');
            document.getElementById('btn-page-1-submit').innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Log In via Cloud';
            signupFields.forEach(field => { field.style.display = 'none'; field.querySelector('input')?.removeAttribute('required'); });
        } else {
            document.getElementById('tab-signup').classList.add('active');
            document.getElementById('tab-login').classList.remove('active');
            document.getElementById('btn-page-1-submit').innerHTML = '<i class="fa-solid fa-arrow-right"></i> Proceed to Role & Location';
            signupFields.forEach(field => { field.style.display = 'block'; field.querySelector('input')?.setAttribute('required', 'true'); });
        }
    },

    togglePasswordVisibility: function(id, icon) {
        const i = document.getElementById(id);
        if (i.type === 'password') { i.type = 'text'; icon.classList.replace('fa-eye', 'fa-eye-slash'); }
        else { i.type = 'password'; icon.classList.replace('fa-eye-slash', 'fa-eye'); }
    }
};
