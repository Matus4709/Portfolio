const Footer: React.FC = () => {
    return (
        <footer className="flex bg-transparent mx-auto text-gray-500 font-light text-center text-sm p-2">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </footer>
    );
}

export default Footer;