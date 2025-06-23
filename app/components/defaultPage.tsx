import BreadcrumbsBar from '@/app/components/layout/breadcrumbs';
import { ReactNode } from 'react';

export default function DefaultPage({ children } : Readonly<{ children: ReactNode }>){
    return (
        <div className='p-4'>
            <BreadcrumbsBar />
            
            {children}
        </div>
    )      
}