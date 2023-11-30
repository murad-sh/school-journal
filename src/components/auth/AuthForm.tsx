import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchemaType } from '@/lib/validations/auth';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import Loader from '../shared/Loader';

const AuthForm = () => {
  const navigate = useNavigate();
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'all',
  });
  const { isSubmitting } = form.formState;

  async function onSubmit(enteredData: LoginSchemaType) {
    console.log(enteredData);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    navigate('/schedule');
  }

  return (
    <Form {...form}>
      <div className="sm:w-96 flex-center flex-col">
        <h1 className="text-3xl text-center">Login</h1>
        <p className="text-light-3 small-medium md:base-regular mt-2 text-center">
          Enter your account details bellow
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    type="text"
                    {...field}
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="disabled:none"
          >
            {isSubmitting ? (
              <div className="flex-center gap-2">
                <Loader />
              </div>
            ) : (
              'Login'
            )}
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default AuthForm;
