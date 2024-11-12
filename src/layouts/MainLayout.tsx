import { ReactNode } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatedBackground } from 'animated-backgrounds'

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
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