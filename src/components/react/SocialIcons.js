// import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
// import { StyledSocialIcons } from "./styles/SocialIcons.styled";
import { StyledSocialIcons } from "../styles/StyledSocialIcons";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <ul class="social-media">
        <li>
          <a href="/">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </StyledSocialIcons>
  );
}
