'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { toast } from 'react-hot-toast';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section 
        className="relative h-[40vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/backgrounds/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-light text-white drop-shadow-2xl"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="p-8">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your requirements..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  loading={isSubmitting}
                  className="w-full text-white hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
                  style={{ 
                    background: 'linear-gradient(to bottom, #3d4a68 0%, #2e3858 50%, #1f2740 100%)',
                    boxShadow: '0 4px 12px rgba(46, 56, 88, 0.3)',
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Have questions about our fabrics? Our expert team is here to help you find 
                the perfect materials for your project.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-soft-lg transition-all">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#252839' }}
                  >
                    <EnvelopeIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email Us</h3>
                    <p className="text-neutral-600">info@premiumfabrics.com</p>
                    <p className="text-neutral-600">support@premiumfabrics.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-soft-lg transition-all">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#252839' }}
                  >
                    <PhoneIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Call Us</h3>
                    <p className="text-neutral-600">+91 98765 43210</p>
                    <p className="text-neutral-600">+91 98765 43211 (Bulk Orders)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-soft-lg transition-all">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#252839' }}
                  >
                    <MapPinIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Visit Our Store</h3>
                    <p className="text-neutral-600">
                      123 Fabric Street, Textile District<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-soft-lg transition-all">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#252839' }}
                  >
                    <ClockIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Business Hours</h3>
                    <p className="text-neutral-600">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: 11:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

