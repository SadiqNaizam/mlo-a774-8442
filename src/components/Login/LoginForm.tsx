import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { ThemeToggle } from '../ThemeToggle';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type LoginFormValues = z.infer<typeof formSchema>;

export function LoginForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    console.log('Login data:', data);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: 'Login Successful',
        description: 'Welcome back!',
      });
      form.reset();
    }, 2000);
  }

  return (
    <Card className="w-96 shadow-lg relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <CardHeader className="items-center p-8">
        <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      {...field}
                      className="border-0 border-b rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                      className="border-0 border-b rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end pt-1">
              <Button variant="link" type="button" className="p-0 h-auto font-normal text-sm text-primary/90 hover:text-primary">
                Forgot Password
              </Button>
            </div>

            <Button type="submit" className="w-full text-base" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </Form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Button variant="link" type="button" className="p-0 h-auto font-semibold">
            SignUp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default LoginForm;