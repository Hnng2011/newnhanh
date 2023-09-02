import { React, useEffect } from 'react';
import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import routes from './pages';
import Page404 from './pages/404';
import '../src/assets/binasea.css';
import '../src/assets/font-awesome.css';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const { publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
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
                <Header />
                <Routes>
                    {
                        routes.map((data, idx) => (
                            <Route key={idx} path={data.path} element={data.component} exact />
                        ))
                    }
                    <Route path='*' element={<Page404 />} />
                </Routes>

                <Footer />
            </WagmiConfig>
        </>
    );
}

export default App;
