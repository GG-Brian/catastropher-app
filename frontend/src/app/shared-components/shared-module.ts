import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItcBarComponent } from './itc-bar/itc-bar.component';
import { ItcFooterComponent } from './itc-footer/itc-footer.component';



@NgModule({
  declarations: [ItcBarComponent, ItcFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [ItcBarComponent, ItcFooterComponent]
})
export class SharedModuleModule { }
