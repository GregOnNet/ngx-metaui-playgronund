import { Entity } from '@ngx-metaui/rules';

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

  getTypes(): any {
    return {
      id: String,
      title: String,
      text: String,
      isDone: Boolean,
      createdAt: Date
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
