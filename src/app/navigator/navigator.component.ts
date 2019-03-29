import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class AppNavComponent {

  @ViewChild('drawer') drawer : MatSidenav;
  isHandSetValue : boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggle() {
    this.isHandset$.subscribe((v) => this.isHandSetValue = v);

    if (this.isHandSetValue) {
       this.drawer.toggle();
    }    
  }

}
