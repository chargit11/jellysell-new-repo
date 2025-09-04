"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/frontend/core/components/ui/button";
import { Input } from "@/frontend/core/components/ui/input";
import { Checkbox } from "@/frontend/core/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/frontend/core/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/frontend/core/components/ui/dropdown-menu";
import {
  Search,
  ChevronDown,
  MoreHorizontal,
  Edit,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
} from "lucide-react";
import Image from "next/image";
import { AddProductView } from "./add-product-view";

const tabs = [
  { id: "all", label: "All", count: null },
  { id: "live", label: "Live", count: 1 },
  { id: "reviewing", label: "Reviewing", count: 0 },
  { id: "violation", label: "Violation", count: 1 },
  { id: "deactivated", label: "Deactivated", count: null },
  { id: "draft", label: "Draft", count: 2 },
  { id: "deleted", label: "Deleted", count: 1 },
];

interface PlatformStatus {
  platform: string;
  enabled: boolean;
}

const initialListings = [
  {
    id: "172942897372093055",
    title: "Jelly",
    image: "/placeholder.svg?height=60&width=60",
    performance: {
      itemsSold: 0,
      views: 259,
      sales: 0.0,
    },
    status: "Live",
    statusTime: "03/29/2025 11:57 AM",
    stock: 0,
    price: 7.95,
    listingQuality: "Good",
    qualityScore: 85,
    platforms: [
      { platform: "etsy", enabled: true },
      { platform: "ebay", enabled: true },
      { platform: "depop", enabled: false },
      { platform: "poshmark", enabled: true },
      { platform: "mercari", enabled: false },
    ] as PlatformStatus[],
  },
  {
    id: "172942897372093058",
    title: "Deleted Product",
    image: "/placeholder.svg?height=60&width=60",
    performance: {
      itemsSold: 2,
      views: 145,
      sales: 47.9,
    },
    status: "Deleted",
    statusTime: "03/26/2025 4:45 PM",
    stock: 0,
    price: 23.95,
    listingQuality: "Good",
    qualityScore: 80,
    platforms: [
      { platform: "etsy", enabled: false },
      { platform: "ebay", enabled: false },
      { platform: "depop", enabled: false },
      { platform: "poshmark", enabled: false },
      { platform: "mercari", enabled: false },
    ] as PlatformStatus[],
  },
];

