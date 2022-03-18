// import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
// import { StyledSocialIcons } from "./styles/SocialIcons.styled";
import { StyledSocialIcons } from "../styles/StyledSocialIcons";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <ul>
        <li>
          <a href="https://twitter.com">twitter</a>
        </li>
        <li>
          <a href="https://facebook.com">facebook</a>
        </li>
        <li>
          <a href="https://linkedin.com">linkedin </a>
        </li>
      </ul>
    </StyledSocialIcons>
  );
}
