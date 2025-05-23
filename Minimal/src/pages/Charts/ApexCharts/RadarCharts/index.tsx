import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../../../Components/Common/BreadCrumb';
import {SimpleRadar,MultipleRadar,PolygonRadar} from './RadarCharts';

const RadarCharts = () => {
    document.title="Apex Radar Charts | Velzon - React Admin & Dashboard Template";
    return (
        <div className="page-content">
            <Container fluid>
                <BreadCrumb title="Radar Charts" pageTitle="Apexcharts" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <CardHeader>
                                <h4 className="card-title mb-0">Basic Radar Chart</h4>
                            </CardHeader>

                            <CardBody>
                                <SimpleRadar dataColors='["--vz-primary"]'/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <CardHeader>
                                <h4 className="card-title mb-0">Radar Chart - Multiple series</h4>
                            </CardHeader>
                            <CardBody>
                                <MultipleRadar dataColors='["--vz-primary-rgb, 0.35", "--vz-primary-rgb, 0.25", "--vz-primary-rgb, 0.50"]'/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <CardHeader>
                                <h4 className="card-title mb-0">Radar Chart - Polygon Fill</h4>
                            </CardHeader>
                            <CardBody>
                                <PolygonRadar dataColors='["--vz-primary"]'/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RadarCharts