"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LockKeyhole, ArrowLeft, ShieldAlert } from "lucide-react";
import { useRouter } from "next/navigation";

export function UnauthorizedCard() {
  const router = useRouter();

  return (
    <Card className="max-w-md w-full p-8 space-y-6">
      <div className="space-y-2 text-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur opacity-75 animate-pulse" />
            <div className="relative bg-background rounded-full p-4">
              <ShieldAlert className="w-12 h-12 text-destructive" />
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tighter">Unauthorized Access</h1>
        <p className="text-muted-foreground">
          Sorry, you don&apos;t have permission to access this page. Please verify your credentials and try again.
        </p>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-secondary/50 rounded-lg border border-border">
          <div className="flex items-center gap-3">
            <LockKeyhole className="w-5 h-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              If you believe this is a mistake, please contact your system administrator.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="default"
            className="flex-1"
            onClick={() => router.push("/login")}
          >
            Sign In
          </Button>
          <Button
            variant="outline"
            className="flex-1 gap-2"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </Button>
        </div>
      </div>
    </Card>
  );
}