"use client";
import SetPasswordCard from "@/components/forgot-password/set-password";
import React, { useState, useEffect, useCallback } from "react";

interface PageParams {
  token: string;
}

const ResetPasswordPage = ({ params }: { params: Promise<PageParams> }) => {
  const [token, setToken] = useState<string>("");

  const fetchToken = useCallback(async () => {
    const { token } = await params;
    if (!token) return;
    setToken(token);
    console.log(token);
  }, [params]);

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  return (
    <section className="flex  md:flex-row flex-col items-center md:bg-accent bg-secondary justify-between  py-4 h-screen">
      <div className="md:h-[90vh] h-24 md:w-36 w-full bg-gradient-to-l from-sidebar-primary to-primary rounded-tr-lg skew-y-12  rounded-br-lg " />
      <SetPasswordCard token={token} />
      <div className="md:h-[90vh] h-24 md:w-36 w-full bg-gradient-to-r from-sidebar-primary to-primary rounded-tl-lg -skew-y-12 rounded-bl-lg " />
    </section>
  );
};

export default ResetPasswordPage;
