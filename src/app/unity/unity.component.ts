import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnityComponent implements OnInit {
  constructor(private router: Router){}
  
  async ngOnInit() {

    var buildUrl = "assets/Build";
    var config = {
      dataUrl: buildUrl + "/ensemble_app.data",
      frameworkUrl: buildUrl + "/ensemble_app.framework.js",
      codeUrl: buildUrl + "/ensemble_app.wasm",
      streamingAssetsUrl: "ensemble_app",
      companyName: "Ensemble",
      productName: "EnsembleApp",
      productVersion: "0.1",
      devicePixelRatio: 0
    };

    let container = document.querySelector("#unity-container") || new Element();
    var canvas : HTMLElement = document.querySelector("#unity-canvas") || new HTMLElement();
    var loadingBar : HTMLElement = document.querySelector("#unity-loading-bar") || new HTMLElement();
    var progressBarFull : HTMLElement = document.querySelector("#unity-progress-bar-full") || new HTMLElement();
    var fullscreenButton : HTMLElement = document.querySelector("#unity-fullscreen-button") || new HTMLElement();
    var mobileWarning : HTMLElement = document.querySelector("#unity-mobile-warning") || new HTMLElement();

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      container.className = "unity-mobile";
      config.devicePixelRatio = 1;
      mobileWarning.style.display = "block";
      setTimeout(() => {
        mobileWarning.style.display = "none";
      }, 5000);
    } else {
      canvas.style.width = "960px";
      canvas.style.height = "600px";
    }
    loadingBar.style.display = "block";

    createUnityInstance(canvas, config, (progress: any) => {
      progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance: any) => {
      loadingBar.style.display = "none";
      fullscreenButton.onclick = () => {
        unityInstance.SetFullscreen(1);
      };
    }).catch((message: any) => {
      alert(message);
    });

  }
}