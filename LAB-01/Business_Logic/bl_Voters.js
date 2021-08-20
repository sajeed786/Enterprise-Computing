import * as dataStore from '../Data_Layer/dataAccessHandler.js';

export const fetchAllVoters = () => {
    const voters = dataStore.getVoters();
    if(voters.length===0)
        return {"message":"No votes!"};
    else
        return voters;
};

export const castVote = (candidate_id, voter_id) => {
    const voters = dataStore.getVoters();
    const alreadyVoted = voters.some(voter => voter_id === voter.voterId);
    if (alreadyVoted) {
      return { "message": `${voter_id}, you have already voted!` };
    } else {
        //adding voter to our data store
      dataStore.registerVoter(voter_id);
      //updating the candidate's vote count
      dataStore.updateCandidateVoteCount(candidate_id);
      
      return { "message": `${voter_id}, your vote has been recorded successfully` };
    }
};