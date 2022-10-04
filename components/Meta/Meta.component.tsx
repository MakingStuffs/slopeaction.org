import Head from "next/head";
import React, { HTMLAttributes } from "react";
import siteInfo from "config/data/site.data";

interface MetaProps extends HTMLAttributes<HTMLHeadElement> {
  title: string;
  description: string;
  url: string;
  favicon?: string;
  siteName?: string;
  socialImage?: string;
}

const Meta: React.FC<MetaProps> = ({
  url,
  title,
  description,
  siteName,
  favicon,
  socialImage,
  ...rest
}) => (
  <Head {...rest}>
    <meta name="robots" content="index, follow" />
    <title>{title}</title>
    <meta name="twitter:title" content={title} />
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={siteName} />
    <link rel="icon" href={favicon || "/favicon.ico"} />
    <meta property="og:image" content={socialImage || ""} />
    <meta name="twitter:image" content={socialImage || ""} />
  </Head>
);

Meta.defaultProps = {
  favicon: siteInfo.favicon,
  siteName: siteInfo.name,
  socialImage: "",
};

export default Meta;
