import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`.btn { background-color: #343a40; }`],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() oonRefresh: EventEmitter<null> = new EventEmitter<null>();

  refresh() {
    this.oonRefresh.emit();
  }
}
