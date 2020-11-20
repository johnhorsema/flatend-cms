var apiHandler = (ctx) => {
  var namespace = ctx.headers["params.namespace"]
  var action = ctx.headers["params.action"]
  ctx.json({
    namespace: namespace,
    action: action
  })
}

module.exports = apiHandler