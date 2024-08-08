"use client";

export default function Reply({
  userImagePath ,
  username, 
  replyText, 
  likeNum 
}:any) {

  return ( <div className="d-flex gap-2 my-2 ps-5">
  <img
    src="/profileImages/puppy.jpg"
    width="48"
    height="48"
    className="rounded-circle"
    style={{ objectFit: "cover" }}
  />{userImagePath }
  <div
    className="rounded rounded-3 p-2"
    style={{ backgroundColor: "#E5E7EB" }}
  >
    <span className="fw-semibold">หมาน้อย</span> {username}
    <br />
    <span>จริงค้าบบบบบบบบ</span>{replyText}
    <div className="d-flex align-items-center gap-1">
      <img src="./like.svg" width={20}></img>{likeNum}
      <span className="text-muted">2 คน</span>
    </div>
  </div>
</div>
);
}

