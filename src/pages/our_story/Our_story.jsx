import "./Our_story.css";
function Our_story() {
  const storyData = [
    {
      year: 2013,
      event: "Founding of the Company",
      description:
        "Our journey began with a small team of passionate individuals who had a vision, a vision that ignited our spirits and set us on a path to create something extraordinary.",
      image:
        "https://minutes.co/wp-content/uploads/2019/03/shutterstock_1030961317-e1553607691316.jpg",
    },
    {
      year: 2017,
      event: "Milestone Achieved",
      description:
        "A significant milestone was achieved in this year, a milestone that not only marked a turning point in our story but also fueled our determination to reach even greater heights.",
      image:
        "https://www.sacfirm.com/wp-content/uploads/2018/05/GettyImages-616237916.jpg",
    },
    {
      year: 2020,
      event: "Expanding Horizons",
      description:
        "We expanded our operations internationally, venturing into new markets and connecting with a diverse range of customers around the world. This expansion broadened our horizons and enriched our global presence.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttp5wGCoPEzosqTX158AWDKy8LtDBkH4GGQ&usqp=CAU",
    },
    {
      year: 2023,
      event: "A Decade of Success",
      description:
        "Celebrating ten years of relentless hard work, unwavering dedication, and the steadfast loyalty of our valued customers. This remarkable journey has been marked by the shared commitment and support that have brought us to this significant milestone.",
      image:
        "https://www.xiatech.co.uk/wp-content/uploads/2023/09/10-Years-of-Xiatech.png",
    },
  ];

  return (
    <section className="our_story">
      <div className="our-story-banner"></div>
      <div className="container">
        <div className="our-story">
          <h2>Our Story</h2>
          <ul className="timeline">
            {storyData.map((a, b) => (
              <li key={b} className="event">
                <div className="event-year">{a.year}</div>
                <div className="event-details">
                  <h3>{a.event}</h3>
                  <p>{a.description}</p>
                </div>
                <div className="event-image">
                  <img src={a.image} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Our_story;
