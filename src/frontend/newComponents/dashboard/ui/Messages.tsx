"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/frontend/core/components/ui/button";
import { Input } from "@/frontend/core/components/ui/input";
import { Textarea } from "@/frontend/core/components/ui/textarea";
import { Checkbox } from "@/frontend/core/components/ui/checkbox";
import {
  Search,
  ChevronDown,
  Trash2,
  Mail,
  MailOpen,
  Flag,
  Archive,
  Tag,
  ImageIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/frontend/core/components/ui/dropdown-menu";
import Image from "next/image";

interface Message {
  id: string;
  text: string;
  sender: "customer" | "seller";
  timestamp: string;
  date: string;
}

const folders = [
  { id: "inbox", name: "Inbox", active: true },
  { id: "sent", name: "Sent", active: false },
  { id: "all", name: "All", active: false },
  { id: "unread", name: "Unread", active: false },
  { id: "spam", name: "Spam", active: false },
  { id: "trash", name: "Trash", active: false },
];

const messages = [
  {
    id: "1",
    sender: "caleb jones",
    preview:
      "do you happen to have a PDF list of the games ? iv purchased other co...",
    fullMessage:
      "do you happen to have a PDF list of the games ? iv purchased other consoles before and some popular titles were missing so curious what Nintendo games are on it and are not",
    date: "Jan 11, 2025",
    time: "7:20 AM",
    avatar: "/images/etsy-logo.webp",
    platform: "etsy",
    selected: false,
  },
  {
    id: "2",
    sender: "sarah martinez",
    preview:
      "Hi! Is this item still available? I'm very interested in purchasing...",
    fullMessage:
      "Hi! Is this item still available? I'm very interested in purchasing it. Could you tell me more about the condition and if you offer any discounts for bulk purchases?",
    date: "Jan 10, 2025",
    time: "3:45 PM",
    avatar: "/images/depop-logo.jpeg",
    platform: "depop",
    selected: false,
  },
  {
    id: "3",
    sender: "mike chen",
    preview:
      "Quick question about shipping - do you ship internationally to Canada?",
    fullMessage:
      "Quick question about shipping - do you ship internationally to Canada? If so, what would be the estimated shipping cost and delivery time?",
    date: "Jan 10, 2025",
    time: "11:22 AM",
    avatar: "/images/poshmark-logo.webp",
    platform: "poshmark",
    selected: false,
  },
  {
    id: "4",
    sender: "emma davis",
    preview:
      "Love this piece! Could you provide additional photos of the back and...",
    fullMessage:
      "Love this piece! Could you provide additional photos of the back and any close-ups of the details? Also wondering if you have the original packaging or tags.",
    date: "Jan 9, 2025",
    time: "6:15 PM",
    avatar: "/images/mercari-logo.webp",
    platform: "mercari",
    selected: false,
  },
  {
    id: "5",
    sender: "alex rodriguez",
    preview:
      "Would you consider a lower price? I'm a repeat customer and really...",
    fullMessage:
      "Would you consider a lower price? I'm a repeat customer and really interested in this item. I've purchased from you before and had a great experience.",
    date: "Jan 9, 2025",
    time: "2:30 PM",
    avatar: "/images/ebay-logo.png",
    platform: "ebay",
    selected: false,
  },
];

export function Messages() {
  const [selectedFolder, setSelectedFolder] = useState("inbox");
  const [selectedMessages, setSelectedMessages] = useState<string[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<
    (typeof messages)[0] | null
  >(null);
  const [replyText, setReplyText] = useState("");
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: "1",
      text: "do you happen to have a PDF list of the games ? iv purchased other consoles before and some popular titles were missing so curious what Nintendo games are on it and are not",
      sender: "customer",
      timestamp: "7:20 AM",
      date: "Sat, Jan 11",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedMessages(messages.map((m) => m.id));
    } else {
      setSelectedMessages([]);
    }
  };

  const handleSelectMessage = (messageId: string, checked: boolean) => {
    if (checked) {
      setSelectedMessages([...selectedMessages, messageId]);
    } else {
      setSelectedMessages(selectedMessages.filter((id) => id !== messageId));
    }
  };

  const handleMessageClick = (message: (typeof messages)[0]) => {
    setSelectedMessage(message);
  };

  const handleSendReply = () => {
    if (replyText.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: replyText,
        sender: "seller",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        date: "Today",
      };
      setChatMessages([...chatMessages, newMessage]);
      setReplyText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSendReply();
    }
  };

  if (selectedMessage) {
    return (
      <div className="h-full flex flex-col overflow-hidden p-4">
        {/* Tabs for Mobile */}
        <div className="sm:hidden border-b bg-gray-50">
          <div className="flex overflow-x-auto no-scrollbar">
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setSelectedFolder(folder.id)}
                className={`flex-1 px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                  selectedFolder === folder.id
                    ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {folder.name}
              </button>
            ))}
          </div>
        </div>

        {/* Header with Messages title, Search, and Auto-reply */}
        {/* <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
          <h1 className="text-lg font-semibold">Messages</h1>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search your messages"
              className="pl-10 w-80 rounded-full border-gray-300"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-full bg-transparent">
                Auto-reply
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Enable Auto-reply</DropdownMenuItem>
              <DropdownMenuItem>Disable Auto-reply</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}

        <div className="flex flex-1 min-h-0">
          {/* Left Sidebar */}
          <div className="hidden sm:block w-48 border-r bg-gray-50 flex-shrink-0">
            <div className="p-4">
              {folders.map((folder) => (
                <button
                  key={folder.id}
                  onClick={() => setSelectedFolder(folder.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 transition-colors ${
                    selectedFolder === folder.id
                      ? "bg-gray-200 font-medium"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {folder.name}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Action Bar */}
            <div className="flex items-center gap-4 p-4 border-b flex-shrink-0">
              <Checkbox
                checked={selectedMessages.length === messages.length}
                onCheckedChange={handleSelectAll}
              />

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  {/* Desktop Buttons */}
                  <div className="hidden sm:flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Trash
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MailOpen className="h-4 w-4 mr-1" />
                      Mark Unread
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Mail className="h-4 w-4 mr-1" />
                      Mark Read
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Flag className="h-4 w-4 mr-1" />
                      Report
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Archive className="h-4 w-4 mr-1" />
                      Archive
                    </Button>
                  </div>

                  {/* Mobile Dropdown */}
                  <div className="sm:hidden">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          Actions
                          <ChevronDown className="ml-1 h-3 w-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Trash
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MailOpen className="h-4 w-4 mr-2" />
                          Mark Unread
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 mr-2" />
                          Mark Read
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Flag className="h-4 w-4 mr-2" />
                          Report
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Archive className="h-4 w-4 mr-2" />
                          Archive
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Tag className="h-4 w-4 mr-1" />
                      Label
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Important</DropdownMenuItem>
                    <DropdownMenuItem>Follow Up</DropdownMenuItem>
                    <DropdownMenuItem>Resolved</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {chatMessages.map((message, index) => (
                <div key={message.id}>
                  {/* Date separator */}
                  {(index === 0 ||
                    chatMessages[index - 1].date !== message.date) && (
                    <div className="text-center text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                      {message.date}
                    </div>
                  )}

                  {/* Message */}
                  <div
                    className={`flex mb-4 sm:mb-6 ${
                      message.sender === "seller"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {/* Customer avatar */}
                    {message.sender === "customer" && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 mt-1 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={selectedMessage.avatar || "/placeholder.svg"}
                          alt={`${selectedMessage.platform} logo`}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}

                    <div
                      className={`max-w-[80%] sm:max-w-2xl ${
                        message.sender === "seller" ? "ml-auto" : ""
                      }`}
                    >
                      <div
                        className={`rounded-2xl p-3 sm:p-4 break-words ${
                          message.sender === "seller"
                            ? "bg-purple-500 text-white"
                            : "bg-gray-100 border"
                        }`}
                      >
                        <p className="text-xs sm:text-sm leading-relaxed">
                          {message.text}
                        </p>
                      </div>
                      <div
                        className={`text-[10px] sm:text-xs text-gray-500 mt-1 ${
                          message.sender === "seller"
                            ? "text-right"
                            : "text-left"
                        }`}
                      >
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Disclaimer */}
            <div className="px-3 sm:px-6 py-2 sm:py-3 bg-gray-50 border-t">
              <div className="flex items-start space-x-1 sm:space-x-2 text-[10px] sm:text-xs text-gray-600">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-400 rounded-sm flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-white text-[10px] sm:text-xs">!</span>
                </div>
                <p className="text-[10px] sm:text-xs leading-snug">
                  We scan and review messages for fraud prevention, policy
                  enforcement, security, to provide support, and for similar
                  purposes.{" "}
                  <span className="underline cursor-pointer">Learn more</span>.
                </p>
              </div>
            </div>

            {/* Reply Section */}
            <div className="static sm:sticky sm:bottom-0 sm:left-0 sm:w-full  px-3 sm:px-6 py-4 sm:py-6 border-t">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative">
                  <Textarea
                    placeholder="Type your reply"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="min-h-[100px] sm:min-h-[120px] resize-none pr-10 sm:pr-12 text-sm sm:text-base"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 h-7 w-7 sm:h-8 sm:w-8"
                  >
                    <ImageIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={handleSendReply}
                    disabled={!replyText.trim()}
                    className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                  >
                    Send Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Tabs for Mobile */}
      <div className="sm:hidden border-b bg-gray-50">
        <div className="flex overflow-x-auto no-scrollbar">
          {folders.map((folder) => (
            <button
              key={folder.id}
              onClick={() => setSelectedFolder(folder.id)}
              className={`flex-1 px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                selectedFolder === folder.id
                  ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {folder.name}
            </button>
          ))}
        </div>
      </div>

      {/* Header with Messages title, Search, and Auto-reply */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 pb-3 pl-4 pr-4 border-b flex-shrink-0 gap-3">
        {/* Title */}
        <h1 className="text-lg font-semibold">Messages</h1>

        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search your messages"
            className="pl-10 w-full rounded-full border-gray-300"
          />
        </div>

        {/* Auto-reply Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full bg-transparent w-full sm:w-auto justify-between"
            >
              Auto-reply
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full sm:w-auto">
            <DropdownMenuItem>Enable Auto-reply</DropdownMenuItem>
            <DropdownMenuItem>Disable Auto-reply</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Left Sidebar */}
        <div className="hidden sm:block w-48 border-r bg-gray-50 flex-shrink-0">
          <div className="p-4">
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setSelectedFolder(folder.id)}
                className={`w-full text-left px-3 py-2 rounded-lg mb-1 transition-colors ${
                  selectedFolder === folder.id
                    ? "bg-gray-200 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                {folder.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Action Bar */}
          <div className="flex items-center gap-4 p-4 border-b flex-shrink-0">
            <Checkbox
              checked={selectedMessages.length === messages.length}
              onCheckedChange={handleSelectAll}
            />

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                {/* Desktop Buttons */}
                <div className="hidden sm:flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Trash
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MailOpen className="h-4 w-4 mr-1" />
                    Mark Unread
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4 mr-1" />
                    Mark Read
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Flag className="h-4 w-4 mr-1" />
                    Report
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Archive className="h-4 w-4 mr-1" />
                    Archive
                  </Button>
                </div>

                {/* Mobile Dropdown */}
                <div className="sm:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        Actions
                        <ChevronDown className="ml-1 h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Trash
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MailOpen className="h-4 w-4 mr-2" />
                        Mark Unread
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="h-4 w-4 mr-2" />
                        Mark Read
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Flag className="h-4 w-4 mr-2" />
                        Report
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Archive className="h-4 w-4 mr-2" />
                        Archive
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Tag className="h-4 w-4 mr-1" />
                    Label
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Important</DropdownMenuItem>
                  <DropdownMenuItem>Follow Up</DropdownMenuItem>
                  <DropdownMenuItem>Resolved</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Messages List */}
          <div className="flex-1 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className="flex items-center gap-4 p-4 border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => handleMessageClick(message)}
              >
                <Checkbox
                  checked={selectedMessages.includes(message.id)}
                  onCheckedChange={(checked) =>
                    handleSelectMessage(message.id, checked as boolean)
                  }
                  onClick={(e) => e.stopPropagation()}
                />

                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={message.avatar || "/placeholder.svg"}
                    alt={`${message.platform} logo`}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex-1 items-center justify-between">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">
                      {message.sender}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {message.date}
                    </span>
                  </div>
                  {/* Full preview for sm and up */}
                  <p className="hidden sm:block text-sm text-gray-600 truncate mt-1">
                    {message.preview}
                  </p>

                  {/* Shortened preview for mobile */}
                  <p className="block sm:hidden text-sm text-gray-600 mt-1">
                    {message.preview.split(" ").slice(0, 3).join(" ")}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
