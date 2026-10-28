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
    bossHp1: 20,               // 1회차 마왕 체력 (기본: 10)
    bossTime1: 4.0,            // 1회차 마왕 시간 (기본: 5.0초)

    bossHpRepeat: 20,          // 2회차 마왕 체력 (기본: 12)
    bossTimeRepeat: 3.0,       // 2회차 마왕 시간 (기본: 4.0초)
    bossPlayerHpRepeat: 2,     // 👈 2회차 마왕전 플레이어 하트 수 (기본: 3개)

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
further	:	[형][부] 그 이상의, 더 나아가
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
working	:	[명] 작동[운용/작용] (방식).


[mg_h2 26.10_1: 26.10모 1]
#고2 26.10모 단어를 쪼갠거
possibility	:
suitable	:
pace	:
spontaneously	:
curiosity	:
independence	:
dare toR	:
initiative	:
possess	:
autonomy	:
accustomed to ~	:
instruction	:
arrange	:
fertile	:
soil	:
core	:
according to ~	:
carpenter	:
at one's own pace	:
environment	:
explore	:
creativity	:
challenge	:
gradually	:
rather than ~	:
actively	:
naturally	:
carve	:
will	:
complex	:
worldview	:
perception	:
interest	:
repay	:
opportunity cost	:
term	:
by definition	:
unknowable	:
worthwhile	:
income	:
factor	:
to put it another way	:
credit	:
loan	:
rate of interest	:
consider	:
rate	:
imagine	:
chance	:
definition	:
value	:
benefit from ~	:
involve	:
amount	:
ethical	:
consideration	:
awareness	:
sustainability	:
called upon toR	:
address	:

[mg_h2 26.10_2: 26.10모 2]
#고2 26.10모 단어를 쪼갠거
consumerism	:	[명] 소비주의
platform	:	[명] 플랫폼, 승강장
attitude	:	[명] 태도
promote	:	[동] 홍보하다, 촉진하다; [동] 승진시키다
equality	:	[명] 평등
justice	:	[명] 정의, 공정
meaningful	:	[형] 의미 있는
align	:	[동] (with) ~와 일치시키다, 맞추다
principle	:	[명] 원칙, 신념
increasingly	:	[부] 점점 더
content	:	[명] 내용(물), 콘텐츠; [형] 만족하는
impact	:	[명] 영향, 충격
include	:	[동] 포함하다
sustainable	:	[형] 지속 가능한
support	:	[명] 격려, 도움, 지지; [동] 도와주다, 지지하다; [동] 지탱하다 연명시키다
related to ~	:	[숙] ~와 관련된
raise	:	[동] 높이다, 올리다
focus on ~	:	[동] ~에 집중하다, 초점을 맞추다
ensure	:	[동] 보장하다, 확실히 하다
drive	:	[동] 이끌다, 추동하다; [동] 몰다, 운전하다; [명] 원동력
cause	:	[동] 초래하다, 야기하다; [명] 원인; [명] 명분
audience	:	[명] 청중, 관객
influence	:	[명] 영향력; [동] 영향을 미치다
responsibility	:	[명] 책임
broad	:	[형] 넓은
behavior	:	[명] 행동
not only ~ but also	:	[숙] ~뿐만 아니라 ~도
cephalopod	:	[명] 두족류
neurobiology	:	[명] 신경생물학
neuron	:	[명] 뉴런, 신경 세포
roughly	:	[부] 대략, 거의
distribute	:	[동] 배포하다, 유통하다
concentrate	:	[동] 집중시키다, 모으다
nerve	:	[명] 신경
sensory	:	[형] 감각의
extension	:	[명] 연장(된 부분), 확장
interact	:	[동] (with) ~와 상호 작용하다
sucker	:	[명] 빨판
grip	:	[명] 잡기, 쥐기, 꽉 쥐는 힘
detect	:	[동] 발견하다, 탐지하다
chemical	:	[형] 화학적인
marine	:	[형] 해양의, 바다에 사는; [명] 해병대
capable	:	[형] 유능한, (of) ~할 수 있는, 
mechanism	:	[명] 기제, 작동 구조, 메커니즘
suit	:	[명] 정장, 슈트; [동] 적합하다, 꼭 맞다
suggest	:	[동] 제안하다; [동] 시사하다, 암시하다
unusual	:	[형] 특이한, 보통이 아닌
locate	:	[동] ~에 위치하다; [동] (위치를) 찾아내다
entirely	:	[부] 완전히, 전적으로
contain	:	[동] 포함하다, 함유하다
respond to ~	:	[숙] ~에 반응하다
locally	:	[부] 지역적으로, 현지에서
detailed	:	[형] 상세한
function	:	[명] 기능; [동] 기능하다; [명] 함수
nervous	:	[형] 초조한, 불안한; [형] 신경의
structure	:	[명] 구조; [명] 구조물, 건물
surface	:	[명] 표면
practical	:	[형] 실용적인, 실질적인
effectively	:	[부] 효과적으로, 사실상
line	:	[동] ~을 따라 늘어서다; [명] 줄, 선

