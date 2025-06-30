'use client';

import { ReactNode } from "react";
import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";

export default function Providers({ children }: { children: ReactNode }) {
    const theme = createTheme();

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
