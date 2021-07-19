import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[ngIfMedia]'
})
export class MediaQueryDirective implements OnInit, OnDestroy {

  @Input() ngIfMedia: string;

  private hasView = false;
  private destroy$: Subject<boolean>;

  constructor(
    private readonly viewContainer: ViewContainerRef,
    private readonly template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.setMediaListener(this.ngIfMedia);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setMediaListener(query: any): void {
    const mediaQueryList = window.matchMedia(query);
    this.setView(mediaQueryList.matches);
    fromEvent(mediaQueryList, 'change')
      .pipe(takeUntil(this.destroy$)).subscribe(
      (event: MediaQueryListEvent) => {
        this.setView(event.matches);
      },
      (error) => console.log(error)
    );
  }

  setView(match: boolean): void {
    if (match && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    }
    if (!match && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }

}
