"use client";
export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum ,
  replies,
}:any) {
  return (
    <div className="d-flex gap-2 my-2">
    <img
      src="/profileImages/lisa.jpg"
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />{userImagePath}
    <div
      className="rounded rounded-3 p-2"
      style={{ backgroundColor: "#E5E7EB" }}
    >
      <span className="fw-semibold">Lisa</span>{username}
      <br />
      <span>จริงค่า</span> {commentText}
      <div className="d-flex align-items-center gap-1">
        <img src="./like.svg" width={20}></img> {likeNum }
        <span className="text-muted">999 คน</span>{replies}
      </div>
    </div>
  </div>



  
  );
  
}
