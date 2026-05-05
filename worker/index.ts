interface Env {
  ASSETS: Fetcher;
  BASIC_AUTH_PASSWORD?: string;
}

const USERNAME = 'gaby';
const REALM = 'Gabriela Stoloff-Báez Preview';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (!env.BASIC_AUTH_PASSWORD) {
      return new Response(
        'Site not configured: BASIC_AUTH_PASSWORD secret is missing.',
        { status: 503 }
      );
    }

    if (!isAuthorized(request.headers.get('Authorization'), USERNAME, env.BASIC_AUTH_PASSWORD)) {
      return new Response('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
        },
      });
    }

    return env.ASSETS.fetch(request);
  },
};

function isAuthorized(header: string | null, expectedUser: string, expectedPass: string): boolean {
  if (!header || !header.startsWith('Basic ')) return false;
  let decoded: string;
  try {
    decoded = atob(header.slice(6));
  } catch {
    return false;
  }
  const sep = decoded.indexOf(':');
  if (sep === -1) return false;
  const user = decoded.slice(0, sep);
  const pass = decoded.slice(sep + 1);
  return safeEqual(user, expectedUser) && safeEqual(pass, expectedPass);
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
}
