import Header from "./components/Header";

function App() {
  const sidebarItems = [
    {
      section: "Main",
      items: [
        { icon: "🏠", label: "Home" },
        { icon: "🔥", label: "Trending" },
        { icon: "📺", label: "Subscriptions" },
      ],
    },
    {
      section: "Library",
      items: [
        { icon: "📚", label: "Library" },
        { icon: "⏱️", label: "History" },
        { icon: "▶️", label: "Your Videos" },
        { icon: "⏰", label: "Watch Later" },
        { icon: "👍", label: "Liked Videos" },
      ],
    },
    {
      section: "Subscriptions",
      items: [
        { icon: "🎮", label: "Gaming" },
        { icon: "🎵", label: "Music" },
        { icon: "⚽", label: "Sports" },
        { icon: "📰", label: "News" },
      ],
    },
  ];

  const videos = [
    {
      id: 1,
      thumbnail: "https://picsum.photos/300/200",
      title: "Learn React in 30 Minutes",
      channel: "Web Dev Simplified",
      views: "1.2M views",
      timestamp: "3 days ago",
      channelAvatar: "https://picsum.photos/40/40",
    },
    {
      id: 2,
      thumbnail: "https://picsum.photos/300/200",
      title: "Build a YouTube Clone with React",
      channel: "Clever Programmer",
      views: "850K views",
      timestamp: "1 week ago",
      channelAvatar: "https://picsum.photos/40/40",
    },
    // Add more video objects as needed
  ];

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header />

      <div style={{ display: "flex", backgroundColor: "#f9f9f9", flex: 1 }}>
        <div
          style={{
            width: "240px",
            borderRight: "1px solid #e5e5e5",
            padding: "12px",
            overflowY: "auto",
          }}
        >
          {sidebarItems.map((section, index) => (
            <div key={index} style={{ marginBottom: "24px" }}>
              <div
                style={{
                  borderBottom: "1px solid #e5e5e5",
                  paddingBottom: "12px",
                  marginBottom: "12px",
                }}
              >
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 24px",
                      cursor: "pointer",
                      borderRadius: "10px",
                      hover: { backgroundColor: "#e5e5e5" },
                    }}
                  >
                    <span style={{ marginRight: "24px" }}>{item.icon}</span>
                    <span style={{ fontSize: "14px" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            flex: 1,
            padding: "24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
            overflowY: "auto",
          }}
        >
          {videos.map((video) => (
            <div key={video.id} style={{ cursor: "pointer" }}>
              <img
                src={video.thumbnail}
                alt={video.title}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginBottom: "12px",
                }}
              />
              <div style={{ display: "flex", gap: "12px" }}>
                <img
                  src={video.channelAvatar}
                  alt={video.channel}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                  }}
                />
                <div>
                  <h3
                    style={{
                      margin: "0 0 4px 0",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    {video.title}
                  </h3>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "14px",
                      color: "#606060",
                    }}
                  >
                    {video.channel}
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0 0",
                      fontSize: "14px",
                      color: "#606060",
                    }}
                  >
                    {video.views} • {video.timestamp}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
