import LoadingBar from "./LoadingBar";

const CampaignCard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #eaeaea",
        borderRadius: "10px",
        padding: "20px",
        margin: "0 auto",
        width: "85vw",
        height: "70vh",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "60%",
          backgroundColor: "#eaeaea",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <h3 style={{ marginTop: "10px", marginBottom: "0" }}>제목</h3>
      <p style={{ marginTop: "10px", marginBottom: "20px" }}>설명</p>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      >
        기부하기
      </button>
      <LoadingBar />
    </div>
  );
};

export default CampaignCard;