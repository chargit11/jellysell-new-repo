"use client";

import { Button } from "@/frontend/core/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/frontend/core/components/ui/card";
import { Badge } from "@/frontend/core/components/ui/badge";
import { Users, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const integrations = [
  {
    name: "Etsy",
    description:
      "The global marketplace for unique and creative goods. Connect to reach millions of buyers worldwide.",
    logo: "/images/etsy-logo.webp",
    users: "95m+ potential buyers",
    connected: true,
    status: "active",
    color: "bg-orange-500",
  },
  {
    name: "eBay",
    description:
      "World's largest online marketplace. List your items to reach buyers in 190+ countries globally.",
    logo: "/images/ebay-logo.png",
    users: "130m+ potential buyers",
    connected: true,
    status: "active",
    color: "bg-blue-500",
  },
  {
    name: "Poshmark",
    description:
      "Social commerce marketplace for fashion. Connect with style-conscious buyers and sellers.",
    logo: "/images/poshmark-logo.webp",
    users: "10m+ potential buyers",
    connected: false,
    status: "disconnected",
    color: "bg-pink-500",
  },
  {
    name: "Depop",
    description:
      "Mobile marketplace for unique fashion, art and objects. Perfect for reaching Gen Z buyers.",
    logo: "/images/depop-logo.jpeg",
    users: "7m+ potential buyers",
    connected: true,
    status: "active",
    color: "bg-purple-500",
  },
  {
    name: "Mercari",
    description:
      "Fast-growing marketplace for buying and selling. Easy listing tools and secure transactions.",
    logo: "/images/mercari-logo.webp",
    users: "6m+ potential buyers",
    connected: false,
    status: "disconnected",
    color: "bg-red-500",
  },
];

interface ConnectionsViewProps {
  onConnectionsUpdate?: (disconnectedCount: number) => void;
  onViewSetupGuides?: () => void;
}

export function ConnectionsView({
  onConnectionsUpdate,
  onViewSetupGuides,
}: ConnectionsViewProps = {}) {
  const [disconnectedCount, setDisconnectedCount] = useState(0);

  useEffect(() => {
    const disconnected = integrations.filter(
      (integration) => !integration.connected
    ).length;
    setDisconnectedCount(disconnected);
    onConnectionsUpdate?.(disconnected);
  }, [onConnectionsUpdate]);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 pb-4 pl-4 pr-4 border-b flex-shrink-0 gap-3">
        {/* Title */}
        <h1 className="text-lg font-semibold">Connections</h1>
      </div>

      <div className="space-y-8 p-4">
        {/* Header */}

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Platform Connections & Integrations
          </h1>
          <p className="text-xl text-muted-foreground">
            Connect your shop to multiple marketplaces and reach new audiences
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Connected Platforms
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {
                  integrations.filter((integration) => integration.connected)
                    .length
                }
              </div>
              <p className="text-xs text-muted-foreground">
                out of 5 platforms
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">325k+</div>
              <p className="text-xs text-muted-foreground">Potential buyers</p>
            </CardContent>
          </Card>
        </div>

        {/* Integration Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <Card
              key={integration.name}
              className="relative hover:shadow-lg transition-shadow"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center p-4">
                    <Image
                      src={integration.logo || "/placeholder.svg"}
                      alt={`${integration.name} logo`}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    {integration.status === "active" &&
                      integration.connected && (
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800"
                        >
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                      )}
                    {!integration.connected && (
                      <Badge variant="outline" className="text-gray-600">
                        <XCircle className="h-3 w-3 mr-1" />
                        Not Connected
                      </Badge>
                    )}
                  </div>
                </div>

                <div>
                  <CardTitle className="text-xl mb-2">
                    {integration.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {integration.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  {integration.users}
                </div>

                <div className="flex space-x-2">
                  {integration.connected ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-red-600 border-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                    >
                      Disconnect
                    </Button>
                  ) : (
                    <Button
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      size="sm"
                    >
                      Connect {integration.name}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <ExternalLink className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  Need help connecting a platform?
                </h3>
                <p className="text-purple-700 mb-4">
                  Our step-by-step guides will walk you through connecting each
                  marketplace to maximize your reach.
                </p>
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-100 bg-transparent"
                  onClick={onViewSetupGuides}
                >
                  Help Center
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
