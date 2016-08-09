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
var question_base_1 = require('./question-base');
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
var DynamicFormQuestionComponent = (function () {
    function DynamicFormQuestionComponent() {
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.question.key].valid; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', question_base_1.QuestionBase)
    ], DynamicFormQuestionComponent.prototype, "question", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof forms_1.FormGroup !== 'undefined' && forms_1.FormGroup) === 'function' && _a) || Object)
    ], DynamicFormQuestionComponent.prototype, "form", void 0);
    DynamicFormQuestionComponent = __decorate([
        core_1.Component({
            selector: 'df-question',
            /*
            <!--
            Notice this component can present any type of question in our model. We only have two types of questions at this point
            but we can imagine many more. The ngSwitch determines which type of question to display.
            In both components we're relying on Angular's ngFormModel to connect the template HTML to the underlying control objects,
            populated from the question model with display and validation rules.
        
            What is the attr.for you may ask?
            We can set the value of an attribute directly with an attribute binding.
            We have stressed throughout this chapter that setting an element property with a property binding is always
            preferred to setting the attribute with a string. Why does Angular offer attribute bindin
            We must use attribute binding when there is no element property to bind.
            As the message says, the <td> element does not have a colspan property.
            It has the "colspan" attribute, but interpolation and property binding can set only properties, not attributes.
            We need attribute bindings to create and bind to such attributes.
            Attribute binding syntax resembles property binding. Instead of an element property between brackets, we start with the prefix attr,
            followed by a dot (.) and the name of the attribute. We then set the attribute value, using an expression that resolves to a string.
            label for attribute => for element_id	Specifies which form element a label is bound to
        -->
            */
            template: "\n<div [formGroup]=\"form\">\n  <label [attr.for]=\"question.key\">{{question.label}}</label>\n\n  <div [ngSwitch]=\"question.controlType\">\n\n    <input *ngSwitchCase=\"'textbox'\" [formControlName]=\"question.key\"\n            [id]=\"question.key\" [type]=\"question.type\">\n\n    <select [id]=\"question.key\" *ngSwitchCase=\"'dropdown'\" [formControlName]=\"question.key\">\n      <option *ngFor=\"let opt of question.options\" [value]=\"opt.key\">{{opt.value}}</option>\n    </select>\n\n  </div> \n\n  <div class=\"errorMessage\" *ngIf=\"!isValid\">{{question.label}} is required</div>\n</div>\n",
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], DynamicFormQuestionComponent);
    return DynamicFormQuestionComponent;
    var _a;
}());
exports.DynamicFormQuestionComponent = DynamicFormQuestionComponent;
//# sourceMappingURL=dynamic-form.component.js.map