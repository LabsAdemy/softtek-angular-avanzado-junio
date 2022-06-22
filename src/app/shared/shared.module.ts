import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmptyComponent } from './components/empty/empty.component';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PreviewComponent } from './components/preview/preview.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { ResponseComponent } from './components/response/response.component';

@NgModule({
  declarations: [
    LoadingComponent,
    ErrorComponent,
    EmptyComponent,
    RefreshComponent,
    PreviewComponent,
    ResponseComponent,
  ],
  imports: [CommonModule],
  exports: [
    LoadingComponent,
    ErrorComponent,
    EmptyComponent,
    RefreshComponent,
    PreviewComponent,
    ResponseComponent,
  ],
})
export class SharedModule {}
