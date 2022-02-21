// use the path of your model
import Blog from "../models/blogModel.js";
import mongoose from "mongoose";
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

describe("Blog Add", () => {
  // the code below is for insert testing
  it("Add Blog testing", () => {
    const blog = {
      title: "Nokia",
      blogType: "21",
      description: "asd",
      user: "621359970a934e33cac98f44",
    };

    return Blog.create(blog).then((pro_ret) => {
      expect(pro_ret.title).toEqual("Nokia");
    });
  });

  it("to test the update", async () => {
    return Blog.findByIdAndUpdate("6213633969c4671042ce3661", {
      $set: { title: "ram" },
    }).then((pp) => {
      expect(pp.title).toEqual("ram");
    });
  });

  it("to get all blog", async () => {
    return Blog.find().then((pp) => {
      expect(pp !== undefined).toEqual(true);
    });
  });

  // // // the code below is for delete testing
  //     it('to test the delete product is working or not', async () => {
  //         const status = await Product.deleteMany();
  //         expect(status.ok).toBe(1);
  // });
});
