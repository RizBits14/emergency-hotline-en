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
        alert('Cannot copy: ' + err);
    })
})
document.getElementById('copy-btn2').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline2').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err);
    })
})
document.getElementById('copy-btn3').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline3').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err);
    })
})
document.getElementById('copy-btn4').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline4').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err);
    })
})
document.getElementById('copy-btn5').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline5').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err);
    })
})
document.getElementById('copy-btn6').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline6').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err);
    })
})
document.getElementById('copy-btn7').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline7').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err);
    })
})
document.getElementById('copy-btn8').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline8').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err);
    })
})
document.getElementById('copy-btn9').addEventListener('click', function() {
    const hotlineNumber = document.getElementById('hotline9').innerText
    navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert('Number has been copied')
    }).catch(err => {
        alert('Cannot copy: ' + err);
    })
})