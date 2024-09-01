import mongoose from "mongoose";
import { Animal } from "../../types/Animal";


const animalSchema = new mongoose.Schema<Animal>({
  animal_name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  species: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },

  },
});

export default mongoose.model<Animal>("Animal", animalSchema);
