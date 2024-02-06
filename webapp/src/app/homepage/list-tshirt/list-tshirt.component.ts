import { Component } from '@angular/core';
import { GomeTshirtComponent } from '../gome-tshirt/gome-tshirt.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-tshirt',
  standalone: true,
  imports: [GomeTshirtComponent,CommonModule],
  templateUrl: './list-tshirt.component.html',
  styleUrl: './list-tshirt.component.css'
})
export class ListTshirtComponent {
  items = [
    { id: 1, text: 'Item 1', imageUrl: 'path/to/image1.jpg' },
    { id: 2, text: 'Item 2', imageUrl: 'path/to/image2.jpg' },
    { id: 3, text: 'Item 3', imageUrl: 'path/to/image3.jpg' },
    // Add more items as needed
  ];
}
