import Fastify from 'fastify';
import usersRoute from '@/routes/users';

const fastify = Fastify({
  logger: false,
});

fastify.get('/', () => {
  return { hello: 'world 2' };
});

void fastify.register(usersRoute, { prefix: '/users' });

fastify.listen({ port: 4001 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
