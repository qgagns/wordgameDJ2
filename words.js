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
