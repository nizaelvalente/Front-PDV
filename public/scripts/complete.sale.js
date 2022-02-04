const buttonsWindowCompleteSale = document.querySelectorAll('.btn-window-complete-sale')
const buttonsActionCompleteSale = document.querySelectorAll('.btn-action-complete-sale')
const modalCompleteSale = document.getElementById('modal-complete-sale')

buttonsWindowCompleteSale.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        if(btn.value ==='close'){
            modalCompleteSale.classList.remove('modal-complete-sale-visible')
        }
    })
})

buttonsActionCompleteSale.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        if(btn.value ==='complete_sale_cancel'){
            modalCompleteSale.classList.remove('modal-complete-sale-visible')
        }
    })
})