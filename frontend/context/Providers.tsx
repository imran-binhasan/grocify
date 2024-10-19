"use client";

import { store } from "@/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <SessionProvider>
                <Provider store={store}>{children}</Provider>
            </SessionProvider>
        </QueryClientProvider>
    );
};

export default Providers;
