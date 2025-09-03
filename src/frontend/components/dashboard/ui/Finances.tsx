"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/frontend/core/components/ui/card";
import { Button } from "@/frontend/core/components/ui/button";
import { Badge } from "@/frontend/core/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/frontend/core/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/frontend/core/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  ChevronDown,
  Download,
  Minus,
  Wallet,
  Receipt,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/frontend/core/components/ui/dropdown-menu";
import Image from "next/image";

// Sample data for revenue chart (last 30 days)
const revenueData = [
  { date: "Dec 27", revenue: 45.5, orders: 2 },
  { date: "Dec 28", revenue: 23.95, orders: 1 },
  { date: "Dec 29", revenue: 67.4, orders: 3 },
  { date: "Dec 30", revenue: 89.25, orders: 4 },
  { date: "Dec 31", revenue: 156.8, orders: 7 },
  { date: "Jan 1", revenue: 78.9, orders: 3 },
  { date: "Jan 2", revenue: 234.5, orders: 10 },
  { date: "Jan 3", revenue: 189.75, orders: 8 },
  { date: "Jan 4", revenue: 145.6, orders: 6 },
  { date: "Jan 5", revenue: 267.3, orders: 11 },
  { date: "Jan 6", revenue: 198.45, orders: 9 },
  { date: "Jan 7", revenue: 312.8, orders: 13 },
  { date: "Jan 8", revenue: 278.9, orders: 12 },
  { date: "Jan 9", revenue: 345.6, orders: 15 },
  { date: "Jan 10", revenue: 289.75, orders: 11 },
  { date: "Jan 11", revenue: 423.2, orders: 18 },
  { date: "Jan 12", revenue: 367.85, orders: 16 },
  { date: "Jan 13", revenue: 298.5, orders: 13 },
  { date: "Jan 14", revenue: 445.9, orders: 19 },
  { date: "Jan 15", revenue: 389.25, orders: 17 },
];

// Platform breakdown data
const platformData = [
  {
    platform: "Etsy",
    revenue: 2847.5,
    percentage: 45,
    orders: 89,
    color: "#F56500",
  },
  {
    platform: "eBay",
    revenue: 1898.3,
    percentage: 30,
    orders: 67,
    color: "#0064D2",
  },
  {
    platform: "Depop",
    revenue: 949.15,
    percentage: 15,
    orders: 34,
    color: "#000000",
  },
  {
    platform: "Poshmark",
    revenue: 632.77,
    percentage: 10,
    orders: 23,
    color: "#731A5D",
  },
];

// Recent transactions
const transactions = [
  {
    id: "TXN-001",
    type: "sale",
    description: "Vintage Leather Jacket - Etsy",
    amount: 89.5,
    fee: 1.79,
    net: 87.71,
    date: "Jan 15, 2025",
    status: "completed",
    platform: "etsy",
  },
  {
    id: "TXN-002",
    type: "sale",
    description: "Handmade Ceramic Mug - eBay",
    amount: 24.99,
    fee: 0.5,
    net: 24.49,
    date: "Jan 15, 2025",
    status: "completed",
    platform: "ebay",
  },
  {
    id: "TXN-003",
    type: "refund",
    description: "Refund: Broken Item - Depop",
    amount: -45.0,
    fee: 0.0,
    net: -45.0,
    date: "Jan 14, 2025",
    status: "completed",
    platform: "depop",
  },
  {
    id: "TXN-004",
    type: "sale",
    description: "Designer Handbag - Poshmark",
    amount: 156.0,
    fee: 3.12,
    net: 152.88,
    date: "Jan 14, 2025",
    status: "pending",
    platform: "poshmark",
  },
  {
    id: "TXN-005",
    type: "sale",
    description: "Vintage T-Shirt - Etsy",
    amount: 32.5,
    fee: 0.65,
    net: 31.85,
    date: "Jan 13, 2025",
    status: "completed",
    platform: "etsy",
  },
];

const platformLogos: Record<string, string> = {
  etsy: "/images/etsy-logo.webp",
  ebay: "/images/ebay-logo.png",
  depop: "/images/depop-logo.jpeg",
  poshmark: "/images/poshmark-logo.webp",
  mercari: "/images/mercari-logo.webp",
};

