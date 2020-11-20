var api = {
  handler: async (ctx, storage) => {
    // CRUD routes
    // Create: POST /api/<namespace>/create
    // Read: GET /api/<namespace>/
    // Update: POST /api/<namespace>/update
    // Delete: POST /api/<namespace>/delete

    var namespace = ctx.headers["params.namespace"]
    var action = ctx.headers["params.action"]

    if(!storage.hasOwnProperty(namespace)) {
      storage[namespace].name = namespace
      storage[namespace].rows = []
    }
    var payload = JSON.parse(body.toString("utf8"))
    var body = await ctx.read(5242880)
    if(!body) {
      ctx.json(storage[namespace].rows)
    }
    switch (action) {
      case 'create':
        storage[namespace].rows.push(payload)
        ctx.json(payload)
        break;
      case 'update':
        var idx = storage[namespace].rows.findIndex(d => d.id === payload.id)
        if(idx == -1) {
          throw new Error("ID not found");
        }
        storage[namespace].rows[idx] = payload
        ctx.json({index: idx})
        break;
      case 'delete':
        var idx = storage[namespace].rows.findIndex(d => d.id === payload.id)
        if(idx == -1) {
          throw new Error("ID not found");
        }
        storage[namespace].rows.splice(idx, 1)
        ctx.json({index: idx})
        break;
      default:
        throw new Error("Action not recognized");
    }
  }
}

module.exports = api