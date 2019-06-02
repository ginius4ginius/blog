import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog de vincent';
  date: Date = new Date();


  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet mollis iaculis. Ut nec venenatis metus. Aliquam tincidunt, eros a finibus imperdiet, sem sem efficitur orci, vitae efficitur dolor elit eu augue. Fusce pulvinar magna massa, sit amet tristique diam semper sit amet. Aliquam eget posuere leo. Pellentesque id blandit neque, et vulputate mi. Nam convallis, ipsum ut porta faucibus, arcu lectus posuere nisi, ac pharetra nulla est et ante. Nam egestas quis erat quis rhoncus. Curabitur lobortis nunc nec tempus fringilla. Maecenas eget viverra enim. Sed laoreet mattis est in vestibulum. Aliquam mattis ante diam, quis suscipit ipsum lacinia eget. Etiam pretium vehicula pretium.',
      loveIts: 0,
      created_at: this.date
    },
    {
      title: 'Mon deuxième post',
      content: 'Ut quis sem in lacus volutpat elementum in ut eros. Donec vehicula odio at imperdiet vehicula. Proin blandit finibus eros, at accumsan nisi. Nam hendrerit purus sit amet mi fermentum posuere. Nullam convallis, orci at viverra bibendum, dolor augue egestas nulla, quis efficitur turpis augue et libero. Donec luctus arcu ut sem laoreet, non pulvinar quam congue. Praesent auctor lacus quis enim viverra iaculis. Sed libero odio, porta eu lorem eu, ultrices ornare leo. In nisl massa, bibendum at nunc et, sagittis fringilla justo. Vestibulum a consectetur tortor, sed hendrerit felis. In interdum velit sit amet massa accumsan venenatis. Vestibulum ultrices efficitur ante vehicula mattis.',
      loveIts: 0,
      created_at: this.date
    },
    {
      title: 'Encore un post',
      content: 'Maecenas ut ante lacus. Maecenas viverra vestibulum purus, vestibulum facilisis ex maximus suscipit. Ut euismod odio ac sagittis commodo. Praesent lacinia convallis est, ut elementum dolor tincidunt vitae. Curabitur id turpis sed massa consequat fermentum. Praesent et dapibus ex. Nunc pretium dui a elit gravida, ac egestas mi placerat. Cras vulputate, erat at iaculis consequat, dui lorem consectetur lectus, id varius erat leo vitae magna. Pellentesque rutrum commodo velit vel mollis. Curabitur non turpis congue ante malesuada gravida vitae vitae velit. Nunc orci enim, dignissim id ipsum sed, posuere consectetur libero.',
      loveIts: 0,
      created_at: this.date
    }
  ];

}
