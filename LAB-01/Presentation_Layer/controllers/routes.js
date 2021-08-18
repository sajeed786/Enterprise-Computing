import express from "express"
import { CandidatesController } from "./candidatesController.js";
import { VotersController } from "./votersController.js";
const router = express.Router();

router.route("/candidates")
.get(CandidatesController.apiGetAllCandidates)
.post(CandidatesController.apiAddCandidate);

router.route("/voters").get(VotersController.apiGetAllVoters);
router.route("/vote").post(VotersController.apiVote);
router.route("/winner").get(CandidatesController.getWinner);
export default router