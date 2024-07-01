import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'micro-frontend-memory-entry',
  template: `<micro-frontend-nx-welcome></micro-frontend-nx-welcome>`,
})
export class RemoteEntryComponent {}
