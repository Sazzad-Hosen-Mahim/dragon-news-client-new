import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FiBookmark } from "react-icons/fi";
import { BiShareAlt } from "react-icons/bi";
import { FaEye, FaStar } from "react-icons/fa";

const NewsSummeryCard = ({ news }) => {
  const { title, _id, total_view, author, rating, details, image_url } = news;
  // console.log(news);
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            roundedCircle
            src={author?.img}
            style={{ height: "60px" }}
            className="me-4"
          ></Image>
          <div>
            <p className="mb-0">{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FiBookmark className="me-2"></FiBookmark>
          <BiShareAlt></BiShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="mb-4">{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Read More.</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>
          <FaStar className="text-warning me-2"></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2"></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummeryCard;
