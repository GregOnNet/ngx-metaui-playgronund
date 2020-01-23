import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetaConfig, MetaUIRulesModule } from '@ngx-metaui/rules';
import * as userRules from './rules/user-rules';
import { PrimeNgRulesModule } from '@ngx-metaui/primeng-rules';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MetaUIRulesModule.forRoot({}),
    PrimeNgRulesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private config: MetaConfig) {
    
   // mandatory - you need to register app defined rules and types since there is no
   // introspection in js

    const rules: any[] = config.get('metaui.rules.user-rules') || [];
    rules.push(userRules);
    config.set('metaui.rules.user-rules', rules);

  }
}
