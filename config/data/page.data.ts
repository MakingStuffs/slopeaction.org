type PageData = {
  title: string;
  description: string;
  favicon?: string;
  socialImage?: string;
  slug: string;
};

const homePage: PageData = {
  title: "Home | Slope Action | Seeking Justice for Slope Finance Victims",
  description:
    "Slope Action was founded by the victims of the Slope Finance wallet leak which lead to users losing a collective $8m USD in cryptocurrencies.",
  slug: "/",
  favicon: "/favicon.ico",
  socialImage: "/assets/images/marketing/share-image.jpeg",
};

export default { homePage };
