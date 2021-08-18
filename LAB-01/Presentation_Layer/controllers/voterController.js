import PollSimulatorDataAccess from "../DataAccess/dataAccess.js";

export class VotersController {
  static apiGetAllVoters(req, res, next) {
    const voters = PollSimulatorDataAccess.getVoters();
    if(voters.length===0)
    res.json({"message":"No votes!"});
    else
    res.json(voters);
  }

  static apiVote(req, res, next) {
    const voter_id = req.body.voter_id;
    const candidate_id = req.body.candidate_id; 
    const voters = PollSimulatorDataAccess.getVoters();
    const alreadyVoted = voters.some((voter) => voter_id === voter);
    if (alreadyVoted) {
      res.json({ "message": `${voter_id}, you have already voted!` });
    } else {
      PollSimulatorDataAccess.addVoter(voter_id);
      let candidate=PollSimulatorDataAccess.getCandidateById(candidate_id);
      candidate.voteCount++;
      res.json({ "message": `${voter_id}, your vote has been recorded successfully` });
    }
  }
}
