import type { FC } from 'react';

interface HeaderProps {
  logoSrc?: string;
  menuIconSrc?: string;
  onMenuClick?: () => void;
  className?: string;
}

const Header: FC<HeaderProps> = ({
  logoSrc = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-white.png",
  menuIconSrc = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png",
  onMenuClick,
  className = ''
}) => {
  return (
    <nav className={className}>
      <div className="logo">
        <img src={logoSrc} alt="Logo" />
      </div>
      <div className="links">
        <img 
          src={menuIconSrc} 
          alt="Menu" 
          onClick={onMenuClick}
          style={{ cursor: onMenuClick ? 'pointer' : 'default' }}
        />
      </div>
    </nav>
  );
};

export default Header;