[mg_h2 26.10_3: 26.10모 3]
#고2 26.10모 단어를 쪼갠거
nervous system	:	[명] 신경계
consistent	:	[형] 일관된
justify	:	[동] 정당화하다, 합리화하다
slavery	:	[명] 노예 제도
privilege	:	[명] 특권
contemplation	:	[명] 사색, 숙고
worthy	:	[형] ~을 받을 만한, 가치 있는
assertion	:	[명] 주장
self-serving	:	[형] 자기 잇속만 차리는
flourish	:	[동] 번성하다, 번창하다
inclusive	:	[형] 포용적인, 차별 없는
indicator	:	[명] 지표, 척도
elite	:	[명] 엘리트, 상류층
flawed	:	[형] 결함이 있는
underprivileged	:	[형] 혜택받지 못한
deserve	:	[동] ~할 자격이 있다
trap	:	[동] 가두다, 붙잡다; [명] 함정, 덫
somehow	:	[부] 왠지, 어떻게든
serve	:	[동] ~에 도움이 되다; [동] (as) ~의 역할을 하다; [동] 제공하다, 대접하다
particular	:	[형] 특정한
exception	:	[명] 예외
nearly	:	[부] 거의
tend toR	:	[동] ~하는 경향이 있다
as a result	:	[숙] 그 결과
for all	:	[숙] ~에도 불구하고
era	:	[명] 시대
oddly	:	[부] 이상하게
thinker	:	[명] 사상가
have no difficulty (in) V-ing	:	[숙] ~하는 데 어려움이 없다
survival	:	[명] 생존, 살아남음
hurdle	:	[명] 장애물, 허들
clear	:	[동] (장애물을) 넘다, 통과하다
demographically	:	[부] 인구 통계학적으로
humankind	:	[명] 인류
state of nature	:	[숙] 자연 상태
wasteful	:	[형] 낭비하는
fig	:	[명] 무화과
baboon	:	[명] 개코원숭이
fairly	:	[부] 꽤, 상당히
typical	:	[형] 전형적인, 일반적인
primate	:	[명] 영장류
infant	:	[명] 유아, 젖먹이
mortality	:	[명] 사망률, 필멸, 죽음을 면치 못함
pre-modern	:	[형] 근대 이전의
agricultural	:	[형] 농업의
ape	:	[명] 유인원
hunter-gatherer	:	[명] 수렵 채집인
ancestor	:	[명] 조상, 선조
reproduce	:	[동] 번식하다
otherwise	:	[부] 그렇지 않으면, 그와 달리, 다르게
population	:	[명] 개체수, 개체군; [명] 인구
seed	:	[명] 씨앗
quarter	:	[명] 4분의 1
society	:	[명] 사회
occur	:	[동] 일어나다, 발생하다
growth	:	[명] 성장, 증가
recent	:	[형] 최근의, 근래의
had it been otherwise	:	[숙] 만약 그렇지 않았더라면
confirm	:	[동] 확인해 주다, 입증하다
dominance	:	[명] 우세, 지배

