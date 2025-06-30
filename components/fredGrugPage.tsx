import BreadcrumbsBar from '@components/breadcrumbs';
import { ReactNode } from 'react';

export default function FredGrugPage({ children } : Readonly<{ children?: ReactNode }>){
    return (
        <div className='h-full'>
            <BreadcrumbsBar />
            
            {children}
        </div>
    )      
}