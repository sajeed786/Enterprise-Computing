import * as dataStore from '../Data_Layer/dataAccessHandler.js';

export const fetchAllCandidates = () => {
    const candidates = dataStore.getCandidates();
    if(candidates.length === 0)
        return { message: "No candidate added!" };
    else{
        candidates.sort((c1, c2) => c1.voteCount < c2.voteCount);
        return candidates;
    }
};

export const addCandidate = (id, name, voteCount) => {
    const candidates = dataStore.getCandidates();
    const alreadyPresent = candidates.some((candidate) => candidate.id === id);
    if (alreadyPresent) {
      return { message: "candidate already registered" };
    } else {
      dataStore.registerCandidate(id, name, voteCount);
      return { message: `${id} successfully registered` };
    }
};

export const getFinalWinner = () => {
    const candidates = dataStore.getCandidates();
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
    return response;
};