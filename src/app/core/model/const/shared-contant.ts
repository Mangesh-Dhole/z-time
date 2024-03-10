import { CostType, MyEmployeeStatuses, MyEmployeeStatusesIconColor, SalaryCounterType, TerminalAbsencesStatuses, TerminalAbsencesStatusesIconColor } from "../enum/shared-enum";

  export const Active = 'Active';
  export const InActive = 'InActive';
  
  export interface IOption {
    name: string;
    value: string;
    iconName?: string;
    disabled?: boolean;
  }
  
  export const CombitimePhoneDigitLength = 15;
  
  export const CombitimeIntervalCallTime = 5000;
  
  export const CombitimeActivityTimerIntervalCallTime = 1000;
  
  export const BuildVersionCheckIntervalInMilliSeconds = 600000;
  
  export const CombitimeBuildVersionActionIntervalCallTime = 300000;
  
  export const CombitimeBuildVersionActionCloseCallTime = 10;
  
  export const CombitimeShowCustomActivityCallTime = 3;
  
  export const CombitimeAutoLogoutIntervalCallTime = 2;
  
  export const CombitimeTimeCardScrollElementRemovalHeight = 130;
  
  export const CombitimeTimeCardScrollRemovalHeight = 402;
  
  export const CombitimeDropDownPanelDefaultWidth = 300;
  
  export const CombitimeDropdownOptionFieldPadding = 30;
  
  export const CombitimeDropdownOptionFieldMaxWidth = 100;
  
  export const CombitimeJobDisplayColumnWidth = '40%';
  
  export const CombitimeSelectInputFieldCallTime = 100;
  
  export const CombitimeGoogleMapZoom = 11;
  
  export const CombitimeGoogleMapRadiusColor = '#D81F26';
  
  export const CombitimeHighLightTableRowCallTime = 100;
  
  export const APIConflictResponseCode = 428;
  
  export const CombitimeDropdownOptionCDKItemSizeHeight = 40;
  
  export const CombitimePaginatedData = {
    currentPage: 0,
    pageCount: 1,
    pageSize: 25,
    totalCount: 0
  };
  
  export const getDisplayedName = (value: string = ''): string => {
    if (!value) {
      value = 'select_value';
    }
    const name = value.replace(/_/g, ' ').replace('__', ' + ');
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };
  
  export const getTranslateDisplayedName = (
    value: string = '',
    prefixLabelValue: string
  ): string => {
    if (!value) {
      return 'enum.select_value';
    }
    value = value.replace(/__/gi, '_');
    return `${prefixLabelValue}_${value.toLowerCase()}`;
  };
  
  export const createOptionsList = (
    items: Array<string> = [],
    prefixLabelValue = ''
  ): Array<IOption> =>
    items.map(value => ({
      name: prefixLabelValue
        ? getTranslateDisplayedName(value, prefixLabelValue)
        : getDisplayedName(value),
      value
    }));
  
  export function createOptionsListForIcons(
    items: Array<string> = [],
    prefixLabelValue = ''
  ): Array<IOption> {
    const updatedList = createOptionsList(items, prefixLabelValue);
    return updatedList.map((itm: any) => ({
      ...itm,
      iconName: itm.value.toLowerCase()
    }));
  }
  
  export const timeCounterContainers: Array<IOption> = createOptionsList(
    ['Absence', 'Presence', 'Not_Present', 'All'],
    'enum.time_counter_containers'
  );
  
  export const timeRecordModes: Array<IOption> = createOptionsList(
    [
      'Punch_Attend__Punch_Task',
      'Punch_Attend__EnterTaskTimes',
      'Punch_Attend__EnterTaskHours',
      'Enter_Attend__EnterTaskTime',
      'Enter_Attend__EnterTaskHours',
      'Punch_Task',
      'Enter_Task_Times',
      'Enter_Task_Hours'
    ],
    'enum.time_record_modes'
  );
  
  export const showCauses: Array<IOption> = createOptionsList(
    ['When_late_or_Leaving_Early', 'Never'],
    'enum.show_causes'
  );
  
  export const terminalTypeList = [
    'Mobile_App',
    'Shop_Floor_Terminal_Machine',
    'Shop_Floor_Terminal_Employee',
    'Time_Card_Week'
  ];
  
  export const terminalTypes: Array<IOption> = createOptionsList(
    terminalTypeList,
    'enum.terminal_types'
  );
  
  export const jobStatus: Array<IOption> = createOptionsList(
    [
      'Created',
      'Estimated',
      'Planned',
      'Released',
      'Started',
      'Completed',
      'Closed'
    ],
    'enum.job_status'
  );
  
  export const startPage: Array<IOption> = createOptionsList(
    ['Dashboard', 'Self_Service'],
    'enum.start_page'
  );
  
  export const proposedFinishedCodes: Array<IOption> = createOptionsList(
    ['Stop_Time', 'Completed'],
    'enum.proposed_finished_codes'
  );
  
  export const calculationRulesStatus: Array<IOption> = createOptionsList(
    ['Under_Construction', 'Released'],
    'enum.calculation_rules_status'
  );
  
  export const ExtraCostEnterMode = [
    'Prompt_Quantity',
    'Fixed_Constant',
    'RegTime_Gross',
    'RegTime_Net',
    'Mileage'
  ];
  
  export const extraCostEnterModeStatus: Array<IOption> = createOptionsList(
    ExtraCostEnterMode,
    'enum.extra_cost_enter_mode'
  );
  
  export const timeScheduleTypeFunction: Array<IOption> = createOptionsList(
    ['Collect', 'Clock_In', 'Clock_Out', 'Break', 'Ignore'],
    'enum.time_schedule_type_function'
  );
  
  export const ShiftList: Array<IOption> = createOptionsList([
    'shift_1',
    'shift_2',
    'shift_3',
    'shift_4',
    'shift_5'
  ]);
  
  export const ItemRecorder: Array<IOption> = createOptionsList(
    ['Purchase', 'Production', 'Assembly'],
    'enum.item_recorder'
  );
  
  export const ItemProfitModel: Array<IOption> = createOptionsList(
    ['None', 'Profit_Sales_Cost', 'Sales_Cost_Profit'],
    'enum.item_profit_model'
  );
  
  export const EmployeeClockRounding: Array<IOption> = createOptionsList(
    ['ClockWise_to', 'Counter_ClockWise_to', 'Decimal'],
    'enum.employee_clock_rounding'
  );
  
  export const ResourceTeam: Array<IOption> = createOptionsList(
    ['Allowed', 'Not_Allowed', 'Only_Leader', 'Only_Member'],
    'enum.resource_team'
  );
  
  export const ReferenceDays: Array<IOption> = createOptionsList(
    [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    'enum.reference_days'
  );
  
  export const AttendanceTypes = [
    'STD',
    'On_Call_1',
    'On_Call_2',
    'On_Call_3',
    'On_Call_4',
    'On_Call_5'
  ];
  
  export const EmployeeAttendanceType = createOptionsList(
    AttendanceTypes,
    'enum.employee_attendance_type'
  );
  
  export const DaySorter = {
    // "sunday": 0, // << if sunday is first day of week
    monday: 0,
    tuesday: 1,
    wednesday: 2,
    thursday: 3,
    friday: 4,
    saturday: 5,
    sunday: 6
  };
  
  export const AbsenceStatus = ['Pending_Approval', 'Approved', 'Rejected'];
  
  export const absenceStatus: Array<IOption> = createOptionsList(
    AbsenceStatus,
    'enum.status'
  );
  
  export const MyProjectStatuses = ['Pending', 'Approved', 'Rejected'];
  
  export const myProjectStatuses: Array<IOption> = createOptionsList(
    MyProjectStatuses,
    'enum.pending_project_status'
  );
  
  export const SalaryCodeRateType: Array<IOption> = createOptionsList(
    ['amount', 'percent_of'],
    'enum.salary_code_rate_type'
  );
  
  export const SalaryCodeType: Array<IOption> = createOptionsList(
    ['Payroll', 'Absence'],
    'enum.salary_code_type'
  );
  
  export const regTypes = [
    'Absence',
    'Clock_In',
    'Break',
    'Internal',
    'Manufacturing',
    'Project',
    'Service',
    'Assembly',
    'Clock_Out'
  ];
  
  export const registrationTypes: Array<IOption> = createOptionsList(
    regTypes,
    'enum.registration_type'
  );
  export const registrationTypesList: Array<IOption> = createOptionsList(
    ['Manufacturing', 'Project'],
    'enum.registration_types_list'
  );
  
  export const routesStatuses: Array<IOption> = createOptionsList(
    ['under_construction', 'approved', 'closed'],
    'enum.route_statuses'
  );
  export const routesTypes: Array<IOption> = createOptionsList(
    ['serial', 'parallel'],
    'enum.route_types'
  );
  
  export const routesOperationTypes: Array<IOption> = createOptionsList(
    ['WorkCenter', 'Resource'],
    'enum.routes_operation_types'
  );
  
  export const bomOperationTypes: Array<IOption> = createOptionsList(
    ['Item', 'BillOfMaterial'],
    'enum.bom_operation_types'
  );
  
  export const bomConsumptionTypes: Array<IOption> = createOptionsList(
    [
      'Height_Constant',
      'Height_Width_Constant',
      'Height_Width_Depth_Constant',
      'Height_Width_Depth_Weight_Constant'
    ],
    'enum.bom_consumption_types'
  );
  
  export const ProductionOrderStatuses: Array<IOption> = createOptionsList(
    ['Created', 'Planned', 'Released', 'Started', 'Completed', 'Closed'],
    'enum.production_order_status'
  );
  
  export const bomStatuses: Array<IOption> = [...routesStatuses];
  
  export const bomTypes: Array<IOption> = [...routesTypes];
  
  export const projectStatuses: Array<IOption> = [...ProductionOrderStatuses];
  
  export const sumTypes: Array<IOption> = createOptionsList(
    ['Positive', 'Negative'],
    'enum.sum_types'
  );
  
  export const seniorityTypes: Array<IOption> = createOptionsList(
    ['Days', 'Weeks', 'Months', 'Years'],
    'enum.seniority_types'
  );
  
  export const salaryCounterWhereTypes: Array<IOption> = createOptionsList(
    ['Equals', 'Not_Equals'],
    'enum.salary_counter_where_types'
  );
  
  export const allowNegativeTypes: Array<IOption> = createOptionsList(
    ['Allow_Negative', 'Warn_Negative', 'Reject_Negative'],
    'enum.allow_negative_types'
  );
  
  export const runtimeWhenTypes: Array<IOption> = createOptionsList(
    [
      'Before_line',
      'Before_each_day',
      'Before_min_max_check',
      'After_min_max_check',
      'After_each_day',
      'After_line'
    ],
    'enum.runtime_when_types'
  );
  
  export const runtimeActions: Array<IOption> = createOptionsList(
    ['Reduce_until_0', 'Set_0', 'Reduce', 'Reread', 'Save_to_tmp', 'Stop'],
    'enum.runtime_actions'
  );
  
  export const ProjectTaskLineType: Array<IOption> = createOptionsListForIcons(
    ['Header', 'Sum_From', 'Task', 'Sum_To'],
    'enum.project_task_line_type'
  );
  export const salaryAgreementLineCodeInputs: Array<IOption> = createOptionsList(
    ['Time', 'ExtraCost', 'Piecework_Produced', 'Piecework_Scrapped', 'Mileage'],
    'enum.salary_agreement_line_code_inputs'
  );
  
  export const BillingOptions: Array<IOption> = createOptionsList(
    ['Time_And_Material', 'Fixed_Price'],
    'enum.billing_options'
  );
  
  export const approvalStatus: Array<IOption> = createOptionsList(
    ['Pending', 'Approved', 'Rejected'],
    'enum.approval_status'
  );
  
  export const AdjustmentTypes: Array<IOption> = createOptionsList(
    ['Primo', 'Adjustment'],
    'enum.adjustment_types'
  );
  
//   export const IntegrationAPIHandler = {
//     INTEGRATION: 'api/Integration',
//     INTEGRATIONSTATUS: (id, name) => `Integration/${id}/${name}/Status`,
//     ESTABLISHCONNECTION: (id, name) =>
//       `Integration/${id}/${name}/EstablishConnection`,
//     COMBITIMEEMPLOYEE: `Resource/Employee/Payroll`,
//     ZENEGYEMPLOYEELIST: id => `Integration/${id}/Zenegy/Employees`,
//     SYNCEMPLOYEE: id => `Integration/${id}/Zenegy/SyncEmployees`,
//     SALARYCODE: id => `Integration/${id}/Zenegy/SalaryCodeMapping/SalaryCode`,
//     SALARYSUPPLEMENTSTYPE: (id, type) =>
//       `Integration/${id}/Zenegy/SalaryCodeMapping/SupplementAndRegistrations/Rates?salaryType=${type}`,
//     SALARYCODEMAP: (id, dataId) =>
//       `Integration/${id}/Zenegy/SalaryCodeMapping/SalaryCode/${dataId}`,
//     SALARYHOURSTYPE: (id, type) =>
//       `Integration/${id}/Zenegy/SalaryCodeMapping/Hours/Rates?salaryType=${type}`,
//     ECONOMICCUSTOMERLIST: id => `Integration/${id}/Economic/Customers`,
//     SYNCCUSTOMER: id => `Integration/${id}/Economic/SyncCustomers`,
//     ECONOMICITEMLIST: id => `Integration/${id}/Economic/Items`,
//     SYNCITEM: id => `Integration/${id}/Economic/SyncItems`,
//     ZENEGYBALANCETYPE: id => `Integration/${id}/ZenegyBalanceType`,
//     SYNCZENEGYTIMEBALANCE: (id, timeCounterBalanceId, externalId) =>
//       `Integration/${id}/Zenegy/TimeCounterBalanceMapping/${timeCounterBalanceId}${
//         !!externalId ? '?externalId=' + externalId : ''
//       }`,
//     SYNCZENEGYSALARYBALANCE: (id, salaryBalanceId, externalId) =>
//       `Integration/${id}/Zenegy/SalaryBalanceMapping/${salaryBalanceId}${
//         !!externalId ? '?externalId=' + externalId : ''
//       }`,
//     UNAUTHORIZE: id => `Integration/${id}/Unlink`,
//     HOLIDAYABSENCE: id =>
//       `Integration/${id}/Zenegy/SalaryCodeMapping/HolidayAbsence`,
//     BUSINESSCENTRALESTABLISHCONNECTION: id =>
//       `Integration/${id}/BusinessCentral/EstablishConnection`,
//     BUSIESSCENTRALCOMPANYLIST: id =>
//       `Integration/${id}/BusinessCentral/Companies`,
//     SYNCCOMPANY: id => `Integration/${id}/BusinessCentral/SyncCompany`
//   };
  
  export const IntegrationFilterTypes = {
    All: 'Show All',
    Match: 'Match',
    SystemMatch: 'System Match',
    NoMatch: 'No Match'
  };
  
//   export const getIntegrationFilterList: Array<any> = Object.keys(
//     IntegrationFilterTypes
//   ).map(key => ({
//     value: IntegrationFilterTypes[key],
//     name: getDisplayedName(IntegrationFilterTypes[key])
//   }));
  
  export const StatusSorter = {
    Match: 0,
    SystemMatch: 1,
    NoMatch: 2
  };
  
  export const getStatusName = (value: string): string => {
    return value.replace(' ', '');
  };
  
  export const ZenegySalaryType = {
    0: 'Holiday_Absence',
    1: 'Mileage',
    2: 'Hours',
    3: 'Supplement_Registrations'
  };
  
//   export const getSalaryTypeList: Array<any> = Object.keys(ZenegySalaryType).map(
//     key => ({
//       id: ZenegySalaryType[key],
//       name: getDisplayedName(ZenegySalaryType[key])
//     })
//   );
  
  export const QuestionInputType = [
    'Text',
    'Integer',
    'Decimal',
    'Option',
    'Date',
    'Time',
    'DateTime'
  ];
  
  export const getInputType: Array<IOption> = createOptionsList(
    QuestionInputType,
    'enum.input_type'
  );
  
  export const LineType = ['Question', 'Caption'];
  export const getLineType: Array<IOption> = createOptionsList(
    LineType,
    'enum.line_type'
  );
  
  export const ReferenceType = [
    'Internal',
    'Project',
    'Production',
    'Service',
    'Assembly'
  ];
  export const getReferenceType: Array<IOption> = createOptionsList(
    ReferenceType,
    'enum.reference_type'
  );
  
  export const MyEmployeeDateFilterTypes = ['Day', 'Week', 'Month'];
  
  export const MyEmployeeFilterTypes = [
    'Show_All',
    'Absent',
    'Attended',
    'Attended_Late'
  ];
  
  export const InvoiceHeaderFilterTypes = ['All', 'Draft', 'Ready', 'Posted'];
  
  export const InvoiceHeaderFilterList: Array<IOption> = createOptionsList(
    InvoiceHeaderFilterTypes,
    'enum.invoice_header_filter_list'
  );
  
  export const InvoiceItemTypeList: Array<IOption> = createOptionsList(
    [CostType.Hours, CostType.Extra_Cost, CostType.Items],
    'enum.invoice_item_type_list'
  );
  
  export const BillConsumptionTypes: Array<IOption> = createOptionsList(
    ['Variable', 'Constant'],
    'enum.bill_consumption_types'
  );
  
  export const RoundUpTypes: Array<IOption> = createOptionsList(
    ['No', 'Quantity', 'Measure', 'Consumption'],
    'enum.round_types'
  );
  
  export const BillTypes: Array<IOption> = createOptionsList(
    ['Item', 'Phantom', 'Production', 'Vendor'],
    'enum.bill_types'
  );
  
  export const StartStatus: Array<IOption> = createOptionsList(
    [
      'Production_Status_Only',
      'Production_Flush_Planned',
      'Production_Flush_Started',
      'Operation_Status_Only',
      'Operation_Flush_Started',
      'Operation_BackFlush_Completed'
    ],
    'enum.start_status'
  );
  
  export const ProjectApprovalType: Array<IOption> = createOptionsList(
    ['PreApproval', 'PostApproval'],
    'enum.approval_type'
  );
  
  export const CompleteStatus: Array<IOption> = createOptionsList(
    ['Yes', 'Flush_On_Production', 'Flush_Production_Planned', 'StatusOnly'],
    'enum.complete_status'
  );
  
  export const CalculateType: Array<string> = [
    'All',
    'Setup_Time',
    'Operator_Time',
    'None'
  ];
  export const CalculateTypeList: Array<IOption> = createOptionsList(
    CalculateType,
    'enum.calculate_type'
  );
  export const AnswerHeaderFilterTypes = ['Show_All', 'Pending'];
  
  export const CalculationRules = 'calculationRules';
  export const DialogBaseProperties = {
    autoFocus: false,
    restoreFocus: false,
    panelClass: 'edit-dialog-overlay',
    width: '60vw'
  };
  
  export const terminalSignatureConfigs = {
    minWidth: '5',
    canvasWidth: '1000',
    canvasHeight: '1500'
  };
  
  export const SalaryCounterInputType: Array<IOption> = createOptionsList(
    [
      SalaryCounterType.Time,
      SalaryCounterType.Salary,
      SalaryCounterType.NormTime
    ],
    'enum.salary_counter_input_types'
  );
  
  export const MyProjectBulkUpdateActionTypes: Array<IOption> = [
    {
      name: 'project_cost_type_bulk_status_pending',
      value: 'Set_Status_Pending'
    },
    {
      name: 'project_cost_type_bulk_status_approved',
      value: 'Set_Status_Approved'
    },
    {
      name: 'project_cost_type_bulk_status_rejected',
      value: 'Set_Status_Rejected'
    },
    {
      name: 'project_cost_type_bulk_billable_yes',
      value: 'Set_IsBillable_Yes'
    },
    {
      name: 'project_cost_type_bulk_billable_no',
      value: 'Set_IsBillable_No'
    }
  ];
  
  export const SalaryAndTimeAdjustmentJournalActions: Array<IOption> = [
    {
      name: 'adjustment_journal_actions_delete',
      value: 'Delete'
    }
  ];
  
  export const UserSelectionTypeAction: Array<IOption> = [
    {
      name: 'user_selection_type_action_set_password_email',
      value: 'Set_Password_Email'
    }
  ];
  
  export const TransactionSelectionTypesActionForInvoice: Array<IOption> = [
    {
      name: 'transaction_selected_type_action_invoice_yes',
      value: 'Set_Invoice_Yes'
    },
    {
      name: 'transaction_selected_type_action_invoice_no',
      value: 'Set_Invoice_No'
    },
    {
      name: 'transaction_selected_type_action_invoice_voucher_remove',
      value: 'Set_Voucher_Empty'
    }
  ];
  
  export const TimeRegistrationExtraCostAndMileageBulkActions: Array<IOption> = [
    {
      name: 'time-registration-extra-cost-mileage-bulk-action-approve',
      value: 'Approve'
    },
    {
      name: 'time-registration-extra-cost-mileage-bulk-action-disapprove',
      value: 'Disapprove'
    }
  ];
  
  export const PayrollSelectionTypesActionForInvoice: Array<IOption> = [
    {
      name: 'payroll_bulk_selected_type_action_payroll_no',
      value: 'Set_Payroll_No'
    },
    {
      name: 'payroll_bulk_selected_type_action_ignored_yes',
      value: 'Set_Ignored_Yes'
    },
    {
      name: 'payroll_bulk_selected_type_action_ignored_no',
      value: 'Set_Ignored_No'
    },
    {
      name: 'payroll_bulk_delete',
      value: 'Delete'
    }
  ];
  
  export const UserGroupType: Array<IOption> = createOptionsList(
    [
      'Approve_Calculation_Administrator',
      'Approve_Salary_Calculation_Administrator',
      'Project_Manager',
      'Quality_Control_Admin'
    ],
    'enum.user_group_type'
  );
  
  export const SqlOperationForAuditLogsFilter = ['insert', 'update', 'delete'];
  
  export const SqlOperationForAuditLogsFilterList: Array<IOption> = createOptionsList(
    SqlOperationForAuditLogsFilter,
    'enum.audit_logs_event_type'
  );
  
  export const SqlOperationForAuditLogs = [
    {
      label: 'insert',
      value: 'I'
    },
    {
      label: 'update',
      value: 'U'
    },
    {
      label: 'delete',
      value: 'D'
    }
  ];
  export const validations = {
    lowerCase: false,
    upperCase: false,
    specialCharacter: false,
    number: false,
    minLetter: false,
    maxLetter: false
  };
  
  export const passwordValidationRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/i;
  
  export const emailValidationRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA_Z0-9.-]+\.[a-zA_Z]{2,4}$/i;
  
  export const phoneNumberValidationRegex = '^[0-9-+()]+$';
  export const allotedSpecialCharacter = '(#?!@$%^&*-)';
  export const TableScrollTimeout = 50;
  
  export const AbsenceTypeForReport: Array<IOption> = createOptionsList(
    ['All', 'Only_Planned', 'Only_Used'],
    'enum.absence_type_for_report'
  );
  export const StatusIconMapping = {
    [MyEmployeeStatuses.Attended]: MyEmployeeStatusesIconColor.Success,
    [MyEmployeeStatuses.Present]: MyEmployeeStatusesIconColor.Success,
    [MyEmployeeStatuses.AttendedLate]: MyEmployeeStatusesIconColor.Warning,
    [MyEmployeeStatuses.Absent]: MyEmployeeStatusesIconColor.Danger
  };
  
  export const extraCostMileageFilterList = ['all', 'approved', 'pending'];
  
  export const extraCostMileageFilter = createOptionsList(
    extraCostMileageFilterList,
    'enum.extra_cost_filter'
  );
  
  export const APP_DATE_FORMATS = {
    parse: {
      dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
      dateInput: 'input',
      monthYearLabel: 'inputMonth',
      dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
      monthYearA11yLabel: { year: 'numeric', month: 'long' }
    }
  };
  
  export const TablePaginationPageSizeOptions = [5, 10, 25, 50, 100];
  
  export const CombitimeDownloadReportFileTypes = {
    XLSX: 'xlsx',
    CSV: 'csv'
  };
  
  export const NotificationType: Array<IOption> = createOptionsList(
    ['Absence_Started', 'Absence_Stopped', 'Absence_Applied', 'Absence_Approved'],
    'enum.notification_types'
  );
  
  export const IntegrationSyncBalancePeriodType: Array<IOption> = createOptionsList(
    ['Zenegy_Period', 'Combitime_Period'],
    'enum.integration_sync_balance_period_type'
  );
  
  export const OAuthClientIds = {
    terminalClientId: '81635918-23cf-43e5-aeb3-458052e7029b',
    masterClientId: '92222a3f-df76-4c89-b853-0b062432eb56',
    userClientId: '7274b1f8-4e28-4a33-9401-448ddc7f4f21',
    partnerClientId: '47891cd1-ba77-489a-a73e-4f26ab79115c',
    timeCardClientId: '32e722e3-ba68-4065-9212-35a6f59f5dc1',
    resourceClientId: 'd20c24de-8c5f-4469-b85c-b8ba5818be3d'
  };
  
  export const PayrollFilterTypesList: Array<IOption> = createOptionsList(
    ['All', 'Ignored', 'Transferred', 'Not_Transferred'],
    'enum.payroll_filter_type_list'
  );
  
  export const AbsenceStatusIconMapping = {
    [TerminalAbsencesStatuses.Approved]:
      TerminalAbsencesStatusesIconColor.Success,
    [TerminalAbsencesStatuses.PendingApproval]:
      TerminalAbsencesStatusesIconColor.Warning,
    [TerminalAbsencesStatuses.Rejected]: TerminalAbsencesStatusesIconColor.Danger
  };
  
  export const DayCodeTypes = [
    {
      name: 'enum.day_code_on_shore',
      value: '1'
    },
    {
      name: 'enum.day_code_off_shore',
      value: '2'
    }
  ];
  
  export const TableToggleFilterOptions: Array<IOption> = createOptionsList(
    ['true', 'false'],
    'enum.toggle_option'
  );
  
  export const DayCodeConflictTypeList: Array<IOption> = createOptionsList(
    ['Warning', 'Error'],
    'enum.day_conflict_type'
  );
  
  export const ExtraCostAndMileageStatus = [
    'Set_Status_Approved',
    'Set_Status_Pending',
    'Set_Status_Rejected'
  ];
  
  export const SalaryTransactionTypeList = ['Primo', 'Movement', 'Adjustment'];
  
  export const salaryTransactionTypeList: Array<IOption> = createOptionsList(
    SalaryTransactionTypeList,
    'enum.salary_transaction_type_list'
  );
  
  export const PayrollErrorType = [
    'Show_all',
    'Show_error',
    'Show_without_error'
  ];
  
  export const payrollErrorTypeList: Array<IOption> = createOptionsList(
    PayrollErrorType,
    'enum.payroll_error_type_list'
  );
  
  export const EmployeeActiveStatus = ['All_Employees', 'In_Active', 'Active'];
  
  export const EmployeeActiveStatusList: Array<IOption> = createOptionsList(
    EmployeeActiveStatus,
    'enum.employee_active_status'
  );
  
  export const WorkTypeBillable = ['Show_all', 'Billable', 'Not_billable'];
  
  export const WorkTypeBillableList: Array<IOption> = createOptionsList(
    WorkTypeBillable,
    'enum.work_type_billable_list'
  );
  export const WorkTypeMileageType = ['All', 'Yes', 'No'];
  
  export const WorkTypeMileageTypeList: Array<IOption> = createOptionsList(
    WorkTypeMileageType,
    'enum.work_type_mileageType_list'
  );
  export const ErpPostedList = ['Show_all', 'Show_Posted', 'Show_Not_Posted'];
  export const ErpTransactionErpPostedList: Array<IOption> = createOptionsList(
    ErpPostedList,
    'enum.erp_posted_list'
  );
  
  export const Quantity = [
    'English_Number_Format',
    'Danish_Number_Format',
    'No_Number_Format',
    'No_Group_Format'
  ];
  export const QuantityList: Array<IOption> = createOptionsList(
    Quantity,
    'enum.quantity_list'
  );
  
  export const DateFormatList = [
    { value: 'dd' },
    { value: 'dd.MM.yy' },
    { value: 'dd/MM/yy' },
    { value: 'ddMMyy' },
    { value: 'MM.dd.yy' },
    { value: 'MM/dd/yy' },
    { value: 'MMddyy' },
    { value: 'yy-MM-dd' }
  ];
  
  export interface IGetLoginTokenPayload {
    clientId: string;
    code: string;
    redirectUri: string;
    codeVerifier: string;
  }
  
  export interface IRefreshTokenPayload {
    clientId: string;
    refreshToken: string;
  }
  
  export interface IAcceptInvitePayload {
    verificationToken: string;
  }
  
  export const ConvertTimeInUnits = {
    HOURS: 3600
  };
  
  export const UserFilterType = ['All', 'Active', 'Inactive'];
  
  export const UserFilterTypeList: Array<IOption> = createOptionsList(
    UserFilterType,
    'enum.user_list_filter'
  );
  
  export const TestAccountFilterType = ['All', 'Yes', 'No'];
  
  export const TestAccountFilterTypeList: Array<IOption> = createOptionsList(
    TestAccountFilterType,
    'enum.customer_list_filter'
  );
  
  export const TestAccountFilterOption = [
    { label: 'All', value: null },
    { label: 'Yes', value: true },
    { label: 'No', value: false }
  ];
  
  export const SalaryCodeTypeFilter = ['all', 'payroll', 'absence'];
  
  export const SalaryCodeTypeFilterList: Array<IOption> = createOptionsList(
    SalaryCodeTypeFilter,
    'enum.payroll_salary_code_type'
  );
  
  export const MovementOptionList = ['All', 'Movement'];
  
  export const movementTypeList: Array<IOption> = createOptionsList(
    MovementOptionList,
    'enum.movement_options_list'
  );
  
  export const BillableFilterOption = [
    { label: 'Show_all', value: null },
    { label: 'Billable', value: true },
    { label: 'Not_billable', value: false }
  ];
  
  export const MileageTypeFilterOption = [
    { label: 'All', value: null },
    { label: 'Yes', value: true },
    { label: 'No', value: false }
  ];
  
  export const StatusFilterOption = [
    { label: 'All', value: null },
    { label: 'Active', value: true },
    { label: 'Inactive', value: false }
  ];
  
  export const ProfitModelFilterOption = [
    { label: 'None', value: 1 },
    { label: 'Profit_Sales_Cost', value: 2 },
    { label: 'Sales_Cost_Profit', value: 3 }
  ];
  
  export const HasErrorFilterOption = [
    { label: 'Show_all', value: null },
    { label: 'Show_error', value: true },
    { label: 'Show_without_error', value: false }
  ];
  
  export const SalaryCodeTypeFilterOption = [
    { label: 'all', value: null },
    { label: 'payroll', value: 'Payroll' },
    { label: 'absence', value: 'Absence' }
  ];
  
  export const NumberFormatList = [
    { label: 'English_Number_Format', value: 1 },
    { label: 'Danish_Number_Format', value: 2 },
    { label: 'No_Number_Format', value: 3 },
    { label: 'No_Group_Format', value: 4 }
  ];
  
  export const ErpPostedFilterOption = [
    { label: 'Show_all', value: null },
    { label: 'Show_Posted', value: true },
    { label: 'Show_Not_Posted', value: false }
  ];
  
  export const EmployeeActiveStatusOption = [
    { label: 'All_Employees', value: null },
    { label: 'In_Active', value: false },
    { label: 'Active', value: true }
  ];
  
  export const UploadDocumentTypes = {
    isDocument: 1,
    isSignature: 2
  };
  
  export const ResourceType = {
    Employee: 'Employee'
  };
  
  export const EmployeeBulkActionList: Array<IOption> = [
    {
      name: 'emp_action_sub_contract',
      value: 'Set_SubContract'
    },
    {
      name: 'emp_action_approver_group',
      value: 'Set_ApprovalGroup'
    },
    {
      name: 'emp_action_time_schedule',
      value: 'Set_TimeSchedule'
    }
  ];
  
  export const ZenegyEmployeeBulkActionList: Array<IOption> = [
    {
      name: 'zenegy_emp_action_sync_all',
      value: 'SyncAll',
      disabled: true
    },
    {
      name: 'zenegy_emp_action_create_all',
      value: 'CreateAll',
      disabled: true
    }
  ];
  
  export const CombitimeImageViewerTypes = ['jpg', 'png', 'gif'];
  export const CombitimePdfViewerType = ['pdf'];
  
  export const AdjustmentTypeOptionList = [
    { label: 'Adjustment', value: 'Adjustment' },
    { label: 'Primo', value: 'Primo' }
  ];
  
  export const InvoiceType = ['Show_all', 'Invoiced', 'Not_invoiced'];
  export const InvoiceOptionType: Array<IOption> = createOptionsList(
    InvoiceType,
    'enum.Invoice_Option_Type'
  );
  
  export const InvoiceFilterOption = [
    { label: 'Show_all', value: null },
    { label: 'Invoiced', value: true },
    { label: 'Not_invoiced', value: false }
  ];
  
  export const EmployeeToBeDeletedActions: Array<IOption> = [
    {
      name: 'employee_to_be_delete_authorize',
      value: 'Authorize'
    },
    {
      name: 'employee_to_be_delete_revert',
      value: 'Revert'
    }
  ];
  
  export const DeletionDataYearOption = ['5', '6', '7', '8', '9', '10'];
  
  export const AutomaticDeletionDataYearList: Array<IOption> = createOptionsList(
    DeletionDataYearOption,
    'enum.automatic_deletion_year_list'
  );
  
  export const PayrollFileFormat: Array<IOption> = createOptionsList(
    ['1', '2'],
    'enum.PayrollFileFormat'
  );
  
  export const buildAutomatic: Array<IOption> = createOptionsList(
    ['No', 'InsertOnly', 'InsertAndUpdate'],
    'enum.buildAutomatic'
  );
  
  export const Formula: Array<IOption> = createOptionsList(
    [
      'Juledag1',
      'Juledag2',
      'Juleaften',
      'Nytårsaftens_dag',
      'Nytårsdag',
      'Skærtorsdag',
      'Langfredag',
      'Påskedag',
      'Påskedag2',
      'Store_Bededag',
      'Kristi_Himmelfart',
      'Pinsedag',
      'Pinsedag2',
      'Grundlovsdag'
    ],
    'enum.formula'
  );
  
  export const GenerateCapacityDefaultValues = {
    PAST: 15,
    FUTURE: 200
  };
  
  export const Countries = ['Denmark', 'Sweden', 'Norway', 'Finland', 'Germany'];
  
  export const Country: Array<IOption> = createOptionsList(
    Countries,
    'enum.country'
  );
  
  export const ActiveStatus = ['All', 'Active', 'Inactive'];
  
  export const ActiveStatusList: Array<IOption> = createOptionsList(
    ActiveStatus,
    'enum.status_filter'
  );
  
  export const RegistrationTypeNonOrderSystemJobs = ['Clock_In', 'Clock_Out'];
  export const RegistrationTypeNonOrderExceptSystemJobs = [
    'Internal',
    'Absence',
    'Break'
  ];
  
  export const FormulaMappingList = {
    Juledag1: '1. Juledag',
    Juledag2: '2. Juledag',
    Juleaften: 'Juleaftensdag',
    Nytårsaftens_dag: 'Nytårsaftens dag',
    Nytårsdag: 'Nytårsdag',
    Skærtorsdag: 'Skærtorsdag',
    Langfredag: 'Langfredag',
    Påskedag: 'Påskedag',
    Påskedag2: '2. Påskedag',
    Store_Bededag: 'Store Bededag',
    Kristi_Himmelfart: 'Kristi Himmelfart',
    Pinsedag: 'Pinsedag',
    Pinsedag2: '2. Pinsedag',
    Grundlovsdag: 'Grundlovsdag'
  };
  
  export const All = 'all';
  
  export const regTypesForTimeCard = [
    'Absence',
    'Break',
    'Internal',
    'Manufacturing',
    'Project',
    'Service',
    'Assembly'
  ];
  
  export const registrationTypesForTimeCard: Array<IOption> = createOptionsList(
    regTypesForTimeCard,
    'enum.registration_type'
  );
  