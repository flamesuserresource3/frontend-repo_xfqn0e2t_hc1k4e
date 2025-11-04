import React from 'react';
import { ShoppingBag, Gem, Shield, Crown } from 'lucide-react';

const ItemCard = ({ icon: Icon, name, rarity, price }) => (
  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
    <div className="flex items-center gap-3">
      <div className="rounded-md bg-amber-500/10 p-2">
        <Icon className="h-5 w-5 text-amber-300" />
      </div>
      <div>
        <p className="text-white font-semibold">{name}</p>
        <p className="text-xs text-amber-100/70">{rarity}</p>
      </div>
      <div className="ml-auto text-sm text-amber-100/90">{price}</div>
    </div>
  </div>
);

export default function ShopShowcase() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Guild Shop</h2>
            <p className="mt-1 text-amber-100/80">Cosmetics and regalia. No stats, only swagger.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-black hover:bg-amber-400">
            <ShoppingBag className="h-4 w-4" /> Visit Shop
          </button>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ItemCard icon={Crown} name="Royal Crest" rarity="Legendary" price="12 Gold" />
          <ItemCard icon={Gem} name="Arcane Halo" rarity="Epic" price="6 Gold" />
          <ItemCard icon={Shield} name="Knight's Cape" rarity="Rare" price="80 Silver" />
        </div>
      </div>
    </section>
  );
}
