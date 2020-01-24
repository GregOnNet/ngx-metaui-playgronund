import { Entity } from '@ngx-metaui/rules';

type ModelPropertyKeys<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type ModelProperties<T> = Pick<T, ModelPropertyKeys<T>>;

const typeOf = {
  string: '',
  number: 0,
  boolean: true,
  date: new Date()
};

export class Todo implements Entity {
  constructor(
    public id: string,
    public title: string,
    public text: string,
    public isDone: boolean,
    public createdAt: Date
  ) {}

  identity(): string {
    return this.id;
  }

  getTypes(): ModelProperties<Todo> {
    return {
      id: typeOf.string,
      title: typeOf.string,
      text: typeOf.string,
      isDone: typeOf.boolean,
      createdAt: typeOf.date
    };
  }
  /**
   * Used by MetaUI to identify the name of the class once everything is minified
   */
  className(): string {
    return 'Todo';
  }

  toString(): string {
    return this.title;
  }
}
