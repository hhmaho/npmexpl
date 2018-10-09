const https = require('https')

function getPackageJSON(packageName, callback, errorCallback) {
  // https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md
  https.get('https://registry.npmjs.org/' + packageName, (resp) => {
    let data = ''
    resp.on('data', (chunk) => { data += chunk })

    resp.on('end', () => {
      const result = JSON.parse(data)
      try {
        const latestTag = result['dist-tags']['latest']
        const latestVersion = result['versions'][latestTag]
        callback(latestVersion)
      } catch (e) {
        errorCallback(result)
      }
    });
  })
}

module.exports = function (app) {
  const npmCache = {}

  app.get('/api/*', (req, res) => {
    const packageName = req.path.substr(5)

    if (packageName in npmCache) {
      res.json(npmCache[packageName])
      return
    }

    const callback = (result) => {
      npmCache[packageName] = result
      res.json(result)
    }

    const errorCallback = (error) => {
      res.status(400).json(error)
    }

    getPackageJSON(packageName, callback, errorCallback)
  });
}
