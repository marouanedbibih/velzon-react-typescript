import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import UsersByDevice from "../../DashboardAnalytics/UsersByDevice";
import JobSummary from "./JobSummary";
import NatworkSummary from "./NatworkSummary";
import VisitorGraph from "./VisitorGraph";
import Widgets from "./Widgets";

const Statistics = () => {
  document.title = "Statistics | Velzon -  Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="STATISTICS" pageTitle="Jobs" />

          <Row className="row">
            <Widgets 
            // dataColors='["--vz-success", "--vz-danger"]' 
            />
          </Row>

          <Row className="row">
            <VisitorGraph dataColors='["--vz-primary", "--vz-danger", "--vz-secondary", "--vz-success","--vz-warning", "--vz-success"]' />
            <UsersByDevice />
          </Row>

          <Row className="row">
            <NatworkSummary dataColors='["--vz-primary", "--vz-secondary"]' />
            <JobSummary dataColors='["--vz-info","--vz-secondary", "--vz-primary", "--vz-danger"]' />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Statistics;
