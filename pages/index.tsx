import Link from 'next/link';

// Home bileşeni 
const Home = () => {
  // Blog başlıkları 
  const blogTitles = [
    "5 Qualities of Successful Project Managers",
    "10 Essentials for the Traveling Businessman",
    "Review of the Gibbs Report",
    "Profile: Tech Investor Paul Dooby",
    "Business Tip: How to Attract Investors",
    "A CEO's Guide to Strategic Growth"
  ];

  return (
    <div
      style={{
        fontFamily: 'Roboto, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f8f9fa',
      }}
    >

      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Navbar */}
      <nav
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Sayfalar arası linkler */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            fontSize: '14px',
            fontWeight: '500',
          }}
        >
          <Link
            href="/"
            style={{
              color: '#fff',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
          >
            Home
          </Link>
          <Link
            href="/blog"
            style={{
              color: '#fff',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
          >
            Blog
          </Link>
          <Link
            href="/about"
            style={{
              color: '#fff',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
          >
            About
          </Link>
        </div>

        {/* Arama kutusu */}
        <input
          type="text"
          placeholder="Search..."
          style={{
            backgroundColor: '#495057',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '14px',
            border: 'none',
          }}
        />
      </nav>

      {/* Hero (üst görsel) bölümü */}
      <header
        style={{
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: "url('/images/img.jpg')",
          textAlign: 'center',
        }}
      >
        {/* Blog başlığı */}
        <h1
          style={{
            color: '#fff',
            fontSize: '40px',
            fontWeight: '800',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '12px 24px',
            letterSpacing: '2px',
            borderRadius: '8px',
          }}
        >
          Talking Business.
        </h1>
        {/* Blog alt açıklama */}
        <p
          style={{
            color: '#fff',
            fontSize: '16px',
            fontWeight: '500',
            marginTop: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '8px 16px',
            borderRadius: '8px',
          }}
        >
          A BLOG ABOUT BUSINESS & CONSULTING
        </p>
      </header>

      {/* Blog yazıları grid bölümü */}
      <main
        style={{
          maxWidth: '1200px',
          margin: '40px auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          padding: '0 16px',
        }}
      >
        {/* Blog başlıklarını döngüyle oluşturduk */}
        {blogTitles.map((title, index) => (
          <Link
            href={`/blog/${index + 1}`}
            key={index}
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <article
              style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {/* Blog resmi */}
              <img
                src={`/images/img (${index + 2}).jpg`}
                alt={title}
                style={{
                  width: '100%',
                  height: '160px',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  padding: '16px',
                  flexGrow: '1',
                }}
              >
                {/* Blog başlığı */}
                <h2
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    marginBottom: '8px',
                  }}
                >
                  {title}
                </h2>
                {/* Yayın tarihi ve okuma süresi */}
                <p
                  style={{
                    fontSize: '12px',
                    color: '#6c757d',
                  }}
                >
                  March 21, 2023 · {index % 2 === 0 ? '1 min read' : '2 min read'}
                </p>
                {/* Beğeni ve yorum bilgileri */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '8px',
                    color: '#6c757d',
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <i className="fas fa-heart"></i> {index * 3 + 10} Likes
                  </span>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <i className="fas fa-comment"></i> {index + 2} Comments
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '32px 16px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* E-posta ile güncelleme formu */}
          <div
            style={{
              marginBottom: '16px',
            }}
          >
            <h3
              style={{
                fontSize: '18px',
                fontWeight: '700',
              }}
            >
              SIGN UP AND STAY UPDATED!
            </h3>
            <form
              style={{
                marginTop: '8px',
                display: 'flex',
                gap: '8px',
              }}
            >
              <input
                type="email"
                placeholder="Enter your email here"
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  border: 'none',
                  width: '240px',
                }}
              />
              <button
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: 'none',
                }}
              >
                Subscribe Now
              </button>
            </form>
          </div>
          {/* Sosyal medya bağlantıları */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              fontSize: '14px',
            }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              style={{
                color: '#007bff',
              }}
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              style={{
                color: '#e1306c',
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
