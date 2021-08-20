import * as businessCandidates from '../../Business_Logic/bl_Candidates.js'

export const apiGetAllCandidates = (req, res, next) => {
    const data = businessCandidates.fetchAllCandidates();
    res.json(data);
  }

export const apiAddCandidate = (req, res, next) => {
    const { id, name, voteCount } = req.body;
    const data = businessCandidates.addCandidate(id, name, voteCount);
    res.json(data);
  }

export const apiGetWinner = (req, res, next) => {
    const data = businessCandidates.getFinalWinner();
    res.json(data);
  }
