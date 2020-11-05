import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardSubtitleComponent } from './card-subtitle/card-subtitle.component';
import { CardAvatarComponent } from './card-avatar/card-avatar.component';
import { CardBacksideComponent } from './card-backside/card-backside.component';

const COMPONENTS = [
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  CardActionsComponent,
  CardFooterComponent,
  CardImageComponent,
  CardTitleComponent,
  CardSubtitleComponent,
  CardAvatarComponent,
  CardBacksideComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule
  ],
  exports: COMPONENTS
})
export class CardModule { }
