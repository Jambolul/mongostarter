import mongoose from "mongoose";
import { Species } from "../../types/Species";

const speciesSchema = new mongoose.Schema<Species>({
  species_name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
  image: {
    type: String,
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

export default mongoose.model<Species>("Species", speciesSchema);
