import { Entity } from '@ngx-metaui/rules';

export declare type ConstructorFor<T> = new (...args: any[]) => T;

type ConstructorConditional<T> = T extends boolean
  ? BooleanConstructor
  : T extends string
  ? StringConstructor
  : T extends number
  ? NumberConstructor
  : T extends Date
  ? DateConstructor
  : ConstructorFor<T>;

type ModelPropertyKeys<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type ModelProperties<T> = Pick<T, ModelPropertyKeys<T>>;

type ModelPropertiesConstructor<T> = {
  [K in keyof T]: ConstructorConditional<T[K]>;
};

type EntityIntrospectable<T> = ModelPropertiesConstructor<ModelProperties<T>>;

export class Assignee {
  id: string;

  constructor() {}
}

export class Todo implements Entity {
  constructor(
    public id: string,
    public title: string,
    public text: string,
    public isDone: boolean,
    public createdAt: Date,
    public assignee: Assignee
  ) {}

  identity(): string {
    return this.id;
  }

  getTypes(): EntityIntrospectable<Todo> {
    return {
      id: String,
      title: String,
      text: String,
      isDone: Boolean,
      createdAt: Date,
      assignee: Assignee
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
