import Candidate from '../Presentation_Layer/model/Candidate.js';
import Voter from '../Presentation_Layer/model/Voter.js';

let candidates=[];
let voters=[];


export const getVoters = () => {
        const votersList=voters.map(voter => {
            return {...voter};
        });
        return votersList;
    }

export const getCandidates = () => {
        const candidatesList=candidates.map(candidate => {
            return {...candidate}
        })
        return candidatesList;
    }

export const registerCandidate = (candidateId,candidateName,voteCount) => {
        const candidate = new Candidate(candidateId, candidateName, voteCount);    
        candidates.push(candidate);
    }

export const registerVoter = (voterId) => {
        const voter = new Voter(voterId);
        voters.push(voter);
    }

export const updateCandidateVoteCount = (c_id) => {
    let candidate = candidates.find(c=> c.id == c_id);
    candidate.voteCount++;
} 