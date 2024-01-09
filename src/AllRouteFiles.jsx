import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Component/About';
import Footer from './Component/Footer';
// import Navbar from './Component/Navbar/Navbar';
import Main from './Main';
import WbsiteDevelopment from './Component/websitedevelopment/WbsiteDevelopment';
import Blog from './Component/blog/Blog';
import Static from './Component/websitedevelopment/Static';
import DynamicWebsite from './Component/websitedevelopment/DynamicWebsite';
import Ecommerce from './Component/websitedevelopment/Ecommerce';
import GeneralGamesDevelopment from './Component/gaming/gernralgames/GeneralGamesDevelopment';
import CasinoGames from './Component/gaming/CasinoGames/CasinoGames';
import MetaverseGame from './Component/gaming/metaversgame/MetaverseGame';
import Blockchain from './Component/gaming/blockchaingame/BlockchainGame';
import BlockchainGame from './Component/gaming/blockchaingame/BlockchainGame';
import SmartContractDevelopemnt from './Component/blockchain/BlockChainDevelopment/SmartContract/SmartContractDevelopemnt';
import PrivatePublicBlockchain from './Component/blockchain/BlockChainDevelopment/privatepublicblockchain/PrivatePublicBlockchain';
import DaoBlockchain from './Component/blockchain/BlockChainDevelopment/DAOBlockchainDevelopmnent/DaoBlockchain';
import WhitePaperWrittingServices from './Component/blockchain/Walletdevelopmen/WhitePaperWrittingServices/WhitePaperWrittingServices/WhitePaperWritting/WhitePaperWrittingServices';
import EthereumTokenDevelopment from './Component/blockchain/tokendevelopment/EthereumToken/EthereumTokenDevelopment';
import DefiStaking from './Component/blockchain/DeFiDevelopment/DeFiStakingPlatformDevelopment/DefiStaking';
import NFTMarketplace from './Component/blockchain/NFTDevelopment/NFTMarketplaceDevelopment/NFTMarketplace';
import NFTToken from './Component/blockchain/NFTDevelopment/NFTTokenDevelopment/NFTToken';
import WhiteLabel from './Component/blockchain/DEXDevelopment/WhiteLabelExchange/WhiteLabel';
import BlockchainSupply from './Component/blockchain/BlockChainDevelopment/BlockchainSupplyChain/BlockchainSupply';
import BlockchainVoting from './Component/blockchain/BlockChainDevelopment/BlockchaininVoting/BlockchainVoting';
import BlockchainLiveAution from './Component/blockchain/BlockChainDevelopment/BlockchaininLiveAution/BlockchainLiveAution';
import BlockchainDocument from './Component/blockchain/BlockChainDevelopment/BlockchainDocumentVerifiction/BlockchainDocument';
import BlockchainIdentityVerifiction from './Component/blockchain/BlockChainDevelopment/BlockchainIdentityVerifiction/BlockchainIdentityVerifiction';
import TrustWalletCloneDevelopment from './Component/blockchain/Walletdevelopmen/TrustWalletCloneDevelopment/TrustWalletCloneDevelopment';
import WalletConnectClone from './Component/blockchain/Walletdevelopmen/WalletConnectClone/WalletConnectClone';
import BinanaceSmartChainBEP20TokenDevelopment from './Component/blockchain/tokendevelopment/Binanace Smart Chain BEP20 Token Development/BinanaceSmartChainBEP20TokenDevelopment';
import SemiFungibleTokenDevelopment from './Component/blockchain/tokendevelopment/Semi -Fungible Token Development/SemiFungibleTokenDevelopment';
import PancakeswapExchange from './Component/blockchain/DEXDevelopment/PancakeswapExchangeCloneDevelopment/PancakeswapExchange';
import DeFiTokenDevelopment from './Component/blockchain/DeFiDevelopment/DeFiTokenDevelopment/DeFiTokenDevelopment';
import DeFiWalletDevelopment from './Component/blockchain/DeFiDevelopment/DeFiWalletDevelopment/DeFiWalletDevelopment';
import DeFiSmartContractDevelopment from './Component/blockchain/DeFiDevelopment/DeFi Smart Contract Development/DeFiSmartContractDevelopment';
import DeFiDAppsDevelopment from './Component/blockchain/DeFiDevelopment/DeFi DApps Development/DeFiDAppsDevelopment';
import DeFiInsuranceDevelopment from './Component/blockchain/DeFiDevelopment/DeFi Insurance Development/DeFiInsuranceDevelopment';
import SushiSwapExchange from './Component/blockchain/DEXDevelopment/SushiSwapExchangeClone/SushiSwapExchange';
import UniswapExchange from './Component/blockchain/DEXDevelopment/UniswapExchangeCloneDevelopemnt/UniswapExchange';
import LunchpadDevelopment from './Component/blockchain/LaunchpadDevelopment/LunchpadDevelopment/LunchpadDevelopment';
import GameFiLaunchapd from './Component/blockchain/LaunchpadDevelopment/GameFiLaunchapd/GameFiLaunchapd';
import PolygonNFT from './Component/blockchain/NFTDevelopment/PolygonNFTMarketplace/PolygonNFT';
import NFTLendingPlatform from './Component/blockchain/NFTDevelopment/NFTLendingPlatform/NFTLendingPlatform';
import BinanceNFT from './Component/blockchain/NFTDevelopment/BinanceNFTMarketplace/BinanceNFT';
import NFTMintingDevelopment from './Component/blockchain/NFTDevelopment/NFTMintingDevelopment/NFTMintingDevelopment';
import NFTArtMarketplaceDevelopment from './Component/blockchain/NFTDevelopment/NFTArtMarketplaceDevelopment/NFTArtMarketplaceDevelopment';
import NFTMusicMarketplaceDevelopment from './Component/blockchain/NFTDevelopment/NFTMusicMarketplaceDevelopment/NFTMusicMarketplaceDevelopment';
import NFTCrosschainPlatfromDevelopment from './Component/blockchain/NFTDevelopment/NFTCrosschainPlatfromDevelopment/NFTCrosschainPlatfromDevelopment';
import NFTFantasySportsPlatformDevelopment from './Component/blockchain/NFTDevelopment/NFTFantasySportsPlatformDevelopment/NFTFantasySportsPlatformDevelopment';
import Navbar from './Component/Navbar/Navbar'
import MainBlockchain from './Component/blockchain/mainblockchain/MainBlockchain';


