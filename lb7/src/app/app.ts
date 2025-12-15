import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable, filter, switchMap } from 'rxjs';
import { ApiService, User, Post } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  users$: Observable<User[]> = this.api.getUsers();

  private selectedUserId$ = new BehaviorSubject<number | null>(null);

  posts$: Observable<Post[]> = this.selectedUserId$.pipe(
    filter((id): id is number => id !== null),
    switchMap((id) => this.api.getPostsByUserId(id))
  );

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.selectUser(1);
  }

  selectUser(id: number | string): void {
    this.selectedUserId$.next(Number(id));
  }
}
