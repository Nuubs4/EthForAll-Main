import mongoose from "mongoose"

const { Schema } = mongoose

const FreelancerSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    image: String,
    email: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    wallet: String,
    age: Number,
    about: String,
    twitter: String,
    github: String,
    linkedin: String,
  },
  {
    timestamps: true,
  }
)

const Freelancer = mongoose.model("Freelancer", FreelancerSchema)

export default Freelancer
