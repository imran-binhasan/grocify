'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbNav = () => {
  const pathname = usePathname();
  const pathnames = pathname
    .split('/')
    .filter((path) => path) // Remove any empty strings
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)); // Capitalize first letter of each segment
  
  // Handle edge case for root
  if (pathname === '/') {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          
          {pathnames.map((segment, index) => (
            <>
              <BreadcrumbItem key={segment}>
                <BreadcrumbLink asChild>
                  <Link href={`/${pathnames.slice(0, index + 1).join('/')}`}>
                    {segment}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < pathnames.length - 1 && <BreadcrumbSeparator />}
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNav;
