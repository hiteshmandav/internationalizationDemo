import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public selectedLanguage: string;

  public supportedLanguages = [
    {
      id: "en-US",
      label: "English-USA",
    },{
      id: "en-IN",
      label: "English-INDIA",
    },{
      id: "hi-IN",
      label: "Hindi-INDIA",
    },{
      id: "fr-FR",
      label: "French-France",
    },{
      id: "es-ES",
      label: "Espaniol-Spain",
    },
  ]

  constructor(){
    this.selectedLanguage = localStorage.getItem('selectedLanguage') || 'en-US';
  }

  public changeSelectedLanguage(selectedLanguage: any): void {
    this.selectedLanguage = selectedLanguage;
    localStorage.setItem('selectedLanguage', this.selectedLanguage);
    window.location.reload();
  }


}
