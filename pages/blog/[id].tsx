import { useRouter } from 'next/router'; // Next.js'in useRouter elementiyle sayfa yönlendirme işlemlerini yapılır
import blogs from '../../data/blogs.json'; // Blog verilerini içeren JSON dosyasını içe aktarıyoruz

const BlogPost = () => {
  const router = useRouter(); // useRouter elementini çağırarak router nesnesini alıyoruz
  const { id } = router.query; // URL'deki query parametrelerinden 'id'yi alıyoruz

  // Blog ID'sinin geçerli olup olmadığını kontrol ediyoruz.
  if (!id || Array.isArray(id)) {
    return <p>Invalid blog ID.</p>; // Geçersiz bir blog ID durumunda kullanıcıya mesaj gösteriyoruz
  }

  // JSON'daki bloglar arasında ID'ye göre eşleşen blogu buluyoruz
  const blog = blogs.find((b) => b.id === parseInt(id));

  // Eğer ID'ye sahip bir blog bulunamazsa hata mesajı gösteriyoruzz9
  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Blog başlığı */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>

      {/* Bloga ait görsel */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full md:w-1/2 rounded-lg shadow-lg mb-6"
      />

      {/* Blog içeriği */}
      <p className="text-gray-700 text-lg leading-relaxed">{blog.content}</p>

      {/* Beğeni ve yorum bilgileri */}
      <div className="flex items-center justify-between mt-6 w-full md:w-1/2">
        <span className="flex items-center gap-2 text-gray-600">
          <i className="fas fa-heart text-red-500"></i> {blog.likes} Likes
        </span>
        <span className="flex items-center gap-2 text-gray-600">
          <i className="fas fa-comment text-blue-500"></i> {blog.comments} Comments
        </span>
      </div>
    </div>
  );
};

export default BlogPost; // Bileşeni dışa aktararak başka dosyalarda kullanılmasını sağlıyoruz
