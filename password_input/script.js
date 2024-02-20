console.log('connecté')

const toggleInputType = (event) => {
    const target = event.target
    const passwordWrapper = target.closest('.password-wrapper')
    const passwordInput = passwordWrapper.querySelector('.password-input')
    const passwordInputType = passwordInput.type

    if(passwordInputType === 'password') {
        passwordInput.type = 'text'
        target.classList.add('active')
        return
    }

    passwordInput.type = 'password'
    target.classList.remove('active')
}