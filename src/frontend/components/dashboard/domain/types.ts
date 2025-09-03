export interface AppSidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onLogout: () => void;
  unreadMessagesCount?: number;
  pendingOrdersCount?: number;
  outOfStockCount?: number;
  disconnectedPlatformsCount?: number;
}
