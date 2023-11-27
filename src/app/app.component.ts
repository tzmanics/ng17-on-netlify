import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG17';
  list = [
    { short:"/g", url:"https://google.com" },
    { short:"/foro", url:"https://foro.mk" },
    { short:"/coffee", url:"https://foro.mk/coffee" },
  ]
  currentRoute: string | undefined;

  constructor(private router: Router) {
    // console.log(this.router.url);
    // console.log(route.queryParamMap.get('url'));
    router.events//.filter(event => event instanceof NavigationEnd)
          .subscribe(event  =>
          {
            if (event instanceof NavigationEnd)
            {
              var map = this.list.find(a=>a.short == event.url)
              if (map?.url)
                this.goToPage(map.url);
            }
          });
  }

  goToLink(url: string) {
    window.open(url, "_target");
  }
  goToPage(url: string) {
    window.location.href = url;
  }

}
