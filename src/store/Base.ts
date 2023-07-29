import { action } from 'mobx';

type PropName<T> = keyof PropSubObject<T>;

type PropSubObject<T> = {
  [K in keyof T as T[K] extends (...args: any) => any ? never : K]: T[K];
};

export class Base {
  @action
  set<T extends PropName<this>>(propName: T, propValue: this[T]) {
    this[propName] = propValue;
  }
  @action
  merge(obj: PropSubObject<this>) {}
}
