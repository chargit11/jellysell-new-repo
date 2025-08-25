"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/frontend/core/components/ui/dialog";
import { Button } from "@/frontend/core/components/ui/button";
import { Input } from "@/frontend/core/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/frontend/core/components/ui/avatar";
import { Badge } from "@/frontend/core/components/ui/badge";
import { Send, Paperclip, MoreVertical, X } from "lucide-react";
import { ScrollArea } from "@/frontend/core/components/ui/scroll-area";
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
  isRead?: boolean;
}

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
  customer: {
    name: string;
    avatar: string;
    platform: string;
  };
  initialMessage?: string;
}

const mockMessages: Message[] = [
  {
    id: "1",
    text: "Hi! I'm interested in the vintage leather jacket. Could you tell me more about the sizing?",
    sender: "customer",
    timestamp: "2:30 PM",
  },
  {
    id: "2",
    text: 'Hello! Thanks for your interest. The jacket is a size Medium and fits true to size. The measurements are: Chest: 42", Length: 26", Sleeve: 24"',
    sender: "seller",
    timestamp: "2:35 PM",
  },
  {
    id: "3",
    text: "Perfect! That sounds like it would fit well. What's the condition like? Any wear or damage?",
    sender: "customer",
    timestamp: "2:37 PM",
  },
  {
    id: "4",
    text: "The jacket is in excellent vintage condition! There's minimal wear on the leather - just some natural patina that adds character. No tears, stains, or significant damage. I can send additional photos if you'd like!",
    sender: "seller",
    timestamp: "2:40 PM",
  },
  {
    id: "5",
    text: "That would be great! Could you also let me know about shipping times?",
    sender: "customer",
    timestamp: "2:42 PM",
    isRead: false,
  },
];

export function ChatDialog({
  isOpen,
  onClose,
  customer,
  initialMessage,
}: ChatDialogProps) {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: "seller",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md h-[600px] p-0 flex flex-col">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
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
            <div>
              <DialogTitle className="text-base">{customer.name}</DialogTitle>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  {customer.platform}
                </Badge>
                <span className="text-xs text-green-600">● Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Profile</DropdownMenuItem>
                <DropdownMenuItem>Block User</DropdownMenuItem>
                <DropdownMenuItem>Report</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "seller" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    message.sender === "seller"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "seller"
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="border-t p-4">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="icon" className="h-8 w-8">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
