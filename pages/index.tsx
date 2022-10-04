import React from "react";
import type { NextPage } from "next";
import pages from "config/data/page.data";
import Meta from "components/Meta/Meta.component";
import Text from "components/Text/Text";
import Section from "components/Section/Section";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Meta
        title={pages.homePage.title}
        description={pages.homePage.description}
        favicon={pages.homePage.favicon}
        url={pages.homePage.slug}
        socialImage={`https://slopeaction.org${pages.homePage.socialImage}`}
      />
      <main>
        <Section>
          <div
            style={{
              maxWidth: 100,
              maxHeight: 100,
              margin: "auto",
            }}
          >
            <Image
              src="/assets/images/logos/slope-action-a-150.png"
              layout="responsive"
              alt="Purple square with a white A"
              width={100}
              height={100}
            />
          </div>
          <h1>Slope Action</h1>
          <p>Seeking action for Slope victims</p>
        </Section>
        <Section>
          <h2>What is Slope Action?</h2>
          <Text
            lines={[
              "A organisation created by a group of Slope community members that were affected by the Slope wallet private key leak on 2 August 2022.",
            ]}
          />
          <h2>What is the purpose of Slope Action?</h2>
          <Text
            lines={[
              "Our goals are simply to get reimbursement for all victims of the Slope wallet private key leak; to get Slope Finance to publicly acknowledge their culpability for the leak; to aid law enforcement authorities around the globe with any open enquiries around the wallet leak.",
            ]}
          />
          <h2>What can be expected from Slope Action?</h2>
          <Text
            lines={[
              "Transparency. We may or may not succeed with our goals but we will be transparent and communicative either way.",
            ]}
          />
          <h2>How can you get involved?</h2>
          <Text
            lines={[
              "The best thing to do is to follow us on our socials and be involved in our Telegram discussions.",
              "If you think you have a skill you can utilise to assist our goals please do inform someone in the Telegram group.",
            ]}
          />
          <Link
            href="https://twitter.com/slope_action"
            rel="noopener noreferrer"
            title="Visit our twitter page"
          >
            Twitter: @slope_action
          </Link>
          <h2>What next?</h2>
          <Text
            lines={[
              "Slopeaction.org will continue to be worked upon in order to act as an information hub for all Slope wallet leak victims.",
              "More information will be added in due time, please be patient. I am one guy with a full time job and a freelance business.",
              "If/when the situation is resolved this website will cease to be developed and the community can decide what to do with the socials.",
            ]}
          />
        </Section>
      </main>
      <footer />
    </div>
  );
};

export default Home;
