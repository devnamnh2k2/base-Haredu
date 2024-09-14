import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { ErrorComponent } from './error/error.component';
import { ShareModule } from '#components/share/share.module';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [ErrorComponent, DemoComponent],
  imports: [CommonModule, CommonsRoutingModule, ShareModule],
})
export class CommonsModule {}