const AllRouteFiles = () => {
  return (
      <BrowserRouter>
      <div >
        <Navbar />
        {/* <Main /> */}
    
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/WbsiteDevelopment' element={<WbsiteDevelopment />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Static' element={<Static />} />
          <Route path='/DynamicWebsite' element={<DynamicWebsite />} />
          <Route path='/Ecommerce' element={ <Ecommerce /> } />
         
          <Route path='/GeneralGamesDevelopment' element={<GeneralGamesDevelopment />} />
          <Route path='/CasinoGames' element={<CasinoGames />} />
          <Route path='/MetaverseGame' element={<MetaverseGame />} />
          <Route path='/BlockchainGame' element={<BlockchainGame />} />
          <Route path='/SmartContractDevelopemnt' element={<SmartContractDevelopemnt />} />
          <Route path='/Private/PublicBlockchainDevelopment' element={<PrivatePublicBlockchain />} />
          <Route path='/DAOBlockchainDevelopmnent' element={<DaoBlockchain/>} />
          <Route path='/WhitePaperWrittingServices' element={<WhitePaperWrittingServices/>} />
          <Route path='/EthereumTokenDevelopment' element={<EthereumTokenDevelopment/>} />
          {/* <Route path='/DefiStaking' element={<DefiStaking/>} /> */}
          
          <Route path='/MainBlockchain' element={<MainBlockchain/>} />
          <Route path='/BlockchainSupply' element={<BlockchainSupply/>} />
          <Route path='/BlockchainVoting' element={<BlockchainVoting/>} />
          <Route path='/BlockchainLiveAution' element={<BlockchainLiveAution/>} />
          <Route path='/BlockchainDocument' element={<BlockchainDocument/>} />
          <Route path='/BlockchainIdentityVerifiction' element={<BlockchainIdentityVerifiction/>} />
          <Route path='/TrustWalletCloneDevelopment' element={<TrustWalletCloneDevelopment/>} />
          <Route path='/WalletConnectClone' element={<WalletConnectClone />} />
          <Route path='/SemiFungibleTokenDevelopment' element={<SemiFungibleTokenDevelopment />} />
          <Route path='/BinanaceSmartChainBEP20TokenDevelopment' element={<BinanaceSmartChainBEP20TokenDevelopment />} />

                       {/* defi pages */}
          <Route path='/DefiStaking' element={<DefiStaking />} />
          <Route path='/DeFiTokenDevelopment' element={<DeFiTokenDevelopment />} />
          <Route path='/DeFiWalletDevelopment' element={<DeFiWalletDevelopment />} />
          <Route path='/DeFiSmartContractDevelopment' element={<DeFiSmartContractDevelopment />} />
          <Route path='/DeFiDAppsDevelopment' element={<DeFiDAppsDevelopment />} />
          <Route path='/DeFiInsuranceDevelopment' element={<DeFiInsuranceDevelopment />} />

                     {/* dex pages */}
          <Route path='/WhiteLabel' element={<WhiteLabel />} />
          <Route path='/PancakeswapExchange' element={<PancakeswapExchange />} />
          <Route path='/SushiSwapExchange' element={<SushiSwapExchange />} />
          <Route path='/UniswapExchange' element={<UniswapExchange />} />
          

                       {/* launch ped development  */}
          <Route path='/GameFiLaunchapd' element={<GameFiLaunchapd />} />
          <Route path='/LunchpadDevelopment' element={ <LunchpadDevelopment /> } />
          

                                {/* nft pages */}
          <Route path='/NFTMarketplace' element={<NFTMarketplace/>} />
          <Route path='/NFTToken' element={ <NFTToken /> } />
          <Route path='/PolygonNFT' element={ <PolygonNFT /> } />
          <Route path='/NFTLendingPlatform' element={ <NFTLendingPlatform /> } />
          <Route path='/BinanceNFT' element={ <BinanceNFT /> } />
          <Route path='/NFTCrosschainPlatfromDevelopment' element={ <NFTCrosschainPlatfromDevelopment /> } />
          <Route path='/NFTMintingDevelopment' element={ <NFTMintingDevelopment /> } />
          <Route path='/NFTArtMarketplaceDevelopment' element={ <NFTArtMarketplaceDevelopment /> } />
          <Route path='/NFTMusicMarketplaceDevelopment' element={ <NFTMusicMarketplaceDevelopment /> } />
          <Route path='/NFTFantasySportsPlatformDevelopment' element={ <NFTFantasySportsPlatformDevelopment /> } />

          
        </Routes>
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default AllRouteFiles
