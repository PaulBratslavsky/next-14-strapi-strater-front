import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Benefits } from "@/components/Benefits";
import { ContentWithImage } from "@/components/ContentWithImage";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <Container>
      <Hero data={heroData} />
      <SectionHeading data={sectionHeadingOne} />
      <Benefits data={benefitsDataOne} />
      <Benefits data={benefitsDataTwo} />
      <SectionHeading data={sectionHeadingTwo} />
      <Video data={videoData} />
      <Testimonials data={testimonialsData} />
      <Faq data={faqsData} />
      <CallToAction data={ctaData} />
    </Container>
  );
}

const heroData = {
  __component: "layout.hero",
  id: 26,
  heading: "Strapi 5 beta and Next.js starter",
  text: "Strapifive is an open source project build to showcase Strapi 5 beta integrartion. Its built with Next.js TailwindCSS and backend is powered by Strapi 5. And its completely open-source.",
  cta: {
    id: 81,
    href: "https://strapi.io/five",
    text: "Try Strapi 5 Beta",
    external: true,
  },
  image: {
    id: 2,
    documentId: "tdn06q5dw7r68ryffcc769vy",
    url: "/img/hero.png",
    alternativeText: null,
    name: "hero.png",
  },
};

const sectionHeadingOne = {
  id: 1,
  __component: "layout.section-heading",
  preHeading: "STRAPI & NEXT",
  heading: "Match Made In Heaven",
  text: "It allows you to build things fast, which empowers your users to start managing their content right from the start.",
};

const benefitsDataOne = {
  __component: "layout.content-items",
  id: 33,
  heading: "Why Choose Strapi & Next.js",
  text: "It will allow you to get started quickly. As solo developer you want to spend time where it matters most.  So spend it on building and not content managing.",
  imageRight: false,
  image: {
    id: 3,
    documentId: "soafwzsesgum46n9hdvq830e",
    url: "/img/benefit-one.png",
    alternativeText: null,
    name: "benefit-one.png",
  },
  item: [
    {
      id: 116,
      heading: "Save Time",
      text: "Decrease development time by 40%",
      icon: "CHECK",
    },
    {
      id: 117,
      heading: "Manage Content Easily",
      text: "Empower your client to manage their own content",
      icon: "CHECK",
    },
    {
      id: 118,
      heading: "Easy Deployment",
      text: "With Vercel and Strapi Cloud easy deployment, you can just focus on the fun parts.",
      icon: "CHECK",
    },
  ],
};

const benefitsDataTwo = {
  __component: "layout.content-items",
  id: 34,
  heading: "Build apps fast",
  text:
    "Get your backend done in minutes instead of weeks.\n" +
    "Easily build customizable content API and use them with a modern tech stack.",
  imageRight: true,
  image: {
    id: 4,
    documentId: "fyk4cgsuotgelnsov2m9clrt",
    url: "/img/benefit-two.png",
    alternativeText: null,
    name: "benefit-two.png",
  },
  item: [
    {
      id: 119,
      heading: "Open Source",
      text: "Free Forever. The entire codebase is available on GitHub and maintained by hundreds of contributors.",
      icon: "CHECK",
    },
    {
      id: 120,
      heading: "Customizable",
      text: "Easily customize the admin panel as well as the API. Extend your content management with custom plugins, in seconds.",
      icon: "CHECK",
    },
    {
      id: 121,
      heading: "RESTful or GraphQL",
      text: "Consume the API from any client (React, Vue, Angular), mobile apps or even IoT devices, using REST or GraphQL.",
      icon: "CHECK",
    },
    {
      id: 122,
      heading: "Self-hosted or Cloud",
      text: "Extend the capabilities of Strapi with Strapi Cloud, our fully managed platform or deploy on-premises, on your favorite public cloud or the PaaS of your choice. You’re in control, no lock-in.",
      icon: null,
    },
  ],
};

const sectionHeadingTwo = {
  id: 2,
  __component: "layout.section-heading",
  preHeading: "FREE TUTORIAL",
  heading: "Full Next.js & Strapi Tutorial",
  text: "Checkout this epic Next.js and Strapi tutorial. Over four and half hours of video.",
};

const videoData = {
  id: 1,
  videoId: "fZ0D0cnR88E",
};

const testimonialsData = {
  id: 1,
  __component: "layout.card-quote",
  card: [
    {
      id: 1,
      text: "Share a real testimonial that hits some of your benefits from one of your popular customer.",
      heading: "Jane Steiner",
      subHeading: "VP Sales at Google",
      image: {
        id: 7,
        url: "/img/user1.jpg",
        alternativeText: null,
        name: "user1.jpg",
      },
    },
    {
      id: 2,
      text: "Make sure you only pick the right sentence to keep it short and simple.",
      heading: "Dylan Ambrose",
      subHeading: "Lead marketer at Netflix",
      image: {
        id: 8,
        url: "/img/user2.jpg",
        alternativeText: null,
        name: "user2.jpg",
      },
    },
    {
      id: 3,
      text: "This is an awesome landing page template I've seen. I would use this for anything.",
      heading: "Gabrielle Winston",
      subHeading: "Co-founder of Acme Inc",
      image: {
        id: 6,
        url: "/img/user3.jpg",
        alternativeText: null,
        name: "user3.jpg",
      },
    },
  ],
};

const faqsData = {
  __component: "layout.fa-qs",
  id: 11,
  questions: [
    {
      id: 4,
      documentId: "tyjjvn2gg33zpjliq4jyhy4e",
      question: "Is this template free to use?",
      answer: "Yes, this template is completely free to use.",
      createdAt: "2024-05-24T20:28:54.597Z",
      updatedAt: "2024-05-24T20:28:54.597Z",
      publishedAt: "2024-05-24T20:28:54.601Z",
      locale: null,
    },
    {
      id: 6,
      documentId: "fp2sacwdis9rq49jmcqquqqa",
      question: "Can I use this in a commercial project?",
      answer: "Yes, this you can.",
      createdAt: "2024-05-24T20:29:09.858Z",
      updatedAt: "2024-05-24T20:29:09.858Z",
      publishedAt: "2024-05-24T20:29:09.861Z",
      locale: null,
    },
    {
      id: 2,
      documentId: "ib76ha330wq79j2q58oa5sc2",
      question: "What is your refund policy?",
      answer:
        "There isn't one, since this is completely free project for you to use.",
      createdAt: "2024-05-24T20:28:33.856Z",
      updatedAt: "2024-05-24T20:28:33.856Z",
      publishedAt: "2024-05-24T20:28:33.861Z",
      locale: null,
    },
  ],
};

const ctaData = {
  id: 1,
  __component: "layout.cta",
  heading: "Want an easy way to deploy your Strapi backend?",
  subHeading:
    "See how Strapi Cloud can help you.  Get CDN, database, email, and file storage all included.",
  cta: {
    id: 8,
    href: "https://strapi.io/cloud",
    text: "Try Strapi Cloud",
    external: true,
  },
};
