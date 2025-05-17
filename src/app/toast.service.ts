import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: { message: string }[] = [];

  show(message: string, duration = 3000) {
    const toast = { message };
    this.toasts.push(toast);

    setTimeout(() => {
      this.toasts = this.toasts.filter(t => t !== toast);
    }, duration);
  }
}
