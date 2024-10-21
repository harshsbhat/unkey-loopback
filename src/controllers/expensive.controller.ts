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
  description: 'Expensive Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'ExpensiveResponse',
        properties: {
          message: { type: 'string' }, // Simple message
        },
      },
    },
  },
};

export class ExpensiveController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @get('/expensive')
  @response(200, EXPENSIVE_RESPONSE)
  async expensiverResponse(): Promise<object> {
    const ip = this.req.ip || "anonymous";
    const { success } = await unkey.limit(ip, { cost: 4 });

    if (!success) {
      throw new HttpErrors.TooManyRequests('Rate limit exceeded!');
    }

    return {
      message: "Expensive route accessed",
    };
  }
}
