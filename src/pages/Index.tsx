import React from 'react';
import LoginForm from '@/components/Login/LoginForm';
import MainAppLayout from '@/components/layout/MainAppLayout';
import { Toaster } from '@/components/ui/toaster';

/**
 * IndexPage serves as the main entry point for the login view.
 * It composes the MainAppLayout and LoginForm to create the centered login interface.
 * It also includes the Toaster component to handle toast notifications triggered by form actions.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
      <Toaster />
    </MainAppLayout>
  );
};

export default IndexPage;
