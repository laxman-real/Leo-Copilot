import supportCardBg from "../../assets/support-card-bg.png";
import brokerCardBg from "../../assets/broker-card-bg.png";
import pirateCardBg from "../../assets/pirate-card-bg.png";
import supportCardBgExpanded from "../../assets/support-card-bg-expanded.png";
import brokerCardBgExpanded from "../../assets/broker-card-bg-expanded.png";
import pirateCardBgExpanded from "../../assets/pirate-card-bg-expanded.png";
import type { ComponentConfig } from "./types";

export const DEFAULT_CONFIG: ComponentConfig = {
  header: {
    showHistoryIcon: true,
    showExpandIcon: true,
    showCloseIcon: true,
    titleText: "Leo",
    titleFontSize: "14px",
    headerBgColor: "#050e3d",
    borderColor: "#2d355c",
  },
  breadcrumbBar: {
    askLeoPlaceholder: "Ask Leo",
    supportButtonLabel: "Support",
    barBgColor: "white",
    borderColor: "#d2d5db",
    inputBorderColor: "#a5b4fc",
  },
  panel: {
    defaultExpanded: true,
    defaultWidth: "collapsed",
    panelBgGradient:
      "linear-gradient(90deg, rgb(5, 14, 61) 0%, rgb(5, 14, 61) 100%), linear-gradient(-90deg, rgb(5, 68, 101) 8.9636%, rgb(5, 14, 61) 4.4818%)",
    companionSectionTitle: "Choose your Leo companion",
    companionSectionSubtitle: "Leo adapts to your needs.",
  },
  welcomeMessage: {
    userName: "Jane",
    notificationCount: 3,
  },
  notification: {
    visible: true,
    content: "This is a notification that a user must complete",
    buttonLabel: "Generate",
    buttonBgColor: "#00fbf0",
    buttonTextColor: "#050e3d",
    seeAllCount: 20,
  },
  companionCards: [
    {
      title: "Support",
      description: "Your expert real estate assistant",
      bgImage: supportCardBg,
      bgImageExpanded: supportCardBgExpanded,
    },
    {
      title: "Broker",
      description: "Your right hand in transaction related questions",
      bgImage: brokerCardBg,
      bgImageExpanded: brokerCardBgExpanded,
    },
    {
      title: "Spring Bunny",
      description: "Arrrr let's set sail to your next closing.",
      bgImage: pirateCardBg,
      bgImageExpanded: pirateCardBgExpanded,
    },
  ],
};
