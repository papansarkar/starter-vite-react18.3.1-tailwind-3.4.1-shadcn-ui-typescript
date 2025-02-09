// src/components/Logo.tsx
import logo from "../../assets/react.svg";
const Logo = ({ className }: { className?: string }) => (
    <img src={logo} alt='Your Brand' className={className} />
);

export default Logo;
