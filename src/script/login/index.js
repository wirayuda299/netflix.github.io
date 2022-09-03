
const emailInput = document.getElementById('emailLogin'),
    passwordInput = document.getElementById('passwordLogin'),
    email = localStorage.getItem('email'),
    password = localStorage.getItem('password'),
    alerttxt = document.getElementById('alert'),
    emailwarn = document.getElementById('emailWarn'),
    passwarn = document.getElementById('passWarn'),
    loginBtn = document.querySelector('.signinButton')


loginBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (emailInput.value === '') {
        emailwarn.innerHTML = '<small>Masukkan email atau nomor telepon yang valid.</small>'
        if (passwordInput.value === '') {
            passwarn.innerHTML = '<small>Sandi harus berisi antara 4 hingga 60 karakter.</small>'
        }
    } else if (emailInput.value !== email) {
        alerttxt.innerHTML =
            `<div class="alert text-white" role="alert" style='background: #e87c03; width: 18rem'>
                <small>Maaf, kami tidak dapat menemukan akun dengan alamat email ini.<br>  Coba lagi atau buat akun baru</small>
             </div>`
    } else if (passwordInput !== password) {
        alerttxt.innerHTML =
            `<div class="alert text-white" role="alert" style='background: #e87c03; width: 18rem'>
                <small>Sandi salah. Coba lagi atau atur ulang sandi.</small>
             </div>`
    }

})