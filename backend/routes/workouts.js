const express = require('express')
const router = express.Router()

const {createWorkout,getWorkout, getWorkouts,deleteWorkout, updateWorkout}= require('../controllers/workoutController')
//GET all the workouts
router.get('/',getWorkouts)

//Get a single workout
router.get('/:id', getWorkout)    

//Post a workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id',deleteWorkout)


   router.patch('/:id',updateWorkout)

module.exports=router;
