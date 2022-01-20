
const methods = {
    fdOne: function(el) {
        return document.querySelector(el)
    },
    fdAll: function(el) {
        return document.querySelectorAll(el)
    }
}
const { fdOne, fdAll } = methods;

const btn = fdOne("#btn")
const list = fdAll('.list')
const time = fdOne('#context')
btn.addEventListener("click",  sayHello)

function sayHello(e) {
    const data = []
    e.preventDefault();
    const firstName = fdOne('#name').value
    const age = fdOne('#age').value

    function User(name, age) {
        this.name = name;
        this.age = age;
    }
   
    data.push(new User(firstName, age))
    const oldStore = JSON.parse(window.localStorage.getItem('users'))
    let result;
    if(oldStore){
        result = JSON.stringify([...oldStore, ...data])

    }else{
        result = JSON.stringify(data)
    }
    window.localStorage.setItem('users', result)
}


const get = fdOne('#get')
get.addEventListener('click', getUser)
function getUser() {
    const user = window.localStorage.getItem('users')
    const userObj = JSON.parse(user)
    list[0].innerHTML = userObj[0].name
    list[1].innerHTML = userObj[0].age
}

function getTime() {
    time.innerHTML =  new Date().toLocaleTimeString()
}
const stopTime = setInterval(getTime, 1000)

setTimeout(() => {
    clearInterval(stopTime)
}, 5000);