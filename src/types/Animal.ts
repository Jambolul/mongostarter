import { Point } from "geojson";
import mongoose from "mongoose";

type Animal = {
  animal_name: string;
  birth_date: Date;
  species: mongoose.Types.ObjectId;
  location: Point;
}

export {Animal};
