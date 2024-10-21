import {inject} from '@loopback/core';
import {
  get,
  HttpErrors,
  Request,
  response,
  ResponseObject,
  RestBindings,
} from '@loopback/rest';
import {unkey} from "../lib/unkey";

const EXPENSIVE_RESPONSE: ResponseObject = {
  description: 'Cheap Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'CheapResponse',
        properties: {
          message: { type: 'string' }, // Simple message
        },
      },
    },
  },
};

export class CheapController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @get('/cheap')
  @response(200, EXPENSIVE_RESPONSE)
  async cheapResponse(): Promise<object> {
    const ip = this.req.ip || "anonymous";
    const { success } = await unkey.limit(ip, { cost: 2 });

    if (!success) {
      throw new HttpErrors.TooManyRequests('Rate limit exceeded!');
    }

    return {
      message: "Cheap route accessed",
    };
  }
}
