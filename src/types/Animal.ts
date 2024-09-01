import { Point } from "geojson";
import mongoose from "mongoose";
import { Species } from "./Species";

type Animal = {
  animal_name: string;
  birth_date: Date;
  species: mongoose.Types.ObjectId | Species;
  location: Point;
}

export {Animal};
