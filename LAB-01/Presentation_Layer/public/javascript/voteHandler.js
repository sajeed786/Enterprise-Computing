const displayCandidates = () => {
  fetch("https://poll--simulator.herokuapp.com/api/v1/poll/candidates")
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        document.getElementById("info").innerHTML = data.message;
        return;
      }
      data.forEach((element) => {
        const { id, name, voteCount } = element;
        const div = document.getElementById("radiobuttons");
        const radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("id", id);
        radio.setAttribute("name", "candidates");
        radio.setAttribute("required", "required");
        radio.setAttribute("value", id);
        div.appendChild(radio);
        div.appendChild(document.createTextNode(`${name} (${id})`));
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createElement("br"));
      });
    });
};

window.addEventListener("load", displayCandidates);

const vote = (event) => {
  event.preventDefault();
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
  fetch("https://poll--simulator.herokuapp.com/api/v1/poll/vote", options)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("info").innerHTML = data.message;
      document.getElementById("voterid").value="";
      selected.checked=false;
    });
};

document.getElementById("vote").addEventListener("click", vote);
