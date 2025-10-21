import { Typography, Row, Col } from "antd";

export default function About() {
  return (
    <>
      <div>
        <Typography.Title>About Space! News</Typography.Title>
        <Typography.Paragraph>
          Space! News is a convenient source for the latest coverage of space
          exploration, rocket launches, and astronomical discoveries from around
          the world.
        </Typography.Paragraph>

        <Row gutter={32}>
          <Col xs={24} md={12}>
            <Typography.Title level={3}>What We Offer</Typography.Title>
            <Typography.Paragraph>
              We display space news from leading industry sources, bringing you
              stories about:
            </Typography.Paragraph>
            <ul>
              <li>Rocket launches and spacecraft missions</li>
              <li>Planetary exploration and Mars rovers</li>
              <li>International Space Station updates</li>
              <li>Commercial spaceflight developments</li>
              <li>Astronomical discoveries and research</li>
              <li>Satellite deployments and space technology</li>
            </ul>
          </Col>

          <Col xs={24} md={12}>
            <Typography.Title level={3}>Trusted News Sources</Typography.Title>
            <Typography.Paragraph>
              Our content is aggregated from reliable sources in the space industry:
            </Typography.Paragraph>
            <ul>
              <li>Spaceflight Now - Real-time launch coverage and mission updates</li>
              <li>SpaceNews - Industry news and policy developments</li>
              <li>NASASpaceflight - In-depth technical analysis and exclusive reporting</li>
            </ul>
          </Col>
        </Row>

        <div style={{ textAlign: "center" }}>
          <Typography.Title level={3}>Features</Typography.Title>
          <ul style={{ display: "inline-block", textAlign: "left" }}>
            <li>Browse thousands of space-related articles with imagery</li>
            <li>Search for specific topics like "Mars," "SpaceX," or "ISS"</li>
            <li>Switch between grid and table views for your preferred reading experience</li>
            <li>Articles are updated regularly from the Spaceflight News API</li>
            <li>Detailed article summaries and publication dates</li>
            <li>Direct links to full articles from original sources</li>
          </ul>
        </div>

        <div style={{ textAlign: "center" }}>
          <Typography.Title level={3}>Our Mission</Typography.Title>
          <Typography.Paragraph>
            Whether you're a space enthusiast, aerospace professional, student, or
            simply curious about the cosmos, Space! News makes it easy to stay
            informed about humanity's journey to the stars. From Starship test
            flights to exoplanet discoveries, we've got you covered.
          </Typography.Paragraph>

          <Typography.Paragraph>
            Stay curious and keep exploring! 🚀
          </Typography.Paragraph>
        </div>
      </div>
    </>
  );
}
