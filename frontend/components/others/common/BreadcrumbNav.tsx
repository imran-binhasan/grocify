'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from '@radix-ui/react-icons';

const BreadcrumbNav = () => {
  const pathname = usePathname();
  const pathnames = pathname
    .split('/')
    .filter((path) => path) // Remove any empty strings
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)); // Capitalize first letter of each segment
  

  return (
    <div className=' mx-auto px-6 py-3 lg:py-4 lg:px-10 bg-breadcrumb bg-no-repeat object-fill'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/"><HomeIcon className='w-5 h-5 text-white'/></Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          
          {pathnames.map((segment, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem key={segment}>
                <BreadcrumbLink asChild>
                  <Link className='text-white' href={`/${pathnames.slice(0, index + 1).join('/')}`}>
                    {segment}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < pathnames.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNav;
