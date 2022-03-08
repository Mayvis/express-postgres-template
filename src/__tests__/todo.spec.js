const app = require("../app");
const supertest = require("supertest");
const refreshDB = require("../utils/refresh-db");

const mockTodoData = {
  name: "Workout",
  message: "Jump the rope",
};

describe("todo API", () => {
  let request;
  beforeEach(() => {
    request = supertest(app);
  });

  afterAll(async () => {
    await refreshDB();
  });

  describe("POST /todos", () => {
    it("can create todo", (done) => {
      request
        .post("/api/v1/todos")
        .send(mockTodoData)
        .expect(201, (err, res) => {
          expect(res.body.message).toBe("created successfully");
          done();
        });
    });
  });

  // describe("GET /todos", () => {
  //   it("can get todos", (done) => {
  //     request.post("/api/v1/todos").send(mockTodoData)

  //     request.get("/api/v1/todos")
  //     .expect(200, (err, res) => {
  //       console.log(res.body);
  //       done()
  //     })
  //   })
  // });
});
