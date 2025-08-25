"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/frontend/core/components/ui/button";
import { Textarea } from "@/frontend/core/components/ui/textarea";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/frontend/core/components/ui/avatar";
import { Badge } from "@/frontend/core/components/ui/badge";
import { Separator } from "@/frontend/core/components/ui/separator";
import {
  Trash2,
  MailOpen,
  Mail,
  Flag,
  Archive,
  ChevronDown,
  ImageIcon,
  Plus,
  ArrowLeft,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/frontend/core/components/ui/dropdown-menu";

interface Message {
  id: string;
  text: string;
  sender: "customer" | "seller";
  timestamp: string;
  date: string;
}

interface ChatInterfaceProps {
  customer: {
    name: string;
    avatar: string;
    platform: string;
  };
  onBack: () => void;
}

const mockMessages: Message[] = [
  {
    id: "1",
    text: "Hi! I'm interested in the vintage leather jacket. Could you tell me more about the sizing? I've purchased other consoles before and some popular titles were missing so curious what Nintendo games are on it and are not",
    sender: "customer",
    timestamp: "7:20 AM",
    date: "Sat, Jan 11",
  },
];

export function ChatInterface({ customer, onBack }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [replyText, setReplyText] = useState("");

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
      setMessages([...messages, newMessage]);
      setReplyText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSendReply();
    }
  };

  return (
    <div className="h-full flex flex-col bg-white overflow-x-hidden">
      {/* Top Toolbar */}
      <div className="flex items-center justify-between p-4 border-b bg-gray-50">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center space-x-2">
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  Label <ChevronDown className="h-4 w-4 ml-1" />
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
        <div className="flex items-center space-x-3">
          <span className="font-medium text-lg">{customer.name}</span>
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={customer.avatar || "/placeholder.svg"}
              alt={customer.name}
            />
            <AvatarFallback>
              {customer.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden overflow-x-hidden">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6">
            {messages.map((message, index) => (
              <div key={message.id}>
                {/* Date separator */}
                {(index === 0 || messages[index - 1].date !== message.date) && (
                  <div className="text-center text-sm text-gray-500 mb-6">
                    {message.date}
                  </div>
                )}

                {/* Message */}
                <div
                  className={`flex mb-6 ${
                    message.sender === "seller"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {message.sender === "customer" && (
                    <Avatar className="h-10 w-10 mr-3 mt-1">
                      <AvatarImage
                        src={customer.avatar || "/placeholder.svg"}
                        alt={customer.name}
                      />
                      <AvatarFallback>
                        {customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={`max-w-2xl ${
                      message.sender === "seller" ? "ml-auto" : ""
                    }`}
                  >
                    <div
                      className={`rounded-2xl p-4 ${
                        message.sender === "seller"
                          ? "bg-purple-500 text-white"
                          : "bg-gray-100 border"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    <div
                      className={`text-xs text-gray-500 mt-1 ${
                        message.sender === "seller" ? "text-right" : "text-left"
                      }`}
                    >
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="px-6 py-2 bg-gray-50 border-t">
            <div className="flex items-start space-x-2 text-xs text-gray-600">
              <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center mt-0.5">
                <span className="text-white text-xs">!</span>
              </div>
              <p>
                We scan and review messages for fraud prevention, policy
                enforcement, security, to provide support, and for similar
                purposes.{" "}
                <span className="underline cursor-pointer">Learn more</span>.
              </p>
            </div>
          </div>

          {/* Reply Section */}
          <div className="p-6 border-t">
            <div className="space-y-4">
              <div className="relative">
                <Textarea
                  placeholder="Type your reply"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="min-h-[120px] resize-none pr-12"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute bottom-3 right-3 h-8 w-8"
                >
                  <ImageIcon className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium">Quick replies</span>
                  <span className="text-sm text-blue-600 ml-4 cursor-pointer">
                    View all | Edit
                  </span>
                </div>
                <Button onClick={handleSendReply} disabled={!replyText.trim()}>
                  Send Reply
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 border-l bg-gray-50 p-6">
          <div className="space-y-6">
            {/* Customer Info */}
            <div className="text-center">
              <Avatar className="h-16 w-16 mx-auto mb-3">
                <AvatarImage
                  src={customer.avatar || "/placeholder.svg"}
                  alt={customer.name}
                />
                <AvatarFallback className="text-lg">
                  {customer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-medium text-lg">{customer.name}</h3>
              <Badge variant="outline" className="mt-1">
                {customer.platform}
              </Badge>
            </div>

            <Separator />

            {/* Buyer Info */}
            <div>
              <p className="text-sm text-gray-600">
                This buyer hasn't messaged you before
              </p>
            </div>

            <Separator />

            {/* Private Note */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Private note</h4>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Separator />

            {/* Labels */}
            <div>
              <h4 className="font-medium mb-2">Labels</h4>
              <p className="text-sm text-gray-600">No labels added.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
