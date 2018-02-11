import {Directive, ElementRef, HostListener, Input, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective implements OnDestroy {
  @Input() appToggle: string;
  toggle$ = new Subject();
  private _toggleSubscription = this.toggle$
    .subscribe(status => {
      if (status && !this.hostElem.nativeElement.classList.contains(this.appToggle)) {
        this.hostElem.nativeElement.classList.add(this.appToggle);
      } else {
        this.hostElem.nativeElement.classList.remove(this.appToggle);
      }
    });

  @HostListener('mouseenter') mouseOver() {
    this.toggle$.next(true);
  }

  @HostListener('mouseleave') mouseLeave() {
    this.toggle$.next(false);
  }

  constructor(private hostElem: ElementRef) {
  }

  ngOnDestroy(): void {
    this._toggleSubscription.unsubscribe();
  }
}
