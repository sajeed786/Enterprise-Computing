
const addCandidate = (e) => {
  e.preventDefault();
  console.log("post req");
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
  fetch("http://localhost:7000/api/poll/candidates", options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("info").innerHTML = data.message;
      idfield.value="";
      namefield.value="";
    });
};

document.getElementById("addCandidate").addEventListener("click", addCandidate);