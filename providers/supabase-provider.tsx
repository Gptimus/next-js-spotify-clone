"use client";

import { Database } from "@/types_db";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

export const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
  children,
}) => {
  const [supabase] = useState(() => createClientComponentClient<Database>());

  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  );
};