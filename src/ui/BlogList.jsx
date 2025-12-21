import styled from "styled-components";
import BlogCard from "./BlogCard";

const StyledBlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: var(--section-sm-gap);
  column-gap: var(--section-lg-gap);

  @media (min-width: 568px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
`;

function BlogList() {
  return (
    <StyledBlogList>
      {Array.from({ length: 4 }, (_, index) => (
        <BlogCard key={index} />
      ))}
    </StyledBlogList>
  );
}

export default BlogList;
