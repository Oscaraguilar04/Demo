/**
 * Restaurant demonstration data
 * --------------------------
 * Edit this single file to personalize the entire website for a client demo.
 * Swap names, colors, hours, menu items, links, and image paths — no other
 * source files need restaurant-specific content.
 *
 * Images may be local paths (/images/...) or remote URLs (e.g. Unsplash).
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  featured?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface DayHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  detail: string;
  /** Mark demo quotes clearly for clients reviewing the concept site */
  isSample: boolean;
}

export interface CateringInfo {
  headline: string;
  description: string;
  benefits: string[];
  minGuests?: string;
  leadTime?: string;
}

export interface RestaurantData {
  businessName: string;
  shortName: string;
  tagline: string;
  description: string;
  aboutStory: string;
  trustStatement: string;
  phone: string;
  formattedPhone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  directionsUrl: string;
  orderUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  primaryColor: string;
  accentColor: string;
  hours: DayHours[];
  menu: MenuCategory[];
  testimonials: Testimonial[];
  catering: CateringInfo;
  galleryImages: string[];
  heroImage: string;
  aboutImage: string;
  locationImage: string;
  cateringImage: string;
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
}

export const restaurant: RestaurantData = {
  businessName: "Mesa Verde Kitchen",
  shortName: "Mesa Verde",
  tagline: "Bold plates. Warm tables. Pure Bakersfield.",
  description:
    "Seasonal California cooking with Central Valley soul — shareable starters, flame-kissed mains, and a neighborhood energy that feels like home.",
  aboutStory:
    "Mesa Verde Kitchen started as a small neighborhood spot with a simple idea: serve honest food that brings people together. From weekend brunch tables to weekday takeout, we cook with care for the families, workers, and neighbors who make Bakersfield feel like home. Every plate is meant to be shared — and remembered.",
  trustStatement: "Locally owned in Bakersfield",
  phone: "6615550142",
  formattedPhone: "(661) 555-0142",
  email: "hello@mesaverdekitchen.demo",
  address: "1820 Chester Avenue",
  city: "Bakersfield",
  state: "CA",
  zipCode: "93301",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=1820+Chester+Avenue+Bakersfield+CA+93301",
  orderUrl: "https://www.toasttab.com/",
  instagramUrl: "https://www.instagram.com/",
  facebookUrl: "https://www.facebook.com/",
  primaryColor: "#0F1412",
  accentColor: "#FF5A36",
  hours: [
    { day: "Monday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Tuesday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Wednesday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Thursday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Friday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Saturday", open: "10:00 AM", close: "10:00 PM" },
    { day: "Sunday", open: "10:00 AM", close: "8:00 PM" },
  ],
  menu: [
    {
      id: "starters",
      name: "Starters",
      description: "Shareable bites to start the table",
      items: [
        {
          id: "roasted-pepper-hummus",
          name: "Roasted Pepper Hummus",
          description:
            "House hummus, warm pita, olive oil, and pickled vegetables",
          price: 11,
          featured: true,
          image:
            "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "crispy-calamari",
          name: "Crispy Calamari",
          description: "Lightly fried, citrus aioli, chili flake",
          price: 14,
          image:
            "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "street-corn-cups",
          name: "Street Corn Cups",
          description: "Charred corn, cotija, lime crema, cilantro",
          price: 10,
          image:
            "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    {
      id: "salads",
      name: "Salads & Bowls",
      description: "Bright, fresh, and filling",
      items: [
        {
          id: "valley-chopped",
          name: "Valley Chopped Salad",
          description:
            "Romaine, cucumber, tomato, avocado, chickpeas, herb vinaigrette",
          price: 15,
          image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "citrus-chicken-bowl",
          name: "Citrus Chicken Bowl",
          description:
            "Grilled chicken, quinoa, greens, orange segments, toasted almonds",
          price: 17,
          featured: true,
          image:
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "caesar",
          name: "Classic Caesar",
          description: "Romaine, parmesan, garlic croutons, anchovy dressing",
          price: 13,
          image:
            "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    {
      id: "mains",
      name: "Mains",
      description: "Comfort plates from the kitchen",
      items: [
        {
          id: "mesa-burger",
          name: "Mesa Burger",
          description:
            "Angus beef, aged cheddar, caramelized onion, house sauce, fries",
          price: 18,
          featured: true,
          image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "braised-short-rib",
          name: "Braised Short Rib",
          description: "Slow-cooked short rib, mashed potatoes, roasted carrots",
          price: 28,
          image:
            "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "chile-verde-enchiladas",
          name: "Chile Verde Enchiladas",
          description:
            "Corn tortillas, pork chile verde, crema, pickled onion, rice",
          price: 19,
          image:
            "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "market-catch",
          name: "Market Catch",
          description:
            "Pan-seared fish, seasonal vegetables, lemon butter, herbs",
          price: 26,
          image:
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      description: "A sweet finish",
      items: [
        {
          id: "churro-bites",
          name: "Churro Bites",
          description: "Cinnamon sugar, warm chocolate sauce",
          price: 9,
          image:
            "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "olive-oil-cake",
          name: "Olive Oil Cake",
          description: "Citrus glaze, whipped cream, seasonal berries",
          price: 10,
          image:
            "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    {
      id: "drinks",
      name: "Drinks",
      description: "House refreshments",
      items: [
        {
          id: "agua-fresca",
          name: "Agua Fresca",
          description: "Rotating seasonal fruit, lightly sweetened",
          price: 5,
          image:
            "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "house-lemonade",
          name: "House Lemonade",
          description: "Fresh-squeezed with a hint of mint",
          price: 5,
          image:
            "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "cold-brew",
          name: "Cold Brew Coffee",
          description: "Locally roasted, served over ice",
          price: 5,
          image:
            "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
  ],
  testimonials: [
    {
      id: "t1",
      quote:
        "The kind of place you take visiting family — generous portions, friendly service, and food that tastes homemade.",
      author: "Elena R.",
      detail: "Sample review · Bakersfield",
      isSample: true,
    },
    {
      id: "t2",
      quote:
        "We ordered catering for an office lunch and everything arrived hot and beautifully packed. Will use again.",
      author: "Marcus T.",
      detail: "Sample review · Downtown",
      isSample: true,
    },
    {
      id: "t3",
      quote:
        "Great patio energy on weekends. The Mesa Burger and street corn cups are our regular order.",
      author: "Priya S.",
      detail: "Sample review · Southwest",
      isSample: true,
    },
  ],
  catering: {
    headline: "Catering that shows up looking incredible",
    description:
      "From office lunches to family celebrations, Mesa Verde Kitchen brings familiar flavors and easy setup to your event across Bakersfield.",
    benefits: [
      "Family-style trays and individually packed options",
      "Custom menus for dietary needs when given notice",
      "Reliable pickup or drop-off within the metro area",
      "Friendly coordination for birthdays, offices, and community events",
    ],
    minGuests: "Ideal for 10–100 guests",
    leadTime: "48-hour notice preferred",
  },
  galleryImages: [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600891964599-f61ba0a25d0b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80",
  ],
  heroImage:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=80",
  aboutImage:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  locationImage:
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
  cateringImage:
    "https://images.unsplash.com/photo-1555244162-803435f59416?auto=format&fit=crop&w=1600&q=80",
  seo: {
    title: "Mesa Verde Kitchen | Neighborhood Restaurant in Bakersfield, CA",
    description:
      "Mesa Verde Kitchen serves welcoming neighborhood cooking in Bakersfield. View the menu, hours, catering options, and order online.",
    ogTitle: "Mesa Verde Kitchen — Bakersfield",
    ogDescription:
      "Locally owned restaurant in Bakersfield. Menu, hours, directions, catering, and online ordering.",
  },
};

/** Featured dishes derived from menu items marked featured */
export function getFeaturedItems(data: RestaurantData = restaurant): MenuItem[] {
  return data.menu.flatMap((category) =>
    category.items.filter((item) => item.featured),
  );
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
}

export function getFullAddress(data: RestaurantData = restaurant): string {
  return `${data.address}, ${data.city}, ${data.state} ${data.zipCode}`;
}

export function getTelHref(data: RestaurantData = restaurant): string {
  return `tel:+1${data.phone}`;
}

export function getMailtoHref(data: RestaurantData = restaurant): string {
  return `mailto:${data.email}`;
}
