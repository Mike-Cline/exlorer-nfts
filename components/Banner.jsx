import { Tooltip } from '@nextui-org/react';
import React from 'react';
import { useAccount } from 'wagmi';

const Banner = ({ setInspectedAddress, inspectedAddress }) => {
  const {
    data: account,
    isError: accountError,
    isLoading: loadingAccount,
  } = useAccount();
  const connected = !loadingAccount && account && !accountError ? true : false;
  console.log('Connected:', connected);

  const handleFetchProfile = () => {
    if (connected) {
      setInspectedAddress(account.address);
    }
  };

  return (
    <div className="h-52 w-full relative rounded-2xl overflow-hidden mb-8">
      <img
        src={`https://i.seadn.io/gcs/files/8619090efa9e751cb94097a1f1a18f1b.gif?auto=format&w=1920`}
        className=" w-full h-full object-cover opacity-[0.85] 2xl:object-[0px_-200px]"
      />
      <div className="absolute w-full bottom-0 h-28 bg-gradient-to-b from-transparent to-black/70" />
      <span className="absolute top-[50%] translate-y-[-50%] left-[5%] border-white">
        <h1 className="text-white text-3xl font-semibold mb-4 drop-shadow-[0_0_10px_rgba(1,1,1,1)]">
          Web3explorer <br /> inspect those NFTs
        </h1>
        <span>
          <button
            className="py-2.5 px-6 bg-purple-700 text-white font-semibold rounded-xl mr-4 text-sm"
            onClick={() =>
              setInspectedAddress('0x9a6f7479cd5c3724749181e9725ff13be78014b6')
            }
          >
            Explore
          </button>
          <Tooltip
            content={'connect wallet'}
            color="invert"
            placement="right"
            css={{
              padding: '$5 $8',
            }}
          >
            <button
              className={`py-2.5 px-6 bg-transparent border-2 border-[#8c83ba] text-white font-semibold rounded-xl text-sm ${
                connected ? 'cursor-pointer' : 'cursor-default'
              }`}
              onClick={handleFetchProfile}
            >
              My NFTS
            </button>
          </Tooltip>
        </span>
      </span>
    </div>
  );
};

export default Banner;
