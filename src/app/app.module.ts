import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgRulesModule } from '@ngx-metaui/primeng-rules';
import { MetaConfig, MetaUIRulesModule } from '@ngx-metaui/rules';
import { AppComponent } from './app.component';
import * as userRules from './rules/user-rules';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoUrgentComponent } from './todo-urgent/todo-urgent.component';

@NgModule({
  declarations: [AppComponent, TodoDetailComponent, TodoUrgentComponent],
  entryComponents: [TodoUrgentComponent],
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
