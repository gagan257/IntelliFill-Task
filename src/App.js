// import logo from "./logo.svg";
// import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Examdata from "./data";
import Categories from "./categories";


function App() {
  const recentExam = ["All", "GATE", "AP EAPCET", "BITSAT", "JEE Mains", "JEE Advanced", "TS EAMCAET", "Amity JEE"];
  return (
    <>
    <Navbar />
    <div className="container">
    <Banner/>
    <div className="cardRow">
      {Examdata.map(examdata => (
        <Card
        key={examdata.id}
        image={examdata.image}
        title={examdata.title}
        subtitle={examdata.subtitle}
        member={examdata.member}
        price={examdata.price}
        tag1={examdata.tag1}
        tag2={examdata.tag2}
        />
      ))}
    </div>
    <div className="heading">
      <div className="Recommended">Recent exams</div>
      <div className="see-all">See All</div>
    </div>
    <div className="recentExam">
      {
        recentExam.map(recentexam => (
          <div className="recent-tag">{recentexam}</div>
        ))
      }
    </div>
    <div className="cardRow">
      {Categories.map(examdata => (
        <Card
        key={examdata.id}
        image={examdata.image}
        title={examdata.title}
        subtitle={examdata.subtitle}
        member={examdata.member}
        price={examdata.price}
        tag1={examdata.tag1}
        tag2={examdata.tag2}
        />
      ))}
    </div>
    </div>
    </>
  );
}

export default App;
