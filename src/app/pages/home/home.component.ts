import { Component, OnInit } from '@angular/core';
// import { ConnectionService } from 'src/app/shared/services/connection/connection.service';
// import { activeUser } from 'src/app/constants/userData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  walletIsConnected: boolean;
  account: string;

  constructor(
    // private connectionService: ConnectionService
  ) { }

  ngOnInit(): void {
    // const keepConnection = localStorage.getItem('keepConnection');
    // if (keepConnection === 'true') {
    //   this.connectWallet(true);
    // }
  }

  // public connectWallet(newConnection: boolean): void {
  //   this.connectionService.connectAccount(newConnection).then((res) => {
  //     if (res){
  //       this.walletIsConnected = true;
  //       this.account = res[0];
  //       activeUser[0] = res[0];
  //     } else {
  //       this.account = '';
  //       activeUser[0] = '';
  //     }
  //     localStorage.setItem('keepConnection', 'true');
  //   });
  // }

  // disconnect(): void {
  //   activeUser[0] = '';
  //   localStorage.setItem('keepConnection', 'false');
  //   window.location.reload();
  // }

}
