// This file is part of InvenioRDM
// Copyright (C) 2023 CERN.
//
// Invenio RDM Records is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import PropTypes from "prop-types";
import { AccessRequestsTabContent } from "./AccessRequestsTabContent";

export class AccessRequestsTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { record } = this.props;
    return (
      <Modal.Content>
        <AccessRequestsTabContent record={record}/>
      </Modal.Content>
    );
  }
}

AccessRequestsTab.propTypes = {
  record: PropTypes.string.isRequired,
};
