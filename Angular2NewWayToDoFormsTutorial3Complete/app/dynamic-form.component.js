"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var dynamic_form_question_component_1 = require('./dynamic-form-question.component');
var question_control_service_1 = require('./question-control.service');
var DynamicFormComponent = (function () {
    function DynamicFormComponent(qcs) {
        this.qcs = qcs;
        this.questions = [];
        this.payLoad = '';
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.questions);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DynamicFormComponent.prototype, "questions", void 0);
    DynamicFormComponent = __decorate([
        core_1.Component({
            selector: 'dynamic-form',
            /*
            <!--
        It presents a list of questions, each question bound to a <df-question> component element. The <df-question> tag matches
            the DynamicFormQuestionComponent, the component responsible for rendering the details of each individual question based
            on values in the data-bound question object.
        -->
            */
            template: "\n<div>\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n\n    <div *ngFor=\"let question of questions\" class=\"form-row\">\n      <df-question [question]=\"question\" [form]=\"form\"></df-question>\n    </div>\n\n    <div class=\"form-row\">\n      <button type=\"submit\" [disabled]=\"!form.valid\">Save</button>\n    </div>\n  </form>\n\n  <div *ngIf=\"payLoad\" class=\"form-row\">\n    <strong>Saved the following values</strong><br>{{payLoad}}\n  </div>\n</div>",
            directives: [dynamic_form_question_component_1.DynamicFormQuestionComponent, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [question_control_service_1.QuestionControlService]
        }), 
        __metadata('design:paramtypes', [question_control_service_1.QuestionControlService])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());
exports.DynamicFormComponent = DynamicFormComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=dynamic-form.component.js.map