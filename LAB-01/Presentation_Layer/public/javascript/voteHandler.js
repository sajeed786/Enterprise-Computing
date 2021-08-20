
const displayRegisteredCandidates = () => {
  fetch("http://localhost:7000/api/poll/candidates")
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        document.getElementById("info").innerHTML = data.message;
        return;
      }
      data.forEach((candidate) => {
        const { id, name} = candidate;
        const div = document.getElementById("radiobuttons");
        const radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("id", id);
        radio.setAttribute("name", "candidates");
        radio.setAttribute("required", "required");
        radio.setAttribute("value", id);
        div.appendChild(radio);
        div.appendChild(document.createTextNode(`${name} - ${id}`));
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createElement("br"));
      });
    });
};

window.addEventListener("load", displayRegisteredCandidates);

const castVote = (e) => {
  e.preventDefault();
  const radios = document.getElementsByName("candidates");
  let selected;
  radios.forEach((radio) => {
    if (radio.checked) {
      selected = radio;
    }
  });
  const voterid = parseInt(document.getElementById("voterid").value);
  const body = { voter_id: voterid, candidate_id: parseInt(selected.value) };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  fetch("http://localhost:7000/api/poll/cast-vote", options)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("info").innerHTML = data.message;
      document.getElementById("voterid").value="";
      selected.checked=false;
    });
};

document.getElementById("vote").addEventListener("click", castVote);