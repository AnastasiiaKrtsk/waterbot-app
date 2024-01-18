import styled from "styled-components";

export const WhyWrapper = styled.div`
  display: flex;
  padding: 24px 16px;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 32px;
  border-radius: 10px;
  background: var(--light-blue-1);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  @media only screen and (min-width: 767px) {
    margin-top: 60px;
    width: 494px;
    padding: 32px 24px;
  }
  @media only screen and (min-width: 1440px) {
    margin-top: 0;
    padding: 16px 24px;
  }
`;
export const WhyText = styled.div`
  font-size: 18px;
  font-weight: var(--medium);
  line-height: calc(20 / 18);
`;
export const WhyList = styled.ol`
  list-style-type: none;
  counter-reset: list-counter;
  padding-left: 20px;
  li {
    position: relative;
    counter-increment: list-counter;
    margin-bottom: 8px;
    display: flex;
    align-items: center; /* Vertically center the content */
  }

  li::before {
    content: "";
    width: 8px; /* Diameter of the ellipse */
    height: 8px; /* Height of the ellipse */
    background-color: var(--dark-blue); /* Change to your desired color */
    border-radius: 50%; /* Makes it an ellipse */
    position: absolute;
    left: -20px;
    top: 50%; /* Adjust vertically to center */
    transform: translateY(-50%); /* Adjust vertically to center */
  }
  @media only screen and (min-width: 767px) {
    li {
      margin-bottom: 16px;
    }
  }
  @media only screen and (min-width: 1440px) {
    li {
      margin-bottom: 16px;
    }
  }
`;
export const WhyItem = styled.li``;
