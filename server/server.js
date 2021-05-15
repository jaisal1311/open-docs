const mongoose = require("mongoose");
const Document = require("./Document");

mongoose.connect("mongodb://localhost/open-doc", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const io = require("socket.io")(3001, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  socket.on("get-document", async (id) => {
    const data = await findOrCreateDocument(id);
    socket.emit("load-document", data);
    socket.join(id);
    socket.on("send-changes", (delta) => {
      socket.broadcast.to(id).emit("receive-changes", delta);
    });

    socket.on("save-document", async (document) => {
      await Document.findByIdAndUpdate(id, { data: document });
    });
  });
  console.log("Connected");
});

const findOrCreateDocument = async (id) => {
  const document = await Document.findById(id);
  if (document) return document;
  return Document.create({ _id: id, data: "" });
};
