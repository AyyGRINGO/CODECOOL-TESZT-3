  const getUsers = async () => {
    const response = await fetch ('https://api.github.com/users')
    const userData = await response.json()
    // console.log(userData)
    return userData

}

const load = async () => {
    const userList = await getUsers()
    
    for (const user of userList){
        creatProfileCards(user)
    }
    console.log("page is loaded")
}

window.addEventListener('load', load)





const rootDiv = document.getElementById("root")
const loadingText = document.getElementById("loadingText")

const creatProfileCards = (user) => {
    
    loadingText.style.display="none"
    console.log(user)
    let container = document.createElement('div')
    container.classList.add("container")
    rootDiv.append(container)
    let name = document.createElement('p')
    name.innerHTML = user.login
    container.append(name)
    let userImageField = document.createElement('img')
    container.append(userImageField)
    userImageField.src=`${user.avatar_url}`
    let button = document.createElement('button')
    button.innerText="Show More"
    container.append(button)
    let rankField = document.createElement('p')
    rankField.innerText=`Rank: ${user.type}`
    rankField.classList.add("extraData")
    container.append(rankField)
    // rankField.style.display="none"
    let adminField = document.createElement('p')
    adminField.innerText=`Admin: ${user.site_admin}`
    container.append(adminField)
    adminField.classList.add("extraData")
    // adminField.style.display="none"


    let allButtons = document.querySelectorAll('button')

    showExtraInfo(allButtons)

    // allButtons.addEventListener("click", showExtraInfo)
    // console.log(allButtons)




}



const showExtraInfo = (allButtons) => {

    allButtons.forEach(button =>{
        button.addEventListener("click", dummyfunction)
        })
    }




function dummyfunction(){
    const setDisplay = document.querySelectorAll(".extraData")
    console.log(setDisplay)
    for(const element of setDisplay){
        console.log(element)

        element.stlye.display="block"
    }
    
    // console.log("it works")
    // setDisplay.style.display="block"
}
