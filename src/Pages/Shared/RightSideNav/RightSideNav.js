import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";

import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-4"
          variant="outline-primary"
        >
          Login With Google <FcGoogle />
        </Button>
        <Button className="mb-3" variant="outline-dark">
          Login With GitHub <BsGithub />{" "}
        </Button>
      </ButtonGroup>
      <div className="mt-5">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item className="mb-3">
            Facebook <FaFacebook />
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            Github <FaGithub />
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            Whatsapp <FaWhatsapp />{" "}
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            Twitter <FaTwitter />
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            Twitch <FaTwitch />{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>
      <BrandCarousel></BrandCarousel>
    </div>
  );
};

export default RightSideNav;
