import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({ logger: true });

// Servire i file statici del frontend (buildato)
fastify.register(fastifyStatic, {
  root: join(__dirname, '../../frontend/dist'),
  prefix: '/',
  wildcard: false,
});

// Fallback per SPA (React Router)
fastify.setNotFoundHandler((_req, reply) => {
  reply.sendFile('index.html');
});

// API di esempio
fastify.get('/api/health', async () => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

const start = async () => {
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  try {
    await fastify.listen({ port, host: '0.0.0.0' });
    fastify.log.info(`Server listening on http://localhost:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();