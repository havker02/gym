const plans = [
  {
    name: "Starter",
    price: "$39",
    details: "Great for building consistency with full gym floor access.",
    perks: ["Open gym access", "Locker room", "1 fitness assessment"],
  },
  {
    name: "Pro",
    price: "$69",
    details: "Our most popular plan for serious progress and class variety.",
    perks: ["All Starter benefits", "Unlimited classes", "2 PT sessions"],
    featured: true,
  },
  {
    name: "Elite",
    price: "$109",
    details: "For high performers who want the best training support.",
    perks: ["All Pro benefits", "Nutrition coaching", "Weekly body scans"],
  },
];

const classes = [
  { name: "HIIT Blast", time: "Mon • 6:00 AM", level: "Intermediate" },
  { name: "Power Strength", time: "Tue • 7:30 PM", level: "All levels" },
  { name: "Yoga Recovery", time: "Wed • 8:00 AM", level: "Beginner" },
  { name: "Boxing Conditioning", time: "Thu • 6:30 PM", level: "Advanced" },
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav className="nav container">
          <h1>IRON PULSE</h1>
          <div>
            <a href="#plans">Membership</a>
            <a href="#classes">Classes</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="container hero-content">
          <p className="tag">Premium Fitness Experience</p>
          <h2>Stronger Every Rep. Better Every Day.</h2>
          <p>
            Join a professional gym environment built for transformation with elite coaching,
            cutting-edge equipment, and a high-energy community.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#plans">
              Start Membership
            </a>
            <a className="button secondary" href="#classes">
              View Schedule
            </a>
          </div>
        </section>
      </header>

      <section className="stats container" aria-label="Gym highlights">
        <article>
          <h3>12+</h3>
          <p>Years Coaching Excellence</p>
        </article>
        <article>
          <h3>50+</h3>
          <p>Weekly Group Sessions</p>
        </article>
        <article>
          <h3>4.9/5</h3>
          <p>Average Member Rating</p>
        </article>
      </section>

      <section id="plans" className="container section">
        <p className="tag">Flexible Membership</p>
        <h2>Plans Designed for Every Goal</h2>
        <div className="cards">
          {plans.map((plan) => (
            <article key={plan.name} className={`card ${plan.featured ? "featured" : ""}`}>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}/mo</p>
              <p>{plan.details}</p>
              <ul>
                {plan.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
              <button type="button">Choose {plan.name}</button>
            </article>
          ))}
        </div>
      </section>

      <section id="classes" className="container section split">
        <div>
          <p className="tag">Group Training</p>
          <h2>Dynamic Classes Led by Experts</h2>
          <p>
            Stay motivated with high-energy classes that blend strength, mobility, and cardio.
            Every session is crafted to challenge all fitness levels.
          </p>
        </div>
        <div className="schedule">
          {classes.map((session) => (
            <article key={session.name}>
              <h3>{session.name}</h3>
              <p>{session.time}</p>
              <span>{session.level}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="cta">
        <div className="container">
          <p className="tag">Ready to Start?</p>
          <h2>Book a Free Tour & Fitness Consultation</h2>
          <p>Visit us at 219 Power Ave, Los Angeles • Open 5:00 AM - 11:00 PM Daily</p>
          <a className="button primary" href="mailto:join@ironpulsegym.com">
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
}
