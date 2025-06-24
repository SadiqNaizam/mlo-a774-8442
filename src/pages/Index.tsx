import React from 'react';
import LoginForm from '@/components/Login/LoginForm';
import MainAppLayout from '@/components/layout/MainAppLayout';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

/**
 * IndexPage serves as the main entry point for the login view.
 * It composes the MainAppLayout and LoginForm to create the centered login interface.
 * It also includes the Toaster component to handle toast notifications triggered by form actions.
 */
const IndexPage: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <MainAppLayout>
        <LoginForm />
        <Toaster />
      </MainAppLayout>
    </ThemeProvider>
  );
};

export default IndexPage;