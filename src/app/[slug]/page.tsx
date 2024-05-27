import React from "react";
import type { PageProps } from "@/types";

import { Container } from "@/components/Container";
import { ContentWithImage } from "@/components/ContentWithImage";

const pages = {
  data: [
    {
      id: 1,
      slug: "about",
    },
  ],
};

interface StaticParamsProps {
  id: number;
  slug: string;
}

// The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params

export async function generateStaticParams() {
  return pages.data.map((page: Readonly<StaticParamsProps>) => ({
    slug: page.slug,
  }));
}

export default function DynamicPageRoute(props: Readonly<PageProps>) {
  const slug = props.params?.slug;

  const contentWithImage = {
    id: 1,
    __component: "layout.content-image",
    heading: `This is the ${slug} page`,
    text: "This is the placeholder text for the dynamic page route.",
    imageRight: false,
    image: {
      documentId: "tdn06q5dw7r68ryffcc769vy",
      id: 4,
      url: "/img/benefit-two.png",
      alternativeText: null,
      name: "benefit-two.png",
    },
  };

  return (
    <Container>
      <ContentWithImage data={contentWithImage} />
    </Container>
  );
}
