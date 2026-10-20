// ========================================================
// ⚙️ [학교 설정] 학교나 시험이 바뀔 때 여기만 수정하세요!
// ========================================================
const GAME_CONFIG = {
    schoolTag: "덕정고2",      // 부제 옆에 붙을 학교/버전명 (예: The Trial of EXAM · 덕정고2 ver)
    dbKey: "2026_2_2_dj2",      // 학교별 독립 DB 분리 키 (연도_학기_차_학교학년)

    // 🎛️ [교사용 마스터 계정] 선생님만 아는 관리자 로그인 아이디/비밀번호
    adminId: "qlagn",          // 관리자 로그인 아이디 (기본: admin)
    adminPw: "0112",           // 관리자 비밀번호 (기본: 0000)
    
    // ⚔️ [수호령전 체력 & 시간 & 플레이어 목숨]
    guardianHp1: 5,            // 1회차 수호령 체력 (기본: 5)
    guardianTime1: 7.0,        // 1회차 수호령 시간 (기본: 7.0초)

    guardianHpRepeat: 7,       // 2회차 수호령 체력 (기본: 7)
    guardianTimeRepeat: 5.0,   // 2회차 수호령 시간 (기본: 5.0초)
    guardianPlayerHpRepeat: 3, // 👈 2회차 수호령전 플레이어 하트 수 (기본: 3개)

    // 👑 [마왕전 체력 & 시간 & 플레이어 목숨]
    bossHp1: 12,               // 1회차 마왕 체력 (기본: 10)
    bossTime1: 4.0,            // 1회차 마왕 시간 (기본: 5.0초)

    bossHpRepeat: 15,          // 2회차 마왕 체력 (기본: 12)
    bossTimeRepeat: 3.0,       // 2회차 마왕 시간 (기본: 4.0초)
    bossPlayerHpRepeat: 1,     // 👈 2회차 마왕전 플레이어 하트 수 (기본: 3개)

    // 🔥 [시험 직전 파이널] 하드코어 마왕전 설정
    hardcoreMode: {
        enabled: true,                       // 켜기(true) / 끄기(false)
        title: "책 선생의 하드코어 점검",            // 시험 명칭
        targetMaps: "all",                   // "all" 또는 ["ch1", "ch2"]
        hp: 10,                              // 출제 문제 수 (마왕 체력)
        playerHp: 1,                         // 👈 하드코어 플레이어 하트 수 (기본: 3개, 1개로 하면 원코인 데스!)
        timeLimit: 3                       // 문제당 제한 시간 (초)
    }
};

// 🌿 [정령의 세계 지도]
// 새로운 맵을 만들고 싶으면 그냥 [맵 이름]을 적고 아래에 단어들을 적으시면 됩니다!
// 이름 후보군: 숲, 나무, 식물, 정원, 골짜기, 자연
//            호수, 바다, 물, 강, 샘, 폭포, 섬, 
//            하늘, 바람, 구름, 산, 고원, 언덕, 별
//            유적, 신전, 사원, 도서관, 책, 고대, 교과서\

