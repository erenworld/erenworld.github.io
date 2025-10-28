import { Buffer } from 'node:buffer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_URL = "https://accounts.spotify.com/api/token";
const CLIENT_ID = undefined                                 ;
const CLIENT_SECRET = undefined                                     ;
const REFRESH_TOKEN = undefined                                     ;
const GET = async () => {
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
  const tokenRes = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `grant_type=refresh_token&refresh_token=${REFRESH_TOKEN}`
  });
  const tokenData = await tokenRes.json();
  const res = await fetch(NOW_PLAYING_URL, {
    headers: { Authorization: `Bearer ${tokenData.access_token}` }
  });
  if (res.status === 204 || res.status > 400) {
    return json({ isPlaying: false });
  }
  const data = await res.json();
  if (data.currently_playing_type !== "track") {
    return json({ isPlaying: false });
  }
  const payload = {
    isPlaying: data.is_playing,
    title: data.item.name,
    artist: data.item.artists.map((a) => a.name).join(", "),
    album: data.item.album.name,
    albumImageUrl: data.item.album.images[0].url,
    songUrl: data.item.external_urls.spotify,
    explicit: data.item.explicit
  };
  return json(payload);
};
const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "Content-Type": "application/json" }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
