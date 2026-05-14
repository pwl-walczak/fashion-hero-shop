export type Listing = {
  id: string;
  name: string;
  category: string;
  price: number;
  status: "active";
  views: number;
};

export type SellerProfile = {
  id: string;
  name: string;
  tier: "Standard" | "Negotiated" | "Premium";
  months_active: number;
  is_active: true;
  gmv: number;
};

export const seller: SellerProfile = {
  id: "seller_kamil_001",
  name: "Kamil Nowak",
  tier: "Standard",
  months_active: 4,
  is_active: true,
  gmv: 3200,
};

export const listings: Listing[] = [
  {
    id: "listing_retrorun",
    name: "Sneakers RetroRun '92",
    category: "Obuwie",
    price: 289,
    status: "active",
    views: 142,
  },
  {
    id: "listing_oversize_hoodie",
    name: "Oversize Hoodie Charcoal",
    category: "Bluzy",
    price: 199,
    status: "active",
    views: 87,
  },
  {
    id: "listing_denim_wide",
    name: "Wide Leg Denim Indigo",
    category: "Spodnie",
    price: 249,
    status: "active",
    views: 56,
  },
  {
    id: "listing_linen_shirt",
    name: "Linen Shirt Sand",
    category: "Koszule",
    price: 179,
    status: "active",
    views: 31,
  },
];
