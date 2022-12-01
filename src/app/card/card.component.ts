import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() username: string = '';
  @Input() content: string = '';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
}
