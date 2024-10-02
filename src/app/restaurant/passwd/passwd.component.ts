import { Component } from '@angular/core';

@Component({
  selector: 'app-passwd',
  standalone: true,
  imports: [],
  templateUrl: './passwd.component.html',
  styleUrl: './passwd.component.css'
})
export class PasswdComponent {

}


// Modal functionality for "Forgot Password"
const forgotPasswordLink = document.getElementById('forgot-password-link');
const modal = document.getElementById('forgot-password-modal');
const closeModal = document.querySelector('.close');

forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

