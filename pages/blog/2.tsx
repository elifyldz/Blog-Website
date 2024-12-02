import Link from 'next/link';

const BlogDetail = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f9fa' }}>
     
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Navbar */}
      <nav style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', gap: '24px', fontSize: '14px', fontWeight: '500' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>
            Home
          </Link>
          <Link href="/blog" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>
            Blog
          </Link>
          <Link href="/about" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>
            About
          </Link>
        </div>
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

      {/* Blog Content */}
      <main style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 16px',
        textAlign: 'center',
      }}>
        {/* Blog Title */}
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#333',
          marginBottom: '24px',
        }}>
          10 Essentials for the Traveling Businessman
        </h1>

        {/* Blog Image */}
        <img
          src="/images/img (3).jpg"
          alt="10 Essentials for the Traveling Businessman"
          style={{
            maxWidth: '80%',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '32px',
          }}
        />

        {/* Blog Content Text */}
        <article style={{
          maxWidth: '800px',
          color: '#555',
          lineHeight: '1.8',
          textAlign: 'justify',
          fontSize: '16px',
        }}>
          <p>
            <strong>1. Planning: Before You Pack</strong>
          </p>
          <p>
            It’s important to plan out every aspect of your business trip. Your team is relying on you to represent your company and handle important business tasks. Proper preparation prevents disasters, and following these tips will make sure you get off on the right foot.
          </p>
          <ul>
            <li><strong>Verify Your Meeting or Conference Before Booking</strong></li>
            <p>
              Get confirmation on your trip dates before booking your flight, lodging, and rental car. The last thing you want is to book your trip for the wrong days. Double-check everything, including flights and hotel bookings, the day before your departure.
            </p>
            <li><strong>Earn Those Travel Rewards Points</strong></li>
            <p>
              Use rewards programs to save money or get perks on your trips. Sign up before booking to take full advantage of them!
            </p>
            <li><strong>Choose Suitable Business Travel Accommodations</strong></li>
            <p>
              Select a hotel that meets your needs for comfort, location, and amenities like Wi-Fi, dry cleaning, or fitness centers. Your business presentation can depend on a good night's rest.
            </p>
            <li><strong>Book Your Airfare Wisely</strong></li>
            <p>
              Ensure your flight fits your schedule and minimizes travel fatigue. Learn hacks to save money and make the trip efficient.
            </p>
          </ul>
          <p>
            <strong>2. Packing</strong>
          </p>
          <ul>
            <li><strong>Bring Lightweight Carry-On Luggage</strong></li>
            <p>
              Look for a lightweight, durable bag with TSA-approved locks for security and convenience.
            </p>
            <li><strong>Keep a Bag Packed With All Essentials</strong></li>
            <p>
              Maintain a bag ready with all necessary items. Add trip-specific items like jackets or presentation materials before leaving.
            </p>
            <li><strong>The Toiletry Quandary</strong></li>
            <p>
              If possible, avoid packing toiletries. Hotels usually provide them, saving you space and hassle. If needed, pack TSA-compliant travel-sized bottles.
            </p>
          </ul>
        </article>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '32px 16px',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '16px',
          }}>
            SIGN UP AND STAY UPDATED!
          </h3>
          <form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
          }}>
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
            <button style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
            }}>
              Subscribe Now
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetail;
