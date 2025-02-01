import { timeAgo } from "../utils/timeAgo";

export const VideoCard = ({ video }) => {
  console.log(video);
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
          src={video.channelId.avatarUrl}
          alt={video.channelId.name}
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
            {video.channelId.name}
          </p>
          <p
            style={{
              margin: "4px 0 0 0",
              fontSize: "14px",
              color: "#606060",
            }}
          >
            {video.views} • {timeAgo(video.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};
