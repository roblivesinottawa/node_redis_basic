const redis = require("redis");

const client = redis.createClient();

client.set("framework", "Node JS", () => console.log(reply));
client.get("framework", (err, reply) => console.log(reply));
client.hmset(
  "frameworks",
  "javascript",
  "AngularJS",
  "css",
  "Bootstrap",
  "node",
  "Express",
);
client.hgetall("frameworks", (err, object) => console.log(object));

client.on("connect", () => console.log("connected to redis!"));
