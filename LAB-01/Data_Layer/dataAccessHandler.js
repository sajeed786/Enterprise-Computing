import Candidate from '../Presentation_Layer/model/Candidate.js';
import Voter from '../Presentation_Layer/model/Voter.js';

let candidates=[];
let voters=[];

export default class PollSimulatorDataAccess{

    static getVoters(){
        const copyvoters=[...voters];
        return copyvoters;
    }

    static getCandidates(){
        const copycandidates=candidates.map(candidate=>{
            return {...candidate}
        })
        return copycandidates;
    }

    static addCandidate(candidateId,candidateName,voteCount){
        const candidate={id:candidateId,name:candidateName,voteCount:voteCount};
        candidates.push(candidate);
    }

    static addVoter(voterId){
        voters.push(voterId);
    }

    static getCandidateById(candidate_id)
    {
        let candidate;
        candidates.forEach(c=>{
            if(c.id===candidate_id)
            candidate=c;
        })
        return candidate;
    }
}