import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {
  isHovered = false;
  isTransparent = true;
  dropdownForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.dropdownForm = this.fb.group({
      selectedOption: ['option1']
    });
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // You may need to adjust this threshold based on your layout
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // If scrolled down, make the toolbar transparent; otherwise, make it white if hovered
    this.isTransparent = scrollY === 0 && !this.isHovered;
  }
}
