import { Component, ViewChild, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alertRef: ComponentRef<AlertComponent>;
  @ViewChild('alertBox', { read: ViewContainerRef }) alertBox: ViewContainerRef;
  @ViewChild(DashboardComponent) dashboard: DashboardComponent;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  alert(date) {
    if (!this.alertRef) {
      const alertComponent = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
      this.alertRef = this.alertBox.createComponent(alertComponent);
    }

    this.alertRef.instance.date = date;
    this.alertRef.changeDetectorRef.detectChanges();

    setTimeout(() => this.destroyAlert(), 5000);
  }

  destroyAlert() {
    if (this.alertRef) {
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }

  refresh() {
    this.dashboard.generateData();
  }
}