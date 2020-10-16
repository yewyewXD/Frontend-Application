import React from "react";
import styled from "styled-components";
import newsImage1 from "../../images/news_1.png";

const NewsCard = styled.div`
  border-radius: 5px;
  background: white;
  padding: 20px;
  box-shadow: lightgrey 0px 0px 5px;

  .news-heading {
    font-size: 16px;
    margin: 0 0 7px 0;
    font-weight: 600;
  }

  .news-image {
    width: 100%;
  }

  .news-title {
    font-size: 16px;
    margin: 10px 0;
    font-weight: 600;
  }

  .news-article {
    margin: 0 0 15px 0;
  }

  .news-read-more {
    cursor: pointer;
    color: grey;
    &:hover {
      color: #272e71;
    }
  }
`;

export default function News() {
  return (
    <div className="dashboard-news">
      <NewsCard className="news-card">
        <div className="news-heading">Current Challenge</div>
        <img src={newsImage1} alt="" className="news-image" />
        <div className="news-title">Connected Care Challenge</div>

        <div className="news-article">
          Philips wants to improve the lives of billions in the next years to
          come. When you connect data, technology and people seemingly
          impossible things become possible. Patient outcomes improve, hospital
          staff satisfaction goes up and cost of care go down. We want to make
          healthcare better, together.
        </div>

        <div className="news-article">
          As we are all well aware, the healthcare landscape is changing
          rapidly. Increased complexity, patient volume, and pressure on devices
          and system integration demands new approaches and thinking in the
          delivery of high quality care to your patients. Making fast, informed
          decisions by leveraging advanced physiological monitoring and clinical
          informatics through connected care is [...]
        </div>

        <div className="news-read-more">Read more</div>
      </NewsCard>
    </div>
  );
}
