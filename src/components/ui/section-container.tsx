import { cn } from '@/lib/utils';
import React from 'react';

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    fullWidth?: boolean;
}

export function SectionContainer({
    children,
    className,
    fullWidth = false,
    ...props
}: SectionContainerProps) {
    return (
        <section
            className={cn(
                'relative w-full py-16 md:py-24 lg:py-32',
                !fullWidth && 'container mx-auto px-4 md:px-6',
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}
