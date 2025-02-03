import '../Blog.css';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL, BRAND } from '../utils/api';
import { Link } from 'react-router-dom';
import Header from '../components/Home/header';
import Footer from '../components/Home/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'


const BlogsPage = () => {
    const [featuredBlogs, setFeaturedBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [isFetchingBlogs, setIsFetchingBlogs] = useState(false);
    const [isLastPage, setIsLastPage] = useState(false);

    const perPage = 6; // Number of blogs to fetch per page

    // Fetch featured blogs and initial blogs on component mount
    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                // Fetch featured blogs
                const featuredResponse = await axios.get(`${API_URL}/blogs/${BRAND}?featured`);
                setFeaturedBlogs(featuredResponse.data.data);

                // Fetch initial blogs
                loadMoreBlogs(1); // Load the first page explicitly
            } catch (error) {
                console.error('Error fetching initial data:', error);
            }
        };

        fetchInitialData();
    }, []);

    // Load more blogs function
    const loadMoreBlogs = async (currentPage) => {
        if (isFetchingBlogs || isLastPage) return;

        setIsFetchingBlogs(true);

        try {
            const response = await axios.get(`${API_URL}/blogs/${BRAND}`, {
                params: { page: currentPage, perPage },
            });

            const newBlogs = response.data.data;

            // Append only unique blogs to the state
            setBlogs((prevBlogs) => {
                const uniqueBlogs = newBlogs.filter(
                    (newBlog) => !prevBlogs.some((blog) => blog.id === newBlog.id)
                );
                return [...prevBlogs, ...uniqueBlogs];
            });

            // Update the page and check if it is the last page
            if (response.data.last_page === currentPage) {
                setIsLastPage(true);
            } else {
                setPage(currentPage + 1);
            }
        } catch (error) {
            console.error('Error loading more blogs:', error);
        } finally {
            setIsFetchingBlogs(false);
        }
    };




    return (
        <div className="blogs-page">
            <Helmet>
                <title>Animationrush - Insights & Tips</title>
                <meta name="description" content="Explore content creation tips for agencies, SEO best practices, and guides for freelance writers." />
                <link rel="canonical" href="https://animationrush.com/blogs" />
                <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="animationrush - Insights & Tips" />
                <meta property="og:description" content="Explore content creation tips for agencies, SEO best practices, and guides for freelance writers." />
                <meta property="og:url" content="https://animationrush.com/blogs" />
                <meta property="og:site_name" content="animationrush" />
                <meta property="article:publisher" content="https://www.facebook.com/animationrush/" />
                <meta property="article:modified_time" content="2024-08-20T07:39:16+00:00" />
            </Helmet>

          <Header/>
         

            {/* Herosection */}
            <section className="hero-section-blog py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h1 className="gray-font fw-semibold text-uppercase">Animation Rush Blog</h1>
                        </div>
                        <div className="col-lg-7">
                            <p className="gray-font fw-light">Welcome to the blog section of Animation Rush, your creative hub for animation trends, expert techniques, and storytelling strategies to bring your ideas to life.</p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="blog-container mb-4">
                                <Link to={`/${featuredBlogs[0]?.slug}`}>
                                    <div className="row">
                                        <div className="col-12">
                                            <img src={featuredBlogs[0]?.image_url} alt={featuredBlogs[0]?.title} className="img-fluid w-100" />
                                        </div>
                                        <div className="col-md-12 col-lg">
                                            <div className="d-flex h-100 align-items-center">
                                                <div>
                                                    <h3 className="gray-font fw-semibold text-uppercase mt-3">{featuredBlogs[0]?.title}</h3>
                                                    {/* <div className="gray-font">
                                                        {parse(DOMPurify.sanitize(featuredBlogs[0]?.content.slice(0, 400) + '...'))}
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="blog-container blog-container-2 h-100 mb-4 mb-lg-0">
                                <Link to={`/${featuredBlogs[1]?.slug}`}>
                                    <img src={featuredBlogs[1]?.image_url} alt={featuredBlogs[1]?.title} className="img-fluid" />
                                    <h3 className="gray-font fw-semibold text-uppercase mt-3">{featuredBlogs[1]?.title}</h3>
                                    {/* <div className="gray-font">
                                        {parse(DOMPurify.sanitize(featuredBlogs[1]?.content.slice(0, 250) + '...'))}
                                    </div> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="blog-container blog-container-3 h-100">
                                <Link to={`/${featuredBlogs[2]?.slug}`}>
                                    <img src={featuredBlogs[2]?.image_url} alt={featuredBlogs[2]?.title} className="img-fluid" />
                                    <h3 className="gray-font fw-semibold text-uppercase mt-3">{featuredBlogs[2]?.title}</h3>
                                    {/* <div className="gray-font">
                                        {parse(DOMPurify.sanitize(featuredBlogs[2]?.content.slice(0, 250) + '...'))}
                                    </div> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Article section */}
            <div className="blogs-page">
            {/* Other sections */}

            {/* Latest Article Section */}
            <section className="latest-article-section py-5">
                <div className="container">
                    <h3 className="gray-font fw-semibold text-uppercase mb-5">Latest Articles</h3>

                    <div className="row g-4">
                        {blogs.map((blog) => (
                            <div className="col-lg-6 col-xl-4" key={blog.id}>
                                <div className="article-container">
                                    <Link to={`/${blog.slug}`}>
                                        <img src={blog.image_url} alt={blog.title} className="img-fluid" />
                                        <h3 className="gray-font fw-semibold text-uppercase mt-3">{blog.title}</h3>
                                        {/* <div className="gray-font">
                                            {parse(DOMPurify.sanitize(blog.content.slice(0, 100) + '...'))}
                                        </div> */}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {!isLastPage && (
                        <div className="text-center mt-4">
                            <button
                                className="btn custom-btn-primary text-uppercase"
                                disabled={isFetchingBlogs}
                                onClick={() => loadMoreBlogs(page)} // Pass the current page state
                            >
                                {isFetchingBlogs ? (
                                    <div className="d-flex align-items-center">
                                        <div className="spinner-border text-success me-2" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        Loading...
                                    </div>
                                ) : (
                                    'Load More'
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>

     
<div>
<Footer/>
</div>
           
        </div>
        
    );
};

export default BlogsPage;
