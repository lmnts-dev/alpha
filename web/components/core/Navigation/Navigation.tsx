// Core
import React, { createRef } from "react";

// Types
import { LMNTS_Navigation_Data } from "../../../constants/types";

// Components
import { InnerGrid } from "../InnerGrid";
import Link from "next/link";
import LazyImage from "../../../utils/lazyImage";

// Constants
import { Settings } from "../../../constants/site/Settings";

// Styles
import { NavigationStyle } from "./styles.scss";
import slugify from "../../../utils/slugify";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_Navigation = {
  data: LMNTS_Navigation_Data;
};

type LMNTS_NavigationState = {
  activeLink: string | null;
  isOverlayVisible: boolean;
};

/**
 *
 * @name components/Navigation/Navigation.tsx
 * @author Peter Laxalt
 * @description The website navigation
 *
 */
export class Navigation extends React.PureComponent<
  LMNTS_Navigation,
  LMNTS_NavigationState
> {
  // Create our Navigation Ref
  private navRef = createRef<HTMLDivElement>();

  // Create our Constructor
  constructor(props: LMNTS_Navigation) {
    super(props);

    this.state = {
      activeLink: null,
      isOverlayVisible: false,
    };

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleDropdownList = this.toggleDropdownList.bind(this);
    this.hideOverlaysAndMenus = this.hideOverlaysAndMenus.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  /**
   *
   * @name toggleOverlay
   * @description Show/hide dropdown menus.
   *
   */
  toggleOverlay = () => {
    if (this.state.isOverlayVisible) {
      this.setState({
        isOverlayVisible: false,
        activeLink: null,
      });
    } else {
      this.setState({
        isOverlayVisible: true,
        activeLink: null,
      });
    }
  };

  /**
   *
   * @name toggleDropdownList
   * @description Show/hide dropdown menus.
   * @param {string} clickedLink
   *
   */
  toggleDropdownList = (clickedLink: string | null = null) => {
    if (this.state.activeLink == clickedLink) {
      this.setState({
        activeLink: null,
      });
    } else {
      this.setState({
        activeLink: clickedLink,
      });
    }
  };

  /**
   *
   * @name hideOverlaysAndMenus
   * @description Hides all dropdown menu & overlays.
   *
   */
  hideOverlaysAndMenus = () => {
    this.setState({
      activeLink: null,
      isOverlayVisible: false,
    });
  };

  /**
   *
   * @name handleClickOutside
   * @description Hides all dropdown menus.
   *
   */
  handleClickOutside = (e: MouseEvent) => {
    if (
      this.navRef &&
      this.navRef.current !== null &&
      !this.navRef.current.contains(e.target as Node)
    ) {
      this.setState({
        activeLink: null,
      });
    }
  };

  /**
   *
   * @name Lifecycles
   * @description Set up our event listeners to hide the dropdown menu if clicked outside of the nav bar.
   *
   */

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    let { data } = this.props;

    // console.log(
    //   data ? "✅ Navigation: Data loaded." : "🚫 Navigation: data not loaded."
    // );

    return (
      <NavigationStyle
        className={`nav-bar ${
          this.state.isOverlayVisible ? `__overlay-visible` : ``
        }`}
        ref={this.navRef}
      >
        <InnerGrid addClass="__nav-grid">
          <div className="nav-branding">
            <Link href={`/`}>
              <a onClick={() => this.hideOverlaysAndMenus()}>
                <LazyImage
                  src="/covered-logomark.svg"
                  alt={Settings.siteTitleShort}
                  title={Settings.siteTitleShort}
                />
              </a>
            </Link>
          </div>
          <nav className="nav-linklist">
            {data.link_list.length > 0 ? (
              <ul>
                {data.link_list.map((linkItem, idx: number) => {
                  if (!linkItem.is_cta && linkItem.link && linkItem.link.href) {
                    let isDropdown =
                      linkItem.dropdown &&
                      linkItem.dropdown.link_list &&
                      linkItem.dropdown.link_list.length > 0;

                    return (
                      <li key={idx}>
                        {isDropdown ? (
                          <span
                            className={`nav-item ${
                              isDropdown ? "__is-dropdown" : ""
                            }`}
                            onClick={() =>
                              this.toggleDropdownList(
                                slugify(linkItem.label ? linkItem.label : "")
                              )
                            }
                          >
                            {linkItem.label ? linkItem.label : ""}
                          </span>
                        ) : (
                          <Link
                            href={linkItem.link.href}
                            as={linkItem.link.as ? linkItem.link.as : undefined}
                          >
                            <a onClick={() => this.hideOverlaysAndMenus()}>
                              {linkItem.label ? linkItem.label : ""}
                            </a>
                          </Link>
                        )}

                        {isDropdown && linkItem.label ? (
                          <ul
                            className={`nav-dropdown ${
                              this.state.activeLink == slugify(linkItem.label)
                                ? `__visible`
                                : ``
                            }`}
                            data-dropdown={
                              linkItem.label
                                ? slugify(linkItem.label)
                                : undefined
                            }
                          >
                            {linkItem.dropdown
                              ? linkItem.dropdown.link_list.map(
                                  (dropdownLinkItem, idxx: number) => {
                                    if (
                                      dropdownLinkItem.link &&
                                      dropdownLinkItem.link.href
                                    ) {
                                      return (
                                        <li key={idxx}>
                                          <Link
                                            href={dropdownLinkItem.link.href}
                                            as={
                                              dropdownLinkItem.link.as
                                                ? dropdownLinkItem.link.as
                                                : undefined
                                            }
                                          >
                                            <a
                                              className="dropdown-link"
                                              onClick={() =>
                                                this.hideOverlaysAndMenus()
                                              }
                                            >
                                              <figure>
                                                <span>
                                                  <LazyImage
                                                    src={`/icons/ico-${dropdownLinkItem.theme_icon_illustration}.svg`}
                                                    alt={`${dropdownLinkItem.label}`}
                                                  />
                                                </span>
                                              </figure>
                                              <span className="dropdown-link-label">
                                                {dropdownLinkItem.label}
                                              </span>
                                              <p>
                                                {dropdownLinkItem.description}
                                              </p>
                                            </a>
                                          </Link>
                                        </li>
                                      );
                                    } else {
                                      console.log(
                                        "🚫 Navigation: Dropdown link item missing required properties."
                                      );
                                      return null;
                                    }
                                  }
                                )
                              : null}
                          </ul>
                        ) : null}
                      </li>
                    );
                  } else if (
                    linkItem.is_cta &&
                    linkItem.link &&
                    linkItem.link.href
                  ) {
                    return (
                      <li key={idx}>
                        <Link
                          href={linkItem.link.href}
                          as={linkItem.link.as ? linkItem.link.as : undefined}
                        >
                          <a
                            className="btn"
                            onClick={() => this.hideOverlaysAndMenus()}
                          >
                            {linkItem.label ? linkItem.label : ""}
                          </a>
                        </Link>
                      </li>
                    );
                  } else {
                    console.log(
                      "🚫 Navigation: Link missing required properties."
                    );
                    return null;
                  }
                })}

                {/* __________________________________________________ */}
                {/* Hamburger Button */}
                <li
                  className={`__hamburger`}
                  onClick={() => this.toggleOverlay()}
                >
                  <span
                    className="__hamburger-toggle"
                    role="button"
                    aria-label="Show navigation overlay menu."
                    aria-expanded={this.state.isOverlayVisible ? true : false}
                  />
                </li>
              </ul>
            ) : null}
          </nav>
        </InnerGrid>

        {/* _____________________________________________________________________________ */}
        {/* Navigation Overlay */}
        {this.state.isOverlayVisible ? (
          <div className="__nav-overlay">
            <InnerGrid addClass="__nav-overlay-grid">
              <nav className="nav-overlay-linklist">
                {data.link_list.length > 0 ? (
                  <ul>
                    {data.link_list.map((linkItem, idx: number) => {
                      if (
                        !linkItem.is_cta &&
                        linkItem.link &&
                        linkItem.link.href
                      ) {
                        let isDropdown =
                          linkItem.dropdown &&
                          linkItem.dropdown.link_list &&
                          linkItem.dropdown.link_list.length > 0;

                        return (
                          <li key={idx}>
                            {isDropdown ? (
                              <span
                                className={`nav-item ${
                                  isDropdown ? "__is-dropdown" : ""
                                } ${
                                  this.state.activeLink ==
                                  slugify(linkItem.label ? linkItem.label : "")
                                    ? `__dropdown-is-visible`
                                    : ``
                                }`}
                                onClick={() =>
                                  this.toggleDropdownList(
                                    slugify(
                                      linkItem.label ? linkItem.label : ""
                                    )
                                  )
                                }
                              >
                                {linkItem.label ? linkItem.label : ""}
                              </span>
                            ) : (
                              <Link
                                href={linkItem.link.href}
                                as={
                                  linkItem.link.as
                                    ? linkItem.link.as
                                    : undefined
                                }
                              >
                                <a onClick={() => this.toggleOverlay()}>
                                  {linkItem.label ? linkItem.label : ""}
                                </a>
                              </Link>
                            )}

                            {isDropdown && linkItem.label ? (
                              <ul
                                className={`nav-dropdown ${
                                  this.state.activeLink ==
                                  slugify(linkItem.label)
                                    ? `__visible`
                                    : ``
                                }`}
                                data-dropdown={
                                  linkItem.label
                                    ? slugify(linkItem.label)
                                    : undefined
                                }
                              >
                                {linkItem.dropdown
                                  ? linkItem.dropdown.link_list.map(
                                      (dropdownLinkItem, idxx: number) => {
                                        if (
                                          dropdownLinkItem.link &&
                                          dropdownLinkItem.link.href
                                        ) {
                                          return (
                                            <li key={idxx}>
                                              <Link
                                                href={
                                                  dropdownLinkItem.link.href
                                                }
                                                as={
                                                  dropdownLinkItem.link.as
                                                    ? dropdownLinkItem.link.as
                                                    : undefined
                                                }
                                              >
                                                <a
                                                  className="dropdown-link"
                                                  onClick={() =>
                                                    this.toggleOverlay()
                                                  }
                                                >
                                                  <figure>
                                                    <span>
                                                      <LazyImage
                                                        src={`/icons/ico-${dropdownLinkItem.theme_icon_illustration}.svg`}
                                                        alt={`${dropdownLinkItem.label}`}
                                                      />
                                                    </span>
                                                  </figure>
                                                  <span className="dropdown-link-label">
                                                    {dropdownLinkItem.label}
                                                  </span>
                                                  <p>
                                                    {
                                                      dropdownLinkItem.description
                                                    }
                                                  </p>
                                                </a>
                                              </Link>
                                            </li>
                                          );
                                        } else {
                                          console.log(
                                            "🚫 Navigation: Dropdown link item missing required properties."
                                          );
                                          return null;
                                        }
                                      }
                                    )
                                  : null}
                              </ul>
                            ) : null}
                          </li>
                        );
                      } else if (
                        linkItem.is_cta &&
                        linkItem.link &&
                        linkItem.link.href
                      ) {
                        return null; // Hide CTA buttons on mobile
                      } else {
                        console.log(
                          "🚫 Navigation: Link missing required properties."
                        );
                        return null;
                      }
                    })}
                  </ul>
                ) : null}
              </nav>
            </InnerGrid>
          </div>
        ) : null}
      </NavigationStyle>
    );
  }
}

// End Component
// __________________________________________________________________________________________
