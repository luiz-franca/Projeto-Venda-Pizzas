import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: any;

  loadConfig(): Promise<void> {
    return fetch('assets/config/config.json')
      .then(response => response.json())
      .then(config => {
        this.config = config;
      });
  }

  get apiUrl() {
    return this.config?.apiUrl;
  }
}
