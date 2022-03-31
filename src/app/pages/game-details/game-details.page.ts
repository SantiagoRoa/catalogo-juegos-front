import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../services/game/game.service';
import { GameDetail } from '../../model/gameDetail/gameDetail';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss']
})
export class GameDetailsPage implements OnInit {

  game: any;
  urlLogoStore: string = 'https://www.cheapshark.com/img/stores/icons/';

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.getGame()
  }

  getGame(): void {
    console.log(this.route)
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameService.getById(id).subscribe(
      res => {
        this.game = res;
        this.game = this.game[0];
        console.log(this.game)
      },
      err => console.error(err)
    )
  }


  deleteGame(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameService.deleteGame(id).subscribe(
      err => console.error(err)
    )
    this.router.navigateByUrl('/');
  }


}
