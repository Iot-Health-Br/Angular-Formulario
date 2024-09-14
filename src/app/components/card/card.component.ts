import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';  // Importe o MatSnackBar
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
    MatIconModule,
    MatSnackBarModule  // Importe o MatSnackBarModule
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  nome: string = '';  // Nome do usuário
  cpf: string = '';   // CPF do usuário

  constructor(private userService: UserService, private snackBar: MatSnackBar) {}  // Injete o MatSnackBar

  saveUser(): void {
    if (this.nome.trim() && this.cpf.trim()) {  // Verifica se os campos não estão vazios
      const user: User = { nome: this.nome, cpf: this.cpf };  // Cria o objeto User com nome e CPF

      this.userService.saveUser(user).subscribe(
        response => {
          this.nome = '';  // Limpa os campos após salvar
          this.cpf = '';
          this.showMessage('Usuário salvo com sucesso!', 'success');  // Mostra a mensagem de sucesso
        },
        error => {
          console.error('Error saving user:', error);
          this.showMessage('Erro ao salvar o usuário. Tente novamente!', 'error');  // Mostra a mensagem de erro
        }
      );
    } else {
      this.showMessage('Nome ou CPF estão vazios.', 'error');
    }
  }

  // Método para exibir mensagens usando MatSnackBar
  showMessage(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,  // Duração da mensagem
      panelClass: type === 'success' ? 'snack-success' : 'snack-error',  // Classe para diferenciar o tipo de mensagem
    });
  }
}
