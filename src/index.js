// @flow

import { helloWorld } from './test';

helloWorld().then((res: string): void => console.log(res));