[mg_h2 26.10_4: 26.10모 4]
#고2 26.10모 단어를 쪼갠거
nonverbal	:	[형] 비언어적인
phenomenon	:	[명] 현상
pronounced	:	[형] 뚜렷한, 현저한
conflict	:	[명] 갈등, 충돌; [동] 상충하다, 모순되다
differ	:	[동] 다르다
manipulate	:	[동] (배후에서) 조작하다; [동] (자료 등을) 가공하다, 조작하다
verbal	:	[형] 언어의, 말로 하는
accompany	:	[동] 동반하다, 수반하다
match	:	[동] 일치하다; [명] 경기, 매치; [명] 성냥
inclined toR	:	[형] ~하는 경향이 있는
workload	:	[명] 업무량
take over	:	[동] 인계받다, 떠맡다
replace	:	[동] 대신하다, 대체하다
pronounce	:	[동] 발음하다
attempt	:	[명] 시도[도전]; [동] 시도하다
verbally	:	[부] 말로, 구두로
trust	:	[동] (사람을) 신뢰하다, 믿다; [명] 믿음, 신뢰
look away	:	[숙] 눈길을 돌리다, 시선을 피하다
displeased	:	[형] 불쾌한, 언짢은
force a smile	:	[숙] 억지웃음을 짓다
i.e.	:	[부] 즉
spoken	:	[형] 구어의, 말로 하는
notice	:	[동] 알아차리다; [명] 공지, [동] 공지하다
force	:	[동] 억지로 ~하다, 강요하다; [명] 힘; [명] 군대
inclined	:	[형] ~하고 싶은, 마음이 기우는
colleague	:	[명] 동료
expression	:	[명] 표정, 표현
overwhelming	:	[형] 압도적인
majority	:	[명] 대다수
pack	:	[동] 채우다, 꾸려 넣다; [명] 팩, 꾸러미
setting	:	[명] 설정, 세팅, 환경
lay down	:	[숙] (규칙 등을) 정하다, 내려놓다
inspect	:	[동] 점검하다, 검사하다
triumph	:	[명] 승리, 대성공
engineering	:	[명] 공학, 설계
consciously	:	[부] 의식적으로
deliberate	:	[형] 신중한, 의도적인
costly	:	[형] 비용이 많이 드는
outcompete	:	[동] 경쟁에서 이기다
free	:	[동] 해방하다, 자유롭게 하다; [형] 자유로운; [형] 무료인, 공짜인
deck	:	[명] (배의) 갑판
default	:	[명] 기본 설정, 초기값
flaw	:	[명] 결함, 흠
arguably	:	[부] 거의 틀림없이, 주장하건대
affordable	:	[형] (가격이) 알맞은, 저렴한
automation	:	[명] 자동화
manipulation	:	[명] 조작, 교묘한 조종
calculation	:	[명] 계산
in one light	:	[숙] 어떤 관점에서
behaviour	:	[명] 행동, 행위
decade	:	[명] 10년
hopeless	:	[형] 가망 없는, 절망적인
fork	:	[명] 갈림길, 분기점
in real time	:	[숙] 실시간으로
creature	:	[명] 생명체, 생물
precisely	:	[부] 정확히
captain	:	[명] 선장, 주장
come up	:	[숙] 생기다, 나타나다
weaken	:	[동] 약화시키다
tie	:	[명] 유대, 관계; [동] 묶다, 엮다; [명] 넥타이

[mg_h2 26.10_5: 26.10모 5]
#고2 26.10모 단어를 쪼갠거
unite A to B	:	[동] A를 B에 결속시키다, 통합시키다
intermediary	:	[형] 매개하는, 중개의
institution	:	[명] 제도, 기관
diminish	:	[동] 줄이다, 감소시키다
overlap	:	[동] 겹치다, 중복되다
court	:	[명] 법원, 법정; [명] 정원 [명] 코트, 경기장
harmonious	:	[형] 조화로운, 화목한
collective	:	[형] 집단의, 공동의
put pressure on ~	:	[숙] ~에게 압력을 가하다
judicial	:	[형] 사법의, 재판의
politicize	:	[동] 정치화하다
popularize	:	[동] 대중화하다
habitual	:	[형] 습관적인
convert A into B	:	[숙] A를 B로 전환하다, 바꾸다
virtual	:	[형] 가상의
dimension	:	[명] 차원, 영역
democratic	:	[형] 민주적인, 민주주의의
immune	:	[형] (to) (~에) 면역이 된, 영향받지 않는
negotiation	:	[명] 협상
square	:	[명] 광장; [명] 정사각형; [명] 제곱
state	:	[명] 국가; [명] 상태; [동] 말하다, 언급하다
practice	:	[명] 연습; [명] 실천, 실행; [명] 관행, 관습; [동] 연습하다, 실천하다
tradition	:	[명] 전통
functioning	:	[명] 기능, 작용
mediate	:	[동] 매개하다, 중재하다
process	:	[명] 과정; [동] 처리하다, 가공하다
harmful	:	[형] 해로운, 유해한
public square	:	[숙] 공공 광장, 공론의 장
state of law	:	[숙] 법치 국가
appropriate	:	[형] 적절한
judge	:	[동] 판단하다, 평가하다; [명] 판사, 심판
pressure	:	[명] 압력
supportive	:	[형] 지지하는, 격려하는
minority	:	[명] 소수, 소수자
responsive	:	[형] 반응하는, 호응하는
expectation	:	[명] 기대
ongoing	:	[형] 계속 진행 중인
evolving	:	[형] 진화하는, 발전하는
sequence	:	[명] 순서, 연속
plasticity	:	[명] 가소성, 유연성
perspective	:	[명] 관점, 시각
concept	:	[명] 개념
capacity	:	[명] 능력, 수용력
adapt	:	[동] 적응하다
reorganize	:	[동] 재편성하다, 재조직하다
cognitive	:	[형] 인지의
highlight	:	[동] 강조하다
passive	:	[형] 수동적인, 소극적인
recipient	:	[명] 받는 사람, 수령인
agent	:	[명] 주체, 행위자; [명] 대리인, 대리자
stability	:	[명] 안정(성)
decline	:	[명] 쇠퇴, 감소
rigid	:	[형] 엄격한, 경직된
outlook	:	[명] 관점, 전망
lifespan	:	[명] 수명, 생애
extent	:	[명] 정도, 범위
vary	:	[동] 다르다, 다양하다
adaptation	:	[명] 적응
transformation	:	[명] 변화, 변형
variation	:	[명] 변화, 변동

