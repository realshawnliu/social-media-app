import mongoose from "mongoose";
import Post from "../../../models/Post";
import dotenv from "dotenv";

dotenv.config();
let post;

beforeAll(async () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  post = new Post({
    userId: "12345",
    firstName: "Test",
    lastName: "User",
    location: "Test Location",
    description: "Test Description",
    picturePath: "testpath.jpg",
    userPicturePath: "testuserpath.jpg",
    likes: {},
    comments: [],
  });
});

afterEach(async () => {
  await Post.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Post Model Test", () => {
  it("should create & save a post successfully", async () => {
    const validPost = await post.save();
    expect(validPost._id).toBeDefined();
    expect(validPost.firstName).toBe(post.firstName);
    expect(validPost.lastName).toBe(post.lastName);
    expect(validPost.description).toBe(post.description);
    expect(validPost.picturePath).toBe(post.picturePath);
  });
});
