/**
 * Restaurant demonstration data
 * --------------------------
 * Edit this single file to personalize the entire website for a client demo.
 * Every menu item and gallery slot must include a working matching image URL.
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  /** Optional unit label shown with price, e.g. "/ lb" */
  unit?: string;
  featured?: boolean;
  /** Required — items without a matching photo are not shown */
  image: string;
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

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

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
  accentColor: "#D4632A",
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
          image: img("photo-1529193591184-b1d58069ecdd"),
        },
        {
          id: "pork-ribs",
          name: "Pork Spare Ribs",
          description: "St. Louis cut, dry-rubbed, fall-off-the-bone tender",
          price: 28,
          unit: "/ lb",
          featured: true,
          image: img("photo-1544025162-d76694265947"),
        },
        {
          id: "house-sausage",
          name: "House Sausage",
          description: "Coarse-ground beef & pork links with jalapeño snap",
          price: 22,
          unit: "/ lb",
          image: img("photo-1529042410759-befb1204b468"),
        },
      ],
    },
    {
      id: "plates",
      name: "Plates & Combos",
      description: "Two sides and pickles with every plate",
      items: [
        {
          id: "three-meat-plate",
          name: "Three-Meat Plate",
          description: "Pitmaster's sampler — brisket, ribs, and sausage",
          price: 28,
          featured: true,
          image: img("photo-1598515214211-89d3c73ae83b"),
        },
        {
          id: "brisket-sandwich",
          name: "Brisket Sandwich",
          description: "Thick-cut brisket on a toasted bun, onion, pickles",
          price: 16,
          image: img("photo-1613514785940-daed07799d9b"),
        },
        {
          id: "smokehouse-platter",
          name: "Smokehouse Platter",
          description: "A generous spread of smoked meats ready to share",
          price: 42,
          image: img("photo-1551218808-94e220e084d2"),
        },
      ],
    },
    {
      id: "sides",
      name: "Sides",
      description: "The supporting cast that steals the show",
      items: [
        {
          id: "garden-salad",
          name: "Garden Salad",
          description: "Crisp greens, tomato, cucumber, house vinaigrette",
          price: 6,
          image: img("photo-1512621776951-a57141f2eefd"),
        },
        {
          id: "pinto-beans",
          name: "Pinto Beans",
          description: "Slow pot beans with smoked meat trim",
          price: 5,
          image: img("photo-1547592166-23ac45744acd"),
        },
        {
          id: "cornbread",
          name: "Cast-Iron Cornbread",
          description: "Honey butter on the side",
          price: 5,
          image: img("photo-1517677208171-0bc6725a3e60"),
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
          image: img("photo-1464305795204-6f5bbfc7fb81"),
        },
        {
          id: "banana-pudding",
          name: "Banana Pudding",
          description: "Vanilla wafers, fresh banana, whipped cream",
          price: 7,
          image: img("photo-1488477181946-6428a0291777"),
        },
      ],
    },
    {
      id: "drinks",
      name: "Drinks",
      description: "Ice-cold and ready",
      items: [
        {
          id: "lemonade",
          name: "Fresh Lemonade",
          description: "House-squeezed, lightly sweetened",
          price: 4,
          image: img("photo-1621263764928-df1444c5e859"),
        },
        {
          id: "citrus-cooler",
          name: "Citrus Cooler",
          description: "Fresh citrus over ice",
          price: 4,
          image: img("photo-1497534446932-c925b458314e"),
        },
        {
          id: "soda",
          name: "Fountain Sodas",
          description: "Coke, Diet Coke, Dr Pepper, Sprite",
          price: 3,
          image: img("photo-1581006852262-e4307cf6283a"),
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
    img("photo-1529193591184-b1d58069ecdd"),
    img("photo-1544025162-d76694265947"),
    img("photo-1598515214211-89d3c73ae83b"),
    img("photo-1558030006-450675393462"),
    img("photo-1523987355523-c7b5b0dd90a7"),
    img("photo-1551218808-94e220e084d2"),
  ],
  heroImage: img("photo-1529193591184-b1d58069ecdd", 2000),
  aboutImage: img("photo-1558030006-450675393462", 1400),
  locationImage: img("photo-1514933651103-005eec06c04b", 1600),
  cateringImage: img("photo-1598515214211-89d3c73ae83b", 1600),
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
    category.items.filter((item) => item.featured && Boolean(item.image)),
  );
}

/** Menu categories with only items that have images */
export function getMenuWithImages(
  data: RestaurantData = restaurant,
): MenuCategory[] {
  return data.menu
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => Boolean(item.image)),
    }))
    .filter((category) => category.items.length > 0);
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