[mg_h2 26.10_6: 26.10모 6]
#고2 26.10모 단어를 쪼갠거
development	:	[명] 발달, 성장; [명] (사진의) 현상; [명] (병의) 발병
flexible	:	[형] 유연한, 융통성 있는
evolve	:	[동] 진화하다, 서서히 발전하다
refer to ~	:	[숙] ~을 가리키다, 언급하다
in response to ~	:	[숙] ~에 대응하여, ~에 반응하여
individual	:	[명] 개(개)인; [형] 개별적인, 개개의
merely	:	[부] 그저, 단지
phase	:	[명] 단계, 시기
entire	:	[형] 전체의
room	:	[명] 여지, 기회, 가능성; [명] 방, 공간
stage	:	[명] 단계; [명] 무대, 스테이지
emotional	:	[형] 감정적인
behavioural	:	[형] 행동의
pattern	:	[명] 패턴, 양식
demand	:	[명] 요구
biological	:	[형] 생물학적인
view	:	[명] 시야, 광경; [명] 견해, 관점; [동] 보다
adulthood	:	[명] 성인기
independent	:	[형] (of) (~와) 무관한, 독립적인
limit	:	[동] 제한하다, 한정하다; [명] 제한, 한계
adjust to ~	:	[숙] ~에 적응하다
alter	:	[동] 바꾸다, 변경하다
go viral	:	[숙] (인터넷에서) 입소문이 나다, 빠르게 퍼지다
household term	:	[숙] 흔히 쓰이는 말, 누구나 아는 말
countless	:	[형] 무수한, 셀 수 없이 많은
vulnerable	:	[형] 취약한, 연약한
thereby	:	[부] 그렇게 함으로써
buffer	:	[동] 보호하다, 완충하다
digitization	:	[명] 디지털화
massive	:	[형] 엄청난, 대규모의
autonomously	:	[부] 자율적으로
give rise to ~	:	[동] ~을 일으키다, 낳다
infinite	:	[형] 무한한
breakdown	:	[명] 고장, 붕괴
interdependence	:	[명] 상호 의존
breeding ground	:	[숙] 온상, 번식지
bump	:	[동] (up against) ~와 부딪치다, 충돌하다
vulnerability	:	[명] 취약성
interconnectedness	:	[명] 상호 연결성
hierarchy	:	[명] 위계, 계층 구조
oversimplify	:	[동] 지나치게 단순화하다
politics	:	[명] 정치, 정치학
household	:	[명] 가정, 가구
take place	:	[동] (행사 등이) 열리다, 개최되다
strategy	:	[명] 전략
separate	:	[형] 분리된, 별개의
effect	:	[명] 영향, 효과
no longer	:	[숙] 더 이상 ~않는
enormously	:	[부] 엄청나게, 대단히
compute	:	[동] 계산하다
decrease	:	[동] 감소하다
used toR	:	[동] ~하곤 했다
instantly	:	[부] 즉시, 곧바로
spread	:	[명] 확산; [동] 퍼지다, 확산하다
infectious	:	[형] 전염성의, 감염성의
prevention	:	[명] 예방
breakthrough	:	[명] 돌파구, 획기적인 발전
smallpox	:	[명] 천연두
exposure	:	[명] 노출
harmless	:	[형] 무해한

