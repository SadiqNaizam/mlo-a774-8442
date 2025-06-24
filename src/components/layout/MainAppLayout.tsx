import React from 'react';
import { cn } from '@/lib/utils';

// Define the props interface for the layout component
interface MainAppLayoutProps {
  children: React.ReactNode; // The content to be rendered within the layout
  className?: string; // Optional additional class names for styling
}

/**
 * A simple, centered application layout.
 * This component provides a full-screen flex container that centers its children
 * both vertically and horizontally. It's designed for pages like login or sign-up
 * that don't require complex navigation elements like headers or sidebars.
 *
 * @param {MainAppLayoutProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The child elements to render inside the layout.
 * @param {string} [props.className] - Optional class names to apply to the main layout container.
 * @returns {JSX.Element} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full flex-col items-center justify-center bg-background p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
