import Link from 'next/link';

// Blog detay bileşeni 
const BlogDetail = () => {
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
        {/* Sayfa linkleri */}
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

        {/* Arama motoru */}
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

      {/* Blog içeriği */}
      <main
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 16px',
          textAlign: 'center',
        }}
      >
        {/* Blog başlığı */}
        <h1
          style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#333',
            marginBottom: '24px',
          }}
        >
          5 Qualities of Successful Project Managers
        </h1>

        {/* Blog görseli */}
        <img
          src="/images/img (2).jpg"
          alt="5 Qualities of Successful Project Managers"
          style={{
            maxWidth: '30%',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '32px',
          }}
        />

        {/* Blog metni */}
        <article
          style={{
            maxWidth: '800px',
            color: '#555',
            lineHeight: '1.8',
            textAlign: 'justify',
            fontSize: '16px',
          }}
        >
          {/* Metin paragrafları */}
          <p>
            <strong>1. Foster Efficient Communication</strong>
          </p>
          <p>
            Clear and effective communication has always stood at the forefront of a successful project. Yet ironically, in times when communication channels are ever so abundant, an exchange between colleagues has become anything but clear and productive. And if your communication lacks order and organization, it will have a detrimental effect on a business, one that’s greater than miscommunication itself.
          </p>
          <p>
            This is where skilled project managers come in. Not only is a successful project manager able to establish a highly collaborative environment, he or she also knows how to promote engagement and keep the conversation sane. Understanding the value of maintaining well-organized information is the first step towards a productive culture in your team.
          </p>
          <p>
            Many teams get carried away by tools and virtual technologies to the point of neglecting face-to-face collaboration. It is important to make sure that project meetings are scheduled regularly and on an ad hoc basis. Help the team find their most comfortable way of discussing their tasks and ask questions. The daily standup meetings are a good way to set a productive mood for the team and start the day on the right foot.
          </p>
          <p>
            <strong>2. Manage Workflow, not People</strong>
          </p>
          <p>
            Most project managers tend to get caught up in the futile practice of micromanagement.
          </p>
          <p>
            A team whose manager is distrustful stands no chance of succeeding. But a team with a manager who is capable of taking responsibility without being control-obsessed is in much better hands.
          </p>
          <p>
            Such a project manager will know that excessively controlling the team and relocating them (or worse – blaming them for shortcomings) is never a solution. Instead, hiring the right people for the right roles and providing coaching, training, and personal development is key to dissolving micromanagement.
          </p>
        </article>
      </main>

      {/* Footer (alt bilgi) */}
      <footer
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '32px 16px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {/* E-posta abonelik formu */}
          <h3
            style={{
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '16px',
            }}
          >
            SIGN UP AND STAY UPDATED!
          </h3>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <input
              type="email"
              placeholder="Enter your email here"
              style={{
                padding: '10px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                border: 'none',
                width: '80%',
              }}
            />
            <button
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetail;
