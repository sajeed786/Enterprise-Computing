import PollSimulatorDataAccess from "../DataAccess/dataAccess.js";

export class CandidatesController {
  static apiGetAllCandidates(req, res, next) {
    const candidates = PollSimulatorDataAccess.getCandidates();
    candidates.sort((c1, c2) => c1.voteCount < c2.voteCount);
    if (candidates.length === 0) res.json({ message: "No candidate added!" });
    else res.json(candidates);
  }

  static apiAddCandidate(req, res, next) {
    const { id, name, voteCount } = req.body;
    const candidates = PollSimulatorDataAccess.getCandidates();
    const alreadyPresent = candidates.some((candidate) => candidate.id === id);
    if (alreadyPresent) {
      res.json({ message: "candidate already registered" });
    } else {
      PollSimulatorDataAccess.addCandidate(id, name, voteCount);
      res.json({ message: `${id} successfully registered` });
    }
  }

  static getWinner(req, res, next) {
    const candidates = PollSimulatorDataAccess.getCandidates();
    candidates.sort((c1, c2) => c1.voteCount > c2.voteCount);
    let response;
    if (candidates.length === 0) {
      response = {
        won: "No Candidates!",
        lost: "No Candidates!",
      };
    } else if (candidates.length === 1) {
      response = {
        won: `${candidates[0].name}, ID:${candidates[0].id} (${candidates[0].voteCount})`,
        lost: "not enough candidates",
      };
    } else {
      response = {
        won: `${candidates[0].name}, ID:${candidates[0].id} (${candidates[0].voteCount} votes)`,
        lost: `${candidates[1].name}, ID:${candidates[1].id} (${candidates[1].voteCount} votes)`,
      };
    }
    res.json(response);
  }
}
