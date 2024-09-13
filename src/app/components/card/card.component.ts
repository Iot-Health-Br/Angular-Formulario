import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  nome: string = '';  // Propriedade para o nome do usuário

  constructor(private userService: UserService) {}

  saveUser(): void {
    if (this.nome.trim()) {
      const user: User = { nome: this.nome };
      this.userService.saveUser(user).subscribe(
        response => {
          console.log('User saved successfully:', response);
          this.nome = '';  // Limpa o campo após salvar
        },
        error => {
          console.error('Error saving user:', error);
        }
      );
    } else {
      console.error('Nome está vazio.');
    }
  }
}
