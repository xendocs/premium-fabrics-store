'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCartStore, useUIStore } from '@/lib/store';
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { SearchModal } from '@/components/search/SearchModal';
import { MobileMenu } from '@/components/layout/MobileMenu';

export const Header: React.FC = () => {
  const { cart } = useCartStore();
  const { isSearchOpen, openSearch, closeSearch, isMobileMenuOpen, toggleMobileMenu, openCart } = useUIStore();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on a product, cart, checkout, collections, or order success page
  const isProductPage = pathname?.startsWith('/products/');
  const isCartPage = pathname === '/cart';
  const isCheckoutPage = pathname === '/checkout';
  const isCollectionsPage = pathname === '/collections' || pathname?.startsWith('/collections/');
  const isOrderSuccessPage = pathname === '/order-success';
  const shouldShowDarkText = isProductPage || isCartPage || isCheckoutPage || isCollectionsPage || isOrderSuccessPage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out
          ${scrolled ? 'bg-white/98 backdrop-blur-md shadow-soft-md' : 'bg-transparent'}
        `}
      >
        <nav className="container-custom py-4 relative z-50">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span 
                className={`text-2xl font-serif font-bold transition-all duration-300 ${
                  scrolled 
                    ? 'bg-clip-text text-transparent' 
                    : shouldShowDarkText 
                      ? 'text-neutral-900'
                      : 'text-white drop-shadow-lg'
                }`}
                style={scrolled ? {
                  backgroundImage: 'radial-gradient(circle at 50% 50%, #c89116 0%, #8b6914 70%, #d4a944 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                } : {}}
              >
                Premium Fabrics
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`transition-colors font-medium ${
                  scrolled 
                    ? 'text-neutral-700 hover:text-primary-600' 
                    : shouldShowDarkText
                      ? 'text-neutral-900 hover:text-primary-600'
                      : 'text-white hover:text-primary-200 drop-shadow-md'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/collections" 
                className={`transition-colors font-medium ${
                  scrolled 
                    ? 'text-neutral-700 hover:text-primary-600' 
                    : shouldShowDarkText
                      ? 'text-neutral-900 hover:text-primary-600'
                      : 'text-white hover:text-primary-200 drop-shadow-md'
                }`}
              >
                Collections
              </Link>
              <Link 
                href="/collections" 
                className={`transition-colors font-medium ${
                  scrolled 
                    ? 'text-neutral-700 hover:text-primary-600' 
                    : shouldShowDarkText
                      ? 'text-neutral-900 hover:text-primary-600'
                      : 'text-white hover:text-primary-200 drop-shadow-md'
                }`}
              >
                Shop
              </Link>
              <Link 
                href="/about" 
                className={`transition-colors font-medium ${
                  scrolled 
                    ? 'text-neutral-700 hover:text-primary-600' 
                    : shouldShowDarkText
                      ? 'text-neutral-900 hover:text-primary-600'
                      : 'text-white hover:text-primary-200 drop-shadow-md'
                }`}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`transition-colors font-medium ${
                  scrolled 
                    ? 'text-neutral-700 hover:text-primary-600' 
                    : shouldShowDarkText
                      ? 'text-neutral-900 hover:text-primary-600'
                      : 'text-white hover:text-primary-200 drop-shadow-md'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={openSearch}
                className={`p-2 transition-colors ${
                  scrolled 
                    ? 'text-neutral-700 hover:text-primary-600' 
                    : isProductPage
                      ? 'text-neutral-900 hover:text-primary-600'
                      : 'text-white hover:text-primary-200 drop-shadow-md'
                }`}
                aria-label="Search"
              >
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>

              <Link
                href="/wishlist"
                className={`p-2 transition-colors relative ${
                  scrolled 
                    ? 'text-neutral-700 hover:text-primary-600' 
                    : isProductPage
                      ? 'text-neutral-900 hover:text-primary-600'
                      : 'text-white hover:text-primary-200 drop-shadow-md'
                }`}
                aria-label="Wishlist"
              >
                <HeartIcon className="h-6 w-6" />
              </Link>

              <button
                onClick={openCart}
                className={`p-2 transition-colors relative ${
                  scrolled 
                    ? 'text-neutral-700 hover:text-primary-600' 
                    : isProductPage
                      ? 'text-neutral-900 hover:text-primary-600'
                      : 'text-white hover:text-primary-200 drop-shadow-md'
                }`}
                aria-label="Shopping cart"
              >
                <ShoppingBagIcon className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs font-medium text-white shadow-lg">
                    {cartItemCount > 9 ? '9+' : cartItemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className={`lg:hidden p-2 transition-colors ${
                  scrolled 
                    ? 'text-neutral-700 hover:text-primary-600' 
                    : isProductPage
                      ? 'text-neutral-900 hover:text-primary-600'
                      : 'text-white hover:text-primary-200 drop-shadow-md'
                }`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" />

      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
      <MobileMenu />
    </>
  );
};

