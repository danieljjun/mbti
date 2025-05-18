export const mbtiData = [
  /* ────────── SENTINELS ────────── */
  {
    code: "ISTJ",
    title: "신중한 관리자 · Logistician",
    summary: "책임감 · 질서 · 데이터 지향",
    triggers: ["측정 성과", "정해진 루틴", "전문성 인정"],
    pitfalls: ["계획 변경", "과장 표현"],
    bestTraining: "5×5 파워 · RPE",
    upsell: "월간 인바디 리포트",
    cues: {
      demo: "5초에 걸쳐 앉고 1초에 올라옵니다.",
      fix: "무릎 3 cm 뒤로 빼 90°.",
      motivate: "지난주보다 +2 kg입니다."
    },
    taboo: "느낌대로 해보세요."
  },
  {
    code: "ISFJ",
    title: "온화한 수호자 · Defender",
    summary: "온화 · 헌신 · 안정",
    triggers: ["맞춤 돌봄", "안정감", "잦은 칭찬"],
    pitfalls: ["거친 피드백", "급변 난이도"],
    bestTraining: "슬로우 저항 + 필라테스",
    upsell: "홈트 밴드 번들",
    cues: {
      demo: "제가 카운트할게요—편히 호흡.",
      fix: "어깨 힘 살짝만 빼요.",
      motivate: "자세 안정적이에요!"
    },
    taboo: "좀 더 터프하게!"
  },
  {
    code: "ESTJ",
    title: "체계적 관리자 · Executive",
    summary: "조직 · 리더십 · 효율",
    triggers: ["목표·기한", "KPI", "체계"],
    pitfalls: ["모호함", "규칙 무시"],
    bestTraining: "파워리프팅 주기",
    upsell: "KPI 대시보드",
    cues: {
      demo: "3세트 8rep—타이머 세팅.",
      fix: "등 각도 유지!",
      motivate: "목표까지 12 % 남았습니다."
    },
    taboo: "대충 OK."
  },
  {
    code: "ESFJ",
    title: "친화적 외교관 · Consul",
    summary: "사교 · 돌봄 · 조화",
    triggers: ["함께 운동", "긍정 피드백", "커뮤니티"],
    pitfalls: ["무관심", "충돌 상황"],
    bestTraining: "파트너 필라테스",
    upsell: "출석 스티커 랠리",
    cues: {
      demo: "파트너랑 하이파이브 후 스위치!",
      fix: "호흡 같이 맞춰요.",
      motivate: "분위기 메이커 최고!"
    },
    taboo: "혼자 해보세요."
  },

  /* ────────── ANALYSTS ────────── */
  {
    code: "INTJ",
    title: "전략가 · Architect",
    summary: "전략 · 효율 · 독립",
    triggers: ["ROI 설명", "자율", "논문 인용"],
    pitfalls: ["애매 목표", "잡담"],
    bestTraining: "듀얼 스플릿 + HIIT",
    upsell: "데이터 분석 서비스",
    cues: {
      demo: "효율 최적 가동 범위는 여기.",
      fix: "엘보 5° 좁혀 힘 손실↓.",
      motivate: "이번 세트 ROI 10 %↑."
    },
    taboo: "그냥 열심히!"
  },
  {
    code: "INTP",
    title: "논리적 발명가 · Logician",
    summary: "논리 · 호기심 · 분석",
    triggers: ["원리 설명", "실험 자유", "데이터"],
    pitfalls: ["과도한 통제", "지루함"],
    bestTraining: "변형 캘리스테닉",
    upsell: "IoT 체험 세션",
    cues: {
      demo: "힘 벡터는 지면 수직.",
      fix: "무게중심 앞 1 cm 치우쳤어요.",
      motivate: "HRV 지표가 가설과 일치!"
    },
    taboo: "원리 몰라도 해요."
  },
  {
    code: "ENTJ",
    title: "대담한 지휘관 · Commander",
    summary: "추진력 · 전략 · 경쟁",
    triggers: ["승부욕", "시간 절약", "리더 권한"],
    pitfalls: ["느린 진행", "횡설수설"],
    bestTraining: "1RM 파워블록",
    upsell: "CEO 리포트",
    cues: {
      demo: "목표: 1RM +5 kg.",
      fix: "스탠스 2 cm 넓혀 효율↑.",
      motivate: "분기 KR 달성 직전!"
    },
    taboo: "시간 많으니 천천히."
  },
  {
    code: "ENTP",
    title: "창의적 토론가 · Debater",
    summary: "아이디어 · 유머 · 도전",
    triggers: ["새 아이디어", "게임화", "유머"],
    pitfalls: ["반복", "권위적 지시"],
    bestTraining: "변칙 WOD · OCR",
    upsell: "밈 기반 피드백",
    cues: {
      demo: "오늘은 ‘좀비 스쿼트’ 챌린지!",
      fix: "중력선 바꿔 색다른 자극.",
      motivate: "밈 만들어 디스코드 올려요!"
    },
    taboo: "예외 없다—그대로!"
  },

  /* ────────── DIPLOMATS ────────── */
  {
    code: "INFJ",
    title: "통찰적 조언자 · Advocate",
    summary: "통찰 · 비전 · 의미",
    triggers: ["장기 목표", "의미 부여", "1:1 상담"],
    pitfalls: ["소음", "유치한 문구"],
    bestTraining: "하타 + 컨디셔닝",
    upsell: "호흡·명상 패키지",
    cues: {
      demo: "코어와 호흡 연결이 핵심.",
      fix: "갈비뼈 닫고 유지.",
      motivate: "이 흐름이 비전과 딱 맞아요."
    },
    taboo: "빨리빨리!"
  },
  {
    code: "INFP",
    title: "이상주의적 치유사 · Mediator",
    summary: "가치 · 상상 · 자율",
    triggers: ["개인 스토리", "창의 루틴", "자율"],
    pitfalls: ["압박", "반복 지시"],
    bestTraining: "요가·바디웨이트 믹스",
    upsell: "친환경 굿즈",
    cues: {
      demo: "이 동작이 허리 지지의 시작.",
      fix: "골반 정렬 느낌 찾아봐요.",
      motivate: "한라산 준비 60 % 완료!"
    },
    taboo: "살 안 빠져요."
  },
  {
    code: "ENFJ",
    title: "따뜻한 지도자 · Protagonist",
    summary: "격려 · 비전 공유 · 팀워크",
    triggers: ["팀 성장", "비전 공유", "공감 칭찬"],
    pitfalls: ["무시당함", "불투명"],
    bestTraining: "리더십 서킷 + 명상",
    upsell: "웰니스 워크숍",
    cues: {
      demo: "팀 리더가 카운트, 호흡 싱크.",
      fix: "고개 들고 시범—멋져요!",
      motivate: "팀 에너지 MAX!"
    },
    taboo: "본인만 신경 써요."
  },
  {
    code: "ENFP",
    title: "열정적 활동가 · Campaigner",
    summary: "열정 · 상상 · 자유",
    triggers: ["스토리·테마", "자유", "연결"],
    pitfalls: ["지루함", "부정 피드백"],
    bestTraining: "테마 HIIT + 댄스",
    upsell: "체험 패스포트",
    cues: {
      demo: "슈퍼히어로 포즈로 런지, 액션!",
      fix: "앞무릎 스카이라인 상상.",
      motivate: "이 루틴이 V-log 완성!"
    },
    taboo: "틀 틀 틀—규칙!"
  },

  /* ────────── EXPLORERS ────────── */
  {
    code: "ISTP",
    title: "실용적 장인 · Virtuoso",
    summary: "실용 · 즉흥 · 해결",
    triggers: ["새 장비", "스킬 마스터", "경쟁"],
    pitfalls: ["루틴 반복", "장황함"],
    bestTraining: "기능성 · 케틀벨",
    upsell: "장비 렌털권",
    cues: {
      demo: "케틀벨 궤적은 J-커브.",
      fix: "힙 파워로—팔은 줄만 잡는다.",
      motivate: "타임어택 0.8 s 단축!"
    },
    taboo: "설명 길지만…"
  },
  {
    code: "ISFP",
    title: "호기심 예술가 · Adventurer",
    summary: "감성 · 자유 · 미적",
    triggers: ["음악·분위기", "감성 칭찬", "창작"],
    pitfalls: ["딱딱함", "공개 꾸중"],
    bestTraining: "플로우 요가 + 댄스핏",
    upsell: "포토데이 상품",
    cues: {
      demo: "박자 1-2-3-4 리듬.",
      fix: "손끝 곡선 살려 부드럽게.",
      motivate: "동작이 유려해요!"
    },
    taboo: "수치가 중요해요."
  },
  {
    code: "ESTP",
    title: "활동적 해결사 · Entrepreneur",
    summary: "에너지 · 즉흥 · 경쟁",
    triggers: ["즉석 경쟁", "강도", "과시"],
    pitfalls: ["지루한 강의", "대기 시간"],
    bestTraining: "크로스핏 · 복싱",
    upsell: "챔피언 랭크 보드",
    cues: {
      demo: "30초 버피—스타트 총!",
      fix: "힙 드라이브 폭발!",
      motivate: "신기록? 가자!"
    },
    taboo: "쉬엄쉬엄."
  },
  {
    code: "ESFP",
    title: "자유로운 연예인 · Entertainer",
    summary: "즐거움 · 사교 · 감각",
    triggers: ["음악·댄스", "소셜 이벤트", "즉흥 칭찬"],
    pitfalls: ["딱딱한 통계", "고독 훈련"],
    bestTraining: "줌바 · TRX 파티",
    upsell: "스토리 인증 리워드",
    cues: {
      demo: "드롭비트에 스쿼트-팝!",
      fix: "카메라 보고 어깨 활짝.",
      motivate: "스토리 올리면 🔥!"
    },
    taboo: "조용히 집중."
  }
];
