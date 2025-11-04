import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Cart, CartItem } from '@/types';

interface CartStore {
  cart: Cart;
  addItem: (item: CartItem) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  syncWithServer: () => Promise<void>;
}

interface WishlistStore {
  items: string[];
  add: (productId: string) => void;
  remove: (productId: string) => void;
  toggle: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
}

interface UIStore {
  isCartOpen: boolean;
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const initialCart: Cart = {
  items: [],
  subtotal: 0,
  tax: 0,
  shipping: 0,
  discount: 0,
  total: 0,
  currency: 'USD',
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: initialCart,
      addItem: (item) => {
        const cart = get().cart;
        const existingItemIndex = cart.items.findIndex(
          (i) => i.variantId === item.variantId && i.unit === item.unit
        );

        let newItems: CartItem[];
        if (existingItemIndex >= 0) {
          newItems = cart.items.map((i, index) =>
            index === existingItemIndex
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          );
        } else {
          newItems = [...cart.items, item];
        }

        const subtotal = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
        set({
          cart: {
            ...cart,
            items: newItems,
            subtotal,
            total: subtotal + cart.tax + cart.shipping - cart.discount,
          },
        });
      },
      removeItem: (variantId) => {
        const cart = get().cart;
        const newItems = cart.items.filter((i) => i.variantId !== variantId);
        const subtotal = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
        set({
          cart: {
            ...cart,
            items: newItems,
            subtotal,
            total: subtotal + cart.tax + cart.shipping - cart.discount,
          },
        });
      },
      updateQuantity: (variantId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(variantId);
          return;
        }
        const cart = get().cart;
        const newItems = cart.items.map((i) =>
          i.variantId === variantId ? { ...i, quantity } : i
        );
        const subtotal = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
        set({
          cart: {
            ...cart,
            items: newItems,
            subtotal,
            total: subtotal + cart.tax + cart.shipping - cart.discount,
          },
        });
      },
      clearCart: () => {
        set({ cart: initialCart });
      },
      syncWithServer: async () => {
        // TODO: Implement server sync
        const cart = get().cart;
        try {
          const response = await fetch('/api/cart/sync', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cart),
          });
          if (response.ok) {
            const serverCart = await response.json();
            set({ cart: serverCart });
          }
        } catch (error) {
          console.error('Failed to sync cart:', error);
        }
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      add: (productId) => {
        const items = get().items;
        if (!items.includes(productId)) {
          set({ items: [...items, productId] });
        }
      },
      remove: (productId) => {
        set({ items: get().items.filter((id) => id !== productId) });
      },
      toggle: (productId) => {
        const isWishlisted = get().isWishlisted(productId);
        if (isWishlisted) {
          get().remove(productId);
        } else {
          get().add(productId);
        }
      },
      isWishlisted: (productId) => get().items.includes(productId),
    }),
    {
      name: 'wishlist-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useUIStore = create<UIStore>((set) => ({
  isCartOpen: false,
  isSearchOpen: false,
  isMobileMenuOpen: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));

