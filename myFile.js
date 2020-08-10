

let myElement = document.createElement('h2')
let mySubtitle = document.createElement('span')
let mySpan = document.createElement('span')
mySpan.innerText = 'NavBar by Coder-Chris'

mySpan.appendChild(mySubtitle)
mySubtitle.innerText = ' written in JavaScript'
myElement.appendChild(mySpan)


let unOrderdList = document.createElement('ul')
let listItemZero = document.createElement('li')
let listItemOne = document.createElement('li')
let listItemTwo = document.createElement('li')
let listItemThree = document.createElement('li')




listItemZero.innerText = 'Home'
listItemOne.innerText = 'Catalog'
listItemTwo.innerText = 'Cart'
listItemThree.innerText = 'Contact'

unOrderdList.appendChild(listItemTwo)
unOrderdList.appendChild(listItemZero)
unOrderdList.appendChild(listItemThree)
unOrderdList.appendChild(listItemOne)

unOrderdList.setAttribute("style", 'display:flex ; justify-content: space-around; margin:0 auto ;color:whitesmoke;list-style-type:none;background-color:cornflowerBlue;height:100px; align-items:center ;font-weight:700;font-size:20px ; border-radius : 4px')
mySubtitle.setAttribute("style", "padding:0;margin:0 ; font-size:18px;color:red")


document.body.appendChild(myElement)
document.body.appendChild(unOrderdList)
document.body.appendChild(button)

document.body.setAttribute("style", 'marign:0 auto; padding:0')

