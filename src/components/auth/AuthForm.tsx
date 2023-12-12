import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchemaType } from "@/lib/validations/auth";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../shared/Loader";
import { toast } from "sonner";
import { login } from "@/services/api-auth";
import { loginFailed } from "@/config/ui-messages";

const AuthForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/schedule";
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "all",
  });
  const { isSubmitting } = form.formState;

  async function onSubmit(enteredData: LoginSchemaType) {
    try {
      await login(enteredData.username, enteredData.password);
      navigate(from, { replace: true });
      form.reset();
    } catch (error) {
      toast.error(loginFailed);
    }
  }

  return (
    <Form {...form}>
      <div className="flex-center flex-col sm:w-96">
        <h1 className="text-center text-3xl">Login</h1>
        <p className="text-light-3 small-medium md:base-regular mt-2 text-center">
          Enter your account details bellow
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 flex w-full flex-col gap-6"
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
                <FormMessage className="dark:text-red-500" />
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
                <FormMessage className="dark:text-red-500" />
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
              "Login"
            )}
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default AuthForm;
