import { FormControl } from "@angular/forms";

export class Message {
  /**
   * 留言者的名稱
   *
   * @type {string}
   * @memberof Message
   */
  name: string | undefined;

  /**
   * 留言的內容
   *
   * @type {string}
   * @memberof Message
   */
  content: string | undefined;

  /**
   * 留言的日期
   *
   * @type {Date}
   * @memberof Message
   */
  date: Date | undefined;
  constructor(name: string, content: string) {

    this.name = name;
    this.content = content;
    this.date = new Date();

  }

}
export interface MessageForm{
  name: FormControl<string | null>;
  content: FormControl<string | null>;
}
