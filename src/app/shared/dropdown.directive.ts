import { Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toogleOpen() {
    this.isOpen = !this.isOpen;
  }
}
