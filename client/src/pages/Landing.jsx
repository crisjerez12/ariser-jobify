// import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            assumenda, sit officiis veritatis ipsam consectetur consequatur
            vitae sint laboriosam fugiat, incidunt perspiciatis dolor, nostrum
            quos eaque odit dicta voluptas? Veniam veritatis distinctio laborum
            repellat praesentium reiciendis quasi mollitia magnam dignissimos
            eius deleniti, saepe obcaecati debitis. Unde numquam asperiores
            commodi dolorem?
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn register-link">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
