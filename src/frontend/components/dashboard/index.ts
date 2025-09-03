// Re-export domain stuff
export * from "./domain/menuItem";
export * from "./domain/types";

// Re-export UI components
export { default as DashboardLayout } from "./ui/DashboardLayout";
export { AppSidebar } from "./ui/AppSidebar";

// Optional: export individual page components too (if you want direct imports)
export { ConnectionsView } from "./ui/Connections";
export { Messages } from "./ui/Messages";
export { Listings } from "./ui/Listings";
export { Orders } from "./ui/Orders";
export { Finances } from "./ui/Finances";
export { DashboardView } from "./ui/DashboardView";
