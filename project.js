let nbayoungboyUrl = 'https://api.genius.com/search?q=nba%20youngboy&access_token=xmLA8oSoY8qWNAE_yMxyHi4UrQBgtjKe0CIsJcpvKjLVNnTP77i0IhV6XygqwzjV'
let nbavariable = document.querySelector('.nba')
function nbabuttonUp(){
    if (nbavariable.style.display == "none") {
        nbavariable.style.display = "block"
      } else {
        nbavariable.style.display = "none"
      }
}
function meekbuttonUp(){
    if (meekvariable.style.display == "none") {
        meekvariable.style.display = "block"
      } else {
        meekvariable.style.display = "none"
      }
}
function durkbuttonUp(){
    if (durkvariable.style.display == "none") {
        durkvariable.style.display = ""
      } else {
        durkvariable.style.display = "none"
      }
}
let nbayoungboy = function(data){
nbavariable.innerText = `${data}

YouTube Views: 197,920,660 views
 Date it dropped: Jan 6, 2018
 Producer: DMacTooBangin`
}
let nbaButton = document.querySelector('.nbabutton')
nbaButton.addEventListener('click', function(data){
fetch (nbayoungboyUrl)
.then(res => res.json())
.then(data => nbayoungboy(data.response.hits[5].result.title))
nbabuttonUp()
})
 



let meekmillUrl = 'https://api.genius.com/search?q=meek%20mill&access_token=xmLA8oSoY8qWNAE_yMxyHi4UrQBgtjKe0CIsJcpvKjLVNnTP77i0IhV6XygqwzjV'

let meekvariable = document.querySelector('.meek')
let meekmill = function(data){
    meekvariable.innerText = `${data}

    YouTube Views: 64,746,857 views
    Date it dropped: Jan 29, 2013
    Producer: Nick Papz`
}
let meekButton = document.querySelector('.meekbutton')
meekButton.addEventListener('click', function(data){
    fetch(meekmillUrl)
    .then(res => res.json())
    .then(data => meekmill(data.response.hits[0].result.title))
    meekbuttonUp()
})



let lildurkUrl = 'https://api.genius.com/search?q=lil%20durk&access_token=xmLA8oSoY8qWNAE_yMxyHi4UrQBgtjKe0CIsJcpvKjLVNnTP77i0IhV6XygqwzjV'

let durkvariable = document.querySelector('.durk')
let lildurk = function(data){
    durkvariable.innerText = `${data}
    
    YouTube Views: 45,743,242 views
    Date it dropped: May 5, 2013
    Producer: DJ Drama`
}
let durkButton = document.querySelector('.durkbutton')
durkButton.addEventListener('click', function(data){
    fetch(lildurkUrl)
    .then(res => res.json())
    .then(data => lildurk(data.response.hits[5].result.title))
    durkbuttonUp()
})

