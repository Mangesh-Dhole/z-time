import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  public showMessage(message: string): void {
    // this.snackBar.dismiss();
    // this.snackBar.openFromComponent(NotificationComponent, {
    //   data: {
    //     message: message
    //   },
    //   duration: 5000,
    //   horizontalPosition: 'center',
    //   verticalPosition: 'top',
    //   panelClass: NotificationMessageClass.Success
    // });
  }

  public showErrorMessage(error: any): void {
    // let message = 'something_went_wrong';
    // let i18nRefProperty = null;
    // if (
    //   this.errorStatusCodes.includes(error.status) &&
    //   error.error &&
    //   error.error.errorTag
    // ) {
    //   message =
    //     error.status === 409
    //       ? error.method === RequestMethodEnum.DELETE
    //         ? 'table_dependency'
    //         : 'table_dependency_create_or_update'
    //       : error.error.errorTag[0];
    //   i18nRefProperty =
    //     error.status === 409
    //       ? this.mapConflicErrorMessage(error.error.errorTag)
    //       : null;
    //   if (message.includes('-')) {
    //     return this.showMapErrorMessage(message);
    //   }
    // } else if (error.status === 401) {
    //   message = 'user_not_authorized';
    // } else if (error.status === 403) {
    //   message = 'you_do_not_have_permission_to_access_this_page';
    // } else if (error.status === 0 && !isUserOnline()) {
    //   message = 'no_internet_connection';
    // }
    // this.snackBar.dismiss();
    // this.snackBar.openFromComponent(NotificationComponent, {
    //   data: {
    //     message,
    //     i18nRefProperty
    //   },
    //   duration: 5000,
    //   horizontalPosition: 'center',
    //   verticalPosition: 'top',
    //   panelClass: NotificationMessageClass.Error
    // });
  }
}
