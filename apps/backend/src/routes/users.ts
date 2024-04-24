import type { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { generateMock } from '@anatine/zod-mock';
import type { Id } from '@repo/middleman/models/shared';
import { type UserPayload, zUser } from '@repo/middleman/models/user';

export default (fastify: FastifyInstance, _options: RouteShorthandOptions, done: () => void) => {
  fastify.get('/', () => {
    return generateMock(zUser.array());
  });

  fastify.get<{ Params: { userId: Id } }>('/:userId', (request) => {
    const { userId } = request.params;
    return generateMock(zUser, {
      stringMap: {
        userId: () => userId,
      },
    });
  });

  fastify.post<{ Body: UserPayload }>('/', (request) => {
    const payload = request.body;
    return payload;
  });

  done();
};
