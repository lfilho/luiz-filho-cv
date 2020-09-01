import React, { Component } from "react";

import { library as fontAwesomeLibrary } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

import AnchoredHeader from "../../lib/anchored-header";

fontAwesomeLibrary.add(faLanguage);

export default class Languages extends Component<{ data: object }> {
  render() {
    const languages = this.props.data.map((entry, i) => (
      <div key={i}>
        <FontAwesomeIcon icon={faLanguage} />
        <span>
          {" "}
          {entry.name} — {entry.level}
        </span>
      </div>
    ));

    return (
      <section>
        <AnchoredHeader level="2">Languages</AnchoredHeader>

        <div className="languages grid-container">{languages}</div>
      </section>
    );
  }
}
