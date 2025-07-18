export default function AddVideo({ videos }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="space-y-8">
        {videos.map((video) => (
          <div key={video.header} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-4xl text-dark-green font-bold mb-8">
              {video.header}
            </h3>
            <iframe
              src={video.link}
              className="aspect-video"
              title={video.header}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}