const WORLD_MAPS_TEXT = `
[2_2_1: 과거의 잔재]
#2학기 1차 시험지 속 단어들. 제대로 복습하자.
absence:[명] 부재, 없음
access:[명] 접근, 이용 권한; [동] 접근하다
adaptability:[명] 융통성, 적응성
address:[동] (청중에게) 연설하다, 말을 걸다; [동] 다루다
align:[동] 나란히 맞추다, 일치시키다
ambiguous:[형] 모호한, 다의적인
analyze:[동] 분석하다
appealing:[형] 매력적인, 흥미를 끄는
assimilation:[명] 동화, 흡수
assistance:[명] 도움, 원조
awareness:[명] 인식, 자각
categorical:[형] 단정적인, 명확한
clash:[명] 충돌; [동] 충돌하다
collectivistic:[형] 집단주의적인
communal:[형] 공동의, 공동체의
conformity:[명] 순응, 일치
contemporary:[형] 현대의; [형] 동시대의, 당대의
context:[명] 맥락, 문맥, 배경
contribution:[명] 기여, 공헌
convenient:[형] 편리한
convey:[동] 전달하다, 전하다
criticism:[명] 비판, 비평
cumulative:[형] 누적되는, 누계의
decline:[명] 쇠퇴, 하락; [동] 감소/하락하다
desire:[명] 욕구, 갈망; [동] 바라다
diminish:[동] 줄이다, 감소시키다
disposable:[형] 일회용의; [형] 처분할 수 있는
dispute:[명] 분쟁, 논쟁; [동] 반박하다
diverse:[형] 다양한
dominance:[명] 지배, 우세
downturn:[명] (경기) 침체, 하강 국면
drawback:[명] 결점, 문제점
earnings:[명] 소득, 수입
efficiently:[부] 효율적으로
emphasize:[동] 강조하다
endure:[동] 견디다, 참다
engage in:[숙] ~에 참여하다, 종사하다
environmentally friendly:[형] 친환경적인
evident:[형] 분명한, 명백한
evolution:[명] 진화, 발전
expand:[동] 확장하다, 확대하다
fixed:[형] 고정된
flexible:[형] 유연한, 융통성 있는
flexibility:[명] 유연성, 융통성
foster:[동] 육성하다, 발전시키다
gain access to:[동] ~에 접근하다, 이용 권한을 얻다
give weight to:[동] ~에 무게를 두다, 중요시하다
guilty:[형] 죄책감을 느끼는, 유죄의
human-caused:[형] 인간 활동으로 초래된
immigrant:[명] (타국에서 온) 이민자; [형] 이민의
impact:[명] 영향, 충격; [동] 영향을 주다
in exchange for:[숙] ~의 대가로, ~와 교환하여
increasingly:[부] 점점 더, 갈수록
individualism:[명] 개인주의
individualistic:[형] 개인주의적인
individually:[부] 개별적으로, 각자
initial:[형] 처음의, 초기의
innovation:[명] 혁신, 쇄신
joblessness:[명] 실직, 실업 상태
loyalty:[명] 충성도, 충실
maintain:[동] 유지하다, 지속하다
make up for:[숙] ~을 보상하다, 만회하다
meaningful:[형] 의미 있는
multiple:[형] 다수의, 다양한
neglect:[동] 방치하다, 소홀히 하다; [명] 방치
nonverbal:[형] 비언어적인
notification:[명] 알림, 통지
numerous:[형] 수많은, 다수의
ownership:[명] 소유, 소유권
personalized:[형] 맞춤형의, 개인화된
pioneer:[명] 개척자, 선구자
platform:[명] 승강장, 플랫폼
portion:[명] 부분, 몫
predictable:[형] 예측 가능한
preference:[명] 선호, 특혜
premium:[형] 고급의; [명] 할증금
previous:[형] 이전의, 사전의
primarily:[부] 주로, 본래
prior to:[전] ~에 앞서, ~ 전에
prioritize:[동] 우선순위를 매기다, 우선시하다
property:[명] 부동산, 소유물, 재산; [명] 특성, 성질
prosperity:[명] 번영, 번창
purchase:[명] 구매; [동] 구매하다
random:[형] 무작위의, 임의의
regardless of:[숙] ~에 상관없이
reject:[동] 거부하다, 거절하다
reserve:[동] 따로 남겨두다, 보존하다; [동] 예약하다
resident:[명] 거주자, 주민
reusable:[형] 재사용할 수 있는
revenue:[명] 수익, 세입
rhyme:[명] 각운, 운; [동] 운을 맞추다
rhythm:[명] 리듬, 규칙적인 변화
rivalry:[명] 라이벌 관계, 경쟁
scrolling:[명] 스크롤하기, 화면 이동
self-worth:[명] 자아 존중감, 자존감
settle:[동] 해결하다; [동] 정착하다
shift:[명] 변화, 이동; [동] 이동하다, 옮겨가다
significant:[형] 중대한, 상당한
socioeconomic:[형] 사회경제적인
specifically:[부] 구체적으로, 특별히
straightforward:[형] 수월한, 복잡하지 않은; [형] 솔직한
structure:[명] 구조, 체계; [명] 구조물, 건물
subtle:[형] 미묘한, 포착하기 어려운
tailor:[명] 재단사; [동] (필요·목적에) 맞추다, 재단하다
take action:[숙] 조치를 취하다, 행동에 나서다
tendency:[명] 성향, 경향
transformation:[명] 변용, 변화
typically:[부] 일반적으로, 전형적으로
unclear:[형] 불분명한, 모호한
undergo:[동] 겪다, 받다
unforeseen:[형] 예측하지 못한, 뜻밖의
uniform:[명] 제복; [형] 획일적인, 균일한
urban:[형] 도시의
variety:[명] 다양성
virtual:[형] 가상의; [형] 사실상의
vulnerability:[명] 취약성, 연약함
willingness:[명] 기꺼이 하려는 마음

`;
