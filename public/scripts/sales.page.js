const buttonActionSales = document.querySelectorAll('.btn-action-sales')
const sellPage = document.getElementById('sell-page')
const inBarCode = document.getElementById('in-sell-bar-code')

buttonActionSales.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.value === 'Sale' || btn.value === 'Order') {
            sellPage.classList.add('sell-page-visible')
            inBarCode.focus()
        }
    })
})

