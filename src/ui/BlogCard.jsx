import styled from "styled-components";
import blogCard from "../assets/blogCard.webp";
import Button from "./Button";
import { GoArrowUpRight } from "react-icons/go";

const StyledBlogCard = styled.div`
  display: flex;
  flex-direction: column;

  & h2 {
    font-weight: 600;
    font-size: 2.6rem;
  }
`;

const ImgFluid = styled.div`
  height: 43rem;
  border-radius: var(--border-radius-lg);
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BlogCategory = styled.div`
  display: flex;
  gap: 3rem;
  font-size: 1.4rem;
  text-transform: capitalize;
  margin-top: 1.6rem;

  & span:first-child {
    position: relative;
    color: var(--primary-green);
  }

  & span:first-child::after {
    content: "";
    position: absolute;
    right: -1.7rem;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: var(--color-muted);
  }

  & span:last-child {
    color: var(--color-grey-400);
  }
`;

const CardDescription = styled.p`
  letter-spacing: -1px;
  line-height: 180%;
  color: var(--color-muted);
`;

function BlogCard() {
  return (
    <StyledBlogCard>
      <ImgFluid>
        <img src={blogCard} alt="card-image" />
      </ImgFluid>

      <BlogCategory>
        <span>category</span>
        <span>tuesday, 17 may 2024</span>
      </BlogCategory>
      <h2 style={{ textTransform: "capitalize" }}>blog title</h2>
      <CardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        perferendis numquam libero fugit, dolor deleniti cupiditate et, facere
        est quasi
      </CardDescription>
      <Button variation="bordered" size="large">
        <span>Read</span> <GoArrowUpRight />
      </Button>
    </StyledBlogCard>
  );
}

export default BlogCard;
