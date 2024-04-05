import Fastify from 'fastify';
// import type { Todo } from '@/routes/todo';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', function handler() {
  return { hello: 'world 2' };
});

fastify.listen({ port: 4001 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
