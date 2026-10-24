// ========================================================
// ⚙️ [학교 설정] 학교나 시험이 바뀔 때 여기만 수정하세요!
// ========================================================
const GAME_CONFIG = {
    schoolTag: "덕정고2",      // 부제 옆에 붙을 학교/버전명 (예: The Trial of EXAM · 덕정고2 ver)
    dbKey: "2026_2_2_dj2",      // 학교별 독립 DB 분리 키 (연도_학기_차_학교학년)

    // 🎛️ [교사용 마스터 계정] 선생님만 아는 관리자 로그인 아이디/비밀번호
    adminId: "qlagn",          // 관리자 로그인 아이디 (기본: admin)
    adminPw: "0112",           // 관리자 비밀번호 (기본: 0000)
    adminName: "책선생",        // 👈 선생님 성함 지정!
    
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

    // 🚨 [안개 구출전 일일 쿼터 설정] (일반 단어 계약량에 따라 하루 의무 구출량 배정)
    rescueQuota: [
        { reqWords: 400, quota: 20 }, // 일반 단어 400마리 이상: 하루 20마리
        { reqWords: 240, quota: 15 }, // 일반 단어 240마리 이상: 하루 15마리
        { reqWords: 120, quota: 10 }, // 일반 단어 120마리 이상: 하루 10마리
        { reqWords: 0,   quota: 5  }  // 기본(0마리 이상): 하루 5마리
    ],

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

[E2_L3_1: 3과의 숲 1]
# 3과의 단어 정령들. 잘 보살펴주자.
varied	:	[형] 다양한
it appears[seems] that ~	:	[숙] ~인 것으로 보인다
exist	:	[동] 있다, 존재하다
solely	:	[부] 단독으로, 오로지
suffering	:	[명] 고통
humanity	:	[명] 인류, 인간; [명] 인간애, 인류애
influenza	:	[명] 유행성 감기, 독감
pandemic	:	[명] 전세계적인 유행병
estimate	:	[동] 추정하다
smallpox	:	[명] 천연두
claim	:	[동] (목숨을) 앗아 가다; [동] (자신의 것이라) 주장하다; [명] 주장
life	:	[명] 생명, 목숨; [명] 생명체, 생물
further	:	[형/부] 그 이상의, 더 나아가
according to ~	:	[전] ~에 따르면
affect	:	[동] ~에 영향을 미치다
aspect	:	[명] 일면, 측면
outbreak	:	[명] (전염병 등의) 발병, 발발
viral	:	[형] 바이러스(성)의; [형] 입소문의, 입소문으로 퍼지는
link ~ to …	:	[동] ~을 …와 관련시키다
wild	:	[형] 야생의
allow ~ toR	:	[동] ~가 …하는 것을 가능하게 하다
prior	:	[형] 사전(事前)의, 이전의
immunity	:	[명] 면역(력)
historically	:	[부] 전통적으로, 과거에
natural	:	[형] 자연의; [형] 자연스러운; [형] 타고난
barrier	:	[명] 장벽, 벽
prevent ~ from V-ing	:	[동] ~가 …하는 것을 막다
infect	:	[동] 감염[전염]시키다
industrialization	:	[명] 산업화, 공업화
destroy	:	[동] ~을 파괴하다
climate change	:	[명] 기후 변화
original	:	[형] 본래의, 원래의; [형] 독창적인
habitat	:	[명] 서식지
result in ~	:	[동] 야기하다, 초래하다
increase	:	[명] 증가, 상승; [동] 증가하다, 늘다
interaction	:	[명] 상호 작용
between A and B	:	[전] A와 B 사이의
present	:	[형] 있는, 현존하는; [동] 제시하다, 제공하다; [명] 현재, 선물
primary	:	[형] 주된, 주요한
concern	:	[명] 우려, 근심, 걱정; [동] 걱정시키다
harmful	:	[형] 해로운, 유해한
not necessarily	:	[숙] 반드시 ~은 아닌
keeper	:	[명] 지키는 사람
play a(n) ~ role in …	:	[동] …에서 ~한 역할을 하다
crucial	:	[형] 결정적인, 매우 중요한
support	:	[동] 부양하다; [동] 지지하다, 지원하다; [명] 부양, 지지, 지원
researcher	:	[명] 연구자
investigate	:	[동] 조사하다
sustain	:	[동] 유지하다, 연명하게 하다
the planet	:	[명] 지구; [명] 그 행성
instead of ~	:	[전] ~ 대신에
harm	:	[동] ~에 해를 끼치다; [명] 해, 해로움
act as ~	:	[동] ~의 역할을 하다
regulator	:	[명] 조절기, 조절자
bacterial	:	[형] 세균의
population	:	[명] 개체수, 개체군; [명] 인구
reproductive	:	[형] 생식의, 번식의
function	:	[명] 기능; [동] 기능하다; [명] 함수
on one’s own	:	[전명] 혼자 힘으로, 스스로
organism	:	[명] 유기체, 생물체

[E2_L3_2: 3과의 숲 2]
# 3과의 단어 정령들. 잘 보살펴주자.
multiply	:	[동] 증식[번식]하다; [동] 곱해지다, 배가되다
continue	:	[동] 계속하다, 지속하다
eventually	:	[부] 결국, 마침내
produce	:	[동] 만들어내다, 생성하다; [명] 농작물
go on toR	:	[동] 다음으로 ~하다, 이어서 ~하다
whole	:	[형] 전체의, 전부의
control	:	[동] ~을 통제·억제하다; [명] 통제, 제어
excessive	:	[형] 과도한, 지나친
growth	:	[명] 성장, 증가
certain	:	[형] 어떤, 특정의; [형] 확신하는
significance	:	[명] 중요성, 의의
supply ~ to …	:	[동] ~을 …에게 공급하다
oxygen	:	[명] 산소
source	:	[명] 원천, 공급원, 출처
nutrient	:	[명] 영양소, 영양분
release	:	[동] 방출하다, 내뿜다, [명] 배출; [동] 발매하다, [명] 발매
infection	:	[명] 감염, 전염
remains	:	[명] 유해, 사체, 남아있는 것
lead to ~	:	[동] (결과 등)으로 이어지다
lack	:	[명] 결여, 부족; [동] ~가 결여되어있다, 부족하다
disappear	:	[동] 사라지다
survive	:	[동] (사건 등에서) 생존하다, 살아남다
species / species	:	[명] (생물학적) 종
regulate	:	[동] 조절하다, 조정하다, 규제하다
excessively	:	[부] 과도하게, 지나치게
reduce	:	[동] 줄이다; [동] 격하시키다
in turn	:	[전명] 차례로; [전명] 결국, 결과적으로
room	:	[명] 여지, 기회, 가능성; [명] 방, 공간
flourish	:	[동] (동식물이) 잘 자라다, 번성하다
considering ~	:	[전] ~을 고려하면
chain	:	[명] 일련의 것, 연쇄; [명] 사슬, 체인
assume	:	[동] 가정하다
fulfill	:	[동] (기능·역할 등)을 수행하다
ecosystem	:	[명] 생태계
evolution	:	[명] 진화
recognized	:	[형] 알려진
contribution	:	[명] 기여, 공헌
cell	:	[명] 세포; [명] (감옥 등의) 방 한 칸
host	:	[명] 숙주; [명] 주인, 주최자; [동] 주최하다
egg	:	[명] (생물의) 알; [명] 난자
sperm	:	[명] (수컷의) 정자
pass ~ down to …	:	[동] ~을 …에게 물려주다
offspring	:	[명] (동물의) 새끼
insertion	:	[명] 삽입
genome	:	[명] 게놈, 유전체
mechanism	:	[명] 메커니즘, 기제(機制)
potential	:	[명] 잠재력; [형] 잠재적인
development	:	[명] 발달, 성장; [명] (사진의) 현상; [명] (병의) 발병
placenta	:	[명] 태반
mammal	:	[명] 포유동물, 포유류
complex	:	[형] 복잡한; [명] 복합단지
organ	:	[명] 장기, 기관
fetus	:	[명] 태아
facilitate	:	[동] 용이하게 하다
exchange	:	[명] 교환; [동] 교환하다
waste product	:	[명] (신체의) 노폐물
protect ~ from …	:	[동] ~을 …로부터 보호하다
immune	:	[형] 면역의
female	:	[명] 암컷, 여성

[E2_L3_3: 3과의 숲 3]
# 3과의 단어 정령들. 잘 보살펴주자.
leave	:	[동] 떠나다; [동] ~을 (놓아)두다; [동] ~을 …한 상태로 두다
location	:	[명] 장소, 위치
vulnerable	:	[형] 취약한, 연약한
predator	:	[명] 포식자, 포식 동물
emergence	:	[명] 출현, 대두
young	:	[명] (집합적) (동물의) 새끼; [형] 어린
remote	:	[형] 멀리 떨어진, 원격의
ancestor	:	[명] 조상, 선조
report	:	[동] 보고하다, 알리다; [동] 보도하다; [명] 보고서, 기사
serve	:	[동] ~에 도움이 되다; [동] (as) ~의 역할을 하다; [동] 제공하다, 대접하다
means	:	[명] 수단, 방법
cure	:	[명] 치료제, 치료법; 치유; [동] 치료하다, 치유하다
expand	:	[동] 확대되다
utilize	:	[동] 활용하다, 이용하다
arise	:	[동] 생기다, 발생하다
notable	:	[형] 주목할 만한
interest	:	[명] 흥미로움, 매력적임, 관심; [동] 관심을 끌다; [명] 이자, 이득
gene	:	[명] 유전자
therapy	:	[명] 치료, 요법
cancer	:	[명] 암, 종양
compare ~ to …	:	[동] ~를 …와 비교하다
instruction	:	[명] 지시 (사항)
guide	:	[명] 안내서, 지침; [동] 인도하다, 가이드하다
govern	:	[동] 지배하다
genetic	:	[형] 유전자의
disorder	:	[명] 이상, 장애, 질환
step in	:	[동] 끼어들다, 개입하다
fix	:	[동] 고치다, 처리하다; [동] 고정시키다
essence	:	[명] 본질, 정수
lie (- lay - lain)	:	[동] (생물이) 누워있다; [동] (물체가) 있다
deliver ~ to …	:	[동] ~을 …에게 전달하다
correct	:	[동] 바로잡다, 수정하다; [형] 맞는, 옳은
patient	:	[명] 환자; [형] 참을성 있는
enable ~ toR	:	[동] ~가 …할 수 있게 하다
modify	:	[동] 수정하다, 변경하다
carrier	:	[명] (병원체의) 매개체, 보균자
fight ~ off	:	[동] (질병 등)과 싸워 이겨내다
based on[upon] ~	:	[전] ~에 기초를 둔, ~을 바탕으로 하는
notion	:	[명] 생각, 개념, 관념
manipulate	:	[동] (배후에서) 조작하다; [동] (자료 등을) 가공하다, 조작하다
specifically	:	[부] 구체적으로, 분명하게
target	:	[동] 목표로 삼다; [명] 목표
unharmed	:	[형] 다치지[손상되지] 않은
still	:	[부] 아직(도); [형] 가만히 있는, 고요한; [부] 훨씬
stage	:	[명] 단계, 국면, 시기; [명] 무대, 스테이지
involve ~ in …	:	[동] ~을 …에 참여시키다
discover	:	[동] 발견하다
incurable	:	[형] 치료 불가능한, 불치의
find ~ out	:	[동] 알아내다
let alone	:	[전] ~은 말할 것도 없고, ~은 커녕
characteristic	:	[명] 특징, 특성
equip ~ toR	:	[동] ~에게 …할 능력[기술]을 키워주다
beneficial	:	[형] 유익한, 이로운
purpose	:	[명] 목적, 의도
defense	:	[명] 방어책, 방어 수단[시설]
diversity	:	[명] 다양성
reach	:	[동] 이르다, 도달하다
working	:	[명] 작동[운용/작용] (방식)


[E2_L4_1: 4과의 호수 1]
# 4과의 단어 정령들. 잘 보살펴주자.
guardian	:	[명] 수호자
fascinate	:	[동] 매혹[매료]하다
mystery	:	[명] 불가사의, 미스터리, 수수께끼
explore	:	[동] 탐험하다, 탐사하다
space	:	[명] 우주; [명] 공간
remarkable	:	[형] 놀랄 만한, 주목할 만한
individual	:	[명] 개(개)인; [형] 개별적인, 개인의
appreciate	:	[동] 가치[진가]를 알다; [동] 고마워하다; [동] 감상하다
appeal	:	[명] 호소력, 매력; [동] 호소하다, 어필하다
ocean	:	[명] 바다
eagerly	:	[부] 열렬히, 열심히
afraid of ~	:	[형] ~을 무서워하는
delight	:	[동] (in) ~에서 큰 기쁨을 느끼다; [명] 즐거움, 기쁨
long before ~	:	[접/전] ~보다 훨씬 전에
recognize	:	[동] (사실 등을) 인정하다; [동] 알아보다, 인식하다
not only[merely] A but (also) B	:	[접] A뿐만 아니라 B도
full of ~	:	[형] ~로 가득 찬
protect	:	[동] 보호하다, 지키다
legendary	:	[형] 전설적인
marine	:	[형]해양의, 바다에 사는; [명] 해병대
biologist	:	[명] 생물학자
name A B	:	[동] A에게 B라는 이름을 지어주다
observe	:	[동] 관찰하다; [동] 준수하다; [동] 말하다
diverse	:	[형] 여러 가지의, 다양한
gulf	:	[명] 만(灣) (바다가 육지 쪽으로 움푹 들어간 지형)
gift	:	[동] ~을 선물로 주다; [명] 선물; [명] 재능
goggles	:	[명] 고글
encourage	:	[동] 격려하다, 촉진하다
help ~ with …	:	[동] (사람)의 …을 돕다
underwater	:	[형/부] 수중의, 수중에
exploration	:	[명] 탐험, 탐사
gain	:	[동] 얻다, 획득하다; [명] 이득, 얻는 것
view	:	[명] 시야; [명] 광경; [동] 보다
wonder	:	[명] 경이로운 것[일]; [동] 궁금해하다
dive	:	[명] 잠수; [동] 잠수하다, 뛰어들다
descend	:	[동] 하강하다
belong to ~	:	[동] ~의 것[소유]이다, ~에 속해있다
thrilled	:	[형] 크게 기뻐하는, 흥분된
breathe	:	[동] 숨쉬다, 호흡하다
naturally	:	[부] 자연스럽게
excitement	:	[명] 흥미진진함, 자극, 흥분
desire	:	[명] 욕구, 열망; [동] 바라다
grow	:	[동] 증가하다, 늘다; [동] 성장하다, 자라다; [동] 기르다, 키우다
scuba	:	[명] 스쿠버, 수중 자급식 호흡 장비
equipment	:	[명] 장비, 설비, 도구
innate	:	[형] 타고난, 선천적인
sense	:	[명] 감각; [동] 느끼다, 감지하다
adventure	:	[명] 모험
curiosity	:	[명] 호기심
academic	:	[형] 학업의, 학문의
journey	:	[명] 여행(길), 여정
lead	:	[동] 이끌다; [명] (금속) 납
pioneer	:	[명] 선구자, 개척자
conservation	:	[명] 보호, 보존

[E2_L4_2: 4과의 호수 2]
# 4과의 단어 정령들. 잘 보살펴주자.
fuel	:	[동] ~에 기름을 붓다, 불을 붙이다; [명] 연료
astronaut	:	[명] 우주 비행사
step	:	[명] (발)걸음     [동] ~에 발을 디디다, 밟다
situate	:	[동] 위치시키다
unable toR	:	[형] ~할 수 없는
participate in ~	:	[동] ~에 참여[참가]하다
in charge	:	[전명] 책임자인, 담당하는
cope with ~	:	[동] ~에 잘 대처하다
following year	:	[명] 다음 해
choose ~ toR	:	[동] (사람)을 …하게 하려고 선택하다
spend ~ V-ing	:	[동] ...하는데 ~을 쓰다
beneath	:	[전] ~의 바로 밑에
surface	:	[명] 표면
along with ~	:	[전] ~와 함께, ~에 덧불여
oceanographer	:	[명] 해양학자
push the boundaries of ~	:	[동] ~의 영역[경계]을 확장하다
challenge	:	[동] 도전하다; [동] 이의를 제기하다; [명] 도전, 어려움
gender	:	[명] 성별
stereotype	:	[명] 고정관념
residence	:	[명] 거주
reef	:	[명] 암초, 사초
complexity	:	[명] 복잡함
scientific	:	[형] 과학의, 과학적인
finding	:	[명] 결과(물), 발견(물)
publish	:	[동] 공개하다, 발표하다
including	:	[전] ~을 포함해서
coral reef	:	[명] 산호초
crew	:	[명] (집합적) 승무원
return	:	[명] 돌아가기, 귀환, [동] 돌아가다; [명] 반납, [동] 반납하다
receive	:	[동] 받다, 수령하다
attention	:	[명] 주목, 주의, 관심
similar to ~	:	[형] ~와 비슷한
historic	:	[형] (사건) 역사적인,역사상 중요한
landing	:	[명] 착륙
accomplish	:	[동] 이루다, 성취하다, 달성하다
achievement	:	[명] 성과, 업적
off the coast	:	[전명] 연안에(서),근해에(서)
suit	:	[명] 정장, 슈트; [동] 적합하다, 꼭 맞다
floor	:	[명] 바닥
unattached	:	[형] 붙어 있지 않은,떨어져 있는
mark A as B	:	[동] A를 B로 표시하다, 기록하다
solo	:	[형] 단독의, 개인의
earn A B	:	[동] A에게 B를 벌어다주다, 가져다주다
title	:	[명] 호칭, 칭호
deepness	:	[명] 깊숙한 곳, 심연
glow	:	[동] (은은하게) 빛나다; [명] 은은한 불빛
creature	:	[명] 생명체, 생물
flash	:	[동] 번쩍이다; [명] 번쩍임
darkness	:	[명] 어둠, 암흑
squid	:	[명] 오징어
emit	:	[동] 방출하다, 내뿜다
liquid	:	[명] 액체
defend	:	[동] 지키다, 방어하다
plant	:	[동] 박아놓다, 심다; [명] 식물; [명] 공장
flag	:	[명] 기(旗), 깃발


[E2_L4_3: 4과의 호수 3]
# 4과의 단어 정령들. 잘 보살펴주자.
seafloor	:	[명] 해저
symbolize	:	[동] ~을 상징하다
in comparison to ~	:	[전] ~와 비교하여
associate A with B	:	[동] A를 B와 연관시키다
moment	:	[명] 순간, 때, 시점
note	:	[동] 언급하다; [동] 주목하다; [동] 필기하다; [명] 지폐, 음표
parallel	:	[명] 유사성, 연관성
frontier	:	[명] 변경, 개척지
human being	:	[명] 사람, 인간
come toR	:	[동] ~하게 되다
respect	:	[동] 존중하다; [명] 존중, 존경
vast	:	[형] 거대한, 광활한
appoint A (as) B	:	[동] A를 B로 임명하다
chief	:	[형](계급·직위 등이) 최고의, 수석의
national	:	[형] 국가의, 국립의
oceanic	:	[형] 대양의
atmospheric	:	[형] 대기(의)
administration	:	[명] ~청, ~기관; [명] 행정, 실행, 처리
aim	:	[동] 목표로 하다, 노리다
shift	:	[동] 움직이다, 이동하다; [명] 이동, 변화
exploit	:	[동] 활용하다, 개발하다; [동] 착취하다
resource	:	[명] 자원
prioritize	:	[동] 우선시하다, 우선순위를 두다
research	:	[명] 연구; [동] 연구하다
despite	:	[전] ~에도 불구하고
effort	:	[명] 분투, 노력
senior	:	[형] 상급의, 고위의, 선배의
official	:	[명] 관리, 간부; [형] 공식적인
government	:	[명] 정부, 정권
face	:	[동] 직면하다; [명] 얼굴, 면
restriction	:	[명] 규제, 제한
freedom	:	[명] 자유
speech	:	[명] 말하기, 연설, 발화
resign	:	[동] 사임하다, 사직하다
active	:	[형]적극적으로 참여하는
environmental	:	[형] 환경의
activist	:	[명] 활동가, 운동가
private	:	[형] 민간의, 개인의, 사적인
sector	:	[명] 부문, 분야
grant	:	[동] 부여하다, 수여하다; [명] 지원금
technology	:	[명] 기술
business	:	[명] 사업체, 회사, 기업
public	:	[형] 대중의, 일반인의
lecture	:	[명] 강의, 강연
article	:	[명] 기사, 논설
mass	:	[명] 대중; [명] 덩어리; [명] 질량
medium / media	:	[명] 매체, 매개
expertise	:	[명] 전문 지식
campaign	:	[동] 운동을 벌이다,캠페인에참여하다
commit oneself to ~	:	[동] ~에 헌신[전념]하다
lifetime	:	[명] 일생, 평생, 생애
raise awareness	:	[동] 의식을 높이다, 인식을 재고하다
prominence	:	[명] 유명함, 저명함
key	:	[명] 비결, 핵심; [명] 열쇠
initiate	:	[동] 시작하다, 착수하다
global	:	[형] 세계적인, 전지구적인
platform	:	[명] 플랫폼, 승강장
virtually	:	[부] 가상으로
foster	:	[동] 조장하다, 육성하다; [형] 입양의, 양

[E2_L4_4: 4과의 호수 4]
# 4과의 단어 정령들. 잘 보살펴주자.
appreciation	:	[명] 인식, 이해; [명] 감사; [명] 감상
award	:	[동](상 등을) 수여하다; [명] 상
distinguished	:	[형] 저명한, 위대한
annual	:	[형] 연례의, 매년의
financial	:	[형] 재정적인, 금융적인
refuge	:	[명] 피난처, 대피소
pollution	:	[명] 오염
overfishing	:	[명] 물고기 남획
threat	:	[명] 위협
establish	:	[동] 설립하다, 정립하다
non-profit	:	[형] 비영리의, 비영리적인
organization	:	[명] 조직, 기구, 단체
inspire	:	[동] 고무하다, 자극하다
establishment	:	[명] 설립, 확립
approximately	:	[부] 대략
goal	:	[명] 목표
in line with ~	:	[전명] ~에 맞추어[일치하여]
union	:	[명] 연맹, 연합, 협회
recommend	:	[동] 권장하다, 추천하다
maintain	:	[동] 유지하다, 지속하다
represent	:	[동] 나타내다; [동] 대표하다, 대리하다
drive	:	[동] ~을 이끌다, 추동하다; [동] 몰다, 운전하다; [명] 원동력
share	:	[동] 공유하다; [명] 지분, 몫
passion	:	[명] 열정
dedication	:	[명] 헌신, 전념
author	:	[명] 작가, 저자, 지은이
lecturer	:	[명] 강연자
consistently	:	[부] 일관되게, 한결같이
acknowledge	:	[동] ~을 인정하다
endangered	:	[형] 멸종 위기에 처한
nation	:	[명] 국가, 나라
largely	:	[부] 주로, 대체로
responsible for ~	:	[형] ~에 책임이 있는
stress	:	[명] 스트레스; [명] 강세; [동] 강세를 주다, 강조하다
power	:	[명] 능력, 힘; [명] 전력, 동력
ensure	:	[동] 보장하다
survival	:	[명] 생존, 살아남음
remind A of B	:	[동] A에게 B를 상기시키다
imagine	:	[동] 상상하다
expedition	:	[명] 탐험, 원정
field	:	[명] 분야, 영역; [명] 논, 밭, 경기장
lifelong	:	[형] 평생의, 평생 지속되는
undoubtedly	:	[부] 의심의 여지없이, 분명하게
generation	:	[명]동시대의 사람들, (같은) 세대; [명] 생성, 제작

[passage_E2_L3: 3과 본문]
# 지문을 읽으며 그 속의 단어 뜻을 살펴보자.
[[It appears that | it appears[seems] that ~]] viruses [[exist | exist]] [[solely | solely]] to bring [[suffering | suffering]] to [[humanity | humanity]].
The 1918 [[influenza | influenza]] [[pandemic | pandemic]] is [[estimated | estimate]] to have killed 50 to 100 million people.
[[Smallpox | smallpox]] [[claimed | claim]] the [[lives | life]] of a [[further | further]] 200 million people in the 20th century alone, [[according to | according to ~]] estimates.
And of course, the recent COVID-19 [[pandemic | pandemic]] has taken several million [[lives | life]], [[affecting | affect]] almost every [[aspect | aspect]] of human [[life | life]] worldwide.
===
[[Outbreaks | outbreak]] of [[viral | viral]] diseases are frequently [[linked to | link ~ to …]] contact with [[wild | wild]] animals such as bats.
Such contacts [[allow new viruses to enter | allow ~ toR]] human bodies that have no [[prior | prior]] [[immunity | immunity]] to such viruses.
[[Historically | historically]], [[natural | natural]] [[barriers | barrier]] such as mountains and forests [[prevented animal viruses from infecting | prevent ~ from V-ing]] humans.
[[Industrialization | industrialization]] has [[destroyed | destroy]] these [[barriers | barrier]], and [[climate change | climate change]] has pushed some [[wild | wild]] animals out of their [[original | original]] [[habitats | habitat]].
These changes have [[resulted in | result in ~]] an [[increase | increase]] in [[interactions | interaction]] [[between human and wild animals | between A and B]], meaning more opportunities for the viruses [[present | present]] in [[wild | wild]] animals to spread to humans.
This is the [[primary | primary]] reason for scientists’ [[concern | concern]] that [[pandemics | pandemic]] may [[increase | increase]] in the future.
Then, is the virus truly a [[harmful | harmful]] presence to humans?
[[Not necessarily | not necessarily]].
===
*Keepers of the Earth*
What is less commonly known is that viruses [[play crucial roles in | play a(n) ~ role in …]] [[supporting | support]] much of [[life | life]] on Earth.
This is because [[researchers | researcher]] have only recently begun [[investigating | investigate]] the viruses that [[sustain | sustain]] us and [[the planet | the planet]], [[instead of | instead of ~]] just those that [[harm | harm]] us.
Therefore, scientists have much more to learn about viruses than they currently know.
What they do know is that viruses [[act as | act as ~]] the [[primary | primary]] [[regulators | regulator]] of [[bacterial | bacterial]] and insect [[populations | population]].
Since viruses do not have [[reproductive | reproductive]] [[functions | function]] [[on their own | on one’s own]], they steal the [[reproductive | reproductive]] [[functions | function]] of other [[organisms | organism]] to [[multiply | multiply]].
Some types of viruses use bacteria.
When the virus [[continues | continue]] to [[multiply | multiply]] inside the bacteria, the bacteria [[eventually | eventually]] die, and the newly [[produced | produce]] viruses [[go on to infect | go on toR]] other bacteria.
This [[whole | whole]] process helps viruses [[control | control]] the [[excessive | excessive]] [[growth | growth]] of [[certain | certain]] bacteria.
===
The greater [[significance | significance]] of viruses [[infecting | infect]] bacteria is that they [[play a vital role in | play a(n) ~ role in …]] [[supplying oxygen to | supply ~ to …]] our planet.
About half of the [[oxygen | oxygen]] on Earth is [[produced | produce]] by plankton in the [[oceans | ocean]], and the [[primary | primary]] food [[source | source]] for these plankton is [[nutrients | nutrient]] [[released | release]] from bacteria killed by [[viral | viral]] [[infections | infection]].
If viruses did not [[infect | infect]] and kill bacteria, there would be no [[bacterial | bacterial]] [[remains | remains]], [[leading to | lead to ~]] a [[lack | lack]] of plankton.
Without plankton, half of Earth’s [[oxygen | oxygen]] would [[disappear | disappear]].
In short, without viruses, the [[lack | lack]] of [[oxygen | oxygen]] would make it impossible for humans to [[survive | survive]].
Insect [[species | species / species]] [[populations | population]] are also [[regulated | regulate]] by viruses.
When a specific type of insect increases [[excessively | excessively]], the viruses that [[infect | infect]] those insects also [[increase | increase]], [[reducing | reduce]] their numbers.
This, [[in turn | in turn]], creates [[room | room]] for other types of insects to [[flourish | flourish]].
[[Considering | considering ~]] the [[chain | chain]] of food in nature, it would not be difficult to [[assume | assume]] that viruses [[fulfill | fulfill]] important [[functions | function]] in [[regulating | regulate]] other [[species | species / species]].
We have just started to understand their various roles in the [[ecosystem | ecosystem]].
===
*Helpers of Evolution*
Another less [[recognized | recognized]] role of viruses is their [[contribution | contribution]] to the [[evolution | evolution]] of [[life | life]] on Earth.
When a virus [[infects | infect]] a [[reproductive | reproductive]] [[cell | cell]] of its [[host | host]], such as an [[egg | egg]] or [[sperm | sperm]], the viral DNA may be [[passed down to | pass ~ down to …]] the [[host’s | host]] [[offspring | offspring]].
The [[insertion | insertion]] of new DNA into [[genomes | genome]] is a significant [[mechanism | mechanism]] of [[evolution | evolution]].
Without viruses, in other words, the evolutionary [[potential | potential]] for all [[life | life]] on [[the planet | the planet]] would be impacted.
One example of viruses’ [[contributions | contribution]] to [[evolution | evolution]] is their role in the [[development | development]] of the [[placenta | placenta]] in [[mammals | mammal]].
A [[placenta | placenta]] is a [[complex | complex]] [[organ | organ]] that helps the [[fetus | fetus]] grow securely inside its mother’s body.
It [[facilitates | facilitate]] the [[exchange | exchange]] of [[oxygen | oxygen]], [[nutrients | nutrient]], and [[waste products | waste product]] while [[protecting the fetus from | protect ~ from …]] the mother’s [[immune | immune]] system.
In the early days of [[evolution | evolution]], [[female | female]] animals had to [[leave | leave]] their [[offspring | offspring]] in one [[location | location]], like [[eggs | egg]] in a nest, making them [[vulnerable | vulnerable]] to [[predators | predator]].
After the [[emergence | emergence]] of the [[placenta | placenta]], [[females | female]] were able to carry their [[young | young]] inside their bodies safely from one [[location | location]] to another.
Viruses that [[infected | infect]] our [[remote | remote]] [[ancestors | ancestor]] more than 130 million years ago have been [[reported | report]] to have [[served | serve]] a key [[function | function]] in the [[development | development]] of this vital [[organ | organ]].
===
*Means for Cures*
As [[scientific | scientific]] knowledge about viruses [[continues | continue]] to [[expand | expand]], new opportunities for [[utilizing | utilize]] them in the battle against diseases are [[arising | arise]].
Of [[notable | notable]] [[interest | interest]] are the areas of [[gene | gene]] [[therapy | therapy]] and [[cancer | cancer]] treatment.
[[Genes | gene]] can be [[compared to | compare ~ to …]] [[instruction | instruction]] [[guides | guide]] that [[govern | govern]] how our bodies [[function | function]].
Sometimes, people are born with [[genetic | genetic]] [[disorders | disorder]], which can [[lead to | lead to ~]] health problems.
[[Gene | gene]] [[therapy | therapy]] [[steps in | step in]] to [[fix | fix]] these issues.
The [[essence | essence]] of [[gene | gene]] [[therapy | therapy]] [[lies | lie (- lay - lain)]] in [[delivering corrected genetic instructions to | deliver ~ to …]] a [[patient’s | patient]] [[cells | cell]], [[enabling them to function | enable ~ toR]] properly.
In this process, specially [[modified | modify]] viruses are used as one of the [[carriers | carrier]] of the [[genetic | genetic]] [[instructions | instruction]].
If the [[patient’s | patient]] [[cells | cell]] [[function | function]] properly, it can potentially help the body [[fight off | fight ~ off]] [[certain | certain]] diseases.
Using viruses to treat [[cancer | cancer]], another use of viruses, is [[based on | based on[upon] ~]] the [[notion | notion]] of [[utilizing | utilize]] their natural ability to [[infect | infect]] and kill [[cells | cell]].
If successful, viruses can be [[manipulated | manipulate]] to [[specifically | specifically]] [[target | target]] and [[destroy | destroy]] [[cancer | cancer]] [[cells | cell]] while leaving healthy [[cells | cell]] [[unharmed | unharmed]].
The use of viruses in [[gene | gene]] [[therapy | therapy]] and [[cancer | cancer]] treatment is [[still | still]] in the early [[stages | stage]].
However, many [[researchers | researcher]] are [[involved in | involve ~ in …]] hundreds of projects with the goal of [[discovering | discover]] [[cures | cure]] for diseases that were once thought to be [[incurable | incurable]].
===
We have yet to [[find out | find ~ out]] how many virus types even [[exist | exist]], [[let alone | let alone]] the [[characteristics | characteristic]] of each of them.
The more we learn about viruses, however, the better [[equipped | equip ~ toR]] we will be to use [[certain | certain]] viruses for [[beneficial | beneficial]] [[purposes | purpose]] and to develop [[defenses | defense]] against viruses that could [[lead to | lead to ~]] the next [[pandemic | pandemic]].
More than that, learning more about [[viral | viral]] [[diversity | diversity]] will help us [[reach | reach]] a deeper understanding of the [[working | working]] of our planet, [[ecosystems | ecosystem]], and our own bodies.



[passage_E2_L4: 4과 본문]
# 지문을 읽으며 그 속의 단어 뜻을 살펴보자.
*The [[Guardian | guardian]] of the Blue Heart of [[the Planet | the planet]]*
When most people were [[fascinated | fascinate]] by the [[mysteries | mystery]] of [[exploring | explore]] [[space | space]], one [[remarkable | remarkable]] [[individual | individual]] [[appreciated | appreciate]] the [[appeal | appeal]] of the [[ocean | ocean]] before many others, and [[eagerly | eagerly]] [[explored | explore]] the deep [[ocean | ocean]].
When people asked her, “Isn’t it scary down there?” she would reply, “What’s there to be [[afraid of | afraid of ~]]?
When I go down there, I [[delight | delight]] in the [[life | life]] that I see.”
[[Long before | long before ~]] others, this person [[recognized | recognize]] that not only is the [[ocean | ocean]] [[full of | full of ~]] [[life | life]], but that it also needs to be [[protected | protect]].
She is the [[legendary | legendary]] [[marine | marine]] [[biologist | biologist]] [[named | name A B]] Sylvia Earle.
===
Sylvia Earle was born in 1935 in New Jersey.
Having moved to Florida at the age of twelve, she began [[exploring | explore]] the beaches and [[observing | observe]] the [[diverse | diverse]] [[marine | marine]] [[life | life]] of the [[Gulf | gulf]] of Mexico.
On her first birthday in Florida, her parents [[gifted | gift]] her a pair of swimming [[goggles | goggles]], perfect for someone who loved the [[ocean | ocean]].
Her father [[encouraged | encourage]] her, saying, “These will [[help | help ~ with …]] you [[with | help ~ with …]] your [[underwater | underwater]] [[explorations | exploration]].
Now all you have to do is [[dive in | dive in]].”
With her [[goggles | goggles]], Earle [[gained | gain]] a clearer [[view | view]] of the [[ocean | ocean]]’s [[wonders | wonder]].
At 17, she took her first deep [[dive | dive]], [[descending | descend]] 10 meters in a lake wearing the [[diving suit | diving suit]] that [[belonged to | belong to ~]] her friend’s father.
===
Earle was [[thrilled | thrilled]] to [[observe | observe]] fish while [[breathing | breathe]] [[naturally | naturally]] [[underwater | underwater]].
As Earle experienced the [[excitement | excitement]] of [[diving | dive]], her [[desire | desire]] to [[explore | explore]] [[grew | grow]], and she [[eventually | eventually]] became one of the first [[marine | marine]] scientists to use [[scuba | scuba]] [[equipment | equipment]].
Her [[innate | innate]] [[sense | sense]] of [[adventure | adventure]] and [[curiosity | curiosity]] [[guided | guide]] her [[academic | academic]] [[journey | journey]], ultimately [[leading | lead]] her to become a [[pioneer | pioneer]] in [[ocean | ocean]] [[exploration | exploration]] and [[conservation | conservation]].
===
Sylvia Earle’s love for the [[ocean | ocean]] [[fueled | fuel]] her [[desire | desire]] to [[explore | explore]] [[further | further]].
In 1969, the same year [[astronauts | astronaut]] first [[stepped | step]] on the moon, the Tektite Project [[allowed | allow ~ toR]] scientists to live in [[underwater | underwater]] [[habitats | habitat]] [[situated | situate]] in the Virgin Islands.
However, Earle was [[unable to | unable toR]] [[participate in | participate in ~]] the project.
“The people [[in charge | in charge]] just couldn’t [[cope with | cope with ~]] the idea of men and women living together [[underwater | underwater]],” she said.
The [[following year | following year]], having been [[chosen | choose ~ toR]] to [[lead | lead]] the all [[female | female]] Tektite II Project, she [[spent | spend ~ V-ing]] two weeks [[living | spend ~ V-ing]] 15 meters [[beneath | beneath]] the [[ocean | ocean]]’s [[surface | surface]], [[along with | along with ~]] four other [[oceanographers | oceanographer]].
===
She [[pushed the boundaries of | push the boundaries of ~]] [[underwater | underwater]] [[exploration | exploration]] and [[challenged | challenge]] [[gender | gender]] [[stereotypes | stereotype]].
Earle’s [[residence | residence]] on the [[reef | reef]] [[allowed | allow ~ toR]] her to [[observe | observe]] and understand the [[complexities | complexity]] of the [[ecosystem | ecosystem]].
Her [[scientific | scientific]] [[findings | finding]] were [[published | publish]], [[including | including]] the biology of [[coral reef | coral reef]] fishes.
The all [[female | female]] [[crew | crew]] became heroes upon their [[return | return]] to Earth’s [[surface | surface]], [[receiving | receive]] [[attention | attention]] [[similar to | similar to ~]] that of the [[astronauts | astronaut]]’ [[historic | historic]] moon [[landing | landing]].
===
In 1979, Sylvia Earle [[accomplished | accomplish]] a [[historic | historic]] [[achievement | achievement]] [[off the coast | off the coast]] of Oahu, Hawaii.
Using the JIM [[suit | suit]], she [[dove | dive]] 381 meters deep and walked on the [[ocean | ocean]] [[floor | floor]] [[unattached | unattached]] for two hours.
It was [[marked | mark A as B]] as the world’s deepest [[solo | solo]] [[dive | dive]] at that time.
It [[earned | earn A B]] her the [[title | title]] “Her [[Deepness | deepness]].”
As she [[descended | descend]], Earle was charmed by the [[glowing | glow]] [[creatures | creature]] that [[flashed | flash]] like stars against the [[darkness | darkness]].
Among them were some [[species | species / species]] she had studied but never seen before, such as the deep sea [[squid | squid]] that [[emits | emit]] a [[glowing | glow]] [[liquid | liquid]] to [[defend | defend]] itself.
===
During the [[dive | dive]], Earle [[planted | plant]] a [[flag | flag]] on the [[seafloor | seafloor]] to [[symbolize | symbolize]] the [[significance | significance]] of [[ocean | ocean]] [[exploration | exploration]] [[in comparison to | in comparison to ~]] [[space | space]] [[exploration | exploration]].
She [[associated | associate A with B]] the [[moment | moment]] [[with | associate A with B]] Neil Armstrong’s first [[steps | step]] on the moon and [[noted | note]] “These accomplishments had a few [[parallels | parallel]].
The modern world had two ‘final [[frontiers | frontier]]’ yet to [[explore | explore]]: deep [[space | space]] and the deep [[ocean | ocean]].”
Her [[achievement | achievement]] in Hawaii was one small [[step | step]] towards the day when [[human beings | human being]] would [[come to | come toR]] know and [[respect | respect]] the [[vast | vast]] world of [[life | life]] [[underwater | underwater]].
===
Earle was [[appointed | appoint A (as) B]] the first [[female | female]] [[chief | chief]] scientist at the [[National | national]] [[Oceanic | oceanic]] and [[Atmospheric | atmospheric]] [[Administration | administration]] (NOAA) in 1990.
She [[aimed | aim]] to [[shift | shift]] NOAA’s focus from [[exploiting | exploit]] the [[ocean | ocean]]’s [[resources | resource]] to [[prioritizing | prioritize]] [[ocean | ocean]] [[research | research]] and [[conservation | conservation]].
[[Despite | despite]] her [[efforts | effort]], Earle, as a [[senior | senior]] [[official | official]] of the [[government | government]], [[faced | face]] [[restrictions | restriction]] on her [[freedom | freedom]] of [[speech | speech]] and action.
===
Therefore, she [[resigned | resign]] two years later to become a more [[active | active]] [[environmental | environmental]] [[activist | activist]].
Returning to the [[private | private]] [[sector | sector]] [[granted | grant]] Earle the [[freedom | freedom]] to express herself.
Through her work in science and [[technology | technology]] [[businesses | business]], [[public | public]] [[lectures | lecture]], and writing books and [[articles | article]] for the [[mass | mass]] [[media | medium / media]], Earle has been able to use her [[expertise | expertise]] and experience to [[campaign | campaign]] for the [[ocean | ocean]]’s [[conservation | conservation]].
===
Earle has [[committed herself to | commit oneself to ~]] a [[lifetime | lifetime]] of raising [[public | public]] awareness about the importance of the [[ocean | ocean]].
In 2009, her [[efforts | effort]] [[gained | gain]] [[prominence | prominence]] through three [[key | key]] events.
She [[played | play a(n) ~ role in …]] an important [[role in | play a(n) ~ role in …]] [[initiating | initiate]] a [[global | global]] digital [[platform | platform]], which [[allows | allow ~ toR]] users to [[explore | explore]] [[underwater | underwater]] worlds [[virtually | virtually]], [[fostering | foster]] [[appreciation | appreciation]] for [[marine | marine]] [[ecosystems | ecosystem]].
She was also [[awarded | award]] the TED Prize, a [[distinguished | distinguished]] [[annual | annual]] [[award | award]] that [[grants | grant]] winners a wish to change the world, [[along with | along with ~]] [[financial | financial]] [[support | support]].
Earle’s wish was to create a [[global | global]] network of [[marine | marine]] [[protected | protect]] areas, or “Hope Spots,” which [[serve as | serve]] [[refuges | refuge]] from [[pollution | pollution]], [[overfishing | overfishing]], and other [[threats | threat]].
===
Finally, this wish [[led | lead]] her to [[establish | establish]] Mission Blue, a [[non-profit | non-profit]] [[organization | organization]] that [[aims | aim]] to [[inspire | inspire]] action to [[explore | explore]] and [[protect | protect]] the [[ocean | ocean]].
Since its [[establishment | establishment]], [[protected | protect]] [[ocean | ocean]] areas have [[increased | increase]] from [[less than | less than ~]] 1% in 2009 to [[approximately | approximately]] 8% in 2023.
Mission Blue’s [[goal | goal]] is to [[protect | protect]] 30% of the [[ocean | ocean]] by 2030, [[in line with | in line with ~]] the International [[Union | union]] for [[Conservation | conservation]] of Nature’s [[recommended | recommend]] [[target | target]] for [[maintaining | maintain]] [[ocean | ocean]] health.
===
For Earle, Mission Blue [[represents | represent]] not only an [[organization | organization]], but also a movement, [[driven | drive]] by a [[shared | share]] [[passion | passion]] for the [[ocean | ocean]] and [[dedication | dedication]] to its preservation.
As an [[oceanographer | oceanographer]], [[author | author]], and [[lecturer | lecturer]], she [[consistently | consistently]] [[inspires | inspire]] [[individuals | individual]] to [[acknowledge | acknowledge]] the [[ocean | ocean]]’s [[significance | significance]].
Earle said, “Since the 1980s, about half of the world’s [[coral reefs | coral reef]] have [[disappeared | disappear]].
Ten percent of the sharks remain.
They are not all gone.
However, there is hope of preserving [[endangered | endangered]] [[marine | marine]] [[species | species / species]].
There are more whales and turtles today than when I was [[young | young]] because most [[nations | nation]] are [[protecting | protect ~ from …]] them from [[harm | harm]].”
===
Although humans are [[largely | largely]] [[responsible for | responsible for ~]] many of the [[stresses | stress]] on the [[ocean | ocean]], Earle believes that we also have the [[power | power]] to [[ensure | ensure]] its [[survival | survival]].
Earle [[reminds | remind A of B]] us [[of | remind A of B]] the importance of the [[ocean | ocean]] by saying, “If you think the [[ocean | ocean]] isn’t important, [[imagine | imagine]] Earth without it.
No [[ocean | ocean]], no [[life | life]].”
With over 7,000 hours [[underwater | underwater]] and more than 100 [[expeditions | expedition]], Sylvia Earle has made significant [[contributions | contribution]] to the [[field | field]] of [[marine | marine]] science.
Her [[lifelong | lifelong]] [[journey | journey]] will [[undoubtedly | undoubtedly]] [[continue | continue]] to [[inspire | inspire]] future [[generations | generation]] to [[protect | protect]] and preserve the [[ocean | ocean]], the blue heart of [[the planet | the planet]].

`;
