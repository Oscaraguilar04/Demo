/**
 * Restaurant demonstration data
 * --------------------------
 * Edit this single file to personalize the entire website for a client demo.
 * Swap names, colors, hours, menu items, links, and image paths — no other
 * source files need restaurant-specific content.
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  featured?: boolean;
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
  tagline: "Neighborhood cooking, Central Valley hospitality",
  description:
    "Warm plates, generous portions, and a welcoming table for families and friends in Bakersfield. Fresh ingredients, familiar favorites, and a kitchen that still cooks like it matters.",
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
  primaryColor: "#1C3A2E",
  accentColor: "#B8893D",
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
        },
        {
          id: "crispy-calamari",
          name: "Crispy Calamari",
          description: "Lightly fried, citrus aioli, chili flake",
          price: 14,
        },
        {
          id: "street-corn-cups",
          name: "Street Corn Cups",
          description: "Charred corn, cotija, lime crema, cilantro",
          price: 10,
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
        },
        {
          id: "citrus-chicken-bowl",
          name: "Citrus Chicken Bowl",
          description:
            "Grilled chicken, quinoa, greens, orange segments, toasted almonds",
          price: 17,
          featured: true,
        },
        {
          id: "caesar",
          name: "Classic Caesar",
          description: "Romaine, parmesan, garlic croutons, anchovy dressing",
          price: 13,
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
        },
        {
          id: "braised-short-rib",
          name: "Braised Short Rib",
          description: "Slow-cooked short rib, mashed potatoes, roasted carrots",
          price: 28,
        },
        {
          id: "chile-verde-enchiladas",
          name: "Chile Verde Enchiladas",
          description:
            "Corn tortillas, pork chile verde, crema, pickled onion, rice",
          price: 19,
        },
        {
          id: "market-catch",
          name: "Market Catch",
          description:
            "Pan-seared fish, seasonal vegetables, lemon butter, herbs",
          price: 26,
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
        },
        {
          id: "olive-oil-cake",
          name: "Olive Oil Cake",
          description: "Citrus glaze, whipped cream, seasonal berries",
          price: 10,
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
        },
        {
          id: "house-lemonade",
          name: "House Lemonade",
          description: "Fresh-squeezed with a hint of mint",
          price: 5,
        },
        {
          id: "cold-brew",
          name: "Cold Brew Coffee",
          description: "Locally roasted, served over ice",
          price: 5,
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
    headline: "Catering for gatherings large and small",
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
    "/images/gallery-1.svg",
    "/images/gallery-2.svg",
    "/images/gallery-3.svg",
    "/images/gallery-4.svg",
  ],
  heroImage: "/images/hero-food.svg",
  aboutImage: "/images/about-dining.svg",
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
