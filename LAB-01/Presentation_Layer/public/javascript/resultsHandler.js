
const winner=()=>{
    fetch("http://localhost:7000/api/poll/results")
    .then(res=>res.json())
    .then(data=>{
        const displayWinner=document.getElementById("won");
        const displayRunnerUp=document.getElementById("lost");
        displayWinner.innerHTML=data.won;
        displayRunnerUp.innerHTML=data.lost;
    })
};
window.addEventListener("load",winner);