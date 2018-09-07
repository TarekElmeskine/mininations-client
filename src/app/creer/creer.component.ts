import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.css']
})
export class CreerComponent implements OnInit {

  isStarted: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.isStarted = false;
  }

  onStart() {
    this.router.navigate(['se-presenter'], {relativeTo: this.route});
    this.isStarted = true;
  }

}
