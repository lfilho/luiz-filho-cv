import React, { Component, ReactNode } from "react";

import { library as fontAwesomeLibrary } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

fontAwesomeLibrary.add(faLink);

//TODO we have typescript now, make this a private method
function sanitizeAnchors(text: string): string {
  return text.trim().toLowerCase().replace(/\s/g, "-");
}

interface PropsType {
  id: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode[];
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default class AnchoredHeader extends Component<PropsType> {
  render() {
    const Header = `h${this.props.level}` as HeadingTag;
    //TODO i think there's a bug here. id most come from children, not props.id
    const id = sanitizeAnchors(this.props.id);
    const href = `#${id}`;
    const anchor = (
      <a className="header-link" href={href}>
        <FontAwesomeIcon icon={faLink} fixedWidth />
      </a>
    );
    return (
      <Header id={id}>
        {anchor}
        {this.props.children}
      </Header>
    );
  }
}
