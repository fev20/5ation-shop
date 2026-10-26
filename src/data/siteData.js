// ============================================================
// 이 파일은 웹사이트의 글과 정보를 모아 둔 학생용 파일입니다.
// 작은따옴표(' ') 안의 글자와 대괄호([ ]) 안의 목록을 수정하세요.
// 쉼표(,)와 따옴표를 지우지 않도록 주의하세요.
// ============================================================

export const siteData = {
  // [실습 1] 브라우저 탭에 표시할 웹사이트 제목을 작성하세요.
  siteTitle: '홍길동의 포트폴리오',

  // [실습 2] 자신의 이름과 한 줄 소개를 작성하세요.
  name: '홍길동',
  role: '프론트엔드 개발자를 꿈꾸는 학생',
  headline: '배운 것을 기록하고, 사람들에게 도움이 되는 웹사이트를 만들고 있습니다.',

  // [실습 3] images 폴더에 사진을 넣고 파일 이름을 바꾸세요.
  profileImage: '/images/profile-placeholder.svg',

  // 자기소개와 앞으로의 목표를 작성하세요.
  about: '동아리 활동과 개인 프로젝트를 통해 웹 개발의 기본기를 쌓고 있습니다.',
  goal: '사용하기 편하고 안전한 웹사이트를 만드는 개발자로 성장하고 싶습니다.',

  // 관심 분야와 자신의 장점을 쉼표로 구분해 추가하거나 삭제하세요.
  interests: ['웹 개발', 'UI/UX', '웹 접근성', '오픈소스'],
  strengths: ['꾸준한 학습', '문제 해결', '협업', '기록 습관'],

  // 기술 분류 이름과 기술 목록을 자신에게 맞게 수정하세요.
  skills: {
    언어: ['JavaScript', 'Python'],
    화면개발: ['HTML', 'CSS', 'React'],
    도구: ['Git', 'GitHub', 'Figma', 'VS Code'],
  },

  // 아래 정보는 화면 아래쪽에 표시됩니다.
  siteName: 'Hong Portfolio',
  lastUpdated: '2026-10-26',
};

// [실습 5] 자신의 GitHub와 SNS 주소를 작성하세요.
// 사용하지 않을 항목은 작은따옴표 안을 비워 두면 화면에서 숨겨집니다.
export const contact = {
  email: 'student@example.com',
  phone: '010-1234-5678',
  github: 'https://github.com/your-id',
  blog: '',
  sns: 'https://instagram.com/your-id',
};

// [실습 4] 프로젝트를 추가하려면 { 부터 }, 까지를 복사해 붙여 넣으세요.
// 마지막 프로젝트 뒤에는 쉼표가 없어도 됩니다.
export const projects = [
  {
    title: '동아리 소개 웹사이트',
    summary: '동아리 소개와 활동 기록을 보여 주는 웹사이트',
    description: 'HTML, CSS, React를 연습하며 만든 첫 번째 프로젝트입니다.',
    tech: ['React', 'CSS', 'Vite'],
    role: '화면 구성과 디자인',
    period: '2026.03 - 2026.04',
    github: 'https://github.com/your-id/club-homepage',
    demo: 'https://example.com',
    image: '/images/project-club.svg',
    video: '',
    attachments: [],
  },
  {
    title: '개인 일정 관리 앱',
    summary: '할 일과 마감일을 관리하는 간단한 웹 앱',
    description: '버튼을 누르고 정보를 저장하는 JavaScript 기능을 연습했습니다.',
    tech: ['React', 'JavaScript', 'CSS'],
    role: '기능 구현과 디자인',
    period: '2026.04 - 2026.05',
    github: 'https://github.com/your-id/todo-planner',
    demo: 'https://example.com',
    image: '/images/project-planner.svg',
    video: '',
    attachments: [],
  },
];

// 자격증과 활동 내역을 추가하거나 삭제하세요.
// type에는 '자격증', '교육', '동아리', '수상'처럼 구분할 말을 적습니다.
export const certificates = [
  { type: '자격증', name: '정보처리기능사', organization: '한국산업인력공단', date: '2026.02', pdfLink: '' },
  { type: '활동', name: '웹 개발 동아리', organization: '우리 학교', date: '2026.03 - 현재', pdfLink: '' },
  { type: '교육', name: '웹 기초 과정 수료', organization: '온라인 학습 플랫폼', date: '2026.06', pdfLink: '' },
];

// 화면을 만드는 내부 코드는 기존 이름인 profile을 사용합니다.
// 학생은 이 줄을 수정하지 않아도 됩니다.
export const profile = siteData;
