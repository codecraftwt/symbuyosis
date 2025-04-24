import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-opportunity-card',
  standalone: true,
  imports: [],
  templateUrl: './opportunity-card.component.html',
  styleUrl: './opportunity-card.component.scss'
})
export class OpportunityCardComponent {
  @Input() opportunities: any;

  @Output() editClicked = new EventEmitter<any>();
  @Output() saveDraftClicked = new EventEmitter<any>();
  @Output() postClicked = new EventEmitter<any>();

  onEdit() {
    // this.editClicked.emit();
  }

  onSaveDraft() {
    // this.saveDraftClicked.emit();
  }

  onPost() {
    // this.postClicked.emit();
  }
  onEnquire() {}
  
  onBookMarked() {}
}
