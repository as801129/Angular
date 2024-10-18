import { Component, OnInit } from '@angular/core';
import { stationList } from './station-list.const';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Message, MessageForm } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {
  formData: FormGroup;
  title = 'angular-tour-of-heroes';
  list = stationList;
  messages: Message[] = [];
  pink: string | undefined


  constructor(
    private fb: FormBuilder
  ) {
    this.formData = this.fb.group({
    name: ['', Validators.required],
    content: ['', [Validators.required]]
    });
}
  ngOnInit(): void {

  }

  /**
 * 新增留言
 *
 * @memberof AppComponent
 */
addMessage(): void {
  // 防呆，避免名稱或內容是空值時也可以留言
  // const model = this.formData.getRawValue();
  const model = new Message(this.formData.get('name')?.value, this.formData.get('content')?.value);
  if (!model.name || !model.content) {
    return;
  }
   this.messages.push(model);
   // 清空內容
    this.formData.reset();

 }

}
