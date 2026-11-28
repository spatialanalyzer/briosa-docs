const DOWNLOADS_ORIGIN = 'https://objects.briosa.dev';
const FORWARDED_HEADERS = [
  'accept',
  'accept-encoding',
  'if-match',
  'if-modified-since',
  'if-none-match',
  'if-range',
  'if-unmodified-since',
  'range',
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const {pathname} = url;

    if (pathname !== '/downloads' && !pathname.startsWith('/downloads/')) {
      return env.ASSETS.fetch(request);
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method Not Allowed', {
        status: 405,
        headers: {Allow: 'GET, HEAD'},
      });
    }

    const upstreamPath =
      pathname === '/downloads' || pathname === '/downloads/'
        ? '/index.html'
        : pathname.slice('/downloads'.length);

    const upstreamUrl = new URL(upstreamPath, DOWNLOADS_ORIGIN);
    if (upstreamUrl.origin !== DOWNLOADS_ORIGIN) {
      return new Response('Bad Request', {status: 400});
    }

    const headers = new Headers();
    for (const name of FORWARDED_HEADERS) {
      const value = request.headers.get(name);
      if (value !== null) headers.set(name, value);
    }

    const upstream = await fetch(upstreamUrl.toString(), {
      method: request.method,
      headers,
      redirect: 'manual',
    });

    return new Response(request.method === 'HEAD' ? null : upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: upstream.headers,
    });
  },
};
