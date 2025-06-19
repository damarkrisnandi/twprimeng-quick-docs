import { Component, inject, Input } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import hljs from 'highlight.js';
import { MessageService } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';
import { Doc, DocFile } from '../../models/docs.model';
import { DialogService } from 'primeng/dynamicdialog';
import { DocsDialogComponent } from '../docs-dialog/docs-dialog.component';


@Component({
  selector: 'app-docs-container',
  standalone: true,
  imports: [CommonModule, PanelModule, CardModule, ButtonModule, AccordionModule],
  template: `
   <p-panel styleClass="min-h-[300px]">
    <ng-template pTemplate="header">
      <h2 class="text-xl font-semibold">{{ header }}</h2>
    </ng-template>
    <ng-template pTemplate="content" class="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md">
      <div class="flex flex-col gap-2 w-full">
        <p-accordion value="preview">
            <p-accordion-panel value="preview">
                <p-accordion-header>
                    <ng-template #toggleicon let-active="active">
                      <div class="flex justify-center items-center gap-2">
                        <button pButton icon="pi pi-code" (click)="viewDoc($event, {header, component, files})"></button>
                        @if (active) {
                            <i class="pi pi-eye-slash"></i>
                        } @else {
                            <i class="pi pi-eye"></i>
                        }
                      </div>
                    </ng-template>
                    <span class="flex items-center gap-2 w-full">
                      <p>Preview Template</p>
                    </span>
                  </p-accordion-header>
                  <p-accordion-content>
                    <div class="template-doc m-0 flex flex-col">
                      <ng-template [ngComponentOutlet]="component" />
                    </div>
                </p-accordion-content>
            </p-accordion-panel>
        </p-accordion>
      </div>
    </ng-template>

  </p-panel>
  `,
  styles: `

  `
})
export class DocsContainerComponent {

  @Input() header: string = 'Header';
  @Input() component: any;

  @Input() files: DocFile[] = [];

  messageService = inject(MessageService);
  dialogService = inject(DialogService)

  highlightCode(content: string, type: string): string {
    return hljs.highlight(content, { language: type }).value;
  }

  copyToClipboard(event: any, content: string): void {
    event.stopPropagation();

    navigator.clipboard.writeText(content).then(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Copied to Clipboard',
        detail: 'The code has been copied to your clipboard.',
        life: 3000
      });

      console.log('Copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  viewDoc(event: any, doc: Doc) {
      event.stopPropagation();
      const ref = this.dialogService.open(
        DocsDialogComponent,
        {
          header: doc.header,
          modal: true,
          styleClass: 'w-7/12',
          closable: true,
          data: doc
        }
      )

      ref.onClose.subscribe(() => {

      })
    }
}
