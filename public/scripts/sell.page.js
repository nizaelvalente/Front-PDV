const buttonActionSell = document.querySelectorAll('.btn-action-sell')
buttonActionSell.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.value === 'select_customer') {
            const selectCustomer = document.getElementById('modal-select-customer')
            selectCustomer.classList.add('modal-select-customer-visible')
        }

        if (btn.value === 'conclude_sale') {
            const concludeSale = document.getElementById('modal-complete-sale')
            concludeSale.classList.add('modal-complete-sale-visible')
        }
        if (btn.value === 'close') {
            const sellPage = document.getElementById('sell-page')
            sellPage.classList.remove('sell-page-visible')
        }
    })
})

const buttonWindowSell = document.querySelectorAll('.btn-window-sell')
buttonWindowSell.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.value === 'close') {
            const sellPage = document.getElementById('sell-page')
            sellPage.classList.remove('sell-page-visible')
        }
    })
})

inputSellCodeBar = document.getElementById('in-sell-bar-code')

let totalPay = 0,
    returnedValue = 0,
    amountReceived = 0,
    transactionType = 'sale',
    productList = [],
    discountAmount0,
    type = 'product',
    seller = 'Valente',
    cashier = 'Valente',
    deliveryDate = new Date(),
    customer = 'Anomimo',
    observation = '',
    commissionAmount = 0
