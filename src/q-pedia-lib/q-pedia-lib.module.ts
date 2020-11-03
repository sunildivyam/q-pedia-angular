import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QpCommonModule } from './qp-common';
import { EducationModule } from './education/education.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { ScienceResearchModule } from './science-research/science-research.module';
import { RecruitmentModule } from './recruitment/recruitment.module';
import { DataAnalyticsModule } from './data-analytics/data-analytics.module';
import { EntertainmentModule } from './entertainment/entertainment.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QpCommonModule,
    EducationModule,
    EcommerceModule,
    ScienceResearchModule,
    RecruitmentModule,
    DataAnalyticsModule,
    EntertainmentModule
  ],
  exports: [ 
    QpCommonModule,
    EducationModule,
    EcommerceModule,
    ScienceResearchModule,
    RecruitmentModule,
    DataAnalyticsModule,
    EntertainmentModule
  ]
})
export class QPediaLibModule { }
