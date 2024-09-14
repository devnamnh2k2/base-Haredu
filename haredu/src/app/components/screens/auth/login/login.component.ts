import { BaseComponent } from '#components/core/base/base.component';
import { AuthRepository } from '#repositories/auth.repository';
import { UserRepository } from '#repositories/user.repository';
import { AuthService } from '#services/auth.service';
import { ComponentService } from '#services/component.service';
import { LOGO, STRING, VALID_LENGTH } from '#utils/const';
import { jwtIsValid } from '#utils/jwt.helper';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MappingLinkByRoles } from 'src/app/config/user-drop-down.config';
import { EmailValidator } from 'src/app/validators/email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends BaseComponent implements OnInit {
  passwordVisible = false;
  PASSWORD_MAX_LENGTH = VALID_LENGTH.MAX_LENGTH;
  logo = LOGO;
  isTurn2Fa = false;
  constructor(
    protected componentService: ComponentService,
    private formBuilder: FormBuilder,
    private userRepository: UserRepository,
    private authService: AuthService,
    private authRepository: AuthRepository,
    private cdr: ChangeDetectorRef,
  ) {
    super(componentService);
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, EmailValidator]],
      password: ['', [Validators.required]],
    });
    this.validateMailToken();
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
      observable: this.userRepository.login(this.formGroup.value),
      onSuccess: (response) => {
        const user = response.data.user;
        const url = MappingLinkByRoles[user.role] + 'dashboard';
        this.authService.redirectUrl = url;
        this.authService.startSession(response.data);
        this.componentService.toast.success('screens.auth.loginSuccess');
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        if (error instanceof Error && typeof error.message === 'string') {
          if (error.message.includes('missing')) {
            this.formGroup.addControl('code', new FormControl('', [Validators.required]));
            this.isTurn2Fa = true;
            this.cdr.detectChanges();
          }
        }
      },
    });
  }

  private validateMailToken() {
    const token = this.queryParams.get(STRING.TOKEN);
    if (!token) return;

    const isValid = jwtIsValid(token);
    if (!isValid) {
      this.toastService.error('token.token-is-invalid-or-expired');
      return;
    }
    this.subscribeOnce(this.authRepository.confirmMail(token), {
      onSuccess: () => {
        this.toastService.success('toast.verifyMailSuccess');
      },
    });
  }
}
