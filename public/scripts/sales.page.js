const buttonActionSales = document.querySelectorAll('.btn-action-sales')

buttonActionSales.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        if(btn.value ==='Sale' || btn.value==='Order'){
            const sellPage = document.getElementById('sell-page')
            const inBarCode =document.getElementById('in-sell-bar-code')
            inBarCode.focus()
            sellPage.classList.add('sell-page-visible')
        }
    })
})