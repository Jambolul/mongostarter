import express from 'express';
import { getAnimals, postAnimal, getOneAnimal, putAnimal, deleteAnimal, getAnimalsByBox } from '../controllers/animalController';

const router = express.Router();

router.route('/').get(getAnimals).post(postAnimal);

router.route("/location").get(getAnimalsByBox);

router.route('/:id').get(getOneAnimal).put(putAnimal).delete(deleteAnimal);
