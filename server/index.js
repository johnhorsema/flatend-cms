const { Node } = require("flatend");
const api = require("./api");
var storage = {}

const main = async () => {
  const node = await Node.start({
    addrs: [`127.0.0.1:9000`],
    services: {
      index: async (ctx) => {
        let today = new Date()
        ctx.send(today.toISOString())
      },
      api: async (ctx) => {
        return api.handler(ctx, storage)
      }
    }
  })
}

main().catch((err) => console.error(err))