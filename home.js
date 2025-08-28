// Card Hearts

document.getElementById('card-heart1').addEventListener('click', function(e){ 
    e.preventDefault()
    const navbarHeart = document.getElementById('navbar-heart')
    let counting = parseInt(navbarHeart.innerText)
    counting ++ 
    navbarHeart.innerText = counting
    
})
document.getElementById('card-heart2').addEventListener('click', function(e){ 
    e.preventDefault()
    const navbarHeart = document.getElementById('navbar-heart')
    let counting = parseInt(navbarHeart.innerText)
    counting ++ 
    navbarHeart.innerText = counting
    
})
document.getElementById('card-heart3').addEventListener('click', function(e){ 
    e.preventDefault()
    const navbarHeart = document.getElementById('navbar-heart')
    let counting = parseInt(navbarHeart.innerText)
    counting ++ 
    navbarHeart.innerText = counting
    
})
document.getElementById('card-heart4').addEventListener('click', function(e){ 
    e.preventDefault()
    const navbarHeart = document.getElementById('navbar-heart')
    let counting = parseInt(navbarHeart.innerText)
    counting ++ 
    navbarHeart.innerText = counting
    
})
document.getElementById('card-heart5').addEventListener('click', function(e){ 
    e.preventDefault()
    const navbarHeart = document.getElementById('navbar-heart')
    let counting = parseInt(navbarHeart.innerText)
    counting ++ 
    navbarHeart.innerText = counting
    
})
document.getElementById('card-heart6').addEventListener('click', function(e){ 
    e.preventDefault()
    const navbarHeart = document.getElementById('navbar-heart')
    let counting = parseInt(navbarHeart.innerText)
    counting ++ 
    navbarHeart.innerText = counting
    
})
document.getElementById('card-heart7').addEventListener('click', function(e){ 
    e.preventDefault()
    const navbarHeart = document.getElementById('navbar-heart')
    let counting = parseInt(navbarHeart.innerText)
    counting ++ 
    navbarHeart.innerText = counting
    
})
document.getElementById('card-heart8').addEventListener('click', function(e){ 
    e.preventDefault()
    const navbarHeart = document.getElementById('navbar-heart')
    let counting = parseInt(navbarHeart.innerText)
    counting ++ 
    navbarHeart.innerText = counting
    
})
document.getElementById('card-heart9').addEventListener('click', function(e){ 
    e.preventDefault()
    const navbarHeart = document.getElementById('navbar-heart')
    let counting = parseInt(navbarHeart.innerText)
    counting ++ 
    navbarHeart.innerText = counting
    
})

// Card Call
document.getElementById('card-call1').addEventListener('click', function() {
    const navbarCoin = document.getElementById('navbar-coin')
    let negCount = parseInt(navbarCoin.innerText)
    if(navbarCoin.innerText > 20){
        negCount = negCount - 20
        navbarCoin.innerText = negCount
    }
    else{
        alert('Cant make call')
    } 
})
document.getElementById('card-call2').addEventListener('click', function() {
    const navbarCoin = document.getElementById('navbar-coin')
    let negCount = parseInt(navbarCoin.innerText)
    if(navbarCoin.innerText > 20){
        negCount = negCount - 20
        navbarCoin.innerText = negCount
    }
    else{
        alert('Cant make call')
    } 
})
document.getElementById('card-call3').addEventListener('click', function() {
    const navbarCoin = document.getElementById('navbar-coin')
    let negCount = parseInt(navbarCoin.innerText)
    if(navbarCoin.innerText > 20){
        negCount = negCount - 20
        navbarCoin.innerText = negCount
    }
    else{
        alert('Cant make call')
    } 
})
document.getElementById('card-call4').addEventListener('click', function() {
    const navbarCoin = document.getElementById('navbar-coin')
    let negCount = parseInt(navbarCoin.innerText)
    if(navbarCoin.innerText > 20){
        negCount = negCount - 20
        navbarCoin.innerText = negCount
    }
    else{
        alert('Cant make call')
    } 
})
document.getElementById('card-call5').addEventListener('click', function() {
    const navbarCoin = document.getElementById('navbar-coin')
    let negCount = parseInt(navbarCoin.innerText)
    if(navbarCoin.innerText > 20){
        negCount = negCount - 20
        navbarCoin.innerText = negCount
    }
    else{
        alert('Cant make call')
    } 
})
document.getElementById('card-call6').addEventListener('click', function() {
    const navbarCoin = document.getElementById('navbar-coin')
    let negCount = parseInt(navbarCoin.innerText)
    if(navbarCoin.innerText > 20){
        negCount = negCount - 20
        navbarCoin.innerText = negCount
    }
    else{
        alert('Cant make call')
    } 
})
document.getElementById('card-call7').addEventListener('click', function() {
    const navbarCoin = document.getElementById('navbar-coin')
    let negCount = parseInt(navbarCoin.innerText)
    if(navbarCoin.innerText > 20){
        negCount = negCount - 20
        navbarCoin.innerText = negCount
    }
    else{
        alert('Cant make call')
    } 
})
document.getElementById('card-call8').addEventListener('click', function() {
    const navbarCoin = document.getElementById('navbar-coin')
    let negCount = parseInt(navbarCoin.innerText)
    if(navbarCoin.innerText > 20){
        negCount = negCount - 20
        navbarCoin.innerText = negCount
    }
    else{
        alert('Cant make call')
    } 
})
document.getElementById('card-call9').addEventListener('click', function() {
    const navbarCoin = document.getElementById('navbar-coin')
    let negCount = parseInt(navbarCoin.innerText)
    if(navbarCoin.innerText > 20){
        negCount = negCount - 20
        navbarCoin.innerText = negCount
    }
    else{
        alert('Cant make call')
    } 
})

// Copying Hotline
document.getElementById('copy-btn1').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline1').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn2').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline2').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn3').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline3').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn4').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline4').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn5').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline5').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn6').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline6').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn7').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline7').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn8').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline8').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})
document.getElementById('copy-btn9').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline9').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err)
    })
})

// Card History
const historyList = document.getElementById('call-history-list')
const clearBtn = document.getElementById('clear-history').querySelector('span')

const historyListMobile = document.getElementById('call-history-list-mobile')
const clearBtnMobile = document.getElementById('clear-history-mobile').querySelector('span')

document.querySelectorAll('.history-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const card = btn.closest('.card-body')
    const serviceName = card.querySelector('.service-name').innerText
    const serviceNumber = card.querySelector('.service-number').innerText

    const now = new Date()
    const options = { hour: '2-digit', minute: '2-digit' } 
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
  })
})

document.getElementById('clear-history').addEventListener('click', function () {
  historyList.innerHTML = ''
  clearBtn.innerText = 'Clear'
})

document.getElementById('clear-history-mobile').addEventListener('click', function () {
  historyListMobile.innerHTML = ''
  clearBtnMobile.innerText = 'Clear'
})
