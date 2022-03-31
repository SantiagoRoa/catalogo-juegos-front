import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game/game.service';
import { Game } from '../../model/game/game';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss']
})
export class IndexPage implements OnInit {

  public urlImgS: string = "./../../../assets/icons/search.png"
  public hidden: boolean = true;
  public gameName: string
  public games: any;

  constructor(private gameService: GameService) {

    this.gameName = ""
    this.games = []

  }


  ngOnInit(): void {
    this.getAllGames()
  }

  search(name: string) {

    if (name == "") {
      window.alert("No se ha ingresado nada.");
    } else {
      this.hidden = false
      this.gameName = name
      this.getGames()
    }

  }

  getAllGames() {
    this.gameService.getAllGames().subscribe(
      res => {
        console.log(res);
        this.games = res;
      },
      err => console.error("error de front: ", err)
    )
  }

  getGames() {
    this.gameService.getAllByGameName(this.gameName).subscribe(
      res => {
        console.log(res);
        this.games = res;
      },
      err => console.error("error de front: ", err)
    )
  }

}
