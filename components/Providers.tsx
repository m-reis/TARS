'use client';

import { ReactNode } from "react";
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material";

export default function Providers({ children }: { children: ReactNode }) {
    const theme = createTheme();

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
