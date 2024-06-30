import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Badge, Stack } from "react-bootstrap";

export default function Accordions(props) {
  function getColor(score) {
    if (score > 65) {
      return "success";
    } else if (score > 55) {
      return "warning";
    } else {
      return "danger";
    }
  }

  const takeCompanyNamefromUrl = (url) => {
    try {
      const { hostname } = new URL(url);
      const parts = hostname.split(".").filter((part) => part !== "www");

      if (parts.length >= 2) {
        return parts[parts.length - 2];
      } else {
        return parts[0];
      }
    } catch (error) {
      console.error("Invalid URL:", error);
      return null;
    }
  };

  return (
    <Accordion>
      {props.suggestions
        .sort((a, b) => b.score - a.score)
        .map((company) => (
          <Accordion.Item key={company.key} eventKey={company.key}>
            <Accordion.Header>
              <h6>
                <Badge bg={getColor(company.score)}>{company.score}</Badge>{" "}
                {takeCompanyNamefromUrl(company.url)}
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              <Stack className="s-0" direction="horizontal" gap={3}>
                <img src={company.img} alt="company-pic" />
                <figure className="text-end">
                  <blockquote className="blockquote">
                    <p>{company.product}</p>
                  </blockquote>
                  {company.price && <figcaption>{company.price}</figcaption>}
                </figure>
              </Stack>
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion>
  );
}
