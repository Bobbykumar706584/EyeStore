"use client";

import Link from "next/link";

import { Face, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}

          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold">EyeStore</h2>

            <p className="text-slate-400 mt-6 max-w-md leading-8">
              Premium eyewear crafted for style, comfort and confidence.
              Discover eyeglasses, sunglasses, contact lenses and accessories
              designed for modern lifestyles.
            </p>

            {/* Contact */}

            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                support@eyestore.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +91 9876543210
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                New Delhi, India
              </div>
            </div>
          </div>

          {/* Shop */}

          <div>
            <h3 className="font-bold text-xl mb-6">Shop</h3>

            <div className="space-y-4 text-slate-400">
              <Link href="/" className="block hover:text-white duration-300">
                Eyeglasses
              </Link>

              <Link href="/" className="block hover:text-white duration-300">
                Sunglasses
              </Link>

              <Link href="/" className="block hover:text-white duration-300">
                Computer Glasses
              </Link>

              <Link href="/" className="block hover:text-white duration-300">
                Contact Lens
              </Link>
            </div>
          </div>

          {/* Support */}

          <div>
            <h3 className="font-bold text-xl mb-6">Support</h3>

            <div className="space-y-4 text-slate-400">
              <Link href="/" className="block hover:text-white duration-300">
                FAQ
              </Link>

              <Link href="/" className="block hover:text-white duration-300">
                Shipping
              </Link>

              <Link href="/" className="block hover:text-white duration-300">
                Returns
              </Link>

              <Link href="/" className="block hover:text-white duration-300">
                Track Order
              </Link>
            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="font-bold text-xl mb-6">Company</h3>

            <div className="space-y-4 text-slate-400">
              <Link href="/" className="block hover:text-white duration-300">
                About Us
              </Link>

              <Link href="/" className="block hover:text-white duration-300">
                Blog
              </Link>

              <Link href="/" className="block hover:text-white duration-300">
                Privacy Policy
              </Link>

              <Link href="/" className="block hover:text-white duration-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500">
              © 2026 EyeStore. All Rights Reserved.
            </p>

            {/* Social */}

            <div className="flex gap-5">
              <button className="bg-slate-900 hover:bg-blue-600 p-3 rounded-full duration-300">
                <FaFacebook size={20} />
              </button>

              <button className="bg-slate-900 hover:bg-pink-600 p-3 rounded-full duration-300">
                <FaInstagram size={20} />
              </button>

              <button className="bg-slate-900 hover:bg-sky-500 p-3 rounded-full duration-300">
                <FaTwitter size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
