const btn = document.getElementById("btn")
const data = document.getElementById("view")
const input = document.getElementById("inn")
window.onload = function () {
    input.innerHTML = null
}
btn.onclick = function () {
    getData()
}
function getData() {
    if (input.value != "") {
        fetch(`https://api.github.com/users/${input.value}/repos`)
            .then((response) => response.json())
            .then((repoz) => {
                data.innerHTML = ""
                repoz.forEach((repo) => {
                    let div = document.createElement("div")
                    let span = document.createElement("span")
                    let name = document.createTextNode(`${repo.name}`)
                    span.className = "name"
                    let req = document.createElement("a")
                    req.href = `https://github.com/${input.value}/${repo.name}`
                    req.innerHTML = "Click To Visit"
                    req.setAttribute("target", "_blank")
                    req.className = "req"
                    let theid = document.createElement("span")
                    theid.innerText = `Made With ${repo.language}`
                    theid.className = "di"
                    span.appendChild(name)
                    div.appendChild(span)
                    div.appendChild(theid)
                    div.appendChild(req)
                    div.style.borderRadius = "5px"
                    div.className = "TheData"
                    data.appendChild(div)
                })
            })
    } else {
        data.innerHTML = "<span>Enter User Name On GitHub Correctly</span>"
    }
}
