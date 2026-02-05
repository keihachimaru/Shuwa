import "@/styles/FootBar.css";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../../public/shuwashuwa.png";

const Footbar = () => {
  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/shuwashuwa.es/",
      Icon: FaInstagram,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/Shuwa-Shuwa-703476399783138",
      Icon: FaFacebook,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCmtBIbEqCJTGIZLVcoK96jQ",
      Icon: FaYoutube,
    },
  ];

  return (
    <footer className="footbar">
        <img 
            src={logo} 
            alt="Shuwa Shuwa Izakaya logo" 
            className="footbar-logo" 
        />

        <div className="contents">
          <div className="socials">
            {socials.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="social"
              >
                <Icon size={22}/>
              </a>
            ))}
          </div>

          <div className="meta">
            <p>© {new Date().getFullYear()} Shuwa Shuwa</p>
            <p className="attribution">
                Website by
                <a
                  href="https://github.com/keihachimaru?tab=overview&from=2026-01-01&to=2026-01-06"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    Author
                </a>
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footbar;