[mg_h2 26.10_7: 26.10모 7]
#고2 26.10모 단어를 쪼갠거
life expectancy	:	[숙] 기대 수명
rely on ~	:	[숙] ~에 의존하다
vaccine	:	[명] 백신
contribute	:	[동] 기여하다, 공헌하다
burden	:	[명] 부담, 짐
bacterial	:	[형] 세균의
viral	:	[형] 바이러스(성)의; [형] 입소문의, 입소문으로 퍼지는
elimination	:	[명] 제거, 근절
cholera	:	[명] 콜레라
hygiene	:	[명] 위생
therapy	:	[명] 치료, 요법
chronic	:	[형] 만성의
enormous	:	[형] 막대한, 엄청난
progress	:	[명] 진보, 발전
treatment	:	[명] 치료, 치료법
deadly	:	[형] 치명적인
laboratory	:	[명] 실험실
reduction	:	[명] 감소, 축소
lead to ~	:	[숙] ~으로 이어지다, ~을 초래하다
management	:	[명] 관리
measure	:	[명] (-s) 조치, 대책; [동] 측정하다
reduce	:	[동] 줄이다; [동] 격하시키다
disease	:	[명] 질병
discovery	:	[명] 발견
receive	:	[동] 받다, 수령하다
battle	:	[명] 싸움, 전투
protect	:	[동] 보호하다, 지키다
average	:	[형] 평균의
medicine	:	[명] 약; [명] 의학
damage	:	[명] 피해, 손해; [동] 피해를 끼치다, 손상시키다
embrace	:	[동] 받아들이다, 포용하다
interface	:	[명] 인터페이스, 접점
objectively	:	[부] 객관적으로
observation	:	[명] 관찰
shape	:	[동] 형성하다, 만들다; [명] 형태, 형상
usability	:	[명] 사용 편의성, 사용성
uncover	:	[동] 밝혀내다, 알아내다
engage in ~	:	[숙] ~에 참여하다, 종사하다
realistic	:	[형] 현실적인
preference	:	[명] 선호(도)
representative	:	[형] 대표하는, 대표적인
subsequent	:	[형] 그 후의, 차후의
revision	:	[명] 수정, 개정
in order toR	:	[숙] ~하기 위해
interaction	:	[명] 상호 작용
incredibly	:	[부] 믿을 수 없을 정도로, 엄청나게
participant	:	[명] 참가자, 참여자
perform	:	[동] 수행하다, 공연하다
improve	:	[동] 개선하다, 향상시키다
base on	:	[동] ~에 근거하다
finding	:	[명] 결과, 발견
existing	:	[형] 현재 있는
effective	:	[형] 효과적인
technique	:	[명] 기술, 기법
method	:	[명] 방법
discover	:	[동] 발견하다
opportunity	:	[명] 기회
reappraisal	:	[명] 재평가, 재해석
avenue	:	[명] 방법, 수단
regulate	:	[동] 조절하다, 조정하다, 규제하다

[mg_h2 26.10_8: 26.10모 8]
#고2 26.10모 단어를 쪼갠거
transform	:	[동] 변형시키다, 바꾸다
illustrate	:	[동] 보여 주다, 설명하다
accumulate	:	[동] 쌓이다, 축적하다
resilience	:	[명] (힘든 상황으로부터의) 회복력, 탄력
adverse	:	[형] 부정적인, 불리한
divorce	:	[명] 이혼, [동] 이혼하다
construe	:	[동] 해석하다
overpowering	:	[형] 압도적인, 억누를 수 없는
alternatively	:	[부] 그 대신에, 다른 방법으로
in the long run	:	[숙] 장기적으로 보면
construal	:	[명] 해석, 이해 방식
crucially	:	[부] 결정적으로, 매우 중요하게
intense	:	[형] 강렬한, 극심한
gratitude	:	[명] 감사
consequence	:	[명] 결과, 영향
psychological	:	[형] 심리적인
particularly	:	[부] 특히
take ~ for example	:	[동] ~을 예로 들다
go through ~	:	[숙] ~을 겪다
and yet	:	[숙] 그런데도, 그렇지만
view A as B	:	[동] A를 B로 보다
overpower	:	[동] 압도하다
outcome	:	[명] 결과
strength	:	[명] 강인함, 힘, 강점
short-term	:	[형] 단기적인
response	:	[명] 반응, 응답
mark	:	[동] 흔적을 남기다, 표시하다; [명] 흔적, 표시; [명] 점수
at one's root	:	[숙] 본질적으로
root	:	[명] 근본, 뿌리; [동] 뿌리내리다, 뿌리박다
repeat	:	[동] 반복하다
loss	:	[명] 상실, 손실, 죽음
painful	:	[형] 아픈, 고통스러운
as a result of ~	:	[숙] ~의 결과로
sadness	:	[명] 슬픔
anger	:	[명] 분노
utilize	:	[동] 활용하다, 이용하다
one size fits all	:	[숙] 모두에게 맞는, 획일적인
diverse	:	[형] 여러 가지의, 다양한
criteria	:	[명] 기준들 (criterion의 복수)
benchmark	:	[명] 기준, 척도
guideline	:	[명] 지침, 가이드라인
inform A of B	:	[동] A에게 B를 알려 주다
crop	:	[명] 작물, 농작물; [동] 잘라내다, 베어내다
industrial	:	[형] 산업의
boiler	:	[명] 보일러
power plant	:	[숙] 발전소
generator	:	[명] 발전기
tap	:	[명] 수도꼭지
dependent	:	[형] (on) ~에 달려 있는, ~에 의존하는
water quality	:	[명] 수질
quality	:	[명] 질, 품질
physical	:	[형] 육체의; [형] 물리적인
cool down	:	[숙] 식히다, 진정시키다
a set of ~	:	[숙] 일련의, 한 벌의 ~
against the grain	:	[숙] 일반적인 방식과 다르게
at face value	:	[숙] 액면 그대로
primary source	:	[숙] 1차 자료
draw	:	[동] 끌어내다; [동] 그리다; [동] 비기다
access	:	[명] 접근, 출입, 이용; [명] 접근하다, 이용하다, 접속하다
substantial	:	[형] 상당한, 많은

