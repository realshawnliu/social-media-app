// import { render, fireEvent } from "@testing-library/react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useTheme } from "@mui/material/styles";
// import Friend from "../../src/components/Friend";

// jest.mock("react-redux", () => ({
//   useDispatch: jest.fn(),
//   useSelector: jest.fn(),
// }));

// jest.mock("react-router-dom", () => ({
//   useNavigate: jest.fn(),
// }));

// jest.mock("@mui/material/styles", () => ({
//   useTheme: jest.fn(),
// }));

// describe("<Friend />", () => {
//   const friendMock = {
//     friendId: "1234",
//     name: "Test Friend",
//     subtitle: "Test Subtitle",
//     userPicturePath: "test/path.jpg",
//   };
//   const dispatch = jest.fn();
//   useDispatch.mockReturnValue(dispatch);
//   useSelector.mockImplementation((selector) =>
//     selector({
//       user: { _id: "5678", friends: [] },
//       token: "test-token",
//     })
//   );
//   useNavigate.mockReturnValue(jest.fn());
//   useTheme.mockReturnValue({
//     palette: {
//       primary: { light: "light", dark: "dark" },
//       neutral: { main: "main", medium: "medium" },
//     },
//   });

//   it("renders without crashing", () => {
//     const { getByText } = render(<Friend {...friendMock} />);

//     expect(getByText(friendMock.name)).toBeInTheDocument();
//     expect(getByText(friendMock.subtitle)).toBeInTheDocument();
//   });

//   it("should dispatch an action on friend add/remove button click", () => {
//     const { getByRole } = render(<Friend {...friendMock} />);

//     fireEvent.click(getByRole("button"));
//     expect(dispatch).toHaveBeenCalled();
//   });
// });
