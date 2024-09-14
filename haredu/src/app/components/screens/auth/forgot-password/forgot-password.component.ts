import { BaseComponent } from '#components/core/base/base.component';
import { UserRepository } from '#repositories/user.repository';
import { ComponentService } from '#services/component.service';
import { LOGO } from '#utils/const';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from 'src/app/validators/email.validator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent extends BaseComponent implements OnInit {
  logo = LOGO;
  constructor(
    protected componentService: ComponentService,
    private formBuilder: FormBuilder,
    private userRepository: UserRepository,
  ) {
    super(componentService);
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, EmailValidator]],
    });
  }
  ngOnInit(): void {}

  onBlur(controlName: string) {
    const control = this.getControl(controlName);
    if (control?.invalid) {
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.ngSubmit({
      observable: this.userRepository.forgotPassword(this.formGroup.value.email),
      onSuccess: (response) => {
        response && this.componentService.toast.success('toast.sendResetEmailSucess');
      },
    });
  }
}
