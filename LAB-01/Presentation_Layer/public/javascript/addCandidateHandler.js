const addCandidate = (event) => {
  event.preventDefault();
  const idfield=document.getElementById("candidate_id");
  const namefield=document.getElementById("candidate_name");
  const candidate_id = parseInt(idfield.value);
  const candidate_name = namefield.value;
  const body = { id: candidate_id, name: candidate_name, voteCount: 0 };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  fetch("https://poll--simulator.herokuapp.com/api/v1/poll/candidates", options)
    .then((data) => data.json())
    .then((res) => {
      console.log(res);
      document.getElementById("info").innerHTML = res.message;
      idfield.value="";
      namefield.value="";
    });
};

document.getElementById("addCandidate").addEventListener("click", addCandidate);
