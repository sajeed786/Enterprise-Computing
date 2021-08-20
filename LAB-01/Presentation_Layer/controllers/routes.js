import express from "express"
import { apiGetAllCandidates, apiAddCandidate, apiGetWinner } from "./candidateController.js";
import { apiGetAllVoters, apiCastVote } from "./voterController.js";
const router = express.Router();

router.route("/candidates")
.get(apiGetAllCandidates)
.post(apiAddCandidate);

router.route("/voters").get(apiGetAllVoters);
router.route("/cast-vote").post(apiCastVote);
router.route("/results").get(apiGetWinner);

export default router;