export enum DropDownMaster {
    TimeCounter = 'TimeCounter',
    Shifts = 'Shifts',
    TimePeriod = 'TimePeriod',
    Rounding = 'Rounding',
    DownTime = 'DownTime',
    Unit = 'Unit',
    ExtraCost = 'ExtraCost',
    Mileage = 'Mileage',
    TimeSchedule = 'TimeSchedule',
    SalaryAgreement = 'SalaryAgreement',
    TimeConversion = 'TimeConversion',
    TimeScheduleType = 'TimeScheduleType',
    TerminalConfiguration = 'TerminalConfiguration',
    TimeScheduleChangeCode = 'TimeScheduleChangeCode',
    Resource = 'Resource',
    AbsenceCode = 'AbsenceCode',
    TimeScheduleRotation = 'TimeScheduleRotation',
    TimeScheduleRotationTemplate = 'TimeScheduleRotationTemplate',
    WorkType = 'WorkType',
    QualificationSkill = 'QualificationSkill',
    SalaryCodeRate = 'SalaryCodeRate',
    SalaryGroup = 'SalaryGroup',
    Item = 'Item',
    BOM = 'BOM',
    Route = 'Route',
    SpecialDay = 'SpecialDay',
    ScrapCause = 'ScrapCause',
    Job = 'Job',
    SalaryCounter = 'SalaryCounter',
    SalaryTemporaryCounter = 'SalaryTemporaryCounter',
    ProjectLocation = 'ProjectLocation',
    Project = 'Project',
    ProjectTask = 'ProjectTask',
    ProjectMilestone = 'ProjectMilestone',
    TerminalAppsForMessages = 'TerminalAppsForMessages',
    Customers = 'Customers',
    InvoiceVouchers = 'InvoiceVouchers',
    SalaryBalance = 'SalaryBalance',
    JobModule = 'JobModule',
    JobType = 'JobType',
    ResourceType = 'ResourceType',
    DayCode = 'DayCode',
    SubContract = 'SubContract',
    BreakCode = 'BreakCode',
    TimeCounterBalance = 'TimeCounterBalance',
    Questionnaire = 'Questionnaire',
    SpecialDayTemplate = 'SpecialDayTemplate',
    ProductionOrder = 'ProductionOrder',
    ProductionOrderRoute = 'ProductionOrderRoute',
    RoundingType = 'RoundingType',
    CompanyCalendarHeader = 'CompanyCalendarHeader'
  }
  
  export enum CalculationRuleRoutes {
    QualificationSkill = 'qualification-and-skills',
    ExtraCost = 'extra-cost',
    SpecialDay = 'special-day',
    TimeScheduleType = 'time-schedule-type',
    TimeSchedule = 'time-schedule',
    CompanyCalender = 'company-calender',
    AbsenceCode = 'absence-code',
    TimeScheduleChangeCode = 'time-schedule-change-code',
    BreakCode = 'break-code',
    TimeConversionRule = 'time-conversion-rule',
    SalaryAgreement = 'salary-agreement',
    TimeScheduleRotation = 'time-schedule-rotation',
    SalaryGroup = 'salary-group',
    SalaryCodesRates = 'salary-codes-rates',
    SalaryBalance = 'salary-balance'
  }
  
  export enum ConstantNumberSequenceTypeName {
    Production = 'Production',
    Project = 'Project',
    Service = 'Service',
    Assembly = 'Assembly',
    Item = 'Item',
    Bom = 'Bom',
    Route = 'Route',
    Job = 'Job'
  }
  
  export enum JobCategoryName {
    Manufacturing = 'Manufacturing',
    Project = 'Project',
    Service = 'Service',
    Assembly = 'Assembly',
    Internal = 'Internal',
    Mixed = 'Mixed',
    Clock_In = 'Clock_In',
    Clock_Out = 'Clock_Out',
    Absence = 'Absence',
    Break = 'Break'
  }
  
  export enum CalculationRulesTimeCounterTypes {
    AbsenceCode = 'AbsenceCode',
    TimeScheduleType = 'TimeScheduleType',
    TimeConversionRule = 'TimeConversionRule'
  }
  
  export enum TimeScheduleShiftWorkingHours {
    FixedHours = 'Fixed_Hours',
    VariableHours = 'Variable_Hours'
  }
  
  export enum ROLES {
    AccountAdmin = 'Account_Admin',
    TimeCalculationAdministrator = 'Time_Calculation_Administrator',
    SalaryCalculationAdministrator = 'Salary_Calculation_Administrator',
    ProjectManager = 'Project_Manager',
    ServiceManager = 'Service_Manager',
    TaskPlanner = 'Task_Planner',
    TaskApproval = 'Task_Approval',
    WorkTimePlanning = 'Work_Time_Planning',
    SuperAdmin = 'Super_Admin',
    ItemManager = 'Item_Manager',
    ApproveCalculationAdministrator = 'Approve_Calculation_Administrator',
    ApproveSalaryCalculationAdministrator = 'Approve_Salary_Calculation_Administrator',
    QualityControlAdmin = 'Quality_Control_Admin',
    MessageBoardAdmin = 'Message_Board_Admin',
    HumanResourceAdmin = 'Human_Resource_Admin',
    MachineResourceAdmin = 'Machine_Resource_Admin',
    ProductionManager = 'Production_Manager',
    AssemblyManager = 'Assembly_Manager',
    InternalTaskManager = 'Internal_Task_Manager',
    SelfService = 'Self_Service',
    InvoiceManager = 'Invoice_Manager',
    SalaryRateManager = 'Salary_Rate_Manager',
    Partner = 'Partner'
  }
  
  export enum USER_TYPE {
    User = 'User',
    Employee = 'Employee',
    Machine = 'Machine',
    Resource = 'Resource'
  }
  
  export enum RESOURCE_TYPE {
    Employee = 'Employee',
    Machine = 'Machine',
    All = 'All'
  }
  
  export enum ACTION {
    DELETE = 'DELETE',
    CREATE = 'CREATE',
    UPDATE = 'UPDATE'
  }
  
  export enum MAPPED_RESOURCE_ACTION {
    DELETE = 'MAPPED_RESOURCE_DELETE',
    CREATE = 'MAPPED_RESOURCE_CREATE'
  }
  
  export enum SALARY_RATE_TYPE {
    GENERAL = 'General',
    GROUP = 'Group',
    EMPLOYEE = 'Employee'
  }
  
  export enum RouteRoutes {
    version = 'version'
  }
  
  export enum RouteActionTypes {
    RouteVersion = 'RouteVersion',
    RouteOperation = 'RouteOperation'
  }
  export enum BillOfMaterialsVersions {
    version = 'version'
  }
  export enum BillOfMaterialsActionTypes {
    BillOfMaterialsVersion = 'BillOfMaterialsVersion',
    BillOfMaterialsOperation = 'BillOfMaterialsOperation'
  }
  
  export enum TimeCalculationApprovalFilterTypes {
    All = 'all',
    Errors = 'errors',
    Calculated = 'calculated',
    Approved = 'approved',
    Pending_Approval = 'pending_approval'
  }
  
  export enum AbsenceAndLeaveFilterTypes {
    Pending_Approval = 'Pending_Approval',
    Approved = 'Approved',
    Rejected = 'Rejected',
    Show_All = 'Show_All'
  }
  
  export enum ResourceMessageRoutes {
    Messages = 'messages'
  }
  
  export enum CostType {
    Extra_Cost = 'Extra_Cost',
    Hours = 'Hours',
    Items = 'Items'
  }
  
  export enum SalaryCounterType {
    Time = 'Time',
    Salary = 'Salary',
    NormTime = 'NormTime'
  }
  
  export enum MyApprovalFilterTypes {
    Show_All = 'Show_All',
    Ready = 'Ready',
    Pending = 'Pending',
    Approved = 'Approved',
    Error = 'Error'
  }
  
  export enum AuthHandler {
    GenerateNextSequence = 'GenerateNextSequence',
    TerminalApp = 'TerminalApp',
    Login = 'Login',
    Message = 'Message',
    Resource = 'Resource',
    Terminal = 'Terminal',
    Company = 'Company',
    Master = 'Master',
    LogOut = 'LogOut',
    Api = 'Api',
    Password = 'password',
    TimeCardWeek = 'TimeCardWeek',
    Auth = 'Auth',
    Refresh = 'refresh',
    Token = 'token',
    Companies = 'companies',
    SwitchCompany = 'SwitchCompany',
    Partner = 'Partner',
    Partners = 'Partners',
    AcceptInvite = 'AcceptInvite',
    ChangedCompanyId = 'changedCompanyId',
    AutoClockInClockOut = 'AutoClockInOut'
  }
  
  export enum DashboardHandler {
    Resource = 'Resource',
    WorkAndBreakTime = 'WorkAndBreakTime',
    TimeRegistrations = 'TimeRegistrations',
    TimeRegistration = 'TimeRegistration',
    TimeScheduleChangeCode = 'TimeScheduleChangeCode',
    Dashboard = 'Dashboard',
    TimeScheduleChangeScenario = 'TimeScheduleChangeScenario',
    AttendanceType = 'AttendanceType',
    LastClockInClockOutStatus = 'LastClockInClockOutStatus',
    PayReferenceDate = 'PayReferenceDate',
    Capacity = 'Capacity',
    JobDropDown = 'JobDropDown',
    RegisteredExtraCost = 'RegisteredExtraCost',
    ProducedScrappedQuantity = 'ProducedScrappedQuantity',
    IsMileageRegistration = 'isMileageRegistration',
    ExtraCost = 'ExtraCost',
    RawMaterialConsumption = 'RawMaterialConsumption',
    GetProductionQuantities = 'GetProductionQuantities',
    Job = 'Job',
    RawMaterialItems = 'RawMaterialItems',
    Search = 'Search',
    TimeCalculationForm = 'TimeCalculationForm',
    ApproveDisapproveWorkDay = 'ApproveDisapproveWorkDay',
    Bulk = 'Bulk',
    AbsenceCodeTypeFilter = 'absenceCodeTypeFilter',
    Terminal = 'Terminal',
    AbsenceCode = 'AbsenceCode',
    Employee = 'Employee',
    Summarized = 'Summarized',
    StartDate = 'startDate',
    EndDate = 'endDate',
    FavoriteJobs = 'FavoriteJobs',
    AvailableForRegistration = 'AvailableForRegistration',
    TimeCalculationAndApprovalId = 'timeCalculationAndApprovalId',
    Filter = 'Filter'
  }
  
  export enum JobHandler {
    WorkCenter = 'WorkCenter',
    SearchUser = 'SearchUser',
    WorkCenterId = 'workCenterId',
    IsActie = 'isActive'
  }
  
  export enum AbsenceHandler {
    AbsenceOrDownTime = 'AbsenceOrDownTime',
    GetResourceTimeBalance = 'TimeBalance',
    GetResourceSalaryBalance = 'SalaryBalance'
  }
  
  export enum SidenavButtonActionHandler {
    OpenModel = 'openModel',
    Navigate = 'navigate',
    Logout = 'logout',
    Back = 'back',
    Save = 'save',
    Add = 'add',
    Open = 'open',
    Delete = 'delete',
    Filter = 'filter',
    Blank = 'blank'
  }
  
  export enum DisplayedActionButton {
    Delete = 'Delete',
    Update = 'Update',
    Enter = 'Enter',
    Open = 'Open',
    Favorite = 'Favorite',
    IsFavoriteJob = 'isFavoriteJob',
    ActionType = 'actionType'
  }
  
  export enum DisplayToggleButton {
    StopTime = 'Stop Time',
    Completed = 'Completed'
  }
  
  export enum JobMessageHandler {
    Running = 'running',
    Selected = 'selected',
    Clock_Out = 'clock_out'
  }
  export enum ModuleSelector {
    Production = 'productions',
    Project = 'projects',
    Internal = 'internal',
    Favorites = 'favorites',
    Reset_To_Default = 'reset_to_default'
  }
  
  export enum ProductionHandler {
    Item = 'Item',
    CalculateBom = 'CalculateBom'
  }
  
  export enum MyMessageHandler {
    GetMessagesForUser = 'GetMessagesForUser',
    MarkMessageRead = 'MarkMessageRead',
    MessageReplies = 'MessageReplies',
    SendMessageToSingleReceiver = 'SendMessageToSingleReceiver'
  }
  export enum InvoiceGenerationSource {
    Customer = 'Customer',
    Project = 'Project',
    InvoiceMilestone = 'Invoice_Milestone',
    InvoiceContract = 'Invoice_Contract',
    Dashboard = 'Dashboard'
  }
  
  export enum InvoiceTypeEnum {
    Time_Material = 'Time Material',
    Project_Contract = 'Project Contract',
    Project_Milestone = 'Project Milestone'
  }
  
  export enum MasterHandler {
    Currency = 'Currency',
    DropDown = 'DropDown',
    Partners = 'Partners',
    Master = 'Master',
    Languages = 'Languages',
    Roles = 'Roles'
  }
  
  export enum PrintReportEnum {
    TimeAndSalaryReport = 'TimeAndSalaryReport',
    CostEstimationReport = 'CostEstimationReport',
    AbsenceReport = 'AbsenceReport',
    EmployeeTimeBalanceReport = 'EmployeeTimeBalanceReport',
    ApprovalReport = 'ApprovalReport',
    SummarizedSalaryTransactionsReport = 'SummarizedSalaryTransactionsReport',
    AbsenceStatisticReport = 'AbsenceStatisticReport',
    SelfServiceTimeAndSalaryReport = 'SelfServiceTimeAndSalaryReport',
    TimeChangeCode = 'TimeChangeCode',
    Supplement = 'Supplement',
    SalaryTransaction = 'SalaryTransaction',
    TimeAndSalary = 'TimeAndSalary',
    Employee = 'Employee',
    ExportEmployeeDetails = 'ExportEmployeeDetails',
    ERPTransactions = 'ERPTransactions',
    QuestionnaireReport = 'QuestionnaireReport',
    EmployeeScheduleRotationReport = 'EmployeeScheduleRotationReport',
    ScheduleRotationReport = 'ScheduleRotationReport',
    Absence = 'Absence',
    TimeRegistrations = 'TimeRegistrations',
    TimeBalanceMovementReport = 'TimeBalanceMovementReport',
    Mileage = 'Mileage'
  }
  
  export enum ButtonTypeHandler {
    Save = 'Save',
    Cancel = 'Cancel'
  }
  
  export enum GanttHandler {
    Resource = 'Resource',
    SearchUser = 'SearchUser',
    OrderManagement = 'OrderManagement',
    Capacity = 'Capacity',
    FromDate = 'fromDate',
    ToDate = 'toDate',
    Jobs = 'Jobs',
    PlannedStartDate = 'plannedStartDate',
    PlannedStopDate = 'plannedStopDate',
    UserType = 'userType',
    Project = 'Project',
    Bulk = 'Bulk',
    CurrentApprovalUserId = 'currentApprovalUserId'
  }
  
  export enum UserRolePermissionsEnum {
    Dashboard = 'Dashboard',
    Production_Order = 'Production_Order',
    Project = 'Project',
    Project_Journal = 'ProjectJournal',
    Invoice = 'Invoice',
    Customer = 'Customer',
    Project_Approval = 'Project_Approval',
    ErpTransactions = 'ErpTransactions',
    PayRoll = 'PayRoll',
    Time_Adjustment_Journal = 'Time_Adjustment_Journal',
    Salary_Adjustment_Journal = 'Salary_Adjustment_Journal',
    SelfService = 'SelfService',
    Report = 'Report',
    System_Setup = 'System_Setup',
    Company_Information = 'Company_Information',
    User_Management = 'User_Management',
    Terminal_Configuration = 'Terminal_Configuration',
    Number_Sequence = 'Number_Sequence',
    Terminal_Apps = 'Terminal_Apps',
    Jobs = 'Jobs',
    Basic_Configuration = 'Basic_Configuration',
    Employee_Setup = 'Employee_Setup',
    WorkCenter = 'WorkCenter',
    Machine = 'Machine',
    DownTime = 'DownTime',
    Internal_Jobs = 'Internal_Jobs',
    Time_Periods = 'Time_Periods',
    Time_Counter = 'Time_Counter',
    Rounding_Types = 'Rounding_Types',
    WorkType = 'WorkType',
    Calculation_Rule = 'Calculation_Rule',
    SpecialDays = 'SpecialDays',
    Company_Calender = 'Company_Calender',
    Qualification_Skills = 'Qualification_Skills',
    ExtraCost = 'ExtraCost',
    AbsenceCode = 'AbsenceCode',
    BreakCode = 'BreakCode',
    Time_Schedule_Type = 'Time_Schedule_Type',
    Time_Schedule_Change_Code = 'Time_Schedule_Change_Code',
    Time_Schedule_Rotation = 'Time_Schedule_Rotation',
    Time_Conversion = 'Time_Conversion',
    SalaryAgreement = 'SalaryAgreement',
    SalaryAgreementLines = 'SalaryAgreementLines',
    Salary_Code_Rates = 'Salary_Code_Rates',
    Salary_Balance = 'Salary_Balance',
    Salary_Counter = 'Salary_Counter',
    Time_Counter_Balance = 'Time_Counter_Balance',
    Items = 'Items',
    Unit = 'Unit',
    Bill_Of_Materials = 'Bill_Of_Materials',
    Routes = 'Routes',
    Route_Link = 'Route_Link',
    Scrap_Cause = 'Scrap_Cause',
    General_Notice_board = 'General_Notice_board',
    CheckList = 'CheckList',
    Time_Calculation_And_Approval = 'Time_Calculation_And_Approval',
    Integration = 'Integration',
    ResourceApp = 'ResourceApp',
    MobileApp = 'MobileApp',
    Time_Schedule = 'Time_Schedule',
    Salary_Group = 'Salary_Group',
    User_Group = 'UserGroup',
    ResourceType = 'ResourceType',
    DayCode = 'DayCode',
    AuditLog = 'AuditLog',
    NotificationSetup = 'NotificationSetup',
    SubContract = 'SubContract',
    Super_Admin_Portal = 'Super_Admin_Portal',
    Partner_Portal = 'Partner_Portal',
    ResourceExternalSchedulePlanning = 'ResourceExternalSchedulePlanning',
    ResourceExternalLogPlan = 'ResourceExternalLogPlan',
    TimeCalculationEngine = 'TimeCalculationEngine',
    DayCountBalance = 'DayCountBalance',
    Time_And_Salary_Report = 'Time_And_Salary_Report',
    Cost_And_Estimation_Report = 'Cost_And_Estimation_Report',
    Absence_Report = 'Absence_Report',
    Time_Registration_Summary = 'Time_Registration_Summary',
    Employee_Time_Balance_Report = 'Employee_Time_Balance_Report',
    Approval_Report = 'Approval_Report',
    Absence_Statistic_Report = 'Absence_Statistic_Report',
    Salary_Transaction_Summary = 'Salary_Transaction_Summary',
    Time_Change_Code_Report = 'Time_Change_Code_Report',
    Import_Calculation_Rule = 'Import_Calculation_Rule',
    ExtraCosts_Report = 'ExtraCosts_Report',
    RotationWithEmployee_Report = 'RotationWithEmployee_Report',
    RotationWithoutEmployee_Report = 'RotationWithoutEmployee_Report',
    SyncPrimoBalanceAction = 'SyncPrimoBalanceAction',
    TimeBalanceMovements_Report = 'TimeBalanceMovements_Report',
    Users_ReadyForDeletion = 'Users_ReadyForDeletion',
    Mileage_Report = 'Mileage_Report',
    PendingQuestionnaireTile = 'PendingQuestionnaireTile',
    PendingSupplementTile = 'PendingSupplementTile',
    PendingProjectTile = 'PendingProjectTile',
    PendingMileageTile = 'PendingMileageTile',
    PendingAbsenceTile = 'PendingAbsenceTile',
    Dashboard_Time_Approvals = 'Dashboard_Time_Approvals',
    Dashboard_Employee = 'Dashboard_Employee',
    Dashboard_BI_Reports = 'Dashboard_BI_Reports',
    ResourceLocation = 'ResourceLocation'
  }
  
  export enum DocumentsHandler {
    OrderManagement = 'OrderManagement',
    Project = 'Project',
    ProjectTaskDocument = 'ProjectTaskDocument',
    Production = 'Production',
    ProductionOrderDocument = 'ProductionOrderDocument',
    ProductionOrderRouteOperation = 'ProductionOrderRouteOperation',
    Document = 'Document',
    Download = 'Download',
    ProjectTask = 'ProjectTask'
  }
  
  export enum CustomersFilterTypes {
    ShowAll = 'Show_All',
    SelectedPartner = 'Selected_Partner'
  }
  
  export enum CalculationRuleHandler {
    CalculationRule = 'CalculationRule',
    Copy = 'Copy',
    SalaryAgreement = 'SalaryAgreement',
    TimeCounter = 'TimeCounter',
    Default = 'Default',
    TimeSchedule = 'TimeSchedule',
    TimeScheduleId = 'TimeScheduleId',
    AbsenceCode = 'AbsenceCode',
    Filter = 'Filter',
    TimeScheduleType = 'TimeScheduleType',
    SalaryCounter = 'SalaryCounter',
    SalaryCodeRate = 'SalaryCodeRate',
    SpecialDay = 'SpecialDay',
    SpecialDayTemplate = 'SpecialDayTemplate',
    CompanyCalendarHeader = 'CompanyCalendarHeader'
  }
  
  export enum TemplateAPIHandler {
    TemplateDropDown = 'TemplateDropDown',
    IsTemplate = 'isTemplate',
    Template = 'Template'
  }
  
  export enum DialogActionButtonType {
    Cancel = 'cancel',
    Save = 'save',
    Download = 'download',
    Reset = 'reset'
  }
  
  export enum DialogButtonType {
    Primary = 'primary',
    Secondary = 'secondary',
    Ternary = 'ternary',
    Warning = 'warning'
  }
  
  export enum ApprovalColumns {
    ExpenseCounts = 'expenseCounts',
    MileageCounts = 'mileageCounts',
    ApprovedRegistration = 'approvedRegistration'
  }
  
  export enum MyEmployeeStatuses {
    Absent = 'Absent',
    AttendedLate = 'Attended_Late',
    Attended = 'Attended',
    Present = 'Present'
  }
  
  export enum MyEmployeeStatusesIconColor {
    Success = 'success',
    Warning = 'warning',
    Danger = 'danger'
  }
  export enum TimeCounterBalanceHandler {
    Resource = 'Resource',
    TimeCounterBalance = 'TimeCounterBalance',
    Company = 'Company',
    Dashboard = 'Dashboard',
    TimeCalculationTransaction = 'TimeCalculationTransaction',
    Api = 'api',
    Filter = 'Filter'
  }
  
  export enum ApprovalUserDropdownHandler {
    Resource = 'Resource',
    Search = 'Search',
    SalaryApproverUserId = 'salaryApproverUserId'
  }
  export enum DatePickerCalendarIconAlignment {
    Left = 'left',
    Right = 'right'
  }
  
  export enum CopyFromFileHandler {
    Import = 'Import',
    TemplateResourceId = 'TemplateResourceId'
  }
  export enum UserHandler {
    User = 'User',
    Resend = 'Resend',
    SetPasswordEmail = 'SetPasswordEmail',
    Filter = 'Filter',
    Users = 'Users'
  }
  export enum ResourceTimeCounterBalanceActionHandler {
    Refresh = 'refresh',
    Delete = 'delete',
    FilterOnSubContract = 'FilterOnSubContract'
  }
  export enum AbsenceCodeTypeFilterEnum {
    IsInternalUse = 'IsInternalUse ',
    IsPlanned = 'IsPlanned',
    IsBackend = 'IsBackend',
    IsInternalOrIsPlanned = 'IsInternalOrIsPlanned'
  }
  
  export enum TimePeriodType {
    Month = 'month',
    Day = 'day'
  }
  
  export enum TerminalAbsencesStatuses {
    Approved = 'Approved',
    PendingApproval = 'Pending_Approval',
    Rejected = 'Rejected'
  }
  export enum TerminalAbsencesStatusesIconColor {
    Success = 'success-icon',
    Warning = 'warning-icon',
    Danger = 'danger-icon'
  }
  export enum MasterServiceHandler {
    SalaryCodeBalance = 'SalaryCodeBalance',
    CalculationRuleId = 'calculationRuleId',
    Master = 'Master',
    Company = 'Company',
    Api = 'api',
    Resource = 'Resource',
    FilterResources = 'FilterResources',
    User = 'User',
    Configuration = 'Configuration',
    Table = 'Table'
  }
  
  export enum NotificationMessageClass {
    Success = 'notification-success-message',
    Error = 'notification-error-message',
    Warning = 'notification-warning-message'
  }
  
  export enum TimeCounterHandler {
    Configuration = 'Configuration',
    TimeCounter = 'TimeCounter',
    Filter = 'Filter',
    CurrentBalance = 'CurrentBalance',
    TimeCounterId = 'timeCounterId',
    BalanceDate = 'balanceDate'
  }
  
  export enum WorkTypeHandler {
    Configuration = 'Configuration',
    WorkType = 'WorkType',
    Filter = 'Filter',
    AvailableForRegistration = 'AvailableForRegistration'
  }
  
  export enum TimePeriodHandler {
    Configuration = 'Configuration',
    TimePeriod = 'TimePeriod',
    Filter = 'Filter',
    SetDefault = 'SetDefault'
  }
  
  export enum TimeCounterHandler {
    SetDefaultWorkTime = 'SetDefaultWorkTime',
    SetDefaultBreakTime = 'SetDefaultBreakTime'
  }
  
  export enum TimeCounterBalanceHandler {}
  
  export enum CombitimeViewerAcceptedTypes {
    PDF = 'pdf',
    JPG = 'jpg',
    JPEG = 'jpeg',
    PNG = 'png',
    GIF = 'gif'
  }
  
  export enum TimeChangeCodeHandler {
    TimeScheduleChangeCode = 'TimeScheduleChangeCode',
    Filter = 'Filter'
  }
  
  export enum UserGroupTypeEnum {
    ApproveCalculationAdministrator = 'Approve_Calculation_Administrator',
    ApproveSalaryCalculationAdministrator = 'Approve_Salary_Calculation_Administrator'
  }
  
  export enum TimeScheduleRotationTemplate {
    TimeScheduleRotationTemplate = 'TimeScheduleRotationTemplate',
    CalculationRule = 'CalculationRule',
    Filter = 'Filter',
    TimeScheduleRotationTemplateRange = 'TimeScheduleRotationTemplateRange',
    TimeScheduleRotationTemplateStatusType = 'TimeScheduleRotationTemplateStatusType',
    Clear = 'Clear',
    Closed = 'Closed',
    status = 'status',
    Repeated = 'Repeated',
    CalculationRuleId = 'CalculationRuleId',
    TimeScheduleRotationStatusType = 'TimeScheduleRotationStatusType',
    TimeScheduleRotationRange = 'TimeScheduleRotationRange',
    TimeScheduleRotation = 'TimeScheduleRotation',
    BasicCycle = 'BasicCycle',
    Range = 'Range',
    ListFor = 'ListFor'
  }
  
  export enum LineTypeEnum {
    Header = 'Header',
    SumFrom = 'Sum_From',
    Task = 'Task',
    SumTo = 'Sum_To'
  }
  
  export enum RunSynchronizeBalance {
    SyncPrimoBalanceFromZenergy = 'SyncPrimoBalanceFromZenergy'
  }
  
  export enum RunSyncCapacity {
    Resource = 'Resource',
    Capacity = 'Capacity',
    Calculate = 'Calculate'
  }
  
  export enum SendToPayrollAction {
    SendToPayrollSucceed = 'send_to_payroll_succeed'
  }
  
  export enum MasterDashboardTileDataType {
    Company = 'Company',
    Resource = 'Resource'
  }
  
  export enum Questionnaire {
    Document = 'Document',
    View = 'View'
  }
  
  export enum RoundingTypes {
    Filter = 'Filter',
    RoundingRule = 'RoundingRule',
    Configuration = 'Configuration'
  }
  
  export enum CheckListRouterState {
    RegistrationData = 'RegistrationData',
    SelectedQuestionnaireData = 'SelectedQuestionnaireData',
    ChecklistRegistrationData = 'ChecklistRegistrationData',
    SelectedQuestionnaireList = 'SelectedQuestionnaireList'
  }
  
  export enum TimeCalculationAndApprovalVersion {
    versionOne = 1,
    versionTwo = 2
  }
  
  export enum FilterResourceList {
    All = 1,
    Active = 2,
    InActive = 3
  }
  
  export enum FilterTimeAndSalaryList {
    TimeCounter = 1,
    SalaryCodeRate = 2
  }
  
  export enum SyncAndCreate {
    SyncAll = 'SyncAll',
    CreateAll = 'CreateAll'
  }
  
  export enum SyncAndCreateStatus {
    NoMatch = 'No Match',
    Match = 'Match',
    SystemMatch = 'System Match'
  }
  
  export enum EmployeeToBeDeletedEnum {
    Authorize = 'Authorize',
    Revert = 'Revert'
  }
  
  export enum EmployeeToBeDeleteActionStatus {
    AuthorizeDeletionStatus = 3,
    RevokeDeletionStatus = 2
  }
  
  export enum PayrollFileFormatEnum {
    EPOSFileFormat = 'EPOSFileFormat'
  }
  
  export enum EmployeeStatusTypes {
    Terminated = 'Terminated'
  }
  
  export enum ApprovalType {
    PreApproval = 'PreApproval'
  }
  
  export enum OpenModelForPreApprovalProject {
    PendingHours = 'pending-hours',
    PendingItems = 'pending-items',
    PendingMileage = 'pending-mileage',
    PendingSupplement = 'pending-supplement'
  }
  
  export enum TimeRegistration {
    ListFor = 'ListFor',
    OrderReferenceId = 'orderReferenceId',
    CurrentApprovalUserId = 'currentApprovalUserId',
    TaskId = 'taskId'
  }
  
  export enum FilterWorkTypeList {
    All = 1,
    FilterByResource = 2
  }
  
  export const ProjectTaskLineType = 'projectTaskLineType';
  
  export const UserGroupTypes = {
    ApproveTimeCalculationAdministrator: 'Approve_Calculation_Administrator',
    ApproveSalaryCalcAdministrator: 'Approve_Salary_Calculation_Administrator',
    ProjectManager: 'Project_Manager',
    QualityControlAdmin: 'Quality_Control_Admin'
  };
  