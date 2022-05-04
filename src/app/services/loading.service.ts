import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading:any;
  isLoading: boolean = false;
  constructor(private loadingController: LoadingController) { }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
    });
    await this.loading.present();
  }

  closeLoading() {
    setTimeout(() => {
        this.loading.dismiss();
    }, 500);
  }
}
