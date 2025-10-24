import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required" }).max(100),
  lastName: z.string().trim().min(1, { message: "Last name is required" }).max(100),
  phoneNumber: z.string().trim().min(1, { message: "Phone number is required" }).max(20),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <div className="container max-w-4xl mx-auto px-8 py-16 flex flex-col min-h-screen">
      
      <header className="flex justify-between items-start mb-12">
        <div>
          <h2 className="text-2xl font-medium text-foreground">Portfolio</h2>
          <p className="text-sm text-muted-foreground italic">Limerick, Ireland</p>
        </div>
        <p className="text-foreground">Graphics • UI • Visual</p>
      </header>

      
      <div className="flex justify-center mb-12">
        <Button variant="outline" className="rounded-full px-8 border-foreground text-foreground hover:bg-foreground hover:text-background">
          Contact
        </Button>
      </div>

      
      <section className="flex-1">
        <h1 className="text-5xl md:text-6xl font-medium text-foreground mb-6">
          Let's <span className="text-primary">Connect</span>
        </h1>
        <div className="mb-8 space-y-2">
          <p className="text-muted-foreground">
            I'm always excited to collaborate on projects that make a real impact.
          </p>
          <p className="text-muted-foreground">
            From crafting seamless user experiences to refining brand visuals, I help turn ideas into{" "}
            <span className="text-primary font-semibold">meaningful digital solutions.</span>
          </p>
          <p className="text-muted-foreground">
            Let's connect and create something your users will love.
          </p>
        </div>

        {/* Contact Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">First name:</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your first name" 
                        {...field} 
                        className="border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-muted-foreground/30"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Last name:</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your Last name" 
                        {...field} 
                        className="border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-muted-foreground/30"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Phone Number:</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your Phone number" 
                        {...field} 
                        className="border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-muted-foreground/30"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Email:</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="Enter your email" 
                        {...field} 
                        className="border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-muted-foreground/30"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Message:</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Is there anything else you want to tell me" 
                      {...field} 
                      className="border-b border-t-0 border-x-0 rounded-none px-0 resize-none min-h-[100px] focus-visible:ring-0 focus-visible:ring-offset-0 border-muted-foreground/30"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center pt-8">
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-6 text-lg"
              >
                Connect
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </div>
  );
};

export default Contact;
