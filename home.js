// Card Hearts
function addHeart(){ 
    const navbarHeart = document.getElementById('navbar-heart')
    let counting = parseInt(navbarHeart.innerText)
    counting ++ 
    navbarHeart.innerText = counting    
}

function cardCall(event){
    const navbarCoin = document.getElementById('navbar-coin')
    let negCount = parseInt(navbarCoin.innerText)

    if(negCount >= 20){
        negCount -= 20
        navbarCoin.innerText = negCount 

        // find the card that triggered the call
        const card = event.target.closest('.card-body')
        const shortName = card.querySelector('.service-name').innerText
        const hotline = card.querySelector('.service-number').innerText

        alert(`📞 Calling: ${shortName} at ${hotline}`)
    }
    else{
        alert('Cant make call')
    } 
}

for (let i = 1; i <= 9; i++){
    document.getElementById(`card-heart${i}`).addEventListener('click', addHeart)
    document.getElementById(`card-call${i}`).addEventListener('click', cardCall)
}

// Copying Hotline
document.getElementById('copy-btn1').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline1').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied: ' + hotlineNumber)
        const copyNumber = document.getElementById('navbar-copy')
        let counting2 = parseInt(copyNumber.innerText)
        counting2 ++
        copyNumber.innerText = counting2
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn2').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline2').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied: ' + hotlineNumber)
        const copyNumber = document.getElementById('navbar-copy')
        let counting2 = parseInt(copyNumber.innerText)
        counting2 ++
        copyNumber.innerText = counting2
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn3').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline3').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied: ' + hotlineNumber)
        const copyNumber = document.getElementById('navbar-copy')
        let counting2 = parseInt(copyNumber.innerText)
        counting2 ++
        copyNumber.innerText = counting2
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn4').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline4').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied: ' + hotlineNumber)
        const copyNumber = document.getElementById('navbar-copy')
        let counting2 = parseInt(copyNumber.innerText)
        counting2 ++
        copyNumber.innerText = counting2
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn5').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline5').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied: ' + hotlineNumber)
        const copyNumber = document.getElementById('navbar-copy')
        let counting2 = parseInt(copyNumber.innerText)
        counting2 ++
        copyNumber.innerText = counting2
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn6').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline6').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied: ' + hotlineNumber)
        const copyNumber = document.getElementById('navbar-copy')
        let counting2 = parseInt(copyNumber.innerText)
        counting2 ++
        copyNumber.innerText = counting2
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn7').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline7').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied: ' + hotlineNumber)
        const copyNumber = document.getElementById('navbar-copy')
        let counting2 = parseInt(copyNumber.innerText)
        counting2 ++
        copyNumber.innerText = counting2
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn8').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline8').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied: ' + hotlineNumber)
        const copyNumber = document.getElementById('navbar-copy')
        let counting2 = parseInt(copyNumber.innerText)
        counting2 ++
        copyNumber.innerText = counting2
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn9').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline9').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied: ' + hotlineNumber)
        const copyNumber = document.getElementById('navbar-copy')
        let counting2 = parseInt(copyNumber.innerText)
        counting2 ++
        copyNumber.innerText = counting2
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})

// Card History
let callHistoryCount = 0
const historyList = document.getElementById('call-history-list')
const clearBtn = document.getElementById('clear-history').querySelector('span')

const historyListMobile = document.getElementById('call-history-list-mobile')
const clearBtnMobile = document.getElementById('clear-history-mobile').querySelector('span')

document.querySelectorAll('.history-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    if (callHistoryCount == 5){
        return
    }
    const card = btn.closest('.card-body')
    const serviceName = card.querySelector('.service-name').innerText
    const serviceNumber = card.querySelector('.service-number').innerText
    
    const now = new Date()
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit'} 
    const callTime = now.toLocaleTimeString([], options)
    const entry = document.createElement('div')

    entry.className = "call-entry"
    entry.innerHTML = `
      <div class="details">
        <div class="name">${serviceName}</div>
        <div class="number">${serviceNumber}</div>
      </div>
      <div class="time">${callTime}</div>
    `
    historyList.prepend(entry.cloneNode(true))
    historyListMobile.prepend(entry)  
    callHistoryCount ++ 
  })
})

document.getElementById('clear-history').addEventListener('click', function () {
  historyList.innerHTML = ''
  historyListMobile.innerHTML = ''
  clearBtn.innerText = 'Clear'
})

document.getElementById('clear-history-mobile').addEventListener('click', function () {
  historyListMobile.innerHTML = ''
  historyList.innerHTML = ''
  clearBtnMobile.innerText = 'Clear'
})