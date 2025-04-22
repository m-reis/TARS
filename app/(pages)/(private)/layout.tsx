'use client'

import ResponsiveDrawer from "@/app/components/MenuLateral";

export default function LayoutFromPrivates({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ResponsiveDrawer>
        {children}
    </ResponsiveDrawer>
  );
}