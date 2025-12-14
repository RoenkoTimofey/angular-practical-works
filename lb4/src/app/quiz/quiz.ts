import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent, Question } from '../question/question';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, QuestionComponent],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class QuizComponent {
  @ViewChild(QuestionComponent) questionComponent!: QuestionComponent;

  currentQuestion: Question = {
    text: 'Яка столиця України?',
    options: ['Київ', 'Львів', 'Одеса', 'Харків'],
    correctAnswer: 0
  };

  selectedAnswer: number | null = null;

  onAnswerSelected(answerIndex: number): void {
    this.selectedAnswer = answerIndex;
  }

  showAnswer(): void {
    this.questionComponent.showAnswer();
  }
}

