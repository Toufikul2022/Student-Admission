import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Compass aria-hidden="true" className="size-14 text-primary-600" />
      <h1 className="mt-6 text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-md text-lg text-slate">The page you&apos;re looking for may have moved. Try one of these instead:</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Go to the home page</Button>
        <Button href="/find-university" variant="outline">Find a university</Button>
        <Button href="/contact" variant="outline">Contact us</Button>
      </div>
    </Container>
  );
}
