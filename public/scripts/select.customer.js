const buttonWindowCustomer = document.querySelectorAll('.btn-window-select-customer')
buttonWindowCustomer.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.value === 'full_screen') {
            const window = document.getElementById('select-customer')
            window.classList.toggle('select-customer-max')
        }
        if (btn.value === 'close') {
            const selectCustomer = document.getElementById('modal-select-customer')
            selectCustomer.classList.remove('modal-select-customer-visible')
        }
    })
})