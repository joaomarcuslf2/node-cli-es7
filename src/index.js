// @flow

import { helloWorld } from './helpers';

helloWorld().then((res: string): void => console.log(res));
