import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <Cont>
        <Item>
          <h1>Contact</h1>
          <div></div>
        </Item>
        <Form>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="" id="" cols="50" rows="7"></textarea>
          </div>
          <button>Send Message</button>
        </Form>
      </Cont>

      <Section>
        <Contain>
          <div></div>
          <h1>Subscribe to our Newsletter</h1>
          <p>
            To be the first to get notified on upcoming <br /> events and the
            release of our newsletters.
          </p>

          <form action="">
            <label htmlFor="email">Email Address</label>
            <div>
              <input type="email" defaultValue="abayomi.tosin2017@gmail.com" />
              <button>Subscribe</button>
            </div>
          </form>
        </Contain>
      </Section>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  position: relative;
`;

const Cont = styled.div`
  position: relative;
  width: 60%;
  height: 80vh;
  left: 20%;
  top: -190px;
  bottom: -150px;
  margin-bottom: -120px;
  background: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  object-fit: cover;

  @media and (max-width: 768px) {
    border-radius: 12px;
    object-fit: cover;
  }

  @media and (max-width: 425px) {
    border-radius: 12px;
    object-fit: cover;
  }

  @media and (max-width: 360px) {
    border-radius: 12px;
    object-fit: cover;
  }
`;

const Item = styled.div`
  margin-left: 15px;
  padding: 30px;
  > div {
    border: 2px solid #0950cd;
    border-radius: 5px;
    width: 93px;
    margin-top: 10px;
  }
`;

const Form = styled.div`
  margin-left: 50px;
  > div > label {
    display: block;
    margin-top: 10px;
  }
  > div > label[htmlFor="message"] {
    margin-top: 25px;
  }
  > div > input[type="email"] {
    width: 90%;
    padding: 12px 20px;
    margin: 8px 0;
    padding: 15px;
    border-radius: 5px;
  }
  > div > textarea {
    margin-top: 10px;
    padding: 20px;
    width: 90%;
    border-radius: 5px;
  }
  > button {
    /* Auto layout */

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 24px 40px;
    width: 200px;
    height: 40px;
    color: #fff;
    font-size: 1em;
    font-weight: 600;
    border: none;

    /* brand color/accent */

    background: #0950cd;
    border-radius: 5px;
  }
`;

const Section = styled.div`
  position: relative;
  width: 80%;
  height: 350px;
  left: 10%;
  background: #231f20;
`;

const Contain = styled.div`
  padding: 30px;
  margin-left: 60px;
  > div {
    position: absolute;
    left: 50%;
    margin-top: 10px;
    margin-bottom: 70px;
    border: 1px solid #fff;
    border-radius: 5px;
    width: 44px;
  }
  > h1 {
    display: flex;
    justify-content: center;
    color: #fff;
    line-height: 1.5em;
    margin-top: 30px;
    margin-bottom: 0px;
  }
  > p {
    display: flex;
    justify-content: center;
    color: #fff;
    line-height: 1.5em;
    margin-top: 7px;
    margin-bottom: 0px;
  }
  > form {
    > label {
      display: block;
      margin-top: 30px;
      color: #fbfbfb;
      opacity: 69%;
    }

    > div {
      display: flex;
      justify-content: space-between;
    }
    > div > input[type="email"] {
      width: 65%;
      padding: 12px 20px;
      margin: 8px 0;
      height: 68px;
      border-radius: 5px;
      background: transparent;
      color: #fff;
      border: 2px solid white;
    }
    > div > button {
      width: 25%;
      padding: 12px 20px;
      margin: 8px 0;
      height: 68px;
      border-radius: 5px;
      background: white;
      color: #000;
      border: 2px solid white;
      margin-right: 80px;
      font-size: 1em;
      font-weight: 600;
    }
  }
`;
