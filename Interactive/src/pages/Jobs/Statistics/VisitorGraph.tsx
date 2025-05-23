import React from "react";
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

const VisitorGraph = ({ dataColors }:any) => {
  var chartTreemapDiffColor = getChartColorsArray(dataColors);

  const series = [
    {
      data: [
        {
          x: "USA",
          y: 321,
        },
        {
          x: "Russia",
          y: 165,
        },
        {
          x: "India",
          y: 184,
        },
        {
          x: "China",
          y: 98,
        },
        {
          x: "Canada",
          y: 84,
        },
        {
          x: "Brazil",
          y: 31,
        },
        {
          x: "UK",
          y: 70,
        },
        {
          x: "Australia",
          y: 30,
        },
        {
          x: "Germany",
          y: 44,
        },
        {
          x: "Italy",
          y: 68,
        },
        {
          x: "Israel",
          y: 28,
        },
        {
          x: "Indonesia",
          y: 19,
        },
        {
          x: "Bangladesh",
          y: 29,
        },
      ],
    },
  ];
  var options = {
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "Visitors Location",
      align: "center",
      style: {
        fontWeight: 500,
      },
    },
    colors: chartTreemapDiffColor,
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
  };
  return (
    <React.Fragment>
      <Col className="col-xl-8">
        <Card className="card">
          <CardHeader className="card-header">
            <div className="d-flex">
              <h5 className="card-title mb-0 flex-grow-1  ">Visitor Graph</h5>
              <div className="flex-shrink-0">
                <UncontrolledDropdown className="card-header-dropdown">
                  <DropdownToggle
                    tag="a"
                    className="text-reset dropdown-btn"
                    to="#"
                  >
                    <span className="fw-semibold text-uppercase fs-12">
                      Sort by:{" "}
                    </span>
                    <span className="text-muted">
                      Monthly<i className="mdi mdi-chevron-down ms-1"></i>
                    </span>
                    <DropdownMenu className="dropdown-menu dropdown-menu-end">
                      <DropdownItem>Today</DropdownItem>
                      <DropdownItem>Weekly</DropdownItem>
                      <DropdownItem>Monthly</DropdownItem>
                      <DropdownItem>Yearly</DropdownItem>
                    </DropdownMenu>
                  </DropdownToggle>
                </UncontrolledDropdown>
              </div>
            </div>
          </CardHeader>
          <CardBody className="card-body">
            <ReactApexChart dir="ltr"
              className="apex-charts"
              series={series}
              options={options}
              type="treemap"
              height={350}
            />
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default VisitorGraph;
