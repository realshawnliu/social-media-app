import reducer, {
  setMode,
  setLogin,
  setLogout,
  setFriends,
  setPosts,
  updatePost,
} from "../../src/state/index";

describe("authSlice", () => {
  test("should handle initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      mode: "light",
      user: null,
      token: null,
      posts: [],
    });
  });

  test("should handle setMode action", () => {
    let state;
    state = reducer({ mode: "light" }, setMode());
    expect(state.mode).toBe("dark");
    state = reducer({ mode: "dark" }, setMode());
    expect(state.mode).toBe("light");
  });

  test("should handle setLogin action", () => {
    const dummyUser = { name: "Test User" };
    const dummyToken = "dummyToken";
    const state = reducer({}, setLogin({ user: dummyUser, token: dummyToken }));
    expect(state.user).toEqual(dummyUser);
    expect(state.token).toBe(dummyToken);
  });

  test("should handle setLogout action", () => {
    const state = reducer({ user: { name: "Test User" }, token: "dummyToken" }, setLogout());
    expect(state.user).toBe(null);
    expect(state.token).toBe(null);
  });

  test("should handle setFriends action", () => {
    const dummyFriends = [{ name: "Friend 1" }, { name: "Friend 2" }];
    const state = reducer(
      { user: { name: "Test User", friends: [] } },
      setFriends({ friends: dummyFriends })
    );
    expect(state.user.friends).toEqual(dummyFriends);
  });

  test("should handle setPosts action", () => {
    const dummyPosts = [
      { id: 1, content: "Post 1" },
      { id: 2, content: "Post 2" },
    ];
    const state = reducer({ posts: [] }, setPosts({ posts: dummyPosts }));
    expect(state.posts).toEqual(dummyPosts);
  });

  test("should handle updatePost action", () => {
    const initialPosts = [
      { _id: 1, content: "Post 1" },
      { _id: 2, content: "Post 2" },
    ];
    const updatedPost = { _id: 1, content: "Updated Post 1" };
    const state = reducer({ posts: initialPosts }, updatePost({ post: updatedPost }));
    expect(state.posts).toEqual([
      { _id: 1, content: "Updated Post 1" },
      { _id: 2, content: "Post 2" },
    ]);
  });
});
