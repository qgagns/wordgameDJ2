// 🌿 [정령의 세계 지도]
// 새로운 맵을 만들고 싶으면 그냥 [맵 이름]을 적고 아래에 단어들을 적으시면 됩니다!
// 이름 후보군: 숲, 나무, 식물, 정원, 골짜기, 자연
//            호수, 바다, 물, 강, 샘, 폭포, 섬, 
//            하늘, 바람, 구름, 산, 고원, 언덕, 별
//            유적, 신전, 사원, 도서관, 책, 고대, 교과서\

const WORLD_MAPS_TEXT = `

[실모의 숲]
# 
clear the way towards	[숙]	~로 가는 길을 열어주다
originate from, stem from	[동]	비롯되다, 유래하다
occurrence	[명]	발생, 사건
rare occurrence	[숙]	드물게 일어나는 일
emergence, rise	[명]	출현, 부상
proliferation	[명]	급증, 확산
generate, create	[동]	창출하다, 생성하다, 만들다
prompt, trigger	[동]	촉발하다, 유발하다, 자극하다
accelerate, facilitate, promote, foster	[동]	가속하다, 촉진하다, 육성하다
evolve, develop	[동]	진화하다, 발전시키다, 개발하다
evolution, development	[명]	진화, 발전
evolutionary	[형]	진화의, 진화론적인
transform, convert	[동]	변형시키다, 바꾸다
self-transformation	[명]	자기 변화
render	[동]	(어떤 상태로) 만들다
lengthen, prolong, extend	[동]	늘이다, 연장하다
postpone, delay, put off	[동]	연기하다, 미루다
continuous, ongoing	[형]	지속적인, 끊임없는, 계속 진행 중인
continuation	[명]	지속, 연속
maintain, endure	[동]	유지하다, 지속되다, 견디다
premature	[형]	시기상조의, 너무 이른
frequent	[형]	빈번한, 잦은
gradual	[형]	점진적인
simultaneous	[형]	동시의
meanwhile	[부]	한편, 그동안에
reinforce, strengthen	[동]	강화하다
diminish, weaken	[동]	줄이다, 감소시키다, 약화시키다
hinder, impede	[동]	방해하다, 저해하다
suppress	[동]	억누르다, 억압하다
confine	[동]	한정하다, 국한하다
accept	[동]	받아들이다, 수락하다
acknowledge, recognize	[동]	인정하다, 인지하다, 알아보다
refuse, reject	[동]	거부하다, 거절하다
resist	[동]	저항하다, 반대하다
doubt	[동]	의심하다; [명] 의심
abandon	[동]	버리다, 포기하다
battle, conflict	[명]	전투, 싸움, 갈등, 충돌
aggressive	[형]	공격적인
rival	[명]	경쟁자, 라이벌; [형] 경쟁하는
allied	[형]	연합한, 동맹의
criticize	[동]	비판하다, 비난하다
criticism	[명]	비판, 비평
constructive	[형]	건설적인
destructive	[형]	파괴적인
peace treaty	[명]	평화 협정
nonviolent	[형]	비폭력적인
harmony	[명]	조화, 화합
resolve, settle	[동]	해결하다, 정착하다; 결심하다
negotiate	[동]	협상하다
dilemma	[명]	딜레마, 진퇴양난
individualistic	[형]	개인주의적인
collectivism	[명]	집단주의
peer	[명]	또래, 동료
adolescent	[명]	청소년; [형] 청소년기의
solitary	[형]	혼자의, 고립된
independent	[형]	독립적인
intimate	[형]	친밀한, 밀접한
affection	[명]	애정, 호의
cooperative	[형]	협력적인
stay away from, distance oneself from	[숙]	~을 피하다, 멀리하다, 거리를 두다
status, standing	[명]	지위, 신분, 평판
dominance	[명]	지배, 우세
govern, rule	[동]	지배하다, 통치하다
liberation	[명]	해방, 석방
block party	[명]	블록 파티, 동네 축제
ghetto	[명]	빈민가, 게토
domestic	[형]	가정의; 국내의
relocate	[동]	이주하다, 이전하다
cognitive, perceptive	[형]	인지의, 인식의
analytical	[형]	분석적인
critical insight	[숙]	비판적 통찰력
perspective	[명]	관점, 시각
misunderstanding	[명]	오해
distort	[동]	왜곡하다
reflect, represent	[동]	반영하다, 나타내다
embody	[동]	구현하다, 나타내다
underlie	[동]	~의 기저[핵심]를 이루다
unexplained	[형]	설명되지 않은, 원인 불명의
persuasive	[형]	설득력 있는
immersion	[명]	몰입, 몰두
capability, capacity	[명]	능력, 역량
incapable of	[숙]	~을 할 수 없는
empower	[동]	권한을 주다, 힘을 북돋우다
enable O toR	[동]	O가 R할수 있게 하다
strive, take pains	[동/숙]	노력하다, 분투하다, 공을 들이다, 애를 쓰다
pursue, seek	[동]	추구하다
motive, motivation	[명]	동기, 유인
with great ease	[숙]	아주 쉽게
manage, handle	[동]	관리하다, 다루다



[실모의 바다]
#
opt for	[숙]	~을 선택하다
determine	[동]	결정하다, 밝히다
have no choice but toR	[숙]	~하지 않을 수 없다
resort to, rely on, depend on	[숙]	~에 의지하다, 기대다
reliance, dependence	[명]	의존, 의지
try out	[숙]	시험해 보다
customize, personalize, individualize	[동]	맞춤 제작하다, 개인화하다
standardize	[동]	표준화하다
moral, ethical	[형]	도덕적인, 윤리적인
moral licensing	[명]	도덕적 허가
eco-guilt	[명]	환경 죄책감
eco-friendly	[형]	친환경적인
grief	[명]	비탄, 애도
comfort, relieve, ease	[명/동]	위로, 편안함, 덜다, 안도하게 하다
restorative	[형]	회복시키는
self-esteem, self-regard	[명]	자존감, 자부심
psychotherapist	[명]	심리치료사
impulsive	[형]	충동적인
voluntary	[형]	자발적인
grudging	[형]	마지못해 하는
addictive	[형]	중독적인, 중독성의
alert	[명/형]	경보, 알림; 방심하지 않는
emotional	[형]	정서적인, 감정적인
linguistic	[형]	언어의, 언어학적인
syntax	[명]	통사론, 구문론
pronoun	[명]	대명사
lyrics	[명]	가사
rhyme	[명/동]	운, 각운; 운을 맞추다
drafting	[명]	초고 작성, 기초 작업
curriculum	[명]	교육과정
heritage, tradition	[명]	유산, 전통
customary, conventioal	[형]	통상적인, 관례적인
ceremony	[명]	의식, 식
audience	[명]	청중, 관객
recreational	[형]	여가의, 오락의
enjoyment	[명]	즐거움, 향유
afford	[동]	~할 여유가 있다
unaffordable	[형]	너무 비싼, 감당하기 어려운
commercial	[형]	상업적인
economic recession	[명]	경기 침체
convenient	[형]	편리한
accessibility	[명]	접근성
appetite	[명]	식욕
dining	[명]	식사, 정찬
digestion, ingestion	[명]	소화(력)
vacant, empty	[형]	비어 있는
secure	[동/형]	확보하다; 안전한
license	[동/명]	허가하다, 면허를 주다; 면허
import	[동/명]	들여오다, 수입하다; 수입, 도입
transmit	[동/명]	전송하다, 전달하다; 전송, 전달
consequently, hence, therefore	[부]	그 결과, 따라서, 그러므로
consequence	[명]	결과; 중요성
besides	[부]	게다가, 뿐만 아니라
relative	[형]	상대적인; 관련된
relevant, to the point	[형/숙]	유의미한, 관련된, 적절한, 요점을 짚는
disadvantage	[명]	단점, 불리한 점
neutral	[형]	중립적인
universal, general	[형]	보편적인, 일반적인
diverse, various	[형]	다양한
distinctive	[형]	독특한, 차별적인
appealing, charming, attractive	[형]	매력적인, 흥미를 끄는
unappealing	[형]	매력 없는, 흥미를 끌지 못하는
notable, intriguing	[형]	주목할 만한, 눈에 띄는, 아주 흥미로운
popularity	[명]	인기
mainstream	[명/형]	주류; 주류의
boast, show off	[동]	자랑하다, 뽐내다
display	[동/명]	보여주다, 발휘하다; 전시
appreciate	[동]	높이 평가하다; 감사하다; 감상하다
propose, suggest	[동]	제안하다
procedure, technique	[명]	절차, 순서, 기법, 기술
strategy, tactic	[명]	전략, 책략, 전술
mechanism	[명]	기제, 메커니즘
function	[동/명]	기능하다, 작동하다; 기능
feedback	[명]	피드백, 조언
for one's own sake	[숙]	그 자체를 위하여
formal	[형]	정규의, 격식 있는
intermediate	[형/명]	중간의; 중급자
physiological	[형]	생리적인, 생리학의
balance	[동/명]	균형을 맞추다; 균형
strict	[형]	엄격한
acquire, attain	[동]	습득하다, 얻다
accompany	[동]	동반하다, 수반하다
accuracy	[명]	정확성, 정확도
emphasis, stress	[명]	강조, 역점
establish, found	[동]	확립하다, 설립하다
pivotal, principal	[형]	중추적인, 결정적인, 주요한, 주된
primarily	[부]	주로, 본래
scarce, rare	[형]	부족한, 드문
situational	[형]	상황에 따른, 상황적인


[이어짐의 신전]
# 서로를 이어주는 정령들이 노니는 곳
also, in addition, additionally	[접부] 또한, 추가적으로, 게다가
besides, moreover, furthermore	[접부] 게다가, 더욱이
on top of that, what's more	[접부] 거기에 더, 게다가, 더한 것은
not only A but (also) B, B as well as A	[접] A뿐만 아니라 B도
either A or B	[접] A나 B 둘 중 하나
neither A nor B	[접] A도 B도 둘다 아닌
in essence, essentially	[접부] 본질적으로
however, yet, nevertheless, nonetheless, still	[접부] 그럼에도 불구하고
while, whereas	[접] ~인 반면에
on the other hand	[접부] 반면에
instead, rather	[접부] 대신에, 오히려
despite, in spite of	[전] ~에도 불구하고
instead of, rather than	[전/접] ~대신에, ~보다는
though, although, even though	[접] (사실일 때) 비록 ~일지라도
even if	[접] (가정일 때) 비록 ~하더라도, 설령 ~일지라도
on the contrary, in contrast, by contrast	[접부] 대조적으로
conversely	[접부] 반대로, 역으로
by comparison	[접부] 그에 비해, 비교해 보면
meanwhile	[접부] 한편으로는, 그러는 동안에
likewise, similarly	[접부] 비슷하게, 유사하게
equally, by the same token	[접부] 같은 이유로, 마찬가지로
in the same way, in like manner	[접부] 같은 방식으로, 마찬가지 방식으로
as ~ as ...	[구] ...만큼 ~한
as ~, so ...	[구] ~인 것처럼, ...도 그렇다
for example, e.g., for instance, as an example, to illustrate, as an illustration	[접부] 예를 들어, 설명하자면, 한 예로써
(let us) say	[접부] 예를 들어 ~라고 말해보자
a case in point is ~	[구] ~가 좋은 예이다
if, providing, provided, suppose, supposing	[접] 만약 ~라면
even if	[접] 심지어 ~라도
unless	[접] ~하지 않는 한
in case (that)	[접] ~할 경우에 대비하여
as long as	[접] ~하는 한
because, since, as	[접] ~ 때문에, ~이므로
because of, due to, owing to	[전] ~ 때문에
therefore, thus, hence	[접부] 그러므로, 따라서
accordingly	[접부] 따라서, 그에 맞춰
as a result, consequently, as a consequence	[접부] 결과적으로, 따라서
for this reason	[접부] 이러한 이유로
so	[접] 그래서, 따라서
so ~ that ..., such ~ that ...	[구] 너무 ~해서 ...하다
surely, certainly, undoubtedly, unquestionably	[접부] 확실히, 틀림없이
above all	[접부] 무엇보다도
in particular, particularly, especially	[접부] 특히, 특별히
in fact, as a matter of fact, actually, indeed	[접부] 사실은, 실제로
in other words, that is (to say), namely	[접부] 즉, 다시 말해
to put it another way	[접부] 다른 말로 하자면
in a word, in short, in brief, to be brief, to put it simply	[접부] 간단히 말하자면, 짧게 말하자면
in summary, to sum up, to summarize, in a nutshell	[접부] 요약하자면, 정리하자면
in conclusion, to conclude	[접부] 결론적으로
all in all, largerly, on the whole, overall	[접부] 대체로, 전반적으로
ultimately, in the end	[접부] 결국, 최종적으로
to start (begin) with, firstly, first of all	[접부] 첫째로, 무엇보다 먼저
subsequently	[접부] 그 후에, 이어서

`;
