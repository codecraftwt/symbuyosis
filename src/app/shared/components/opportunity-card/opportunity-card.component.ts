import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-opportunity-card',
  standalone: true,
  imports: [FormsModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './opportunity-card.component.html',
  styleUrl: './opportunity-card.component.scss'
})
export class OpportunityCardComponent {
  private modalService = inject(NgbModal);
  public enquiryText = '';

  @Input() public opportunities: any;
  @Input() public isPost: boolean = false;
  @Input() public isEnquire: boolean = false;

  @Output() public editClicked = new EventEmitter<void>();
  @Output() public saveDraftClicked = new EventEmitter<void>();
  @Output() public postClicked = new EventEmitter<void>();
  @Output() public submitClicked = new EventEmitter<string>();
  @Output() public bookmarkClicked = new EventEmitter<void>();

  protected onEdit() {
    this.editClicked.emit();
  }

  protected onSaveDraft() {
    this.saveDraftClicked.emit();
  }

  protected onPost() {
    this.postClicked.emit();
  }

  protected onBookMarked() {
    this.bookmarkClicked.emit();
  }

  protected onSubmit(content: TemplateRef<any>) {
    this.submitClicked.emit(this.enquiryText);
    this.modalService.open(content, { centered: true });
  }

  protected onEnquire(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
}
