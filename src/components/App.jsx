/* global chrome */
import React, { useEffect } from "react";
import axios from "axios";

// React component imports
import CircleScore from "./CircleScore";
import Accordions from "./Accordions";
import Comment from "./Comment";
import { useState } from "react";

import companies from "../companies";

// Boostrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  const [displayString, setDisplayString] = useState("");
  const [itemName, setItemName] = useState("");
  const [score, setScore] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [number, setNumber] = useState(0);

  const GetScoreForCompanyFromTab = (url) => {
    const result = companies.find((company) =>
      company?.url == url ? url : null
    );
    if (result != undefined) {
      setScore(result.score);
    }

    console.log(result);
  };
  useEffect(() => {
    try {
      setScore(60);
      //GetScoreForCompanyFromTab("https://5eadvancedmaterials.com/boron-101/");
      let queryOptions = { active: true, currentWindow: true };

      chrome.tabs.query(queryOptions, function (res) {
        console.log(res[0].url);
        GetScoreForCompanyFromTab(res[0].url);
      });

      console.log("Testing console");

      console.log(score);
      // testFunction();
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    setNumber(0);
  }, [score]);
  // const fakePropsScore = 89;

  return (
    <div className="App">
      <Container style={{ minwidth: "40vw" }}>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card
              className="text-center"
              style={{ width: "20rem", height: "100%" }}
            >
              <Card.Header as="h5">Consumer Detail</Card.Header>
              <Card.Body>
                5E Advanced Materials Inc is engaged boron specialty advanced
                materials and lithium with a focus on enabling decarbonization,
                including electric transportation, clean energy, and food
                security.
              </Card.Body>
            </Card>
          </Col>
          <Col xs>
            <Card className="text-center" style={{ width: "20rem" }}>
              <Card.Header as="h5">Consumer Score</Card.Header>
              <Card.Body>
                <CircleScore
                  consumerScore={score || 0}
                  number={number}
                  setNumber={setNumber}
                />
              </Card.Body>
              <Comment score={score || 0} />
              {score ? (
                <div>
                  <Card.Header as="h5">Local Alternatives</Card.Header>
                  <Accordions suggestions={suggestions} />
                </div>
              ) : null}
              {/* <Button variant="secondary" onClick={testFunction}>
          TEST FUNCTION
        </Button>
        <div>{displayString}</div>
        <div>{itemName}</div> */}
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid="md">
        <Row>
          <Col md={12}>
            <Card className="text-center full-width-card">
              <Card.Header>Other Eco friendly Products</Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// /* global chrome */
// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   chrome.tabs.getCurrent(tab => {
//     console.log(tab)
//   })
//   return "hi";
// }

// chrome.runtime.onInstalled.addListener(async () => {
//   console.log("testing2")
//   console.log(await getCurrentTab());
// });

// chrome.runtime.onInstalled.addListener((reason) => {
//   console.log("testing1")
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: 'onboarding.html'
//     });
//   }
// });
