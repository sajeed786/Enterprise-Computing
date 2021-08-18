
const winner=()=>{
    fetch("https://poll--simulator.herokuapp.com/api/v1/poll/winner")
    .then(res=>res.json())
    .then(data=>{
        const wonele=document.getElementById("won");
        const lostele=document.getElementById("lost");
        wonele.innerHTML=data.won;
        lostele.innerHTML=data.lost;
    })
}

window.addEventListener("load",winner);