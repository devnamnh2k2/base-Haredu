import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

import { BaseComponent } from '#components/core/base/base.component';
import { ComponentService } from '#services/component.service';
import { IAccount } from '#interfaces/account.interface';
import { MappingNameRoleByRoles } from 'src/app/config/sidebar.config';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent extends BaseComponent implements OnInit {
  dialogRef: NzModalRef;
  currentUrl: string = this.router.url;
  @Input() user: IAccount;
  roleName: string = '';
  currentLanguage: string = 'en';

  constructor(
    protected componentService: ComponentService,
    private tranlocoService: TranslocoService,
  ) {
    super(componentService);
    this.currentLanguage = tranlocoService.getActiveLang();
  }

  ngOnInit(): void {
    this.roleName = this.getRoleName();
  }

  handleChangeLang(lang: string) {
    this.currentLanguage = lang;
    this.tranlocoService.setActiveLang(lang);
    localStorage.setItem('lang', lang);
  }

  getRoleName(): string {
    return MappingNameRoleByRoles[this.user.role];
  }
}
