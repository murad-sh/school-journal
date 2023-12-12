import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <section className="container flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-bold">Unauthorized</h1>
        <p className="mb-8 text-xl">
          You don't have access to the requested page.
        </p>
        <Button onClick={() => navigate(-1)} size={"lg"}>
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
    </section>
  );
};

export default Unauthorized;
