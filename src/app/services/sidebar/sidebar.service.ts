import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  showSidebar: boolean = false;
  constructor() {}

  ShowSideBar(): void {
    this.showSidebar = true;
  }

  HideSideBar(): void {
    this.showSidebar = false;
  }
  ToggleSideBar(): boolean {
    this.showSidebar = !this.showSidebar;
    return this.showSidebar;
  }
}
