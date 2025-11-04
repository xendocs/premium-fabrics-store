'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { toast } from 'react-hot-toast';

export const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    setIsSubmitting(true);
    // TODO: Implement newsletter subscription
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Thank you for subscribing!');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="container-custom py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="p-12 bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200">
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Join Our Fabric Circle
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Subscribe to receive exclusive offers, fabric care tips, and early access to new
              collections
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-neutral-300 text-neutral-900"
                required
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={isSubmitting}
                className="text-white hover:shadow-xl hover:scale-105 whitespace-nowrap transition-all duration-300 border border-white/20"
                style={{ 
                  background: 'linear-gradient(to bottom, #3d4a68 0%, #2e3858 50%, #1f2740 100%)',
                  boxShadow: '0 4px 12px rgba(46, 56, 88, 0.3)',
                }}
              >
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-neutral-500 pt-2">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

