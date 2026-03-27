import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: String,
  description: String,
  audience: String,
  budget: String,
  result: Object
}, { timestamps: true });

export default mongoose.model("Idea", ideaSchema);