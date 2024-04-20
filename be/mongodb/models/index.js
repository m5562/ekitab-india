import mongoose from "mongoose";

const userModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    pictureURL: {
      type: String,
      default: `${process.env.PROFILE_PICTURE_DIRECTORY}/users/avatar.png`,
    },
    dob: {
      type: Date,
    },
    gender: {
      type: String,
      default: "",
    },
    points: {
      type: Number,
      default: 0,
    },
  },
});

export default mongoose.model("UserCred", userModel);
