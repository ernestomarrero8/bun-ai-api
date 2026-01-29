const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("API de Bun funcionando correctamente");
  }
})


console.log(`Servidor ejecutándose en http://localhost:${server.port}`);

