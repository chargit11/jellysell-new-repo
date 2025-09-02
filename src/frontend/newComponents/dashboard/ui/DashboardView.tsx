"use client";

import { useState } from "react";
import { Button } from "@/frontend/core/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/frontend/core/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Calendar, ChevronDown, Edit3 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/frontend/core/components/ui/dropdown-menu";

// Chronological data from June 27 to July 26
const chartData = [
  { date: "Jun 27", current: 2, previous: 1 },
  { date: "Jun 28", current: 1, previous: 2 },
  { date: "Jun 29", current: 3, previous: 1 },
  { date: "Jun 30", current: 2, previous: 3 },
  { date: "Jul 1", current: 1, previous: 2 },
  { date: "Jul 2", current: 2, previous: 1 },
  { date: "Jul 3", current: 4, previous: 2 },
  { date: "Jul 4", current: 3, previous: 3 },
  { date: "Jul 5", current: 2, previous: 2 },
  { date: "Jul 6", current: 1, previous: 1 },
  { date: "Jul 7", current: 2, previous: 2 },
  { date: "Jul 8", current: 3, previous: 4 },
  { date: "Jul 9", current: 12, previous: 3 },
  { date: "Jul 10", current: 8, previous: 2 },
  { date: "Jul 11", current: 4, previous: 1 },
  { date: "Jul 12", current: 3, previous: 3 },
  { date: "Jul 13", current: 2, previous: 2 },
  { date: "Jul 14", current: 1, previous: 4 },
  { date: "Jul 15", current: 2, previous: 3 },
  { date: "Jul 16", current: 3, previous: 2 },
  { date: "Jul 17", current: 2, previous: 1 },
  { date: "Jul 18", current: 4, previous: 3 },
  { date: "Jul 19", current: 3, previous: 5 },
  { date: "Jul 20", current: 2, previous: 4 },
  { date: "Jul 21", current: 5, previous: 3 },
  { date: "Jul 22", current: 3, previous: 2 },
  { date: "Jul 23", current: 2, previous: 1 },
  { date: "Jul 24", current: 1, previous: 2 },
  { date: "Jul 25", current: 3, previous: 3 },
  { date: "Jul 26", current: 2, previous: 1 },
];

const metrics = [
  { id: "sessions", label: "Sessions", value: "31", change: "↗ 3%" },
  { id: "sales", label: "Total sales", value: "$0", change: "—" },
  { id: "orders", label: "Orders", value: "0", change: "" },
  { id: "rate", label: "Conversion rate", value: "0%", change: "—" },
];

export function DashboardView() {
  const [selectedMetric, setSelectedMetric] = useState("sessions");

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 pb-4 pl-4 pr-4 border-b flex-shrink-0 gap-3">
        {/* Title */}
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="h-full flex flex-col overflow-hidden w-full p-4">
        {/* Top Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2 px-3 py-2 bg-white rounded-lg border flex-shrink-0">
          {/* Left side */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Date filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto justify-between"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Last 30 days
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Today</DropdownMenuItem>
                <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                <DropdownMenuItem>Last 30 days</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Channel filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto justify-between"
                >
                  All channels
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All channels</DropdownMenuItem>
                <DropdownMenuItem>Etsy</DropdownMenuItem>
                <DropdownMenuItem>eBay</DropdownMenuItem>
                <DropdownMenuItem>Depop</DropdownMenuItem>
                <DropdownMenuItem>Mercari</DropdownMenuItem>
                <DropdownMenuItem>Poshmark</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Live visitors */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>0 live visitors</span>
            </div>
          </div>

          {/* Right side */}
          <div className="text-sm text-gray-700">Next payout: $0.00</div>
        </div>

        {/* Chart Card */}
        <div className="bg-white rounded-lg border flex-1 flex flex-col min-h-0 overflow-hidden">
          {/* Metrics Row */}
          <div className="flex flex-col sm:flex-row flex-wrap border-b flex-shrink-0">
            {metrics.map((metric, index) => (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`flex-1 min-w-[150px] p-3 text-left transition-colors
        ${index < metrics.length - 1 ? "sm:border-r" : ""}
        ${selectedMetric === metric.id ? "bg-gray-100" : "hover:bg-gray-50"}
        `}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">{metric.label}</span>
                  {selectedMetric === metric.id && (
                    <Edit3 className="h-3 w-3 text-gray-400" />
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-semibold">{metric.value}</span>
                  {metric.change && (
                    <span className="text-xs text-gray-500">
                      {metric.change}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Chart Area */}
          <div className="flex-1 min-h-0 flex flex-col p-2">
            {/* Chart */}
            <div className="flex-1 min-h-0">
              <ChartContainer
                config={{
                  current: { label: "Jun 27–Jul 26, 2025", color: "#a855f7" },
                  previous: { label: "May 28–Jun 26, 2025", color: "#a855f7" },
                }}
                className="w-full h-60"
              >
                <ResponsiveContainer width="100%" height="100px">
                  <LineChart
                    data={chartData}
                    margin={{ top: 5, right: 5, left: 5, bottom: 25 }}
                  >
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10, fill: "#6b7280" }}
                      interval="preserveStartEnd"
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10, fill: "#6b7280" }}
                      domain={[0, "dataMax + 2"]}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="current"
                      stroke="#a855f7"
                      strokeWidth={2}
                      dot={false}
                      name="Current Period"
                    />
                    <Line
                      type="monotone"
                      dataKey="previous"
                      stroke="#a855f7"
                      strokeWidth={2}
                      strokeDasharray="3 3"
                      dot={false}
                      name="Previous Period"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>

            {/* Legend */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-2 text-xs border-t flex-shrink-0 text-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-purple-500"></div>
                <span className="text-gray-600">Jun 27–Jul 26, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px border-t border-dashed border-purple-400"></div>
                <span className="text-gray-600">May 28–Jun 26, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
