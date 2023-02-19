import mongoose from "mongoose"

const { Schema } = mongoose

const GigSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    token: String,
    image: [String],
    video: String,
    milestones: String,
    agreement: String,
    price: Number,
    rating: Number,
    freelancer: String,
  },
  {
    timestamps: true,
  }
)

const Gig = mongoose.models.Gig || mongoose.model("Gig", GigSchema)

export default Gig
