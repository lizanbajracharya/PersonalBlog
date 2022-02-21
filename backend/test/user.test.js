// use the path of your model
import User from "../models/userModel.js";
import mongoose from "mongoose";

// etc.
// use the new name of the database
const url = "mongodb://localhost:27017/blogtest";
beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
  });
});
afterAll(async () => {
  await mongoose.connection.close();
});
describe("User Schema test anything", () => {
  // the code below is for insert testing
  it("Add user testing anything", () => {
    const user = {
      name: "test",
      email: "565@test.com",
      password: "123123123",
    };

    return User.create(user).then((pro_ret) => {
      expect(pro_ret.name).toEqual("test");
    });
  });

  it("update user testing anything", () => {
    return User.findByIdAndUpdate("621359970a934e33cac98f44", {
      $set: { email: "asd@test.com" },
    }).then((pro_ret) => {
      expect(pro_ret.email).toEqual("asd@test.com");
    });
  });

  // the code below is for delete testing
  //  it('to test the delete product is working or not', async () => {
  //  const status = await Product.deleteMany();
  //  expect(status.ok).toBe(1);
  // });
});
//
