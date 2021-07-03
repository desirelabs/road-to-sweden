import config from "../../lib/config";
import Head from "next/head";

type Props = {
  url: string;
  title?: string;
  description?: string;
};
export default function TwitterCardMeta({ url, title, description }: Props) {
  return (
    <Head>
      <meta property="instagram:card" content="summary_large_image" />
      <meta property="instagram:site" content={config.instagram_account} />
      <meta property="instagram:url" content={config.base_url + url} />
      <meta
        property="instagram:title"
        content={title ? [title, config.site_title].join(" | ") : ""}
      />
      <meta
        property="instagram:description"
        content={description ? description : config.site_description}
      />
    </Head>
  );
}
