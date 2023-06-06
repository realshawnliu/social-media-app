// import request from 'supertest';
// import app from '../../../index'; // Assuming your Express app is exported as 'app'
// import User from '../../../models/User'; // Assuming the User model is correctly imported

// describe('User routes', () => {
//   let testUser;

//   beforeAll(async () => {
//     // Create a test user in the database
//     testUser = await User.create({
//       firstName: 'John',
//       lastName: 'Doe',
//       occupation: 'Developer',
//       location: 'Test Location',
//       picturePath: 'test/user/picture.jpg',
//       friends: [],
//     });
//   });

//   afterAll(async () => {
//     // Clean up the test user from the database
//     await User.deleteOne({ _id: testUser._id });
//   });

//   it('should return the user details', async () => {
//     const response = await request(app).get(`/users/${testUser._id}`);

//     expect(response.status).toBe(200);
//     expect(response.body).toMatchObject({
//       firstName: 'John',
//       lastName: 'Doe',
//       occupation: 'Developer',
//       location: 'Test Location',
//       picturePath: 'test/user/picture.jpg',
//       friends: [],
//     });
//   });

//   it('should return 404 if user not found', async () => {
//     const response = await request(app).get('/users/nonexistentid');

//     expect(response.status).toBe(404);
//     expect(response.body).toHaveProperty('message');
//   });

//   it('should return the user friends', async () => {
//     const response = await request(app).get(`/users/${testUser._id}/friends`);

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual([]);
//   });

//   it('should return 404 if user not found', async () => {
//     const response = await request(app).get('/users/nonexistentid/friends');

//     expect(response.status).toBe(404);
//     expect(response.body).toHaveProperty('message');
//   });

//   it('should add a friend to the user', async () => {
//     const anotherUser = await User.create({
//       firstName: 'Jane',
//       lastName: 'Smith',
//       occupation: 'Designer',
//       location: 'Test Location',
//       picturePath: 'test/user/picture.jpg',
//       friends: [],
//     });

//     const response = await request(app).patch(`/users/${testUser._id}/${anotherUser._id}`);

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual([
//       {
//         _id: anotherUser._id.toString(),
//         firstName: 'Jane',
//         lastName: 'Smith',
//         occupation: 'Designer',
//         location: 'Test Location',
//         picturePath: 'test/user/picture.jpg',
//       },
//     ]);

//     // Verify that the friend is added to the user in the database
//     const updatedUser = await User.findById(testUser._id);
//     expect(updatedUser.friends).toContain(anotherUser._id);

//     // Clean up the another test user from the database
//     await User.deleteOne({ _id: anotherUser._id });
//   });
// });
