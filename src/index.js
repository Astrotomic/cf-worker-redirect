import REDIRECT_MAP from '../redirects.json'

async function handleRequest(request) {
	const url = new URL(request.url)
	const fullUrl = url.host + url.pathname

	let target = REDIRECT_MAP[fullUrl] || REDIRECT_MAP[`${ url.host }/*`]

	if (!target) {
		return new Response('Sorry, page not found.', {
			status: 404,
			statusText: 'page not found'
		})
	}

	if (target.includes('/*')) {
		target = target.replace('/*', url.pathname)
	}

	const targetUrl = new URL(target)

	Array.from(url.searchParams).forEach(([ key, val ]) => {
		if (!targetUrl.searchParams.has(key)) {
			targetUrl.searchParams.set(key, val)
		}
	})

	const redirectTo = targetUrl.toString()

	return Response.redirect(redirectTo, 301)
}

addEventListener('fetch', (event) => {
	const request = event.request

	if (request.method === 'GET') {
		event.respondWith(handleRequest(request))
	} else {
		event.respondWith(
			new Response(null, {
				status: 405,
				statusText: 'Method Not Allowed'
			})
		)
	}
})