"use client";

import { useState } from "react";
import { Button } from "@/frontend/core/components/ui/button";
import { Input } from "@/frontend/core/components/ui/input";
import { Label } from "@/frontend/core/components/ui/label";
import { Textarea } from "@/frontend/core/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/frontend/core/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/frontend/core/components/ui/select";
import { Checkbox } from "@/frontend/core/components/ui/checkbox";
import {
  ArrowLeft,
  Upload,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  Link,
  ImageIcon,
  MoreHorizontal,
  Info,
} from "lucide-react";
import { Separator } from "@/frontend/core/components/ui/separator";

interface AddProductViewProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AddProductView({ setIsOpen }: AddProductViewProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0.00");
  const [comparePrice, setComparePrice] = useState("0.00");
  const [costPerItem, setCostPerItem] = useState("0.00");
  const [profit, setProfit] = useState("");
  const [margin, setMargin] = useState("");
  const [chargeTax, setChargeTax] = useState(false);
  const [status, setStatus] = useState("active");
  const [productType, setProductType] = useState("");
  const [vendor, setVendor] = useState("");
  const [tags, setTags] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-semibold">Add product</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <div className="relative">
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="relative"
                    />
                    {!title && (
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                        Short sleeve t-shirt
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <div className="border rounded-md">
                    {/* Rich Text Toolbar */}
                    <div className="flex items-center gap-1 p-2 border-b bg-gray-50">
                      <Select defaultValue="paragraph">
                        <SelectTrigger className="w-24 h-8">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="paragraph">Paragraph</SelectItem>
                          <SelectItem value="heading1">Heading 1</SelectItem>
                          <SelectItem value="heading2">Heading 2</SelectItem>
                        </SelectContent>
                      </Select>
                      <Separator orientation="vertical" className="h-6" />
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bold className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Italic className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Underline className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <AlignLeft className="h-4 w-4" />
                      </Button>
                      <Separator orientation="vertical" className="h-6" />
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Link className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ImageIcon className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-32 border-0 focus-visible:ring-0"
                      placeholder="Enter product description..."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Media */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <Label>Media</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 mx-auto text-gray-400" />
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">
                          Upload new
                        </Button>
                        <Button variant="outline" size="sm">
                          Select existing
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500">
                        Accepts images, videos, or 3D models
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Category */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a product category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500">
                    Determines tax rates and adds metafields to improve search,
                    filters, and cross-channel sales
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <Input
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="pl-8"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="compare-price">Compare-at price</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <Input
                        id="compare-price"
                        value={comparePrice}
                        onChange={(e) => setComparePrice(e.target.value)}
                        className="pl-8"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="charge-tax"
                    checked={chargeTax}
                    onCheckedChange={(checked) =>
                      setChargeTax(checked as boolean)
                    }
                  />
                  <Label htmlFor="charge-tax">Charge tax on this product</Label>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cost-per-item">Cost per item</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <Input
                        id="cost-per-item"
                        value={costPerItem}
                        onChange={(e) => setCostPerItem(e.target.value)}
                        className="pl-8"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profit">Profit</Label>
                    <Input
                      id="profit"
                      value={profit}
                      onChange={(e) => setProfit(e.target.value)}
                      placeholder="--"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="margin">Margin</Label>
                    <Input
                      id="margin"
                      value={margin}
                      onChange={(e) => setMargin(e.target.value)}
                      placeholder="--"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Status */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Product Organization */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-base">
                    Product organization
                  </CardTitle>
                  <Info className="h-4 w-4 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Input
                    id="type"
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    placeholder=""
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vendor">Vendor</Label>
                  <Input
                    id="vendor"
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                    placeholder=""
                  />
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder=""
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Save Actions */}
        <div className="flex justify-end gap-3 mt-8">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Save product
          </Button>
        </div>
      </div>
    </div>
  );
}
