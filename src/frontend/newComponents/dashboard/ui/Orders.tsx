"use client";

import { useState } from "react";
import { Badge } from "@/frontend/core/components/ui/badge";
import { Button } from "@/frontend/core/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/frontend/core/components/ui/table";
import { Checkbox } from "@/frontend/core/components/ui/checkbox";
import { Filter, ChevronDown, AlertTriangle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/frontend/core/components/ui/dropdown-menu";
import Image from "next/image";

const actionNeededCategories = [
  { label: ["Ship", "soon"], count: 0 },
  { label: ["Auto-cancelling", "soon"], count: 0 },
  { label: ["Shipping", "overdue"], count: 0 },
  { label: ["Cancellation", "requested"], count: 0 },
  { label: ["Logistics", "issue"], count: 0 },
  { label: ["Return/refund", "requested"], count: 0 },
];

const tabs = [
  { id: "all", label: "All" },
  { id: "to-ship", label: "To ship" },
  { id: "shipped", label: "Shipped" },
  { id: "completed", label: "Completed" },
];

const orders = [
  {
    id: "1",
    customer: "krash_loonies",
    items: "1 item",
    status: "Completed",
    platform: "Etsy",
    total: "$7.95",
    selected: false,
  },
  {
    id: "2",
    customer: "luxasff",
    items: "1 item",
    status: "Completed",
    platform: "Ebay",
    total: "$7.95",
    selected: false,
  },
  {
    id: "3",
    customer: "wayvaddie",
    items: "1 item",
    status: "Completed",
    platform: "Poshmark",
    total: "$7.95",
    selected: false,
  },
  {
    id: "4",
    customer: "k.deleyan",
    items: "1 item",
    status: "Completed",
    platform: "Depop",
    total: "$7.95",
    selected: false,
  },
  {
    id: "5",
    customer: "k.deleyan",
    items: "1 item",
    status: "Completed",
    platform: "Depop",
    total: "$7.95",
    selected: false,
  },
];

export function Orders() {
  const [activeTab, setActiveTab] = useState("completed");
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedOrders(orders.map((o) => o.id));
    } else {
      setSelectedOrders([]);
    }
  };

  const handleSelectOrder = (orderId: string, checked: boolean) => {
    if (checked) {
      setSelectedOrders([...selectedOrders, orderId]);
    } else {
      setSelectedOrders(selectedOrders.filter((id) => id !== orderId));
    }
  };

  return (
    <div className="space-y-6 p-4">
      {/* Action Needed Section */}
      <div className="bg-gray-50 border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <AlertTriangle className="h-4 w-4 text-gray-600" />
          <span className="font-medium text-gray-700">Action needed</span>
        </div>
        <div className="grid grid-cols-6 gap-8">
          {actionNeededCategories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="text-sm text-gray-600 mb-3 leading-tight min-h-[2.5rem] flex flex-col items-center justify-center">
                {category.label.map((line, lineIndex) => (
                  <div key={lineIndex} className="whitespace-nowrap">
                    {line}
                  </div>
                ))}
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {category.count}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filter and Sort */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <span className="text-sm text-gray-600">Found 592 orders</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Sort by
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Order date (newest)</DropdownMenuItem>
            <DropdownMenuItem>Order date (oldest)</DropdownMenuItem>
            <DropdownMenuItem>Total (high to low)</DropdownMenuItem>
            <DropdownMenuItem>Total (low to high)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Orders Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedOrders.length === orders.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Order status</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedOrders.includes(order.id)}
                    onCheckedChange={(checked) =>
                      handleSelectOrder(order.id, checked as boolean)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button
                    className="bg-purple-500 hover:bg-purple-600 text-white"
                    size="sm"
                    onClick={() =>
                      window.open("https://parcelsapp.com/", "_blank")
                    }
                  >
                    View logistics
                  </Button>
                </TableCell>
                <TableCell>
                  <span className="font-medium">{order.customer}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{order.items}</span>
                    <div className="w-4 h-4 rounded overflow-hidden">
                      <Image
                        src="/images/jelly-jar.png"
                        alt="Jelly jar item"
                        width={16}
                        height={16}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="font-medium">{order.platform}</span>
                </TableCell>
                <TableCell>
                  <span className="font-medium">{order.total}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
