// pages/blog.js
import Link from 'next/link';

const BlogList = () => {
    // Example blog posts array
    const posts = [
        { id: 1, title: 'Understanding React Context API', date: 'September 5, 2023', description: 'Learn how React Context API works and how to use it in your applications.' },
        { id: 2, title: 'Next.js for Beginners', date: 'August 12, 2023', description: 'A comprehensive guide to get started with Next.js and build powerful web applications.' },
        { id: 3, title: 'JavaScript ES6 Features', date: 'July 20, 2023', description: 'Explore the new features introduced in ES6 and how they simplify JavaScript programming.' },
    ];

    return (
        <div className='Blog-list-wrapper'>
            <div className="container">
                <h1 className="heading" >Our Blog</h1>

                <div className="posts">
                    {posts.map((post) => (
                        <div key={post.id} className="postCard">
                            <h2 className="postTitle">
                                <Link className='post-title-a' href={`/blog/${post.id}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="postDate">{post.date}</p>
                            <p className="postDescription">{post.description}</p>
                            <Link href={`/blog/${post.id}`} className="readMore">
                                Read More &rarr;
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
