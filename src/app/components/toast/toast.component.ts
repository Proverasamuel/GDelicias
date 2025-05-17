import { Component } from '@angular/core';
import { ToastService } from '../../toast.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgFor],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
 constructor(public toastService: ToastService) {}
}
