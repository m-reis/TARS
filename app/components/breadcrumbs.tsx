'use client';

import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import PersonPinIcon from '@mui/icons-material/PersonPin'


export default function BreadcrumbsBar() {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Typography className='text-xs'>
                <PersonPinIcon className="mr-0.5" />
                Gerencia de clientes
            </Typography>
        </Breadcrumbs>
    );
  }