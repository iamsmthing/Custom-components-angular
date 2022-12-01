import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Title 1',
      imageUrl: 'https://picsum.photos/200/300',
      username: 'nature',
      content: 'kjkjdkjskjd',
    },
    {
      title: 'Title 2',
      imageUrl: 'https://picsum.photos/200/300',
      username: 'imsmthing09',
      content: 'kjkjdkjskjd',
    },
    {
      title: 'Title 3',
      imageUrl: 'https://picsum.photos/200/300',
      username: 'nicedemon',
      content: 'kjkjdkjskjd',
    },
  ];
}
