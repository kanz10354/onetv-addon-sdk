const fetch = require('node-fetch')

const DEFAULT_API_URL = 'https://onetv.media/api'

module.exports = function publishToCentral(addonURL, apiURL) {
	apiURL = apiURL || DEFAULT_API_URL

	return fetch(apiURL+'/addonPublish', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ transportUrl: addonURL, transportName: 'http' })
	})
		.then(function(res) { return res.json() })
		.then(function(resp) {
			if (resp.error) throw resp.error
			return resp.result
		})
}