[mg_h2 26.10_9: 26.10모 9]
#고2 26.10모 단어를 쪼갠거
documentation	:	[명] 문서, 기록
archive	:	[명] 기록 보관소, 자료실
preserve	:	[동] 보존하다
bias	:	[명] 편향, 편견
textual	:	[형] 텍스트의, 문헌의
official	:	[명] 관리, 간부 (직원); [형] 공식적인
slaveowner	:	[명] 노예 소유주
rumor	:	[명] 소문
hint	:	[명] 암시, 단서
enslave	:	[동] 노예로 만들다
a variety of ~	:	[숙] 다양한 ~
primary	:	[형] 주된, 주요한, 1차적인
source	:	[명] 원천, 근원, 출처
emphasize	:	[동] 강조하다
ordinary	:	[형] 평범한, 보통의
material	:	[명] 재료, 자료; [명] 물질, [형] 물질적인
end up V-ing	:	[숙] 결국 ~하게 되다
analyze	:	[동] 분석하다
employer	:	[명] 고용주
grain	:	[명] 곡물, 낟알
examine	:	[동] 검사하다, 조사하다
interruption	:	[명] 방해, 중단
detail	:	[명] 세부 사항
lack	:	[명] 결여, 부족; [동] ~가 결여되어 있다, 부족하다
available	:	[형] 이용 가능한
researcher	:	[명] 연구자
historical	:	[형] 역사적인
record	:	[동] (~을) 기록하다; [명] 기록
creative	:	[형] 창의적인
legal	:	[형] 법적인
document	:	[명] 문서; [동] 기록하다
provide A with B	:	[동] A에게 B를 제공하다
silence	:	[명] 침묵; [동] 침묵시키다, 조용히 시키다
offer	:	[동] 제공하다; [명] 제공, 제안
specialized	:	[형] 전문화된, 특화된
dedicated	:	[형] (to N/V-ing) ~에 전념하는, ~ 전용의
echolocation	:	[명] 반향 위치 측정
acoustic	:	[형] 음향의, 청각의
pathway	:	[명] 경로, 통로
transmit	:	[동] 전달하다, 전송하다
auditory	:	[형] 청각의
cortex	:	[명] (대뇌) 피질
mammal	:	[명] 포유동물, 포유류
distinct	:	[형] 뚜렷이 다른, 별개의
frequency	:	[명] 빈도, 주파수
intensity	:	[명] 강도, 세기
in parallel	:	[숙] 동시에, 병행하여
assembly line	:	[숙] 조립 라인
cognitive load	:	[숙] 인지 부하
serially	:	[부] 연속적으로, 순차적으로
simultaneously	:	[부] 동시에
sequentially	:	[부] 순차적으로
disrupt	:	[동] 방해하다, 지장을 주다
facilitate	:	[동] 촉진하다, 용이하게 하다
rapidly	:	[부] 빠르게
responsible for ~	:	[형] ~에 책임이 있는; [형] ~의 원인이 되는; [형] ~을 관장하는
aspect	:	[명] 일면, 측면
specialization	:	[명] 전문화
parallel	:	[명] 평행, 유사성; [형] 평행한, 유사한
associate A with B	:	[동] A를 B와 연관시키다

