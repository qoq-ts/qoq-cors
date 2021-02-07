# qoq-cors
Cross Origin Resource Sharing for qoq based on [@koa/cors](https://github.com/koajs/cors).

[![License](https://img.shields.io/github/license/qoq-ts/qoq-cors)](https://github.com/qoq-ts/qoq-cors/blob/master/LICENSE)

# Installation
```bash
yarn add qoq-cors
```

# Usage
```typescript
import { WebSlotManager } from 'qoq';
import { Cors } from 'qoq-cors';

export const webSlots = WebSlotManager.use(new Cors());
```

# Options
@see [@koa/cors](https://github.com/koajs/cors/blob/master/README.md)
