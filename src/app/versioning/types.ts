export interface CompanionCardConfig {
  title: string;
  description: string;
  bgImage: string;
  bgImageExpanded: string;
}

export interface NotificationConfig {
  visible: boolean;
  content: string;
  buttonLabel: string;
  buttonBgColor: string;
  buttonTextColor: string;
  seeAllCount: number;
}

export interface WelcomeMessageConfig {
  userName: string;
  notificationCount: number;
}

export interface HeaderConfig {
  showHistoryIcon: boolean;
  showExpandIcon: boolean;
  showCloseIcon: boolean;
  titleText: string;
  titleFontSize: string;
  headerBgColor: string;
  borderColor: string;
}

export interface BreadcrumbBarConfig {
  askLeoPlaceholder: string;
  supportButtonLabel: string;
  barBgColor: string;
  borderColor: string;
  inputBorderColor: string;
}

export interface PanelConfig {
  defaultExpanded: boolean;
  defaultWidth: "collapsed" | "expanded";
  panelBgGradient: string;
  companionSectionTitle: string;
  companionSectionSubtitle: string;
}

export interface ComponentConfig {
  header: HeaderConfig;
  breadcrumbBar: BreadcrumbBarConfig;
  panel: PanelConfig;
  welcomeMessage: WelcomeMessageConfig;
  notification: NotificationConfig;
  companionCards: CompanionCardConfig[];
}

export interface VersionSnapshot {
  id: string;
  name: string;
  timestamp: number;
  config: ComponentConfig;
}