// Segmented Progress Bar Component
function SegmentedProgress({
  value,
  segments = 3,
}: {
  value: number;
  segments?: number;
}) {
  // Determine quality level based on score
  let filledSegments = 0;
  let segmentColor = "bg-gray-200";

  if (value >= 75) {
    // Good - fill all 3 segments with green
    filledSegments = 3;
    segmentColor = "bg-green-500";
  } else if (value >= 50) {
    // Okay - fill 2 segments with yellow
    filledSegments = 2;
    segmentColor = "bg-yellow-500";
  } else if (value >= 25) {
    // Poor - fill 1 segment with red
    filledSegments = 1;
    segmentColor = "bg-red-500";
  }

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: segments }).map((_, index) => (
        <div
          key={index}
          className={`h-2 flex-1 rounded-sm ${
            index < filledSegments ? segmentColor : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

// Platform Icons Component
function PlatformIcons({
  platforms,
  onTogglePlatform,
}: {
  platforms: PlatformStatus[];
  onTogglePlatform: (platform: string) => void;
}) {
  const platformLogos: Record<string, string> = {
    etsy: "/images/etsy-logo.webp",
    ebay: "/images/ebay-logo.png",
    depop: "/images/depop-logo.jpeg",
    poshmark: "/images/poshmark-logo.webp",
    mercari: "/images/mercari-logo.webp",
  };

  return (
    <div className="flex gap-0.5">
      {platforms.map(({ platform, enabled }) => (
        <button
          key={platform}
          onClick={() => onTogglePlatform(platform)}
          className={`w-4 h-4 rounded-sm overflow-hidden flex items-center justify-center transition-all hover:scale-105 ${
            enabled
              ? "bg-gray-100 border border-transparent"
              : "bg-gray-50 border border-gray-300 opacity-50"
          }`}
        >
          <Image
            src={platformLogos[platform] || "/placeholder.svg"}
            alt={`${platform} logo`}
            width={16}
            height={16}
            className={`object-contain w-3 h-3 transition-all ${
              enabled ? "" : "grayscale opacity-60"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export function Listings() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedListings, setSelectedListings] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [listings, setListings] = useState(initialListings);
  const [editingPrice, setEditingPrice] = useState<string | null>(null);
  const [editingStock, setEditingStock] = useState<string | null>(null);
  const [tempPrice, setTempPrice] = useState("");
  const [tempStock, setTempStock] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getFilteredListings = () => {
    switch (activeTab) {
      case "live":
        return listings.filter((listing) => listing.status === "Live");
      case "draft":
        return listings.filter((listing) => listing.status === "Draft");
      case "deleted":
        return listings.filter((listing) => listing.status === "Deleted");
      case "reviewing":
        return listings.filter((listing) => listing.status === "Reviewing");
      case "violation":
        return listings.filter((listing) => listing.status === "Violation");
      case "deactivated":
        return listings.filter((listing) => listing.status === "Deactivated");
      default:
        return listings.filter((listing) => listing.status !== "Deleted"); // All except deleted
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedListings(listings.map((l) => l.id));
    } else {
      setSelectedListings([]);
    }
  };

  const handleSelectListing = (listingId: string, checked: boolean) => {
    if (checked) {
      setSelectedListings([...selectedListings, listingId]);
    } else {
      setSelectedListings(selectedListings.filter((id) => id !== listingId));
    }
  };

  const handleTogglePlatform = (listingId: string, platform: string) => {
    setListings(
      listings.map((listing) => {
        if (listing.id === listingId) {
          return {
            ...listing,
            platforms: listing.platforms.map((p) =>
              p.platform === platform ? { ...p, enabled: !p.enabled } : p
            ),
          };
        }
        return listing;
      })
    );
  };

  const handlePriceEdit = (listingId: string, currentPrice: number) => {
    setEditingPrice(listingId);
    setTempPrice(currentPrice.toString());
  };

  const handleStockEdit = (listingId: string, currentStock: number) => {
    setEditingStock(listingId);
    setTempStock(currentStock.toString());
  };

  const handlePriceSave = (listingId: string) => {
    const newPrice = Number.parseFloat(tempPrice);
    if (!isNaN(newPrice) && newPrice >= 0) {
      setListings(
        listings.map((listing) =>
          listing.id === listingId ? { ...listing, price: newPrice } : listing
        )
      );
    }
    setEditingPrice(null);
    setTempPrice("");
  };

  const handleStockSave = (listingId: string) => {
    const newStock = Number.parseInt(tempStock);
    if (!isNaN(newStock) && newStock >= 0) {
      setListings(
        listings.map((listing) =>
          listing.id === listingId ? { ...listing, stock: newStock } : listing
        )
      );
    }
    setEditingStock(null);
    setTempStock("");
  };

  const handlePriceCancel = () => {
    setEditingPrice(null);
    setTempPrice("");
  };

  const handleStockCancel = () => {
    setEditingStock(null);
    setTempStock("");
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter") {
      action();
    } else if (e.key === "Escape") {
      if (editingPrice) handlePriceCancel();
      if (editingStock) handleStockCancel();
    }
  };

  const handleDeleteListing = (listingId: string) => {
    setListings(
      listings.map((listing) =>
        listing.id === listingId
          ? {
              ...listing,
              status: "Deleted",
              statusTime: new Date().toLocaleString(),
            }
          : listing
      )
    );
  };

  const filteredListings = getFilteredListings();

  return (
    <>
      {isOpen ? (
        <>
          <AddProductView setIsOpen={setIsOpen} />
        </>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 pb-3 pl-4 pr-4 border-b flex-shrink-0 gap-3">
            {/* Title */}
            <h1 className="text-lg font-semibold">Listings</h1>
            <div className=" flex gap-3 ">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => setIsOpen(true)}
              >
                Add a product
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white">
                Import Listing
              </button>
            </div>
          </div>
          <div className="space-y-4 overflow-x-hidden p-4">
            {/* Tab Navigation */}
            <div className="border-b">
              <div className="flex space-x-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? "border-purple-500 text-purple-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.label}
                    {tab.count !== null && (
                      <span className="ml-1 text-gray-400">{tab.count}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative max-w-xs">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search products"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 text-sm"
                  />
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Category
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>All Categories</DropdownMenuItem>
                    <DropdownMenuItem>Electronics</DropdownMenuItem>
                    <DropdownMenuItem>Toys & Games</DropdownMenuItem>
                    <DropdownMenuItem>Fashion</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Sort
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Name A-Z</DropdownMenuItem>
                    <DropdownMenuItem>Name Z-A</DropdownMenuItem>
                    <DropdownMenuItem>Price Low-High</DropdownMenuItem>
                    <DropdownMenuItem>Price High-Low</DropdownMenuItem>
                    <DropdownMenuItem>Date Created</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Listings Table */}
            <div className="border rounded-lg">
              {/* Desktop Table */}
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="w-8">
                        <Checkbox
                          checked={selectedListings.length === listings.length}
                          onCheckedChange={handleSelectAll}
                        />
                      </TableHead>
                      <TableHead className="w-[200px]">Product</TableHead>
                      <TableHead className="w-[80px] text-xs">
                        Performance
                      </TableHead>
                      <TableHead className="w-[90px] text-xs">Status</TableHead>
                      <TableHead className="w-[50px] text-xs">Stock</TableHead>
                      <TableHead className="w-[60px] text-xs">Price</TableHead>
                      <TableHead className="w-[70px] text-xs">
                        Platforms
                      </TableHead>
                      <TableHead className="w-[80px] text-xs">
                        Quality
                      </TableHead>
                      <TableHead className="w-[60px] text-xs">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredListings.map((listing) => (
                      <TableRow key={listing.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedListings.includes(listing.id)}
                            onCheckedChange={(checked) =>
                              handleSelectListing(
                                listing.id,
                                checked as boolean
                              )
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex-shrink-0">
                              <Image
                                src="/images/jelly-jar.png"
                                alt="Jelly jar"
                                width={32}
                                height={32}
                                className="rounded object-contain w-full h-full"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="font-medium text-gray-900 text-xs truncate">
                                {listing.title}
                              </h3>
                              <p className="text-xs text-gray-500 truncate">
                                ID:{listing.id.slice(-8)}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-0.5">
                            <div className="text-xs font-medium">
                              {listing.performance.itemsSold} sold
                            </div>
                            <div className="text-xs text-gray-500">
                              {listing.performance.views} views
                            </div>
                            <div className="text-xs text-gray-500">
                              ${listing.performance.sales.toFixed(0)}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-xs font-medium">
                              {listing.status}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`font-medium text-xs ${
                              listing.stock === 0
                                ? "text-red-600"
                                : "text-gray-900"
                            }`}
                          >
                            {listing.stock}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="font-medium text-xs">
                            ${listing.price}
                          </span>
                        </TableCell>
                        <TableCell>
                          <PlatformIcons
                            platforms={listing.platforms}
                            onTogglePlatform={(platform) =>
                              handleTogglePlatform(listing.id, platform)
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-xs font-medium">
                              {listing.listingQuality}
                            </div>
                            <div className="w-12">
                              <SegmentedProgress
                                value={listing.qualityScore}
                                segments={3}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                >
                                  <MoreHorizontal className="h-3 w-3" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  Edit Listing
                                </DropdownMenuItem>
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuItem>Deactivate</DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-red-600"
                                  onClick={() =>
                                    handleDeleteListing(listing.id)
                                  }
                                >
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Cards */}
              <div className="block md:hidden space-y-4 p-4">
                {filteredListings.map((listing) => (
                  <div
                    key={listing.id}
                    className="border rounded-lg p-4 bg-white shadow-sm space-y-3 h-600"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/jelly-jar.png"
                        alt="Jelly jar"
                        width={40}
                        height={40}
                        className="rounded object-contain"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900 text-sm">
                          {listing.title}
                        </h3>
                        <p className="text-xs text-gray-500">
                          ID:{listing.id.slice(-8)}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span>{listing.performance.itemsSold} sold</span>
                      <span>{listing.performance.views} views</span>
                      <span>${listing.performance.sales.toFixed(0)}</span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span>Status: {listing.status}</span>
                      <span>Stock: {listing.stock}</span>
                      <span>Price: ${listing.price}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-xs">Platforms:</span>
                      <PlatformIcons
                        platforms={listing.platforms}
                        onTogglePlatform={(platform) =>
                          handleTogglePlatform(listing.id, platform)
                        }
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-xs">{listing.listingQuality}</span>
                      <div className="w-16">
                        <SegmentedProgress
                          value={listing.qualityScore}
                          segments={3}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Listing</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem>Deactivate</DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleDeleteListing(listing.id)}
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Total: {listings.length}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <ChevronLeft className="h-3 w-3" />
                  </Button>
                  <span className="text-sm">1</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      50/Page
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>25/Page</DropdownMenuItem>
                    <DropdownMenuItem>50/Page</DropdownMenuItem>
                    <DropdownMenuItem>100/Page</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
