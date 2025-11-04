'use client';

import React from 'react';
import Link from 'next/link';
import { useUIStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileMenu: React.FC = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useUIStore();

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeMobileMenu}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-soft-lg z-50 lg:hidden overflow-y-auto"
          >
            <nav className="p-6 space-y-4 bg-white">
              <Link
                href="/collections"
                onClick={closeMobileMenu}
                className="block py-2 text-lg font-medium text-neutral-700 hover:text-primary-600 transition-colors"
              >
                Collections
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="block py-2 text-lg font-medium text-neutral-700 hover:text-primary-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block py-2 text-lg font-medium text-neutral-700 hover:text-primary-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/wishlist"
                onClick={closeMobileMenu}
                className="block py-2 text-lg font-medium text-neutral-700 hover:text-primary-600 transition-colors"
              >
                Wishlist
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

