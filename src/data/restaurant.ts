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
  /** Optional unit label shown with price, e.g. "/ lb" */
  unit?: string;
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
  businessName: "Black Hickory BBQ",
  shortName: "Black Hickory",
  tagline: "Post oak smoke. Texas tradition. Meat that speaks for itself.",
  description:
    "Brisket, ribs, and sausage smoked low and slow over Texas post oak — served with classic sides, cold drinks, and the kind of hospitality that keeps folks coming back.",
  aboutStory:
    "Black Hickory BBQ was built on one belief: great barbecue takes time. We trim by hand, season with a house rub, and let post oak do the talking overnight. What started as a backyard cooker became a smokehouse for pitmasters, families, and road-trippers who know the difference between fast meat and real Texas barbecue.",
  trustStatement: "Pit-smoked daily in the Texas tradition",
  phone: "5125550199",
  formattedPhone: "(512) 555-0199",
  email: "smoke@blackhickorybbq.demo",
  address: "814 East Cesar Chavez Street",
  city: "Austin",
  state: "TX",
  zipCode: "78702",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=814+East+Cesar+Chavez+Street+Austin+TX+78702",
  orderUrl: "https://www.toasttab.com/",
  instagramUrl: "https://www.instagram.com/",
  facebookUrl: "https://www.facebook.com/",
  primaryColor: "#1A1210",
  accentColor: "#C45C26",
  hours: [
    { day: "Monday", open: "11:00 AM", close: "8:00 PM" },
    { day: "Tuesday", open: "11:00 AM", close: "8:00 PM" },
    { day: "Wednesday", open: "11:00 AM", close: "8:00 PM" },
    { day: "Thursday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Friday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Saturday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Sunday", open: "11:00 AM", close: "7:00 PM" },
  ],
  menu: [
    {
      id: "by-the-pound",
      name: "By the Pound",
      description: "Sliced to order. Sold till it's gone.",
      items: [
        {
          id: "brisket",
          name: "Beef Brisket",
          description:
            "12-hour post oak smoke, pepper crust, juicy fatty or lean",
          price: 32,
          unit: "/ lb",
          featured: true,
          image:
            "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "pork-ribs",
          name: "Pork Spare Ribs",
          description: "St. Louis cut, dry-rubbed, fall-off-the-bone tender",
          price: 28,
          unit: "/ lb",
          featured: true,
          image:
            "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "house-sausage",
          name: "House Sausage",
          description: "Coarse-ground beef & pork links with jalapeño snap",
          price: 22,
          unit: "/ lb",
          image:
            "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "pulled-pork",
          name: "Pulled Pork",
          description: "Shoulder smoked overnight, chopped or pulled",
          price: 24,
          unit: "/ lb",
          image:
            "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },
    {
      id: "plates",
      name: "Plates & Combos",
      description: "Two sides and pickles with every plate",
      items: [
        {
          id: "two-meat-plate",
          name: "Two-Meat Plate",
          description: "Choose any two smoked meats with two classic sides",
          price: 22,
          featured: true,
          image:
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "three-meat-plate",
          name: "Three-Meat Plate",
          description: "Pitmaster's sampler — brisket, ribs, and sausage",
          price: 28,
          image:
            "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "brisket-sandwich",
          name: "Brisket Sandwich",
          description: "Thick-cut brisket on a toasted bun, onion, pickles",
          price: 16,
          image:
            "https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "burnt-ends",
          name: "Burnt Ends Bowl",
          description: "Chopped bark-heavy ends over beans or mac",
          price: 18,
          image:
            "https://images.unsplash.com/photo-1432139509613-5c621538fa88?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    {
      id: "sides",
      name: "Sides",
      description: "The supporting cast that steals the show",
      items: [
        {
          id: "mac-cheese",
          name: "Smoked Mac & Cheese",
          description: "Three-cheese blend finished in the smoker",
          price: 6,
          image:
            "https://images.unsplash.com/photo-1543339494-b4cd4f7ba876?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "potato-salad",
          name: "Potato Salad",
          description: "Classic mustard-style, celery, egg",
          price: 5,
          image:
            "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "coleslaw",
          name: "House Slaw",
          description: "Crisp cabbage, light vinegar dressing",
          price: 5,
          image:
            "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "pinto-beans",
          name: "Pinto Beans",
          description: "Slow pot beans with smoked meat trim",
          price: 5,
          image:
            "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "cornbread",
          name: "Cast-Iron Cornbread",
          description: "Honey butter on the side",
          price: 5,
          image:
            "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    {
      id: "desserts",
      name: "Sweets",
      description: "Worth saving room",
      items: [
        {
          id: "pecan-pie",
          name: "Pecan Pie",
          description: "Texas pecans, flaky crust, whipped cream",
          price: 8,
          image:
            "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "banana-pudding",
          name: "Banana Pudding",
          description: "Vanilla wafers, fresh banana, whipped cream",
          price: 7,
          image:
            "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    {
      id: "drinks",
      name: "Drinks",
      description: "Ice-cold and ready",
      items: [
        {
          id: "sweet-tea",
          name: "Sweet Tea",
          description: "Bottomless, Texas-sweet",
          price: 3,
          image:
            "https://images.unsplash.com/photo-1556679343-c7306c197cfe?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "lemonade",
          name: "Fresh Lemonade",
          description: "House-squeezed, lightly sweetened",
          price: 4,
          image:
            "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: "soda",
          name: "Fountain Sodas",
          description: "Coke, Diet Coke, Dr Pepper, Sprite",
          price: 3,
          image:
            "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
  ],
  testimonials: [
    {
      id: "t1",
      quote:
        "The brisket bark is unreal — peppery, smoky, and sliced just right. This is destination barbecue.",
      author: "James H.",
      detail: "Sample review · Austin",
      isSample: true,
    },
    {
      id: "t2",
      quote:
        "Catered our company cookout with trays of ribs and sausage. Everything arrived hot and disappeared fast.",
      author: "Maria L.",
      detail: "Sample review · East Austin",
      isSample: true,
    },
    {
      id: "t3",
      quote:
        "Feels like a proper Texas smokehouse — butcher paper, cold sweet tea, and meat that doesn't need sauce.",
      author: "Derek P.",
      detail: "Sample review · Round Rock",
      isSample: true,
    },
  ],
  catering: {
    headline: "Smokehouse catering for the whole crew",
    description:
      "From backyard cookouts to corporate spreads, Black Hickory packs trays of brisket, ribs, sausage, and sides ready to feed a hungry Texas crowd.",
    benefits: [
      "By-the-pound trays with butcher paper presentation",
      "Sauce, pickles, onions, and bread included",
      "Pickup or drop-off across the Austin metro",
      "Easy ordering for weddings, offices, and game days",
    ],
    minGuests: "Ideal for 15–150 guests",
    leadTime: "72-hour notice preferred",
  },
  galleryImages: [
    "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1200&q=80",
  ],
  heroImage:
    "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=2000&q=80",
  aboutImage:
    "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1400&q=80",
  locationImage:
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80",
  cateringImage:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80",
  seo: {
    title: "Black Hickory BBQ | Texas Smokehouse in Austin",
    description:
      "Black Hickory BBQ serves Texas-style brisket, ribs, and sausage smoked over post oak in Austin. View the menu, hours, catering, and order online.",
    ogTitle: "Black Hickory BBQ — Austin Smokehouse",
    ogDescription:
      "Post oak smoked brisket, ribs, and sausage. Menu, hours, directions, and catering.",
  },
};

/** Featured dishes derived from menu items marked featured */
export function getFeaturedItems(data: RestaurantData = restaurant): MenuItem[] {
  return data.menu.flatMap((category) =>
    category.items.filter((item) => item.featured),
  );
}

export function formatPrice(price: number, unit?: string): string {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
  return unit ? `${formatted}${unit}` : formatted;
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
