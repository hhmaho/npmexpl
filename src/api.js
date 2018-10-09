export function getPackageJSON(packageName, callback, errorCallback) {
  const url = '/api/' + packageName

  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.addEventListener('load', function (event) {
    const data = JSON.parse(request.responseText)
    if (request.status === 200) {
      callback(data)
    } else if (errorCallback) {
      errorCallback(data)
    }
  })

  request.send()
}
