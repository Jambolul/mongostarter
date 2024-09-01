import express from 'express';
import { getSpecies, postSpecies, getOneSpecies, putSpecies, deleteSpecies } from '../controllers/speciesController';

const router = express.Router();

router.route('/').get(getSpecies).post(postSpecies);

router.route('/:id').get(getOneSpecies).put(putSpecies).delete(deleteSpecies);
