import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCallIcon, Send, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
export const ContactSection = () => {
    return <>
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="conatainer mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Get In  <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci cumque exercitationem aliquid.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap 12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        Email
                                    </h4>
                                    <a href="mailto:hovanirinaa@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        hovanirinaa@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <PhoneCallIcon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        Phone
                                    </h4>
                                    <a href="mailto:hovanirinaa@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        034 89 583 54
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        Location
                                    </h4>
                                    <a href="mailto:hovanirinaa@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        Antananarivo
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="#" target="_blank">
                                    <Facebook />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>
                        <form action="" className="sapce-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your name 
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Angelot Toussaint"
                                    required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    john@gmail.com
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Your Email"
                                    required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your message
                                </label>
                                <textarea
                                    name="message"
                                    id="namessageme"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none h-32"
                                    placeholder="Hello i'd like to talkabout ..."
                                    required />
                            </div>
                            <button
                                type="submit"
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2"

                                )}
                            >
                                Send Message
                                <Send size={16} />

                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
};
export default ContactSection;