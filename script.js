const mediaItems = [
  {
    id: "kids-ski",
    type: "video",
    title: "유아체육 · 스키수업 자료화면",
    src: "",
    hint: "자료/유아체육강사/스키수업 동영상1.mp4"
  },
  {
    id: "kids-soccer",
    type: "video",
    title: "유아체육 · 축구수업 자료화면",
    src: "",
    hint: "자료/유아체육강사/축구수업 영상1.mp4"
  },
  {
    id: "kids-basketball",
    type: "video",
    title: "유아체육 · 농구수업 자료화면",
    src: "",
    hint: "자료/유아체육강사/농구수업 영상.mp4"
  },
  {
    id: "iat-presentation",
    type: "image",
    title: "I.A.T · 학술세미나 발표",
    src: "",
    hint: "자료/아이엣 대외활동/아이엣1.jpg"
  },
  {
    id: "iat-award",
    type: "image",
    title: "I.A.T · 수료 및 Academic Achievement Award",
    src: "",
    hint: "자료/아이엣 대외활동/아이엣4.jpg"
  },
  {
    id: "rkata-special-test",
    type: "image",
    title: "RKATA · Special Test 실습",
    src: "",
    hint: "자료/대한선수트레이너연수/neer test.jpg"
  },
  {
    id: "rkata-training",
    type: "video",
    title: "RKATA · 기능적운동능력평가",
    src: "",
    hint: "자료/대한선수트레이너연수/기능적운동능력평가 repeated jump test.mp4"
  },
  {
    id: "rkata-team",
    type: "video",
    title: "RKATA · 현대건설 배구단 현장실습",
    src: "",
    hint: "자료/대한선수트레이너연수/현대건설 배구단 현장실습.mp4"
  },
  {
    id: "sweat-anatomy",
    type: "image",
    title: "S.W.E.A.T · 기본적인 해부학",
    src: "",
    hint: "자료/스웻 헬스동아리/기본적인 해부학.jpg"
  },
  {
    id: "sweat-machine",
    type: "image",
    title: "S.W.E.A.T · 머신 사용법",
    src: "",
    hint: "자료/스웻 헬스동아리/머신 사용법.jpg"
  },
  {
    id: "sweat-video",
    type: "video",
    title: "S.W.E.A.T · 수업 영상",
    src: "",
    hint: "자료/스웻 헬스동아리/스웻 동영상1.mp4"
  },
  {
    id: "taping-mcl",
    type: "image",
    title: "테이핑 · MCL 보완",
    src: "",
    hint: "자료/테이핑 적용사례/무릎 mcl 테이핑.jpg"
  },
  {
    id: "taping-arch",
    type: "image",
    title: "테이핑 · 발 아치 보조",
    src: "",
    hint: "자료/테이핑 적용사례/발아치 테이핑.png"
  },
  {
    id: "taping-dance",
    type: "image",
    title: "테이핑 · 댄스동아리 공연 지원",
    src: "",
    hint: "자료/테이핑 적용사례/댄스동아리 공연 테이핑 지원.png"
  },
  {
    id: "sports-ski",
    type: "video",
    title: "개인 운동 · 알파인 스키",
    src: "",
    hint: "자료/개인 운동 경력/계절 스포츠( 스키, 웨이크보드)/스키.mp4"
  },
  {
    id: "sports-badminton",
    type: "video",
    title: "개인 운동 · 배드민턴",
    src: "",
    hint: "자료/개인 운동 경력/구기종목(배드민턴, 축구, 야구)/배드민턴 영상.mp4"
  },
  {
    id: "sports-bodybuilding",
    type: "image",
    title: "개인 운동 · 보디빌딩 변화",
    src: "",
    hint: "자료/개인 운동 경력/보디빌딩(워이트 트레이닝), 크로스핏/전면 after 사진.jpg"
  },
  {
    id: "sports-crossfit",
    type: "video",
    title: "개인 운동 · 크로스핏",
    src: "",
    hint: "자료/개인 운동 경력/보디빌딩(워이트 트레이닝), 크로스핏/크로스핏 운동영상.mp4"
  }
];

const grid = document.getElementById("media-grid");

function createPlaceholder(item) {
  const card = document.createElement("article");
  card.className = "media-card";

  const preview = document.createElement("div");
  preview.className = "media-preview";

  const kind = document.createElement("span");
  kind.className = "media-kind";
  kind.textContent = item.type === "video" ? "Video" : "Image";
  preview.appendChild(kind);

  if (item.src) {
    if (item.type === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      preview.appendChild(video);
    } else {
      const image = document.createElement("img");
      image.src = item.src;
      image.alt = item.title;
      image.loading = "lazy";
      preview.appendChild(image);
    }
  } else {
    const mark = document.createElement("div");
    mark.className = "placeholder-mark";
    mark.textContent = "Mockup";
    preview.appendChild(mark);
  }

  const body = document.createElement("div");
  body.className = "media-body";

  const title = document.createElement("strong");
  title.textContent = item.title;

  const code = document.createElement("code");
  code.textContent = item.src || item.hint;

  body.append(title, code);
  card.append(preview, body);
  return card;
}

mediaItems.forEach((item) => {
  grid.appendChild(createPlaceholder(item));
});
