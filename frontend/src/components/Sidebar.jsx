export const SideBar = () => {
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
  return (
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
  );
};
