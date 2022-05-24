import { Component, OnInit } from '@angular/core';
import { Theme, ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  darkMode: boolean;
  mode: Theme;

  constructor(public themeSrv: ThemeService) {
    this.darkMode = this.themeSrv.theme === 'dark';
    this.mode = this.themeSrv.theme;
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  toggleDarkMode = () => {
    this.darkMode = !this.darkMode;
    const mode = this.darkMode ? 'dark' : 'light';
    this.themeSrv.setTheme(mode);
  }
}
