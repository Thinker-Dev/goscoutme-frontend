import { Title } from "@/components/auth/createAccount";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-8">

      <Title className="text-center">About Goscout.me</Title>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At GoScoutMe, our mission is to revolutionize the way athletes and
          scouts connect. We believe in empowering talented individuals to
          showcase their skills and providing scouts with a comprehensive
          platform to discover the next generation of sports stars. By bridging
          the gap between athletes and scouts, we aim to create a thriving
          community that fosters growth, opportunity, and success in the world
          of sports.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          The Problem We Solve
        </h2>
        <ul className="list-disc ml-8 mb-6">
          <li className="text-gray-700 leading-relaxed mb-2">
            Athletes often struggle to gain visibility and attract the attention
            of scouts, limiting their opportunities to pursue their dreams.
          </li>
          <li className="text-gray-700 leading-relaxed">
            Scouts face challenges in efficiently identifying and evaluating
            potential talent, often relying on limited resources and networks.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          GoScoutMe addresses these problems by creating a centralized platform
          that brings athletes and scouts together, streamlining the recruitment
          process and opening doors for deserving individuals.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Solution</h2>
        <ul className="list-disc ml-8">
          <li className="text-gray-700 leading-relaxed mb-2">
            <strong>Athlete Profiles:</strong> Athletes can create comprehensive
            profiles highlighting their skills, achievements, and videos, making
            it easy for scouts to discover and evaluate their potential.
          </li>
          <li className="text-gray-700 leading-relaxed mb-2">
            <strong>Scout Directory:</strong> Scouts can register on our
            platform, specifying their preferences and requirements, ensuring
            they connect with the most relevant athletes.
          </li>
          <li className="text-gray-700 leading-relaxed mb-2">
            <strong>Advanced Search:</strong> Our powerful search functionality
            allows scouts to filter athletes based on various criteria, such as
            sport, position, location, and performance metrics.
          </li>
          <li className="text-gray-700 leading-relaxed">
            <strong>Direct Communication:</strong> GoScoutMe enables seamless
            communication between athletes and scouts, facilitating meaningful
            conversations and building relationships.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Team</h2>
        <p className="text-gray-700 leading-relaxed">
          GoScoutMe was founded by a passionate team of sports enthusiasts and
          technology experts who recognized the need for a better way to connect
          athletes and scouts. With diverse backgrounds in athletics, scouting,
          and software development, our team is dedicated to creating a platform
          that empowers individuals and transforms the sports recruitment
          landscape.
        </p>
      </section>

      <section className="bg-gray-100 py-8 px-6 rounded-b-lg text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Join the GoScoutMe Community
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Whether you&apos;re an aspiring athlete looking to showcase your
          skills or a scout searching for the next superstar, GoScoutMe is here
          to support you. Join our growing community today and unlock a world of
          opportunities in the exciting realm of sports.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Contact us at{" "}
          <a
            href="mailto:info@goscoutme.com"
            className="text-blue-600 font-bold hover:underline"
          >
            info@goscoutme.com
          </a>{" "}
          to learn more about how GoScoutMe can help you achieve your goals.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
