const { Node } = require("flatend");
const apiHandler = require("./api");

const main = async () => {
  const node = await Node.start({
    addrs: [`127.0.0.1:9000`],
    services: {
      index: async (ctx) => {
        let today = new Date()
        ctx.send(today.toISOString())
      },
      api: async (ctx) => {
        // CRUD routes
        // Create: POST /api/<namespace>/
        // Read: GET /api/<namespace>/
        // Update: POST /api/<namespace>/update
        // Delete: POST /api/<namespace>/delete
        return apiHandler(ctx)
      }
    }
  })
}

main().catch((err) => console.error(err))