import express from "express" ;
import fs from "fs";
import users from "./MOCK_DATA.json" with { type: "json" };

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, resp)=>{
  console.log("ululu...")
  resp.send("don")
})
app.get("/api/users", (req, resp) => {
  return resp.json(users);
});

app.get("/users", (req, resp) => {
  const html = `
    <ul>
  ${users.map((u) => `<li> ${u.first_name}</li>`).join("")}
    </ul>
    `;
  resp.send(html);
});

app
  .route("/api/users/:id")
  .get((req, resp) => {
    const id = Number(req.params.id);
    // console.log(id)
    const user = users.find((user) => user.id === id);
    return resp.json(user);
  })
  .put((res, resp) => {
    return resp.json({ status: "pending" });
  })
  .delete((res, resp) => {
    return resp.json({ status: "pending" });
  });

app.post("/api/users", (req, resp) => {
  const body = req.body;
  // console.log(body)
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return resp.json({ status: "success", id: users.length });
  });
});

app.listen(2000);
