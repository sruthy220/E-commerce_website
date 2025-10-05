import React from 'react';
import Footer from '../components/Footer';

const Blog = () => {
  return (
       <>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',          // side by side
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4rem',                   // space between image and text
        flexWrap: 'wrap',              // wrap on smaller screens
        marginTop: '100px',
        padding: '0 2rem',
      }}
    >
      {/* Image */}
      <img
        src="https://i.pinimg.com/736x/bb/aa/44/bbaa44e386442f8ee53c3657c0b78617.jpg"
        alt="Cake"
        style={{
          width: '300px',
          borderRadius: '10px',
          flexShrink: 0,
        }}
      />

      {/* Text */}
      <div style={{ maxWidth: '600px', textAlign: 'left' }}>
        <h1 style={{ textAlign: 'center' }}>Welcome to Our Blog</h1>
        <p style={{ fontSize: '20px', lineHeight: 1.6 }}>
          Dive into the delightful world of cakes with our blog! From classic recipes to modern twists,
          we share tips, trends, and stories that celebrate the art of cake-making. Whether you're a
          seasoned baker or just starting out, our blog is your go-to source for inspiration and sweet
          indulgence. Join us on this delicious journey and discover how to create memorable moments
          with every slice!
        </p>
        <br/>
        <p>
            Stay tuned for regular updates, and don't forget to share your own cake adventures with us!
        </p>
      </div>
    </div>
         <Footer/>
    </>
  );
};

export default Blog;
