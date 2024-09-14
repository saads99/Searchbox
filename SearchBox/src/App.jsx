import React, { useState } from 'react';

const articles = [
    { title: "When is :focus-visible visible?", date: "21 March 2023", tags: "#css" },
    { title: "From Ghost to 11ty", date: "22 February 2023", tags: "#articles #11ty" },
    { title: "Web Performance Metrics Cheatsheet", date: "25 October 2021", tags: "#performance" },
    { title: "Setting up a Decentralised Website (ENS + IPFS = dWeb)", date: "18 June 2021", tags: "#web3" },
    { title: "Highlights from Chrome Dev Summit 2020", date: "14 December 2020", tags: "#conference" },
    { title: "What I wish I knew about React", date: "28 April 2020", tags: "#react" },
    { title: "How I created 488 'live images'", date: "26 November 2019", tags: "#javascript" },
    { title: "Highlights from Chrome Dev Summit 2019", date: "18 November 2019", tags: "#conference" },
    { title: "Understanding the difference between grid-template and grid-auto", date: "09 October 2018", tags: "#css" },
    { title: "My VSCode setup", date: "17 July 2018", tags: "#tools" },
    { title: "How I implemented 'pull to refresh'", date: "14 May 2018", tags: "#javascript" },
    { title: "Becoming a father and a freelancer", date: "28 March 2018", tags: "#freelancing" },
    { title: "Adventures in Writing a Game Boy Emulator", date: "25 January 2018", tags: "#emulation" },
    { title: "Building a Progressive Web App with Webpack", date: "13 December 2017", tags: "#pwa" },
    { title: "Experimenting with the Page Visibility API", date: "26 October 2017", tags: "#javascript" },
    { title: "Highlights from Chrome Dev Summit 2017", date: "24 October 2017", tags: "#conference" },
    { title: "From jQuery to Vanilla JavaScript", date: "03 October 2017", tags: "#javascript" },
    { title: "Evolving CSS with PostCSS", date: "14 August 2017", tags: "#css" },
    { title: "How to Create a Favicon for Your Site", date: "27 July 2017", tags: "#tools" },
    { title: "The 'dark side' of web animation", date: "23 May 2017", tags: "#css" },
    { title: "Highlights from Chrome Dev Summit 2016", date: "24 October 2016", tags: "#conference" },
    { title: "3 simple steps to performance debugging", date: "07 October 2016", tags: "#performance" },
    { title: "A journey into Service Workers", date: "02 June 2016", tags: "#pwa" },
    { title: "Animating Links with CSS3 text-shadow", date: "23 May 2016", tags: "#css" },
    { title: "How I built a CSS3 clock", date: "13 October 2015", tags: "#css" },
    { title: "Highlights from Chrome Dev Summit 2015", date: "17 November 2015", tags: "#conference" },
    { title: "Let’s try out ES2015", date: "12 August 2015", tags: "#javascript" },
    { title: "The mobile front-end performance problem", date: "10 June 2015", tags: "#performance" },
    { title: "You probably don't need a JavaScript framework", date: "14 April 2015", tags: "#javascript" },
    { title: "Debouncing and Throttling Explained Through Examples", date: "09 April 2015", tags: "#javascript" },
    { title: "Writing efficient JavaScript", date: "23 March 2015", tags: "#javascript" },
    { title: "Anatomy of a mobile-first responsive website", date: "13 October 2014", tags: "#performance" },
    { title: "Handling touch events in JavaScript", date: "15 July 2014", tags: "#javascript" },
    { title: "Improving front-end performance", date: "10 April 2014", tags: "#performance" },
    { title: "How to design the perfect error page", date: "04 February 2014", tags: "#tools" },
    { title: "Creating a drag and drop file uploader", date: "08 January 2014", tags: "#javascript" }
];

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const getHighlightedText = (text, highlight) => {
        if (!highlight.trim()) return text;
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part, i) => 
                    part.toLowerCase() === highlight.toLowerCase() ? <mark key={i}>{part}</mark> : part
                )}
            </span>
        );
    };

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', position: 'relative' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '90px', textAlign: 'left' }}>Search</h1>
          
            <div style={{
                position: 'absolute',
                top: '20px',
                left: '130%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                width: '300px',
                backgroundColor: '#f9f9f9'
            }}>
                <p> <span style={{ fontWeight: 'bold' }}>bitsofcode. </span>
                 Articles on Frontend Development. All Articles are written by 
                    <a href="https://twitter.com/IreAderinokun" 
                       style={{ textDecoration: 'underline', color: '#000', marginLeft: '5px' }}>Ire Aderinokun</a>, 
                    Frontend Developer and User Interface Designer.
                </p>
                <button style={{
                    backgroundColor: '#1DA1F2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px 15px',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}>
                    <img 
                        src=".\public\image.png" 
                        alt="Twitter Icon" 
                        style={{ width: '20px', height: '20px', marginRight: '8px' }} 
                    />
                    Follow @IreAderinokun
                </button>
            </div>

          
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{
                        padding: '10px',
                        width: '100%',
                        maxWidth: '400px',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                />
            </div>

            
            {filteredArticles.length > 0 ? (
                filteredArticles.map((article, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h3>{getHighlightedText(article.title, searchTerm)}</h3>
                        <p>{article.date}</p>
                        <p>{article.tags}</p>
                        {index < filteredArticles.length - 1 && (
                            <hr style={{
                                border: 'none',
                                borderTop: '1px solid #ccc',
                                margin: '20px 0'
                            }} />
                        )}
                    </div>
                ))
            ) : (
                <p>No articles found.</p>
            )}
        </div>
    );
};

export default App;
