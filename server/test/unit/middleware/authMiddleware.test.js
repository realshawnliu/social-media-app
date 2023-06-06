import { verifyToken } from "../../../middleware/authMiddleware";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

describe("verifyToken middleware", () => {
  let mockRequest;
  let mockResponse;
  const mockNext = jest.fn();

  beforeEach(() => {
    mockRequest = {
      header: jest.fn(),
    };
    mockResponse = {
      status: jest.fn(function () {
        return this;
      }),
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  it("should call next when token is valid", () => {
    const validToken = jwt.sign({ id: "1234" }, process.env.JWT_SECRET);
    mockRequest.header.mockReturnValue(`Bearer ${validToken}`);

    verifyToken(mockRequest, mockResponse, mockNext);
    expect(mockNext).toHaveBeenCalled();
  });

  it("should return 403 when no token is provided", () => {
    mockRequest.header.mockReturnValue(null);

    verifyToken(mockRequest, mockResponse, mockNext);
    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.send).toHaveBeenCalledWith("Access Denied");
  });

  it("should return 500 when token is invalid", () => {
    mockRequest.header.mockReturnValue("Bearer invalidtoken");

    verifyToken(mockRequest, mockResponse, mockNext);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
  });
});
