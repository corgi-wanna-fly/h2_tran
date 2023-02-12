import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/in-1.jpg";
import projImg2 from "../assets/img/in-2.jpg";
import projImg3 from "../assets/img/in-3.jpg";
import projImg4 from "../assets/img/in-4.jpg";
import projImg5 from "../assets/img/in-5.jpg";
import projImg6 from "../assets/img/in-6.jpg";
import projImg7 from "../assets/img/out-1.jpg";
import projImg8 from "../assets/img/out-2.jpg";
import projImg9 from "../assets/img/out-3.jpg";
import projImg10 from "../assets/img/out-4.jpg";
import projImg11 from "../assets/img/out-5.jpg";
import projImg12 from "../assets/img/out-6.jpg";
import projImg13 from "../assets/img/plan-1.avif";
import projImg14 from "../assets/img/plan-2.avif";
import projImg15 from "../assets/img/plan-3.avif";
import projImg16 from "../assets/img/plan-4.avif";
import projImg17 from "../assets/img/plan-5.avif";
import projImg18 from "../assets/img/plan-6.avif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Mũi Né",
      imgUrl: projImg1,
    },
    {
      title: "Huế",
      imgUrl: projImg2,
    },
    {
      title: "Phú Quốc",
      imgUrl: projImg3,
    },
    {
      title: "SaPa",
      imgUrl: projImg4,
    },
    {
      title: "Bình Thuận",
      imgUrl: projImg5,
    },
    {
      title: "Hạ Long",
      imgUrl: projImg6,
    },
  ];

  const projects_out = [
    {
      title: "Singapore",
      imgUrl: projImg7,
    },
    {
      title: "Thái Lan",
      imgUrl: projImg8,
    },
    {
      title: "Đài Loan",
      imgUrl: projImg9,
    },
    {
      title: "Hàn Quốc",
      imgUrl: projImg10,
    },
    {
      title: "Malaysia",
      imgUrl: projImg11,
    },
    {
      title: "Hàn Quốc",
      imgUrl: projImg12,
    },
  ];

  const projects_plan = [
    {
      title: "Pháp",
      imgUrl: projImg13,
    },
    {
      title: "Ý",
      imgUrl: projImg14,
    },
    {
      title: "Trung Quốc",
      imgUrl: projImg15,
    },
    {
      title: "Nhật Bản",
      imgUrl: projImg16,
    },
    {
      title: "Mỹ",
      imgUrl: projImg17,
    },
    {
      title: "Anh",
      imgUrl: projImg18,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Kinh nghiệm</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Trong nước</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Nước ngoài</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Dự định</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects_out.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {projects_plan.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
