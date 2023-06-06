import * as postController from "../../../controllers/postController";
import Post from "../../../models/Post";
import User from "../../../models/User";
import sinon from "sinon";
import mongoose from "mongoose";

describe("Post controller", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should create a post", async () => {
    const mockReq = {
      body: {
        userId: "1234",
        description: "Test post",
        picturePath: "path/to/picture.jpg",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockUser = {
      _id: new mongoose.Types.ObjectId(), // Use 'new' keyword to create a new ObjectId
      firstName: "Test",
      lastName: "User",
      location: "Test Location",
      picturePath: "path/to/user/picture.jpg",
    };
    sinon.stub(User, "findById").resolves(mockUser);
    sinon.stub(Post.prototype, "save").resolves();
    sinon.stub(Post, "find").resolves([]);

    await postController.createPost(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalled();
  });

  it("should get all posts", async () => {
    const mockReq = {};
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockPosts = [{}, {}];
    sinon.stub(Post, "find").resolves(mockPosts);

    await postController.getFeedPosts(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockPosts);
  });
});