[mg_h2 26.10_10: 26.10모 10]
#고2 26.10모 단어를 쪼갠거
rapid	:	[형] 빠른, 신속한
signal	:	[명] 신호
timing	:	[명] 타이밍, 시기
echo	:	[명] 메아리, 반향
divide	:	[동] 나누다
efficiently	:	[부] 효율적으로
load	:	[명] 부담, 짐; [동] (짐을) 싣다
react	:	[동] 반응하다
enable	:	[동] 가능하게 하다
boredom	:	[명] 지루함, 따분함
despair	:	[명] 절망
irritation	:	[명] 짜증, 화
idle	:	[형] 한가한, 놀고 있는
troubling	:	[형] 골치 아픈, 걱정스러운
self-improvement	:	[명] 자기 계발
reflection	:	[명] 숙고, 성찰
indulgence	:	[명] 탐닉, 방종
pastime	:	[명] 취미, 소일거리
luxury	:	[명] 사치, 호사
perceive	:	[동] 인식하다, 여기다
manifest	:	[동] 나타나다, 드러내다
inactive	:	[형] 활동하지 않는, 비활동적인
occasion	:	[명] 기회, 경우
comprehend	:	[동] 이해하다
hazardous	:	[형] 위험한
paramount	:	[형] 가장 중요한
profound	:	[형] 깊은, 심오한
regard	:	[동] 여기다, 간주하다
constructive	:	[형] 건설적인
in disguise	:	[숙] 변장한, 위장한
irony	:	[명] 아이러니, 역설
crucial	:	[형] 결정적인, 매우 중요한
recognize	:	[동] (사실 등을) 인정하다; [동] 알아보다, 인식하다
depression	:	[명] 우울증, 우울감
adequately	:	[부] 적절히, 충분히
search	:	[명] 수색; [동] (A for B) (B 찾으려고 A를) 수색하다, 찾다
arise	:	[동] 생기다, 발생하다
workshop	:	[명] 작업장, 워크숍
imply	:	[동] 암시하다
reflect	:	[동] (on) 숙고하다; [동] 반사하다; [동] 반영하다
in the presence of ~	:	[숙] ~ 앞에서, ~이 있는 데서
appreciate	:	[동] ~의 진가를 알다; [동] 고마워하다; [동] 감상하다
circumstance	:	[명] 상황, 환경
represent	:	[동] 나타내다; [동] 대리하다, 대표하다
observe	:	[동] 관찰하다; [동] 준수하다; [동] 말하다
express	:	[동] 표현하다, 나타내다
balance	:	[명] 균형
waste	:	[명] 쓰레기, 폐기물; [동] 낭비하다
identification	:	[명] 식별, 정체성 확인
unavailable	:	[형] 이용할 수 없는
unproductive	:	[형] 비생산적인



