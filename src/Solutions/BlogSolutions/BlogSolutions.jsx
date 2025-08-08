import React from "react";

import CaseStudieSolution from "../CaseStudieSolution/CaseStudieSolution";
import { API_END_POINT } from "@/app/apicommon/apicommon";

const BlogSolutions = async () => {
  const resapi = await fetch(
    `${API_END_POINT}/wp-json/wp/v2/posts?_embed&acf_format=standard`,
    { next: { revalidate: 50 } }
  );
  const api = await resapi.json();

  return (
    <>
      <CaseStudieSolution api={api} />
    </>
  );
};

export default BlogSolutions;

