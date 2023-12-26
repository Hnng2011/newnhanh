import { React, useEffect } from 'react';
import AOS from 'aos';
import '../src/assets/binasea.css';
import '../src/assets/font-awesome.css';
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public'
import Header2 from './components/header/Header2'
import Mainpage from './components/Mainpage'

const { publicClient, webSocketPublicClient } = configureChains(
    [sepolia],
    [publicProvider()],
)

const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
})

function App() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <>
            <WagmiConfig config={config}>
                <Header2 />
                <Mainpage />
            </WagmiConfig>
        </>
    );
}

export default App;