export function Finances() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  const totalRevenue = revenueData.reduce((sum, day) => sum + day.revenue, 0);
  const totalOrders = revenueData.reduce((sum, day) => sum + day.orders, 0);
  const averageOrderValue = totalRevenue / totalOrders;
  const totalFees = totalRevenue * 0.02; // 2% fee
  const netRevenue = totalRevenue - totalFees;

  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 pb-4 pl-4 pr-4 border-b flex-shrink-0 gap-3">
        {/* Title */}
        <h1 className="text-lg font-semibold">Finances</h1>
      </div>

      <div className="space-y-6 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left Section */}
          <div>
            <p className="text-muted-foreground text-sm sm:text-base">
              Track your revenue, expenses, and financial performance
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto justify-between"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Last 30 days
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedPeriod("7d")}>
                  Last 7 days
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedPeriod("30d")}>
                  Last 30 days
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedPeriod("90d")}>
                  Last 90 days
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedPeriod("1y")}>
                  Last year
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${totalRevenue.toFixed(2)}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +12.5% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Revenue</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${netRevenue.toFixed(2)}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +11.8% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Fees</CardTitle>
              <Minus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalFees.toFixed(2)}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
                2% of gross revenue
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg Order Value
              </CardTitle>
              <Receipt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${averageOrderValue.toFixed(2)}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +5.2% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Chart */}

        <div className="block md:hidden w-full">
          <Card className="w-full">
            <CardHeader className="space-y-1 px-2">
              <CardTitle className="text-base">Revenue Over Time</CardTitle>
              <CardDescription className="text-sm">
                Daily revenue for the selected period
              </CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <ChartContainer
                config={{ revenue: { label: "Revenue", color: "#8b5cf6" } }}
                className="h-[250px] w-[100%]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData} margin={{ top: 5, bottom: 5 }}>
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10, fill: "#6b7280" }}
                      interval={0} // ensures all labels fit
                      angle={-45}
                      textAnchor="end"
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10, fill: "#6b7280" }}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      formatter={(value) => [`$${value}`, "Revenue"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block w-full">
          <Card className="w-full">
            <CardHeader className="space-y-1 sm:space-y-2 px-4">
              <CardTitle className="text-lg sm:text-xl">
                Revenue Over Time
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Daily revenue for the selected period
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4">
              <ChartContainer
                config={{ revenue: { label: "Revenue", color: "#8b5cf6" } }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={revenueData}
                    margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                  >
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6b7280" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6b7280" }}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      formatter={(value) => [`$${value}`, "Revenue"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6">
          {/* Platform Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue by Platform</CardTitle>
              <CardDescription>
                Performance across different marketplaces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {platformData.map((platform) => (
                  <div
                    key={platform.platform}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded overflow-hidden">
                        <Image
                          src={
                            platformLogos[platform.platform.toLowerCase()] ||
                            "/placeholder.svg"
                          }
                          alt={`${platform.platform} logo`}
                          width={32}
                          height={32}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{platform.platform}</div>
                        <div className="text-sm text-muted-foreground">
                          {platform.orders} orders
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">
                        ${platform.revenue.toFixed(2)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {platform.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="w-full">
            <CardHeader className="space-y-1 sm:space-y-2">
              <CardTitle className="text-lg sm:text-xl">
                Recent Transactions
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Latest sales, refunds, and fees
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              {/* Desktop Table */}
              <div className="hidden sm:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction</TableHead>
                      <TableHead>Platform</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Fee</TableHead>
                      <TableHead>Net</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {transaction.type === "sale" ? (
                              <ArrowUpRight className="h-4 w-4 text-green-500" />
                            ) : (
                              <ArrowDownRight className="h-4 w-4 text-red-500" />
                            )}
                            <div>
                              <div className="font-medium text-sm">
                                {transaction.description}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {transaction.id}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded overflow-hidden">
                              <Image
                                src={
                                  platformLogos[transaction.platform] ||
                                  "/placeholder.svg"
                                }
                                alt={`${transaction.platform} logo`}
                                width={16}
                                height={16}
                                className="object-contain w-full h-full"
                              />
                            </div>
                            <span className="capitalize text-sm">
                              {transaction.platform}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span
                            className={
                              transaction.amount > 0
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            ${Math.abs(transaction.amount).toFixed(2)}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-muted-foreground">
                            ${transaction.fee.toFixed(2)}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`font-medium ${
                              transaction.net > 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            ${transaction.net.toFixed(2)}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-muted-foreground">
                            {transaction.date}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              transaction.status === "completed"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {transaction.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Cards */}
              <div className="sm:hidden space-y-3">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="p-4 border rounded-lg shadow-sm"
                  >
                    {/* Transaction + Platform */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {transaction.type === "sale" ? (
                          <ArrowUpRight className="h-4 w-4 text-green-500" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-500" />
                        )}
                        <div>
                          <div className="font-medium text-sm">
                            {transaction.description}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {transaction.id}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded overflow-hidden">
                          <Image
                            src={
                              platformLogos[transaction.platform] ||
                              "/placeholder.svg"
                            }
                            alt={`${transaction.platform} logo`}
                            width={16}
                            height={16}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        <span className="capitalize text-sm">
                          {transaction.platform}
                        </span>
                      </div>
                    </div>

                    {/* Amounts */}
                    <div className="flex justify-between mb-2">
                      <span
                        className={
                          transaction.amount > 0
                            ? "text-green-600 font-medium"
                            : "text-red-600 font-medium"
                        }
                      >
                        ${Math.abs(transaction.amount).toFixed(2)}
                      </span>
                      <span className="text-muted-foreground">
                        ${transaction.fee.toFixed(2)}
                      </span>
                      <span
                        className={
                          transaction.net > 0
                            ? "text-green-600 font-semibold"
                            : "text-red-600 font-semibold"
                        }
                      >
                        ${transaction.net.toFixed(2)}
                      </span>
                    </div>

                    {/* Date + Status */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {transaction.date}
                      </span>
                      <Badge
                        variant={
                          transaction.status === "completed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
