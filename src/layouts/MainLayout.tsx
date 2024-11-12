import { ReactNode } from "react";
import { useEffect } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedBackground } from 'animated-backgrounds'
import IconPage from '../components/assets/img/icon2.png'

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
 useEffect(() => {
    document.title = "Marek Pichniarczyk - Portfolio";
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = IconPage;
    }
 }, []);

    return (
        <div className="flex flex-col relative min-h-screen">
              <AnimatedBackground
                animationName="auroraBorealis"
                style={{opacity: 0.3}}
            />
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div >
    );
};

export default MainLayout;