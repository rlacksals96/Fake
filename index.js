const getUserMessage = (role) => {
  switch (role) {
    case "admin":
      return "관리자 페이지로 이동합니다.";
    case "editor":
      return "글 쓰기 권한이 있습니다.";
    case "viewer":
      return "읽기 전용 모드입니다.";
    case "guest":
      return "로그인이 필요합니다.";
    default:
      return "알 수 없는 사용자입니다.";
  }
};

console.log(getUserMessage("editor"));
