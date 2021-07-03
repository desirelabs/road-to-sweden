import Link from "next/link";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>Road to Sweden</h1>
          <h2>
            Le blog des pérégrinations
            <br />
            d'une famille d'expatriés Français
            <br />
            en Suède.
          </h2>
          <p>
            Nous sommes Français et avons fait le choix de partir nous installer
            en Suède.
          </p>
          <p>
            Ce site raconte notre histoire au fil de l'eau. On y parle des
            réussites liées à notre projet, mais aussi des difficultés et des
            échecs que nous avons vécus.
          </p>
          <p>
            Nous partageons des conseils pratiques sur la recherche du logement,
            d'emploi, mais aussi sur les démarches légales afin de réussir dans
            notre démarche.
          </p>
          <p>
            Nous espérons que ce site vous servira, ou à tout le moins vous
            divertira.
          </p>
          <Link href="/posts">Accéder aux articles</Link>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
