export const productURL =
  "https://mallory-furniture-admin.now.sh/api/v1/products";

export const defaultLandingSelector = "featured";

export const projectData = {
  legalLinks: [
    {
      name: "About",
      route: "/about",
      type: "legal"
    },
    {
      name: "Terms + Conditions",
      route: "/terms",
      type: "legal"
    }
  ],
  productLinks: [
    {
      name: "Featured",
      selector: "featured",
      titles: [
        "Featured Products",
        "Check out some of our favorite listings",
        "Mallory Furniture",
        "Your furniture is old.",
        "Ours is older."
      ],
      route: "/",
      type: "product",
      heroImage:
        "https://res.cloudinary.com/dhfpvsu5c/image/upload/v1538698249/malloryFurniture/landing-splash-bg.png",
      design: {
        hero: true,
        filterReport: false,
        browseSection: true,
        link: false
      }
    },
    {
      name: "All",
      selector: "all",
      titles: ["All Products", "All available listings", "", "", ""],
      route: "/category/all",
      type: "product",
      heroImage: "",
      design: {
        hero: false,
        filterReport: true,
        browseSection: false,
        link: true
      }
    },
    {
      name: "Seating",
      selector: "seating",
      titles: ["Seating", "All seating Products", "", "", ""],
      route: "/category/seating",
      type: "product",
      heroImage:
        "https://res.cloudinary.com/dhfpvsu5c/image/upload/v1538698248/malloryFurniture/category-seating.png",
      design: {
        hero: true,
        filterReport: true,
        browseSection: false,
        link: true
      }
    },
    {
      name: "Tables",
      selector: "tables",
      titles: ["Tables", "All table products", "", "", ""],
      route: "/category/tables",
      type: "product",
      heroImage:
        "https://res.cloudinary.com/dhfpvsu5c/image/upload/v1538698247/malloryFurniture/category-tables.png",
      design: {
        hero: true,
        filterReport: true,
        browseSection: false,
        link: true
      }
    },
    {
      name: "Desks",
      selector: "desks",
      titles: ["Desks", "All desk products", "", "", ""],
      route: "/category/desks",
      type: "product",
      heroImage:
        "https://res.cloudinary.com/dhfpvsu5c/image/upload/v1538698248/malloryFurniture/category-desks.png",
      design: {
        hero: true,
        filterReport: true,
        browseSection: false,
        link: true
      }
    },
    {
      name: "Storage",
      selector: "storage",
      titles: ["Storage", "For all storage needs", "", "", ""],
      route: "/category/storage",
      type: "product",
      heroImage:
        "https://res.cloudinary.com/dhfpvsu5c/image/upload/v1538698247/malloryFurniture/category-storage.png",
      design: {
        hero: true,
        filterReport: true,
        browseSection: false,
        link: true
      }
    },
    {
      name: "Bedroom",
      selector: "bedroom",
      titles: ["Bedroom", "All bedroom products", "", "", ""],
      route: "/category/bedroom",
      type: "product",
      heroImage:
        "https://res.cloudinary.com/dhfpvsu5c/image/upload/v1538698247/malloryFurniture/category-bedroom.png",
      design: {
        hero: true,
        filterReport: true,
        browseSection: false,
        link: true
      }
    },
    {
      name: "Misc",
      selector: "miscellaneous",
      titles: ["Miscelaneous", "All your other needs", "", "", ""],
      route: "/category/miscellaneous",
      type: "product",
      heroImage:
        "https://res.cloudinary.com/dhfpvsu5c/image/upload/v1538698247/malloryFurniture/category-miscellaneous.png",
      design: {
        hero: true,
        filterReport: true,
        browseSection: false,
        link: true
      }
    }
  ]
};