[passage_E2_L3: 3과 본문]
# 지문을 읽으며 그 속의 단어 뜻을 살펴보자.
[[It appears that | it appears[seems] that ~]] viruses [[exist | exist]] [[solely | solely]] to bring [[suffering | suffering]] to [[humanity | humanity]].
The 1918 [[influenza | influenza]] [[pandemic | pandemic]] is [[estimated | estimate]] to have killed 50 to 100 million people.
[[Smallpox | smallpox]] [[claimed | claim]] the [[lives | life]] of a [[further | further]] 200 million people in the 20th century alone, [[according to | according to ~]] estimates.
And of course, the recent COVID-19 [[pandemic | pandemic]] has taken several million [[lives | life]], [[affecting | affect]] almost every [[aspect | aspect]] of human [[life | life]] worldwide.
===
[[Outbreaks | outbreak]] of [[viral | viral]] diseases are frequently [[linked to | link ~ to …]] contact with [[wild | wild]] animals such as bats.
Such contacts [[allow | allow ~ toR]] new viruses [[to | allow ~ toR]] enter human bodies that have no [[prior | prior]] [[immunity | immunity]] to such viruses.
[[Historically | historically]], [[natural | natural]] [[barriers | barrier]] such as mountains and forests [[prevented | prevent ~ from V-ing]] animal viruses [[from | prevent ~ from V-ing]] infecting humans.
[[Industrialization | industrialization]] has [[destroyed | destroy]] these [[barriers | barrier]], and [[climate change | climate change]] has pushed some [[wild | wild]] animals out of their [[original | original]] [[habitats | habitat]].
===
These changes have [[resulted in | result in ~]] an [[increase | increase]] in [[interactions | interaction]] [[between | between A and B]] human [[and | between A and B]] wild animals, meaning more opportunities for the viruses [[present | present]] in [[wild | wild]] animals to spread to humans.
This is the [[primary | primary]] reason for scientists’ [[concern | concern]] that [[pandemics | pandemic]] may [[increase | increase]] in the future.
Then, is the virus truly a [[harmful | harmful]] presence to humans?
[[Not necessarily | not necessarily]].
===
*Keepers of the Earth*
What is less commonly known is that viruses [[play | play a(n) ~ role in …]] crucial [[roles in | play a(n) ~ role in …]] [[supporting | support]] much of [[life | life]] on Earth.
This is because [[researchers | researcher]] have only recently begun [[investigating | investigate]] the viruses that [[sustain | sustain]] us and [[the planet | the planet]], [[instead of | instead of ~]] just those that [[harm | harm]] us.
Therefore, scientists have much more to learn about viruses than they currently know.
What they do know is that viruses [[act as | act as ~]] the [[primary | primary]] [[regulators | regulator]] of [[bacterial | bacterial]] and insect [[populations | population]].
===
Since viruses do not have [[reproductive | reproductive]] [[functions | function]] [[on their own | on one’s own]], they steal the [[reproductive | reproductive]] [[functions | function]] of other [[organisms | organism]] to [[multiply | multiply]].
Some types of viruses use bacteria.
When the virus [[continues | continue]] to [[multiply | multiply]] inside the bacteria, the bacteria [[eventually | eventually]] die, and the newly [[produced | produce]] viruses [[go on to | go on toR]] infect other bacteria.
This [[whole | whole]] process helps viruses [[control | control]] the [[excessive | excessive]] [[growth | growth]] of [[certain | certain]] bacteria.
===
The greater [[significance | significance]] of viruses [[infecting | infect]] bacteria is that they [[play | play a(n) ~ role in …]] a vital [[role in | play a(n) ~ role in …]] [[supplying | supply ~ to …]] oxygen [[to | supply ~ to …]] our planet.
About half of the [[oxygen | oxygen]] on Earth is [[produced | produce]] by plankton in the [[oceans | ocean: [명] 바다, 대양]], and the [[primary | primary]] food [[source | source]] for these plankton is [[nutrients | nutrient]] [[released | release]] from bacteria killed by [[viral | viral]] [[infections | infection]].
If viruses did not [[infect | infect]] and kill bacteria, there would be no [[bacterial | bacterial]] [[remains | remains]], [[leading to | lead to ~]] a [[lack | lack]] of plankton.
Without plankton, half of Earth’s [[oxygen | oxygen]] would [[disappear | disappear]].
In short, without viruses, the [[lack | lack]] of [[oxygen | oxygen]] would make it impossible for humans to [[survive | survive]].
===
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
===
A [[placenta | placenta]] is a [[complex | complex]] [[organ | organ]] that helps the [[fetus | fetus]] grow securely inside its mother’s body.
It [[facilitates | facilitate]] the [[exchange | exchange]] of [[oxygen | oxygen]], [[nutrients | nutrient]], and [[waste products | waste product]] while [[protecting | protect ~ from …]] the fetus [[from | protect ~ from …]] the mother’s [[immune | immune]] system.
In the early days of [[evolution | evolution]], [[female | female]] animals had to [[leave | leave]] their [[offspring | offspring]] in one [[location | location]], like [[eggs | egg]] in a nest, making them [[vulnerable | vulnerable]] to [[predators | predator]].
After the [[emergence | emergence]] of the [[placenta | placenta]], [[females | female]] were able to carry their [[young | young]] inside their bodies safely from one [[location | location]] to another.
Viruses that [[infected | infect]] our [[remote | remote]] [[ancestors | ancestor]] more than 130 million years ago have been [[reported | report]] to have [[served | serve]] a key [[function | function]] in the [[development | development]] of this vital [[organ | organ]].
===
*Means for Cures*
As [[scientific | scientific: [형] 과학적인, 과학의]] knowledge about viruses [[continues | continue]] to [[expand | expand]], new opportunities for [[utilizing | utilize]] them in the battle against diseases are [[arising | arise]].
Of [[notable | notable]] [[interest | interest]] are the areas of [[gene | gene]] [[therapy | therapy]] and [[cancer | cancer]] treatment.
[[Genes | gene]] can be [[compared to | compare ~ to …]] [[instruction | instruction]] [[guides | guide]] that [[govern | govern]] how our bodies [[function | function]].
Sometimes, people are born with [[genetic | genetic]] [[disorders | disorder]], which can [[lead to | lead to ~]] health problems.
[[Gene | gene]] [[therapy | therapy]] [[steps in | step in]] to [[fix | fix]] these issues.
The [[essence | essence]] of [[gene | gene]] [[therapy | therapy]] [[lies | lie (- lay - lain)]] in [[delivering | deliver ~ to …]] corrected genetic instructions [[to | deliver ~ to …]] a [[patient’s | patient]] [[cells | cell]], [[enabling them to function | enable ~ toR]] properly.
===
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

`;
