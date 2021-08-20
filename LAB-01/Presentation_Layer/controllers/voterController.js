import * as businessVoters from '../../Business_Logic/bl_Voters.js' 

export const apiGetAllVoters = (req, res, next) => {
    const data = businessVoters.fetchAllVoters();
    res.json(data);
  }

export const apiCastVote = (req, res, next) => {
    const voter_id = req.body.voter_id;
    const candidate_id = req.body.candidate_id; 
    
    const data = businessVoters.castVote(candidate_id, voter_id);
    res.json(data);
  }
