import { Separator } from "@ui/separator";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-16">
      <div className="container mx-auto px-6">
        <Separator className="mb-8 bg-border" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground font-body mb-4 md:mb-0">
            © {new Date().getFullYear()} ServiceBay. All rights reserved.
          </p>
          <div className="flex space-x-6 font-body">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
