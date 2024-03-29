import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, category_id } = news;

  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title className="mb-3">{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All News in this category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
