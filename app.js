const nameError = document.getElementById('name-error')
const phoneError = document.getElementById('phone-error')
const emailError = document.getElementById('email-error')
const messageError = document.getElementById('message-error')
const submitError = document.getElementById('submit-error')

const validateName = document.getElementById('contact-name')
const validatePhone = document.getElementById('contact-phone')
const validateEmail = document.getElementById('contact-email')
const validateMessage = document.getElementById('contact-message')

const btnSubmit = document.getElementById('btnSubmit')

function validateNameField() {
    const inputNameValue = validateName.value
    if (inputNameValue.length === 0) {
        nameError.innerText = 'Name is required'
        return false
    }
    if (!inputNameValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerText = 'Write full name'
        return false
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true
}

function validatePhoneField() {
    const inputPhoneValue = validatePhone.value
    if (inputPhoneValue.length == 0) {
        phoneError.innerText = 'Phone is required'
        return false
    }
    if (!inputPhoneValue.match(/^[0-9]{10}$/)) {
        phoneError.innerText = 'Phone number should be exactly 10 digits and only numbers'
        return false
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true
}

function validateEmailField() {
    const inputEmailValue = validateEmail.value
    if (inputEmailValue.length == 0) {
        emailError.innerText = 'Email is required'
        return false
    }
    if (!inputEmailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerText = 'Email Invalid'
        return false
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true
}

function validateMessageField() {
    const inputMessageValue = validateMessage.value
    const required = 30
    const left = required - inputMessageValue.length

    if (left > 0) {
        messageError.innerText = left + ' more characters required'
        return false
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true
}

validateName.addEventListener('keyup', validateNameField)
validatePhone.addEventListener('keyup', validatePhoneField)
validateEmail.addEventListener('keyup', validateEmailField)
validateMessage.addEventListener('keyup', validateMessageField)

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    const isNameValid = validateNameField()
    const isPhoneValid = validatePhoneField()
    const isEmailValid = validateEmailField()
    const isMessageValid = validateMessageField()

    if (isNameValid && isPhoneValid && isEmailValid && isMessageValid) {
        submitError.innerHTML = '<i class="fas fa-check-circle"></i>'
        submitError.innerText = 'Form submitted successfully'
        // Gửi biểu mẫu hoặc thực hiện hành động bạn muốn
    } else {
        submitError.innerText = 'Please fix errors to submit'
    }
})
