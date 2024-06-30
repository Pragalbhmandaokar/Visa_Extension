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
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  const [Product, setProduct] = useState(null);
  const [productRecommendation, SetProductRecommendation] = useState([]);
  const [number, setNumber] = useState(0);

  const getProductRecommendation = async () => {
    if (Product) {
      const recommendation = companies.filter(
        (company) =>
          company.score > Product.score && company.name == Product.name
      );

      SetProductRecommendation(recommendation);
    }
  };

  const takeCompanyNamefromUrl = (url) => {
    try {
      const { hostname } = new URL(url);
      const parts = hostname.split(".").filter((part) => part !== "www");

      if (parts.length >= 2) {
        return parts[0];
      } else {
        return parts[0];
      }
    } catch (error) {
      console.error("Invalid URL:", error);
      return null;
    }
  };

  const GetScoreForCompanyFromTab = async (url) => {
    const companyName = takeCompanyNamefromUrl(url);

    console.log(companyName);
    const result = companies.find((company) =>
      takeCompanyNamefromUrl(company?.url) == companyName ? companyName : null
    );

    if (result != undefined) {
      setProduct(result);
    }
    await getProductRecommendation();
  };

  useEffect(async () => {
    try {
      // await GetScoreForCompanyFromTab(
      //   "https://www.aljouf.com.sa/language/change/en"
      // );

      let queryOptions = { active: true, currentWindow: true };

      chrome.tabs.query(queryOptions, function (res) {
        console.log(res[0].url);
        GetScoreForCompanyFromTab(res[0].url);
      });

      console.log("Testing console");

      // testFunction();
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (Product) {
      getProductRecommendation();
    }
  }, [Product]);

  return (
    <div className="App">
      <Card
        className="text-start"
        style={{
          width: "18rem",
          height: "25vh",
        }}
      >
        <Card.Header as="h5">Company Detail</Card.Header>
        <Card.Body style={{ overflowY: "scroll" }}>
          {(Product && Product.information) || "Company information"}
        </Card.Body>
      </Card>

      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Header as="h5">EcoScore</Card.Header>
        <Card.Body>
          <CircleScore
            consumerScore={(Product && Product.score) || 0}
            number={number}
            setNumber={setNumber}
          />
        </Card.Body>
        <Comment score={Product && Product.score ? Product.score : 0} />
        {Product && Product.score && productRecommendation.length > 0 ? (
          <div>
            <Card.Header as="h5">Other Eco friendly Products</Card.Header>
            <Accordions suggestions={productRecommendation} />
          </div>
        ) : null}
      </Card>
    </div>
  );
}

// /* global chrome */
// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   chrome.tabs.getCurrent((tab) => {
//     console.log(tab);
//   });
//   return "hi";
// }

// chrome.runtime.onInstalled.addListener(async () => {
//   console.log("testing2");
//   console.log(await getCurrentTab());
// });

// chrome.runtime.onInstalled.addListener((reason) => {
//   console.log("testing1");
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: "onboarding.html",
//     });
//   }
// });
