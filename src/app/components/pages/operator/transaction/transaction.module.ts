/**
 * Created by Alex on 5/21/2018.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { OperatorTransactionRoute } from "./transaction.routing";

import { CommonModule } from "@angular/common";
import { OperatorNewCashTransactionComponent } from "./new/newcash/newcash.component";
import { OperatorTransactionLayoutComponent } from "./transaction-layout/transaction-layout.component";
import { OperatorNewFxTransactionComponent } from "./new/newfx/newfx.component";
import { OperatorNewLoanTransactionComponent } from "./new/newloan/newloan.component";
import { OperatorNewDepositTransactionComponent } from "./new/newdeposit/newdeposit.component";
import { OperatorNewSecurityTransactionComponent } from "./new/newsecurity/newsecurity.component";
import { OperatorEditCashTransactionComponent } from './edit/editcash/editcash.component';
import { OperatorEditDepositTransactionComponent } from './edit/editdeposit/editdeposit.component';
import { OperatorEditFxTransactionComponent } from './edit/editfx/editfx.component';
import { OperatorEditLoanTransactionComponent } from './edit/editloan/editloan.component';
import { OperatorEditSecurityTransactionComponent } from './edit/editsecurity/editsecurity.component';
import { OperatorDetailCashTransactionComponent } from './detail/cash/cash.component';
import { OperatorDetailDepositTransactionComponent } from './detail/deposit/deposit.component';
import { OperatorDetailFxTransactionComponent } from './detail/fx/fx.component';
import { OperatorDetailLoanTransactionComponent } from './detail/loan/loan.component';
import { OperatorDetailSecurityTransactionComponent } from './detail/security/security.component';
import { OperatorHoldingTransactionComponent } from './holding/holding.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(OperatorTransactionRoute),
        SharedModule
    ],
    entryComponents: [

    ],
    declarations: [
        OperatorTransactionLayoutComponent,

        OperatorNewCashTransactionComponent,
        OperatorNewFxTransactionComponent,
        OperatorNewLoanTransactionComponent,
        OperatorNewDepositTransactionComponent,
        OperatorNewSecurityTransactionComponent,

        OperatorEditCashTransactionComponent,
        OperatorEditDepositTransactionComponent,
        OperatorEditFxTransactionComponent,
        OperatorEditLoanTransactionComponent,
        OperatorEditSecurityTransactionComponent,

        OperatorDetailCashTransactionComponent,
        OperatorDetailDepositTransactionComponent,
        OperatorDetailFxTransactionComponent,
        OperatorDetailLoanTransactionComponent,
        OperatorDetailSecurityTransactionComponent,

        OperatorHoldingTransactionComponent
    ],
    exports: [
        OperatorTransactionLayoutComponent,

        OperatorNewCashTransactionComponent,
        OperatorNewFxTransactionComponent,
        OperatorNewLoanTransactionComponent,
        OperatorNewDepositTransactionComponent,
        OperatorNewSecurityTransactionComponent,

        OperatorEditCashTransactionComponent,
        OperatorEditDepositTransactionComponent,
        OperatorEditFxTransactionComponent,
        OperatorEditLoanTransactionComponent,
        OperatorEditSecurityTransactionComponent
    ],
    providers: [],
})
export class OperatorTransactionModule {

}
