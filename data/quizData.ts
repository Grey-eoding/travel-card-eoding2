// data/quizData.ts

export interface Option {
  text: string;
  type: string;
}

export interface Question {
  question: string;
  options: Option[];
}

export const quizData: Question[] = [
  {
    question: "✈️ 여행할 때 결제 방식, 뭐가 더 중요하다고 생각해?",
    options: [
      { text: "💸 외화 결제 수수료 절약이 진짜 핵심이지!", type: "fee" },
      { text: "💳 환전 말고 카드로 다 해결하는 게 편함", type: "card" },
      { text: "⚙️ 충전 자동이면 깜빡해도 걱정 없잖아", type: "auto" },
      { text: "✅ 체크카드처럼 바로 쓰는 게 제일 스트레스 없음", type: "check" },
    ],
  },
  {
    question: "🌍 환전 수수료 혜택이 크면, 어디 갈 때 더 꿀이야?",
    options: [
      { text: "🇪🇺 유럽 여행! 통화 너무 다양해서 수수료 장난 아님", type: "fee" },
      { text: "🛍️ 엔화, 달러 쇼핑 여행할 때 완전 중요해", type: "shop" },
      { text: "🧾 현금보다 카드 쓰는 스타일에겐 완전 필수", type: "card" },
      { text: "🏃 출장처럼 짧게 다녀올 땐 간편하게 써야지", type: "short" },
    ],
  },
  {
    question: "🔋 충전 방식, 너 취향은 뭐야?",
    options: [
      { text: "⚡ 자동 충전! 손 안 대고 코 풀기 최고", type: "auto" },
      { text: "👋 수동 충전! 직접 관리하는 게 더 안심돼", type: "manual" },
      { text: "🔁 자동+수동 둘 다 되면 완벽하지!", type: "both" },
      { text: "🆓 충전 안 하고 그냥 결제되면 더 좋음", type: "nocheck" },
    ],
  },
  {
    question: "🏧 해외에서 ATM 뽑을 일 많아?",
    options: [
      { text: "💵 현지에서 현금 자주 뽑는 편이야", type: "atm" },
      { text: "💳 그냥 카드로 거의 다 해결해", type: "card" },
      { text: "🤔 여행지에 따라 가끔 필요해", type: "flex" },
      { text: "📉 수수료 적으면 ATM 써도 괜찮지", type: "atmfee" },
    ],
  },
  {
    question: "📊 카드 혜택에 실적 조건 붙어 있으면 어때?",
    options: [
      { text: "🆓 무조건 조건 없는 게 좋음!", type: "free" },
      { text: "🎁 실적 있어도 혜택만 좋으면 OK", type: "benefit" },
      { text: "💳 어차피 매달 일정 금액은 써서 괜찮아", type: "routine" },
      { text: "😮 실적 조건 있는 건 아직 부담됨", type: "burden" },
    ],
  },
  {
    question: "🔁 원화 재환전 수수료! 신경 써?",
    options: [
      { text: "💸 꼭 체크함. 남은 돈 처리할 때 중요해", type: "check" },
      { text: "😎 그냥 다 써버려서 상관없음", type: "careless" },
      { text: "📈 환율 우대 있으면 만족해", type: "prefer" },
      { text: "📚 몰랐는데 들으니 신경 쓰이네", type: "learned" },
    ],
  },
  {
    question: "🌐 카드 브랜드, 너는 뭐 보고 골라?",
    options: [
      { text: "🌍 비자/마스터처럼 어디서나 되는 게 최고", type: "global" },
      { text: "🀄 중국 가면 유니온페이 필수임", type: "china" },
      { text: "🗺️ 해외 전역에서 통하는 게 좋아", type: "world" },
      { text: "🔍 브랜드보단 수수료랑 혜택 먼저 봐", type: "logic" },
    ],
  },
  {
    question: "💡 이럴 때 ‘좋은 카드다!’ 싶은 순간은?",
    options: [
      { text: "🗼 일본 편의점 할인 받을 때", type: "japan" },
      { text: "🚇 유럽에서 교통카드처럼 쓸 수 있을 때", type: "europe" },
      { text: "💳 충전 없이 그냥 결제될 때", type: "easy" },
      { text: "💱 환전 없이도 외화 결제 딱 되는 순간", type: "direct" },
    ],
  },
];
