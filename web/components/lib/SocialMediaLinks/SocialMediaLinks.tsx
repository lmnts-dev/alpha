// Imports
// __________________________________________________________________________________________

// Core
import React from "react";
import { LMNTS_DefaultSocialMedia } from "../../../constants/types";

// Styles
import { SocialMediaLinksStyle } from "./styles.scss";
import { Icon } from "../Icon";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_SocialMediaLinks = LMNTS_DefaultSocialMedia & {
  addClass?: string;
};

/**
 *
 * Icon.js
 * @author Peter Laxalt
 * @description Show listings of Social Media Links
 *
 */
export const SocialMediaLinks: React.FunctionComponent<LMNTS_SocialMediaLinks> = ({
  social_media,
  addClass,
}) => {
  social_media;

  return (
    <SocialMediaLinksStyle
      className={`social-link-listings ${addClass ? addClass : ""}`}
    >
      {social_media.linked_in ? (
        <li>
          <a
            href={social_media.linked_in}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Icon name="linkedin" />
          </a>
        </li>
      ) : null}
      {social_media.instagram ? (
        <li>
          <a
            href={social_media.instagram}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Icon name="instagram" />
          </a>
        </li>
      ) : null}
      {social_media.facebook ? (
        <li>
          <a
            href={social_media.facebook}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Icon name="facebook" />
          </a>
        </li>
      ) : null}
      {social_media.twitter ? (
        <li>
          <a
            href={social_media.twitter}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Icon name="twitter" />
          </a>
        </li>
      ) : null}
    </SocialMediaLinksStyle>
  );
};

///////////////
