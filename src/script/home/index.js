const getStartedinput = document.getElementById('getStarted'),
    getStartedButton = document.getElementById('startButton'),
    warn = document.getElementById('warn'),
    emaildaftar = document.getElementById('emailDaftar')
console.log(emaildaftar)

getStartedButton.addEventListener('click', (e) => {
    e.preventDefault()
    const isEmpty = getStartedinput.value === ''
    if (isEmpty) {
        warn.innerText = 'input tidak boleh kosong'
    } else {
        location.replace('../../../public/register/register.html')
        return emaildaftar.value = getStartedinput.value
    }

})