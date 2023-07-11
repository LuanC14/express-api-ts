import { model, Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: { type: String },
    rating: { type: Number },
    description: { Type: String },
    director: { type: String },
    stars: { type: Array },
    poster: { type: String }
  },
  {
    timestamps: true,
  }
);

export const MovielModel = model("movie", movieSchema);
