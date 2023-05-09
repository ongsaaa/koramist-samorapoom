const Timeline = ({ items }) => {
  const itemsList = items.map((item) => (
    <div class="section">
      <div class="bead"></div>
      <div class="content">
        <h2>{item.title}</h2>
        <h4>{item.date}</h4>
        <p>{item.description}</p>
        {item.certificate && <a href={item.certificate}>Certificate</a>}
      </div>
    </div>
  ));

  return (
    <div class="timeline">
      <div class="line"></div>
      {itemsList}
    </div>
  );
};

const App = () => {
  const items = [
    {
      title: "CS50X Completed",
      date: "March 2, 2022",
      description: "My first ever deep dive into coding",
      certificate:
        "https://cs50.harvard.edu/certificates/93911604-5c76-42c9-8cfe-ac96f04e247f",
    },
    {
      title: "First Hackathon",
      date: "March 13, 2022",
      description:
        "First ever hands on experience with a real Hackathon, with friends as team members",
      certificate: "https://devpost.com/software/life-coin",
    },
    {
      title: "Started building viruses",
      date: "May 17, 2022",
      description:
        "Was very intrested in the concept of viruses so I decided to build one myself. I, for obvious reasons, can not link it here",
    },
  ];

  return <Timeline items={items} />;
};

export default App