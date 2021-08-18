

const summary=()=>{
    fetch("https://poll--simulator.herokuapp.com/api/v1/poll/candidates")
    .then(res=>res.json())
    .then(data=>{
        const ul=document.getElementById("summary");
        if(data.message)
        ul.appendChild(document.createTextNode(`${data.message}`));
        else{
            data.forEach(candidate => {
                const info=`${candidate.name}, ID: ${candidate.id} (${candidate.voteCount} votes)`
                const li=document.createElement("li");
                li.appendChild(document.createTextNode(info));
                ul.appendChild(li);
            });
        }
    });
}

window.addEventListener("load",summary);