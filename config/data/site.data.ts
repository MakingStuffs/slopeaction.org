type SiteInfo = {
  name: string;
  description: string;
  favicon: string;
  socialImage: string;
  url: string;
};

const siteInfo: SiteInfo = {
  name: "Slope Action",
  description:
    "Slope Action was founded by the victims of the Slope Finance wallet leak which lead to users losing a collective $8m USD in cryptocurrencies.",
  favicon: "/assets/images/favicon.icon",
  socialImage: "/assets/images/social-image.jpg",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://github.com/makingstuffs",
};

export default siteInfo;
