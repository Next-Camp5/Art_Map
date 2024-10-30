export const DATA = false;

// 작품 데이터
export const artworkData = [
  {
    id: 1,
    title: '별이 빛나는 밤에',
    artist: '빈센트 반 고흐',
    year: 1889,
    image: '',
  },
  {
    id: 2,
    title: '모나리자',
    artist: '레오나르도 다 빈치',
    year: 1503,
    image: '',
  },
  { id: 3, title: '절규', artist: '에드바르 뭉크', year: 1893, image: '' },
];

// 작가 데이터
export const artistData = [
  {
    id: 1,
    name: '빈센트 반 고흐',
    nationality: '네덜란드',
    birthYear: 1853,
    genre: '회화', // 예시 장르 추가
  },
  {
    id: 2,
    name: '레오나르도 다 빈치',
    nationality: '이탈리아',
    birthYear: 1452,
    genre: '회화, 조각', // 예시 장르 추가
  },
  {
    id: 3,
    name: '에드바르 뭉크',
    nationality: '노르웨이',
    birthYear: 1863,
    genre: '표현주의', // 예시 장르 추가
  },
  {
    id: 4,
    name: '김 작가',
    nationality: '한국',
    birthYear: 1980,
    genre: '웹툰', // 예시 장르 추가
  },
  {
    id: 5,
    name: '이 작가',
    nationality: '한국',
    birthYear: 1975,
    genre: '미디어 아트', // 예시 장르 추가
  },
];

// 전시관 데이터
export const exhibitionData = [
  { id: 1, name: '루브르 박물관', location: '프랑스 파리' },
  { id: 2, name: '메트로폴리탄 미술관', location: '미국 뉴욕' },
  { id: 3, name: '테이트 모던', location: '영국 런던' },
];
