const USERNAME = "admin";
const PASSWORD = "ayden";

async function handleRequest(context) {
  const authorization = context.request.headers.get("Authorization");

  if (authorization) {
    const [scheme, encoded] = authorization.split(" ");
    if (scheme === "Basic") {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");
      if (user === USERNAME && pass === PASSWORD) {
        return await context.next();
      }
    }
  }

  return new Response("Zugang verweigert", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Shuttleservice Website", charset="UTF-8"',
    },
  });
}

export function onRequest(context) {
  return handleRequest(context);
}
