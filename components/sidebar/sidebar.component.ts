import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

// can get from db as well
export const ROUTES: RouteInfo[] = [
    { path: '/home/tasks', title: 'Tasks', icon: 'nc-badge', class: '' },

    { path: '/home/measure', title: 'Measure', icon: 'nc-bullet-list-67', class: '' },
    { path: '/home/charts', title: 'Charts', icon: 'nc-chart-pie-36', class: '' },
];

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
