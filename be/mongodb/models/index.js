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

const admincreads = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const QuestionSchema = mongoose.Schema({
  questionText: {
    type: String,
    required: true,
    trim: true,
  },
  options: {
    type: [String],
    required: true,
  },
  answer: {
    type: Number,
    required: true,
  },
});

const QuestionSetSchema = mongoose.Schema({
  questions: {
    type: [QuestionSchema],
    required: true,
  },
});

const questionSetSchema = mongoose.model(
  "questionSetSchemas",
  QuestionSetSchema
);
const questionSchema = mongoose.model("questionSchemas", QuestionSchema);
const userSchema = mongoose.model("UserCred", userModel);
const adminSchema = mongoose.model("adminCreds", admincreads);

export { userSchema, adminSchema, questionSchema, questionSetSchema };
