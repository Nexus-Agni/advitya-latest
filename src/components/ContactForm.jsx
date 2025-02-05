import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../utils/cn";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Email validation for vitbhopal.ac.in domain
    const emailDomain = email.split("@")[1];
    if (emailDomain !== "vitbhopal.ac.in") {
      toast.error(
        "Please use an email address from the vitbhopal.ac.in domain."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        "service_s4pf4o7",
        "template_ksbxzwf",
        {
          firstname,
          lastname,
          phoneNumber,
          email,
          message,
        },
        "wWa6LRWZ9qGg3ydqP"
      );

      toast.success("Message sent successfully!");
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="John"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Doe"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="email@vitbhopal.ac.in"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            placeholder="91XXXXXXXXXX"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Send Us a Message</Label>
          <Input
            id="message"
            name="message"
            placeholder="Enter your message here..."
            className="your-textarea-styles"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br from-zinc-900 to-neutral-600 block w-full text-white rounded-md h-10 font-medium hover:bg-purple-700 ease-in-out duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 focus-visible:ring-offset-neutral-800"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "SENDING..." : "SEND →"}
          <BottomGradient />
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="opacity-0 blur-sm absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-4 w-full md:mx-2", className)}>
      {children}
    </div>
  );
};
