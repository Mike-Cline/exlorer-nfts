import { useState } from 'react';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Banner from '../components/Banner';
import Catalogue from '../components/Catalogue';
import { Tooltip } from '@nextui-org/react';

export default function Home() {
  const [searchAddress, setSearchAddress] = useState('');
  const [inspectedAddress, setInspectedAddress] = useState(undefined);

  return (
    <div className="h-full bg-primary ">
      <Head>
        <title>Explorer NFTs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./box.png" />
      </Head>

      <div className="h-full border-black w-[90%] 2xl:w-[100%] mx-auto flex gap-8 py-[1.75rem]">
        {/* first column */}
        <div className="h-full border-black w-full">
          {/* header */}
          <header className="">
            <div className="flex items-center justify-between flex-col-reverse sm:flex-row sm:items-center mb-6">
              <SearchBar
                searchAddress={searchAddress}
                setSearchAddress={setSearchAddress}
                setInspectedAddress={setInspectedAddress}
              />
              <span className="self-end">
                <ConnectButton />
              </span>
            </div>

            <Banner
              inspectedAddress={inspectedAddress}
              setInspectedAddress={setInspectedAddress}
            />
          </header>
          {/* main content -> articles */}
          <Catalogue
            inspectedAddress={inspectedAddress}
            title="Ethereum NFTS"
            chainNumber={1}
          />
          <Catalogue
            inspectedAddress={inspectedAddress}
            title="Polygon NFTS"
            chainNumber={2}
          />
        </div>
        {/* second column */}
        <div className="h-auto w-[27%] bg-primaryLight colort">
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              Guess what’s brewing today? ☕️
              <a href="https://twitter.com/Starbucks?ref_src=twsrc%5Etfw">
                @Starbucks
              </a>{' '}
              unveils Starbucks Odyssey{' '}
              <a href="https://twitter.com/hashtag/onPolygon?src=hash&amp;ref_src=twsrc%5Etfw">
                #onPolygon
              </a>
              !<br />
              <br />A unique experience that enables you to earn and buy digital
              collectible stamps and unlock new, coveted coffee experiences. 🌟
              <br />
              <br />
              Read more 👉🏽{' '}
              <a href="https://t.co/U8nKjUb8sY">https://t.co/U8nKjUb8sY</a>{' '}
              <a href="https://t.co/nvJ37y9s0a">pic.twitter.com/nvJ37y9s0a</a>
            </p>
            &mdash; Polygon - MATIC 💜 (@0xPolygon){' '}
            <a href="https://twitter.com/0xPolygon/status/1569302728005804037?ref_src=twsrc%5Etfw">
              September 12, 2022
            </a>
          </blockquote>{' '}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
          <div
            style={{
              display: 'grid',
              justifyContent: 'center',
            }}
          >
            <img src="./giveaway.png" alt="giveaway" width={250} />
            <Tooltip href="" content={'Please connect'}>
              <img src="./box.png" alt="box" width={250} height={250} />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}