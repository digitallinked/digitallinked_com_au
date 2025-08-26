import Link from "next/link";
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-purple-500/20">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
              <span className="text-xl font-bold gradient-text">Digital Linked</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your All-In-One Digital Partner.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-500/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-purple-400" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-500/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-purple-400" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-500/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-purple-400" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-500/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-purple-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/website" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/apps" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/ai-automation" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  38, Jalan 3/24, Bandar Baru Bangi, Selangor 43650 Malaysia
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <a 
                  href="mailto:hello@digitallinked.com.au" 
                  className="text-muted-foreground text-sm hover:text-purple-400 transition-colors"
                >
                  hello@digitallinked.com.au
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <a 
                  href="tel:+60138994478" 
                  className="text-muted-foreground text-sm hover:text-purple-400 transition-colors"
                >
                  +60138994478
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Digital Linked. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-purple-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
