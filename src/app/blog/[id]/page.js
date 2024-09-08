import { Container } from "react-bootstrap";
import TopBanner from "../../../../components/TopBanner";

const BlogPost = ({ params }) => {
    //   const { id } = router.query;

    const id = params.id;
    // Dummy data for blog post content
    const blogPosts = {
        1: {
            title: 'Understanding React Context API',
            date: 'September 5, 2023',
            author: 'John Doe',
            content: `
        React Context API allows you to manage global state across components without passing props manually through every level of your component tree.
        It simplifies the process of state management, especially in large applications. In this article, we will learn how Context API works and how to use it in your React applications.
      `,
        },
        2: {
            title: 'Next.js for Beginners',
            date: 'August 12, 2023',
            author: 'Jane Smith',
            content: `
        Next.js is a powerful framework for building server-side rendered React applications. It simplifies the process of rendering components on the server-side, making your applications faster and more SEO-friendly.
        In this guide, we'll walk you through the basics of Next.js and how to create your first project.
      `,
        },
        3: {
            title: 'JavaScript ES6 Features',
            date: 'July 20, 2023',
            author: 'Alex Johnson',
            content: `
        ES6 (ECMAScript 2015) introduced many new features to JavaScript, including let and const, arrow functions, template literals, and more.
        These features make JavaScript more powerful and easier to work with. In this post, we'll explore some of the most important ES6 features and how to use them.
      `,
        },
    };

    const post = blogPosts[id];

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <TopBanner Title={post.title} description="blog page" image="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg" />

            <div className='blog-post-wrapper'>


                <Container>
                    <h1 className="title">{post.title}</h1>
                    <p className="meta">
                        <span>By {post.author}</span> | <span>{post.date}</span>
                    </p>
                    <div className="content">{post.content}</div>
                </Container>

            </div>

        </>
    );
};

export default BlogPost;
