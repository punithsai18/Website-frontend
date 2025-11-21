"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { toast } from "sonner";
import emailjs from "emailjs-com";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Updated icons (latest lucide-react)
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  User,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// EmailJS variables
const EMAILJS_SERVICE_ID = "service_bg55nmd";
const EMAILJS_TEMPLATE_ID = "template_dl7if3n";
const EMAILJS_PUBLIC_KEY = "q0OlBKnc-NmZqukqE";

// Animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export const metadata = {
  title: "Contact Us | Intel IoT Club",
  description:
    "Get in touch with the Intel IoT Club for collaborations, queries, and networking opportunities.",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully! We'll get back to you shortly.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-background min-h-[80vh] flex items-center rounded-lg overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-primary/5 to-blue-400/5 -skew-y-3 -translate-y-1/2"></div>
      <div className="absolute top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>

      {/* Main container */}
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4 mr-2" /> Let's Connect
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Get in Touch
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Whether you're curious about our club, want to collaborate, or have
            questions—we'd love to hear from you!
          </p>
        </motion.div>

        {/* Grid section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {/* Contact Info Card */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Card className="h-full shadow-2xl border-none bg-card/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary" /> Contact
                  Information
                </CardTitle>
                <CardDescription>
                  Reach us through the following details
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 text-base">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span>Amrita Vishwa Vidyapeetham, Coimbatore</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <Link
                    href="mailto:inteliotclub@cb.amrita.edu"
                    className="hover:underline hover:text-primary"
                  >
                    inteliotclub@cb.amrita.edu
                  </Link>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Follow Us
                  </h3>

                  <div className="flex gap-3">
                    <Link
                      href="https://github.com/intel-iot-club"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-white"
                      title="GitHub"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </Link>

                    <Link
                      href="https://www.linkedin.com/company/intel-iot-club/"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-white"
                      title="LinkedIn"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </Link>

                    <Link
                      href="https://www.instagram.com/inteliotclub"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-white"
                      title="Instagram"
                    >
                      <InstagramIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="h-full shadow-2xl border-none bg-card/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" /> Send us a Message
                </CardTitle>
                <CardDescription>
                  We usually respond within 24 hours
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-primary" /> Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-primary" /> Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      required
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-gradient-to-r from-primary to-blue-600 text-white py-3 text-lg flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
