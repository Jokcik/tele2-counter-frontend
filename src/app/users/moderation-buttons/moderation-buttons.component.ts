import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-moderation-buttons',
  templateUrl: './moderation-buttons.component.html',
  styleUrls: ['./moderation-buttons.component.scss']
})
export class ModerationButtonsComponent implements OnInit {
  @Input() username: string;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  deleteContent(type: string) {
    if (!confirm('Вы точно хотите удалить эту информацию?')) {
      return false;
    }

    this.httpClient.post(
      environment.url + 'moderation/delete-content',
      {username: this.username, type},
      {headers: {'Authorization': localStorage.getItem('cw-token')}}
    )
      .subscribe((data: any) => {
        alert(data.response.message);
      });
  }

}
