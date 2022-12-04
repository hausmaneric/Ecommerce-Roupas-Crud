import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-prod-vend-site',
  templateUrl: './prod-vend-site.component.html',
  styleUrls: ['./prod-vend-site.component.css']
})
export class ProdVendSiteComponent implements OnInit {

  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = []; // true = solid star; false = empty star

  snackBarDuration = 1000;
  // response = [
  //   'You broke my heart!',
  //   'Really?',
  //   'We will do better next time.',
  //   'Glad you like it!',
  //   'Thank you so much!'
  // ]

  constructor(
    private snackBar: MatSnackBar
  ) {
    // default to no rating, i.e. all empty stars
    this.ratingArr = Array(this.starCount).fill(false);
  }

  ngOnInit(): void {
  }

  returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(i: number) {
    this.rating = i + 1;
    console.log(this.rating)
    // this.snackBar.open(this.response[i], '', {
    //   duration: this.snackBarDuration,
    //   panelClass: ['snack-bar']
    // });

  }
}
