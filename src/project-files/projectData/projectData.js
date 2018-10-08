export const productListURL =
  "https://mallory-furniture-admin.now.sh/api/v1/products";

export const projectData = {
  legalLinks: [
    {
      name: "About",
      route: "/about",
      type: "legal"
    },
    {
      name: "Terms + Conditions",
      route: "/about",
      type: "legal"
    }
  ],
  productLinks: [
    {
      name: "Featured",
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
      route: "/category/misc",
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
