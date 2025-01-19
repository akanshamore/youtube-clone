export const VideoCard = ({ video }) => {
  return (
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
  );
};
