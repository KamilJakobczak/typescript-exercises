import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeys.PATH,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.METHOD,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target, key) || [];

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
