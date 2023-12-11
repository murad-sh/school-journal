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
import { useNavigate } from "react-router-dom";
import Loader from "../shared/Loader";
import { toast } from "sonner";
import axios from "axios";

const AuthForm = () => {
  const navigate = useNavigate();
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
      const res = await axios.post("http://localhost:8080/signin", {
        username: enteredData.username,
        password: enteredData.password,
      });
      const token = res.data.token;
      // localStorage.setItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      navigate("/schedule");
    } catch (error) {
      toast.error("Authentication failed! Please try again");
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
                <FormLabel>username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
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
