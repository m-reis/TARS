'use client'

import { Breadcrumbs, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Home } from '@mui/icons-material';

export default function BreadcrumbsBar() {
    const pathname = usePathname();
    const pathParts = pathname.split('/').filter(Boolean);
    let icon: ReactNode = null;
    let labelBreads: string = "Início"

    const breadcrumbs = pathParts.map((part, index) => {
        const href = '/' + pathParts.slice(0, index + 1).join('/');
        const isLast = index === pathParts.length - 1;
        

        switch (part) {
            case 'clients':
                icon = <PersonPinIcon className="mr-0.5" />;
                labelBreads = 'Gernência de Clientes'
            break;
        }

        return isLast ? (
                <Typography className="text-xs flex items-center gap-1" key={href}>
                    {icon}
                    {labelBreads}
                </Typography>
            ) : (
            <Link component={NextLink} href={href}  key={href} className="text-xs flex items-center gap-1" >
                {icon}
                {labelBreads}
            </Link>
            );
    });

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {  breadcrumbs.length > 0 ? 
                breadcrumbs 
            : 
                <Typography className="text-xs flex items-center gap-1">
                    <Home />
                    Início
                </Typography>    
            }
        </Breadcrumbs>
    );
}