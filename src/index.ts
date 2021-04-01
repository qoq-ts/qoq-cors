import { Slot } from 'qoq';
import cors, { Options } from '@koa/cors';

export class Cors extends Slot<Slot.Web> {
  constructor(options?: Options) {
    super();
    this.use(cors(options));
  }
}
