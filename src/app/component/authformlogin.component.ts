import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteMeta } from '@analogjs/router';
import {
  FormlyFieldConfig,
  FormlyFormOptions,
  FormlyModule,
} from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

export const routeMeta: RouteMeta = {
  title: 'About Analog',
  providers: [importProvidersFrom(FormlyModule.forChild())],
};

@Component({
  selector: 'app-authformlogin',
  standalone: true,
  imports: [
    CommonModule,
    FormlyMaterialModule,
    FormlyModule,
    ReactiveFormsModule,
  ],
  templateUrl: './authformlogin.component.html',
  styleUrls: ['./authformlogin.component.css'],
})
export class AuthformloginComponent {
  form = new FormGroup({});
  model = { name: '', email: '', password: '' };
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  error!: { state: string; message: string };
  // Configuration of Formly formfield
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName:
        'flex justify-between items-start gap-3 flex-col w-full',
      fieldGroup: [
        {
          template: `<strong class="text-gray-900">Name</strong>
          `,
          className: 'text-[#1C3738] md:ml-0 ml-[5%] mt-5 font-medium',
        },
        {
          className:
            'w-[90%] mx-[5%] md:mx-0 md:w-[400px] h-[50px] rounded-[5px] bg-white pl-4 border-[1.5px]  text-gray-900 ring-1 ring-inset ring-gray-300 border-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6',
          type: 'input',
          key: 'name',
          templateOptions: {
            label: 'Name',
            placeholder: 'Enter your name',
            required: true,
            type: 'name',
          },
          validation: {
            messages: {
              required: 'Name is required',
            },
          },
        },
      ],
    },

    {
      fieldGroupClassName:
        'flex justify-between items-start gap-3 flex-col w-full',
      fieldGroup: [
        {
          template: `<strong class="text-gray-900">Email</strong>
          `,
          className: 'text-[#1C3738] md:ml-0 ml-[5%] mt-5 font-medium',
        },
        {
          className:
            'w-[90%] mx-[5%] md:mx-0 md:w-[400px] h-[50px] rounded-[5px] bg-white pl-4 border-[1.5px]  text-gray-900 ring-1 ring-inset ring-gray-300 border-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6',
          type: 'input',
          key: 'email',
          templateOptions: {
            label: 'Email',
            placeholder: 'Enter your email',
            required: true,
            type: 'email',
          },
          validation: {
            messages: {
              required: 'Email is required',
            },
          },
          validators: {
            email: {
              expression: (c: AbstractControl) =>
                !c.value ||
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  c.value
                ),
              message: (error: any, field: FormlyFieldConfig) =>
                `"${field.formControl!.value}" is not a valid Email Address`,
            },
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'flex justify-between items-start gap-3 flex-col',
      fieldGroup: [
        {
          template: `<strong class="text-gray-900">Password</strong>`,
          className: 'text-[#1C3738] md:ml-0 ml-[5%] mt-10 font-medium',
        },
        {
          className:
            'w-[90%] mx-[5%] md:mx-0 md:w-[400px] h-[50px] rounded-[5px] bg-white pl-4 border-[1.5px]  text-gray-900 ring-1 ring-inset ring-gray-300 border-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6',
          key: 'password',
          type: 'input',
          templateOptions: {
            label: 'Password',
            placeholder: 'Enter your password',
            required: true,
            type: 'password',
          },
          validation: {
            messages: {
              required: 'password is required',
            },
          },
        },
      ],
    },
  ];
  onSubmit() {
    if (this.form.valid) {
      console.log({
        email: this.model.email,
        password: this.model.password,
      });
    }
  }
}
