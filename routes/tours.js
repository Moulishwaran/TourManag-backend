import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "./../controllers/tourController.js";

const router = express.Router();

//create New Tour

router.post("/", verifyAdmin, createTour);

// update tour
router.put("/:id", verifyAdmin, updateTour);

//delete Tour
router.delete("/:id", verifyAdmin, deleteTour);

//get Single Tour
router.get("/:id", getSingleTour);

//getAll tour
router.get("/", getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
