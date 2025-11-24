const roleMessages = {
  admin: "관리자 페이지로 이동합니다.",
  editor: "글 쓰기 권한이 있습니다.",
  viewer: "읽기 전용 모드입니다.",
  guest: "로그인이 필요합니다.",
};

const getUserMessage = (role) => {
  return roleMessages[role] || "알 수 없는 사용자입니다.";
};

console.log(getUserMessage("editor"));
