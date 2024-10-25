export type Content = {
  title: string;
  slug: string;
  theme: ThemeProps;
  banner: BannerProps;
  flowchart: Image;
  aboutUs: AboutUsProps;
  ourServices: OurServicesProps;
  history?: HistoryProps;
  contactUs: ContactUsProps;
  posts: PostsProps;
  someCases: SomeCasesProps;
};

export type Image = {
  url: string;
};

export type BannerProps = {
  title: string;
  texts: string[];
  image: Image;
  video: Image;
  isTextBlack: Boolean;
};

export type ThemeProps = {
  title: string;
  description: string;
  keywords: string;
  image: Image;
  logo: Image;
  menu: HeaderProps[];
  footer: FooterProps;
  whatsappContact: WhatsappContactProps;
};

export type HeaderProps = {
  label: string;
  link: string;
};

export type WhatsappContactProps = {
  phoneNumber: string;
  message: string;
};

export type SitemapProps = {
  label: string;
  link: string;
};

export type FooterProps = {
  subtitle: string;
  copyright: string;
  phoneNumber: string;
  email: string;
  address: string;
  sitemapTitle: string;
  sitemap: SitemapProps[];
  logo: Image;
};

export type Service = {
  title: string;
  description: string;
  image: Image;
};

export type AboutUsProps = {
  title: string;
  subtitle: string;
  items: Service[];
};

export type OurServicesProps = {
  title: string;
  items: Service[];
};

export interface Stat {
  iconPath: string;
  count: number;
  label: string;
}

export interface HistoryProps {
  stats: Stat[];
}

export type PostsProps = {
  title: string;
  subtitle: string;
};

export type SomeCasesProps = {
  title: string;
  subtitle: string;
  items: Service[];
};

export type ContactUsProps = {
  title: string;
  subtitle: string;
  termsButton: {
    title: string;
    link: string;
  };
};
