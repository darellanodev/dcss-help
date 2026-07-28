
// ============================================
// GOD DATA - All 27 gods with descriptions,
// powers, wrath, and Spanish translations
//
// Data Structure:
// godsData = [
//   {
//     name: "GodName",           // English god name
//     title: "the Title",        // Optional title/nickname
//     description: {
//       en: "English text...",   // Original description
//       es: "Spanish text..."    // Translation (null if missing)
//     },
//     powers: {
//       en: "English text...",   // Powers granted to followers
//       es: "Spanish text..."    // Translation (null if missing)
//     },
//     wrath: {
//       en: "English text...",   // Punishment for leaving
//       es: "Spanish text..."    // Translation (null if missing)
//     }
//   },
//   ...
// ]
//
// Source Files:
// - English: crawl-master/crawl-ref/source/dat/descript/gods.txt
// - Spanish: crawl-master/crawl-ref/source/dat/descript/es/gods.txt
// - God names: crawl-master/crawl-ref/source/dat/database/godname.txt
//
// Translation Coverage:
// - Total entries: 81 (27 gods × 3 sections)
// - Translated: 28 entries (34.6%)
// - Missing: 53 entries (65.4%)
// ============================================
const godsData = [
    {
        name: "Ashenzari",
        title: "the Shackled",
        description: {
            en: "While it seems inconceivable that the divine could be shackled, Ashenzari is just that: bound to the sky for eternity, the unbudging god is all-knowing, all-seeing. Devoted worshippers are allowed to grasp shreds of this knowledge and foresight, but be warned: to Ashenzari, power and blessing and curse are all the same thing.",
            es: "Aunque pueda parecer inconcebible que algo divino pueda estar encadenado, Ashenzari es eso: clavado adrede al cielo para la eternidad, el dios inamovible es omnisciente. A sus devotos adoradores se les permite que conozcan retales de su conocimiento y visión, pero alerta: para Ashenzari, el poder, las bendiciones y las maldiciones son todo la misma cosa."
        },
        powers: {
            en: "Ashenzari exhorts followers to curse their possessions, periodically offering these curses to worshippers as they explore. These curses grant improvements to specific skills, but cursed equipment cannot normally be enchanted and can only be removed by shattering it forever. As worshippers equip more cursed equipment, Ashenzari will grant increasing knowledge of the surrounding dungeon. Eventually, Ashenzari will reveal the invisible, grant clarity of mind, and protect worshippers from the Dungeon's malevolent forces.",
            es: null
        },
        wrath: {
            en: "Those who abandon Ashenzari will immediately have their curses shattered, destroying whichever items they imbued with divine wisdom. Thereafter, Ashenzari's wrath is constant and unrelenting for its duration. Victims will find their skills impaired, and their enemies divinely guided – never losing track of them, never ending the hunt.",
            es: null
        }
    },
    {
        name: "Beogh",
        title: "the Shepherd",
        description: {
            en: "A god of outcasts, pariahs, and the dispossessed, Beogh's altars are rarely found among those of other faiths, but Beogh's missionaries may always be sought by those looking for a place to belong. Worshippers will find many friends within the dungeon, and those who prove their strength to Beogh may gain lifelong companions the equal of any adventurer. To worship Beogh is to believe there is strength that transcends species and bloodline. To worship Beogh is to be an orc.",
            es: "Beogh es una deidad malvada, adorado por los orcos de cuevas nativos del calabozo. Sólo los orcos se pueden dedicar al servicio de Beogh, y ellos deben probar su devoción a través de la matanza. Los devotos de Beogh especialmente fervientes encontrarán a otros seguidores orcos acudiendo a su bandera: ésta es una época de señales y augurios, y los orcos están cada vez más seguros de que la llegada de su Mesías se acerca."
        },
        powers: {
            en: "Worshippers will gain the power to call down Beogh's wrath upon their oppressors, and other orcs will start to see them as one of their own. Especially promising adherents will find themselves beset by rivals for Beogh's favour, but overcoming these trials without fleeing will gain them loyal companions whom Beogh will resurrect time and time again, so long as they continue to fight and avenge in Beogh's name. A true chosen one may even rally an entire orcish army to avenge a wrongful death.",
            es: null
        },
        wrath: {
            en: "Blasphemers against the word of Beogh find themselves assaulted by waves of orcish warriors, or by dancing electric weapons. Beogh may also simply smite such blasphemers – and when smiting true sinners, Beogh has a heavy hand indeed! Those who still worship Beogh will also find their followers regularly deserting them.",
            es: null
        }
    },
    {
        name: "Cheibriados",
        title: "the Contemplative",
        description: {
            en: "Cheibriados is a god of deliberation. Those following Cheibriados travel more slowly the further they progress in their faith, and are forbidden from using any means to hasten themselves. In the process of so imitating their god, they attain perfection of mind and body, and the mysteries of time unfold before them. Especially devout followers may even momentarily abandon the flow of time and its needless disturbances.",
            es: "Cheibriados es un dios que medita en el misterio del tiempo. Aquellos que elijan seguir su camino aprenderán a desprenderse de las prisas innecesarias, enlentecerse y volver lentos a los demás, y a dañar a aquellos que rechacen tal situación. Seguidores especialmente devotos pueden incluso abandonar temporalmente el flujo del tiempo y sus innecesarias molestias."
        },
        powers: {
            en: "Followers of Cheibriados move more slowly as they gain favour. As they move slower, worshippers of Cheibriados are granted increased attributes. Cheibriados rewards the faithful with the power to slow other creatures and the power to briefly distort the flow of time. Devout worshippers will gain the ability to inflict great harm on all those who move more quickly than they do, and finally the ability to step out of the flow of time entirely.",
            es: "Los seguidores de Cheibriados se mueven más lentamente a medida que ganan favor, y son recompensados por matar a criaturas que sean más rápidas que ellos. Moverse demasiado deprisa o usar armas mágicamente aceleradas está mal visto. Cheibriados recompensa a los fieles con un metabolismo lento, el poder de enlentecer a otras criaturas, el poder de distorsionar el flujo del tiempo, el poder de dañar a aquellos que se muevan más deprisa que ellos y, finalmente, la habilidad de abandonar el flujo del tiempo por completo."
        },
        wrath: {
            en: "Offenders against Cheibriados will find their movements remain slow while the attention of Cheibriados remains upon them, and may have any magical hasting stripped away. They may also become further slowed, be put to sleep, or be beset by the unparalleled volume of the inevitable passage of time ringing throughout the Dungeon.",
            es: null
        }
    },
    {
        name: "Dithmenos",
        title: "the Shrouded",
        description: {
            en: "Dithmenos is the god of night and of things half-seen in flickering torchlight. Worshipped by actors as often as thieves, followers of Dithmenos can learn to control their own shadow as if it were an extension of their body - misdirecting onlookers and acting upon the world with force as tangible as anything that has ever been imagined lurking in the dark.",
            es: "Dithmenos el sombrío desea que todo sea oscuridad. Sus seguidores ganan una afinidad extraña y sobrenatural sobre las sombras en su entorno. Este dios odia el fuego, el cual liberó hace tiempo a los mortales de la tiranía de las sombras; su uso está prohibido por sus seguidores. Dithmenos favorece a quienes destruyan cualquier fuente de fuego."
        },
        powers: {
            en: "Followers of Dithmenos are surrounded by an unnatural quiet, which helps the sounds they make go unnoticed. As they rise in devotion, they will find their own shadow begins to imitate some of their actions, attacking when they attack and even casting shadowy magics that mimic the form - if not the substance - of whichever schools of magic they had been utilising. More devout worshippers additionally gain the ability to swap places with their shadow to mislead enemies, grasp other beings' shadows to unleash their magic on the worshipper's behalf, and finally call down a night so dark that it hides all denizens of the dungeon from each other.",
            es: null
        },
        wrath: {
            en: "When angered, Dithmenos turns the shadows against victims. Monsters emerge from the darkness, both illusions woven from shadow and the very shadow themselves turning against sinners. Dithmenos' subtle punishments are, if anything, more dangerous: victims find the shadows ripped away from them, hunted with nowhere to hide; or find themselves smothered in shadow and sleeping, perhaps forever.",
            es: null
        }
    },
    {
        name: "Elyvilon",
        title: "the Healer",
        description: {
            en: "Elyvilon the Healer welcomes all kind souls prepared to help others. Those individuals can expect to gain powerful healing abilities, by which they can avoid bloodshed. Elyvilon appreciates exploration of the dungeon. Elyvilon's followers can convert to the Shining One or Zin while keeping some piety.",
            es: "Elyvilon, «quien sana», acoge a todas las buenas almas que estén preparadas para ayudar a los demás. Tales individuos pueden esperar ganar poderosas habilidades de sanación. Elyvilon prefiere un credo de pacifismo y ayuda a sus seguidores a evitar baños de sangre. Elyvilon aprecia la destrucción de armas, aunque los seguidores más piadosos deben encontrar y destruir armas impías o malignas para ganar piedad de esta forma. Los seguidores de Elyvilon pueden convertirse en seguidores de El Resplandeciente o de Zin conservando algo de piedad."
        },
        powers: {
            en: "The Healer offers followers a number of means to heal themselves from damage and other ill effects. Followers may also attempt to pacify hostile monsters and turn them neutral. Elyvilon may directly intervene to save a follower's life, and if there has been no such intervention recently, is sure to prevent a killing blow against especially pious followers. Elyvilon may also occasionally protect the follower's allies from death.",
            es: "Elyvilon ofrece a sus seguidores maneras de sanarse a sí mismos de heridas y de otras aflicciones. Elyvilon también permite curar a monstruos hostiles para tratar de volverlos neutrales. Elyvilon puede intervenir directamente para salvar la vida de un seguidor, especialmente cuando es requerido para ello; los seguidores altamente piadosos pueden estar seguros de dicha ayuda."
        },
        wrath: {
            en: "Elyvilon is not a god known for wrath. Still, those earning Elyvilon's ire will find the Healer occasionally protecting their foes from their attacks, and even from death.",
            es: null
        }
    },
    {
        name: "Fedhas",
        title: "Madash",
        description: {
            en: "Fedhas is the god of plant and fungal life. Followers are prevented from harming any species under Fedhas' protection. In return, Fedhas grants a number of abilities that promote the growth of plants and fungi. These abilities may incidentally prove useful to adventurers.",
            es: "Fedhas Madash es un dios de las plantas y hongos. Fedhas demanda que sus seguidores auspicien la descomposición de cadáveres. Fedhas prohíbe dañar a ninguna especie bajo su protección y usar efectos de necromancia que interfieran con los cadáveres. En compensación Fedhas da varias habilidades que promueven el crecimiento de plantas y hongos. Tales habilidades pueden ser útiles para los aventureros."
        },
        powers: {
            en: "Plants and fungi will not attack Fedhas' worshippers without provocation. Worshippers may walk through plants or fungi, and even fire missiles or spells through them without causing harm. Fedhas grants powers to temporarily grow a menagerie of plant allies whose strength and duration increase with Invocations skill. Worshippers may grow a protective wall of briar patches as well as ballistomycetes that fire damaging spores whose explosions confuse living creatures. Devout followers can overgrow a stretch of solid terrain with a cluster of plant allies or even summon a mighty oklob plant.",
            es: "Las plantas y los hongos no atacarán a los adoradores de Fedhas sin provocación previa. Los adoradores de Fedhas pueden caminar entre las plantas o los hongos, e incluso lanzar proyectiles o hechizos a través de ellas sin causarles daño. Fedhas confiere la habilidad de hacer evolucionar a las plantas y hongos en especies más fuertes. Sus seguidores pueden eventualmente hacer crecer un muro de plantas y crear esporas explosivas de los cadáveres. También se les concede algo de control sobre el tiempo, siendo capaces de invocar luz solar y al final, tormentas."
        },
        wrath: {
            en: "Those who offend Fedhas will find the forces of nature invoked against them through a dramatic increase in greenery. They may find themselves transmuted into the plants they have forsaken, or surrounded by impenetrable walls of briars plus vicious acid-spitting oklob plants.",
            es: null
        }
    },
    {
        name: "Gozag",
        title: "Ym Sagoz the Greedy",
        description: {
            en: "Gozag Ym Sagoz the Greedy teaches that the world belongs to the rich. Those accepting this principle may exchange their gold for divine assistance. Followers of Gozag do not earn piety; the only way to impress this god is by amassing a fortune, and worshippers may request as much assistance as they can afford. Fortunately, Gozag's worshippers are said to have the touch of gold.",
            es: "Gozag Ym Sagoz, el avaro, enseña que el mundo pertenece a los ricos. Quienes acepten este principio pueden comprar su asistencia divina con oro. Los seguidores de Gozag no ganan piedad; sólo se puede impresionar a Gozag con oro y fortuna. Así sus seguidores pueden pedir tantos favores como puedan costear. Afortunadamente, se dice que los seguidores de Gozag tienen el toque del oro."
        },
        powers: {
            en: "For Gozag, both flesh and spirit are inferior to wealth, and therefore all monsters are turned to gold upon death. Other monsters may then be briefly distracted by imaginings of great wealth. Stalwarts can purchase immediate help in the form of potions, and may also pay to attract shopkeepers into the dungeon. Particularly well-off adherents may bribe the inhabitants of a branch of the dungeon to turn a blind eye to their presence, or even to change their allegiance.",
            es: null
        },
        wrath: {
            en: "The first of Gozag's punishments is commercial: all shops opened through Gozag's intervention shut their doors forever. The disloyal are advised to finish their shopping before they launch their betrayal. For as long as Gozag remains angered, ex-worshippers may sometimes be bedazzled by the glint of coin, and their potions will have a chance to fail when quaffed. Any foes that are encountered may also be granted potions of their own to assist them against those who resign from Gozag's service.",
            es: null
        }
    },
    {
        name: "Hepliaklqana",
        title: "the Forgotten",
        description: {
            en: "Hepliaklqana the Forgotten accepts the worship of those who would remember their forebears, and fight alongside the greatest of them all. Acolytes of Hepliaklqana sacrifice a small part of their life essence to manifest their ancestor into the world; as they explore and form new experiences, they will find themselves able to shape and control their ancestor's memory, eventually bringing them into the ranks of the mythical heroes.",
            es: null
        },
        powers: {
            en: "Hepliaklqana's worshippers are served by a guardian formed from a part of their life essence, in the shape of their greatest ancestor. This ancestor is at first remembered as they were at the start of their fabled adventures, but will advance in skill as their descendant does. Hepliaklqana always allows followers to recall their ancestor to their side, and, even if the ancestor is destroyed, Hepliaklqana will call it forth again not long after. Further advancement in Hepliaklqana's service allows worshippers to restore and strengthen their ancestor, to swap them with other creatures, and to choose how to remember their life's talents.",
            es: null
        },
        wrath: {
            en: "Hepliaklqana believes that the only reasonable punishment for turning one's back on the path of memory is to be denied its use. All new experience is denied to the unfortunate apostate, until Hepliaklqana decides they have been punished enough. The life essence sacrificed to manifest an ancestor will not be returned until Hepliaklqana is mollified, and this will not be quick: unlike some, Hepliaklqana has a long memory.",
            es: null
        }
    },
    {
        name: "Ignis",
        title: "the Dying Flame",
        description: {
            en: "Ignis the Dying Flame offers followers power over fire in many forms. All of Ignis' power is offered unconditionally to any who would deign to worship, but once used, it can never be replenished. Ignis' other worshippers deserted long ago; the divine fire burns low, and soon it will go out.",
            es: null
        },
        powers: {
            en: "Followers can armour themselves in flame, call a swarm of foxfires against their foes, or let Ignis' heat lift them to another level of the dungeon. However, the guttering flames of Ignis' power will only sustain a limited number of invocations before only flickering embers remain. No matter how depleted, Ignis will always grant followers resistance to fire.",
            es: null
        },
        wrath: {
            en: "The wrath of Ignis is now weaker than that of most other gods. Apostates will find their resistance to fire stripped away completely, and will be periodically assaulted by fire elementals, find their enemies strengthened by fire, or even have the floor burned out from beneath them. Experienced and cautious adventurers will likely overmaster these assaults.",
            es: null
        }
    },
    {
        name: "Jiyva",
        title: "",
        description: {
            en: "Jiyva is the ancient deity of the slimes. Followers are expected to support the spread and satiation of their fellow slimes by allowing them to consume items, and are prevented from harming any slimes. Especially favoured followers will become as shapeless as their god, mutating wildly.",
            es: "Jiyva es la antigua y caótica deidad de los limos. Sus seguidores deben apoyar la diseminación y alimentación de sus camaradas permitiéndoles consumir objetos, y tienen prohibido dañar a cualquier limo. Jiyva ocasionalmente incluso consumirá objetos dejados en alguna parte del calabozo. Seguidores especialmente favorecidos se volverán tan carentes de forma como su dios a medida que sus atributos y mutaciones van cambiando bajo la influencia de Jiyva."
        },
        powers: {
            en: "Jiyva will gradually fill the dungeon with jellies. These and any other fellow slimes will rapidly consume nearby items, as well as slowly consuming items from elsewhere in the dungeon. As they spread slime across more of the dungeon, Jiyva will grant followers increasingly rapid health and magic regeneration, and will begin mutating them to better reflect Jiyva's image. Followers will later become able to call forth acidic ooze from the walls of the dungeon, and to turn monsters to slime with a touch.",
            es: null
        },
        wrath: {
            en: "Jiyva's vengeance is swift and gurgling. All slimes turn against those who offend Jiyva, and Jiyva ensures a plentiful supply of further slimes. Victims, too, will find their own bodies becoming unstable; acquiring debilitating mutations or contamination, as well as having any gifts of slime mutations stripped away from them.",
            es: null
        }
    },
    {
        name: "Kikubaaqudgha",
        title: "",
        description: {
            en: "Kikubaaqudgha is a terrible Demon-God, served by those who wish to indulge in the powers of death. An evil god, Kikubaaqudgha requires worshippers to cause the death and destruction of as many creatures as possible. In exchange, Kikubaaqudgha offers great assistance to the aspiring necromancer: a supply of useful bodies, knowledge of dark magic, and protection against necromantic backlash.",
            es: "Kikubaaqudgha es un terrible dios demonio, al que sirven aquellos que quieren manipular los poderes de la muerte. Kikubaaqudgha es una deidad maligna y demanda muertes de criaturas vivas y de demonios tan a menudo como sea posible. A cambio, Kikubaaqudgha ofrece gran asistencia a quien aspire ser un nigromante: libros de hechizos repletos de magia negra, protección y una vasta fuente de cadáveres directamente del mausoleo de Kikubaaqudgha."
        },
        powers: {
            en: "Kikubaaqudgha will enhance servants' necromantic prowess with gifts of Necromancy spells. Kikubaaqudgha will protect followers from the effects of necromantic miscasts and death curses, and may even shield them from unholy torment. Followers can unearth dying wretches as necromantic fodder, and may invoke the sign of ruin to harm their enemies. Kikubaaqudgha will eventually allow followers to either receive knowledge of the most forbidden necromantic magic, or to have their weapon imbued with pain.",
            es: null
        },
        wrath: {
            en: "Kikubaaqudgha's wrath brings forth all the dread powers of necromancy. Victims may witness the devastating Sign of Ruin form upon themselves, or both doomed and drained without any respect for their negative energy resistance. Furthermore, Kikubaaqudgha's gifts become tainted: the dead rise again as foes, and those that attempt to use necromantic magic to fend off wrath will find it backfiring on them when least expected.",
            es: null
        }
    },
    {
        name: "Lugonu",
        title: "the Unformed",
        description: {
            en: "Banished to the chaotic realm of the Abyss, Lugonu the Unformed seeks followers to spread bloodshed and corruption in the overworld. Those who gain Lugonu's favour will be granted some of the power of the Abyss itself, allowing them to call forth eldritch horrors, and even to travel between the overworld and the Abyss at will.",
            es: "Lugonu, «informe», se revela en el caos del Abismo. Sus seguidores son enviados para causar masacres y corromper al mundo superior, y deben hacerlo sin descanso para ganar el favor de Lugonu. Quienes ganen el favor de Lugonu heredan algo de su poder sobre el Abismo, permitiéndoles invocar horres macabros, incluso viajar entre el Abismo y el mundo superior a voluntad."
        },
        powers: {
            en: "Followers of Lugonu gain powers to depart the Abyss at will, to banish monsters there, and to flee back inside when needed. Lugonu will also banish nearby foes if any other god attempts to interfere with their followers. Later, followers will be able to corrupt the ordered world, opening a gate for creatures of the Abyss to pass through, and to gate themselves directly into this realm of chaos. Lugonu will protect followers who unwield weapons imbued with the distorting energies of the Abyss, and eventually will offer to distort a follower's melee weapon. Lugonu expects followers to spread unceasing chaos in the overworld, and as such does not grant piety to worshippers while they remain in the Abyss itself.",
            es: null
        },
        wrath: {
            en: "Lugonu's ire renders the barrier between reality and the Abyss weak and permeable. Space warps, hurling victims across the dungeon, or even directly into the Abyss. Lugonu also reaches out and sends the chaotic inhabitants of the Abyss against victims, with veteran adventurers facing the greatest horrors of the Abyss. Lugonu does not forgive easily, and will not allow ex-worshippers to rejoin the fold while Lugonu's wrath still lasts.",
            es: null
        }
    },
    {
        name: "Makhleb",
        title: "the Destroyer",
        description: {
            en: "Makhleb the Destroyer is a fearsome deity of bloodshed and mortification of the flesh. Followers are expected to cleanse others by inflicting suffering and death on them in Makhleb's name. Dedicated followers may also access the raw energies and hell-spawned servants of chaos, so that they may better break the impure world and its false laws for their evil god's glory.",
            es: "Makhleb, «quien destruye», es una terrible deidad de derramamientos de sangre y mortificación de la carne. Sus seguidores purifican a los demás infligiéndoles sufrimiento y muerte en nombre de Makhleb, y pueden ganar más favor destruyendo a los cadáveres recientes. Los seguidores Dedicados pueden acceder a energías caóticas puras y convocar sirvientes del caos de origen infernal, de modo que puedan destruir este mundo impuro y sus leyes falsas para la gloria de este malvado dios."
        },
        powers: {
            en: "Makhleb offers followers the ability to unleash bolts of chaotic destruction at the cost of their own health as well as call in help from powerful (if sometimes uncooperative) demons. The most devoted of worshippers will eventually be gifted with knowledge of Infernal Marks, allowing them to ritually brand their own bodies in exchange for one of the Destroyer's many hellish powers. Makhleb's powers all come with a price in blood. However, Makhleb will grant followers renewed health in return for killing beings of all kinds.",
            es: null
        },
        wrath: {
            en: "Those who invite the fury of Makhleb are buried in demons and destruction. The greatest punishments are reserved for the strongest sinners; crystal spears and Executioners are hurled with abandon only at those Makhleb finds truly deserving!",
            es: null
        }
    },
    {
        name: "Nemelex Xobeh",
        title: "the Trickster",
        description: {
            en: "Nemelex is a strange and unpredictable chaotic trickster god, whose powers are invoked through magical packs of cards painted in the ichor of demons. Followers will be granted decks of cards as they traverse the dungeon, and are encouraged to trust in the cards to provide them with divine assistance. However, the Trickster can also ensure that fortune favours the bold.",
            es: "Nemelex es un dios tramposo e impredecible, cuyos poderes pueden ser invocados mediante paquetes de cartas mágicas pintadas con el icor de demonios. Sus seguidores deben explorar el mundo, a cambio recibirán barajas de cartas. Ellos deben confiar en las cartas y usarlas tanto como sea posible. Además, Nemelex asegura que la fortuna favorece al más valiente."
        },
        powers: {
            en: "The Trickster's followers gain various ways to influence fate when playing their cards. The effects of the cards will be more powerful with higher piety and with greater Invocations skill. Later, followers will gain powerful abilities to manipulate the cards, allowing them to choose one of three drawn cards, to gain the effects of multiple cards at once, and finally to stack decks and re-order their contents.",
            es: null
        },
        wrath: {
            en: "Those who abandon Nemelex Xobeh have all of their gifted decks revoked immediately. They are also regularly forced to draw from the deck of Punishment, inflicting a range of unpleasant effects including draining, torment and polymorphing, as well as calling upon other gods to assist in inflicting wrath.",
            es: null
        }
    },
    {
        name: "Okawaru",
        title: "Warmaster",
        description: {
            en: "Okawaru is a dangerous and powerful god of battle. Followers are expected to constantly prove themselves in combat, and may channel Okawaru's might to enhance their prowess. Okawaru demands that followers prove themselves by their own strength alone, and so worshippers are forbidden from gaining allies by any means. Okawaru pays little heed to easy victories, but will reward worshippers for heroic feats against mighty foes.",
            es: "Okawaru es un poderoso y peligroso dios de la guerra. Los seguidores pueden ganar varios poderes útiles en combate además de ciertas recompensas, pero deben constantemente probarse a sí mismos derrotando otras criaturas. Okawaru prefiere gestos heroicos contra poderosos enemigos, y no presta mucha atención a victorias fáciles. Okawaru menosprecia a quienes hieren a sus aliados."
        },
        powers: {
            en: "Followers of Okawaru will gain the ability to temporarily increase their skills in combat, and, much later, to deal much faster blows. Okawaru will eventually gift followers with ammunition, weapons and armour. The most favoured of Okawaru may challenge their foes to honourable single combat.",
            es: null
        },
        wrath: {
            en: "Okawaru's most vicious warriors are sent against rebellious servants. Novices find themselves swarmed by packs of ogres and gnolls, while champions are surrounded by titans and elvish blademasters.",
            es: null
        }
    },
    {
        name: "Pakellas",
        title: "the Inventive",
        description: {
            en: "Pakellas the Inventive believes in the supremacy of devices, magical or otherwise, over spells and other forms of magic. Followers, although cut off from ambient magical power, are provided with magical energy to empower their devices so long as they use them to assert Pakellas' supremacy. Pakellas will grant devout worshippers access to increasingly powerful devices.",
            es: null
        },
        powers: {
            en: "Followers of Pakellas do not regenerate their magic power naturally, and are forbidden from using external means to do so; instead, they are granted magical energy on killing beings. They may use increasing amounts of magical energy to strengthen their devices, temporarily granting them additional power, and can also use their magical energy to recharge their devices. Sufficiently devout followers will receive new devices from Pakellas, and may eventually petition Pakellas to personally charge one of their devices beyond its normal limits.",
            es: null
        },
        wrath: {
            en: "Those that offend Pakellas will find themselves completely unable to make use of their devices for the duration of Pakellas' displeasure. Those who abandon Pakellas altogether will also continue to be unable to regenerate their magical power so long as Pakellas' attention remains on them.",
            es: null
        }
    },
    {
        name: "Qazlal",
        title: "Stormbringer",
        description: {
            en: "Qazlal Stormbringer is a violent god of tempests, who delights in unleashing the forces of nature against the unsuspecting. Those who invite Qazlal's gaze will find themselves the eye in a storm of elemental destruction, from which only their God can protect them. Pious worshippers of Qazlal will gain the ability to direct and control the destructive might of the storm.",
            es: "Qazlal «invocador de tormentas» es un dios violento de la tempestad, quien disfruta desencadenando las fuerzas de la naturaleza contra el desprevenido. Quienes inviten la mirada de Qazlal se encontrarán en el ojo de la tormenta de destrucción elemental, del cuál sólo su dios puede protegerlos. Los adoradores beatos de Qazlal ganarán la habilidad de dirigir y controlar el poder destructivo de la tormenta."
        },
        powers: {
            en: "Followers of Qazlal are protected from all clouds. As a follower of Qazlal gains divine favour, they are slowly surrounded by a loud storm. In addition to generating noise, the storm causes elemental clouds to appear near followers, blocks attacks, and (for the particularly devout) deflects incoming projectiles. Qazlal allows followers to incite nature against their foes, causing a localised natural disturbance or, for particularly devout followers, a more widespread disaster. Followers of Qazlal eventually gain temporary resistances after taking damage, and can give life to clouds, turning them into allied elementals.",
            es: null
        },
        wrath: {
            en: "Qazlal's wrath is swift and unmistakable. Sinners are stripped of their resistances and assaulted by furious elemental creatures, and Qazlal will create mighty thunderclaps to alert their foes.",
            es: null
        }
    },
    {
        name: "Ru",
        title: "the Awakened",
        description: {
            en: "Of all the gods, only Ru opposed creation. Not as folly, but as distraction. Initiates of Ru can open channels to the powers underlying the visible world by renouncing the fetters that bind them here. These sacrifices are not made to Ru, but rather given up freely and permanently. Having made such sacrifices, initiates will become able to draw upon this immense power to aid themselves, eventually gaining the ability to unleash its destructive might against their foes.",
            es: "Entre todos los dioses, sólo Ru se opone a la creación. No como una locura, sino como distracción. Los iniciados de Ru pueden abrir canales a los poderes subyacentes al mundo visible al renunciar a las cadenas que los atan aquí. Estos sacrificios no son para Ru, sino que se otorgan gratuita y permanentemente. Sus seguidores pueden redirigir y contraatacar contra sus enemigos, regenerar su salud y magia, realizar poderosos saltos, y liberar una onda masiva de poder contra sus rivales."
        },
        powers: {
            en: "Ru will offer followers a number of sacrifices as they travel the dungeon. On accepting these sacrifices, followers will gradually gain an aura of immense power. This aura will initially cause foes that attempt to harm them to falter and become stricken with maladies. After making further sacrifices, followers will be able to draw on this power to restore their health and magic, or to make a lightning-fast explosive leap. Exceptional sacrificants can unleash their power in a massive strike against all their foes. Each of the powers of Ru's sacrificants increases in strength with more piety from more sacrifices.",
            es: null
        },
        wrath: {
            en: "Those who leave Ru's service will not receive any further punishment; however, their piety will be lost even upon rejoining, and their sacrifices remain forever.",
            es: null
        }
    },
    {
        name: "Sif Muna",
        title: "the Loreminder",
        description: {
            en: "Sif Muna the Loreminder is a contemplative but powerful deity, served by those who seek magical knowledge. Followers who tirelessly pursue new horizons can call upon the Loreminder for magical power and the ability to cast spells beyond their magical training. The devout are rewarded with a supply of spellbooks taken directly from Sif Muna's legendary library.",
            es: "Sif Muna, «quien posee el conocimiento» es una deidad contemplativa pero poderosa, a quien sirven los que buscan conocimiento de la magia. Aprecia el entrenamiento de las capacidades para hacer magia. Sif Muna recompensa a sus seguidores más devotos con libros de hechizo exclusivos de su legendaria biblioteca."
        },
        powers: {
            en: "Sif Muna grants followers the ability to rapidly restore their magical energy, and to forget spells at will, so as to learn new ones. Worshippers can call upon the Loreminder to help cast any spell they've discovered, even if it's well beyond their current magical training. Over time, devout followers will receive spellbooks containing a vast range of spells.",
            es: null
        },
        wrath: {
            en: "Those in Sif Muna's ill graces find the very forces of magic rebelling against them. They are confused and stupefied, their magical reserves drained, their enchantments unravelled. Casting spells, too, becomes unreliable – and even dangerous.",
            es: null
        }
    },
    {
        name: "the Shining One",
        title: "El Resplandeciente",
        description: {
            en: "Followers of the Shining One are bound to the code of the honourable warrior, soldiers in their god's eternal crusade against evil. For forsaking dark magic and underhanded tactics, the Shining One rewards them and their allies with the power they need to slay demons and the undead. Especially devout warriors can even call upon angels in times of need. The Shining One's followers can convert to Elyvilon or Zin while keeping some piety.",
            es: "El Resplandeciente es una poderosa deidad en una cruzada contra todo mal. A sus seguidores y aliados les puede conceder varias bendiciones mientras vayan erradicando sin compasión a seres malignos e impíos, y se espera que prueben su superioridad moral luchando honorablemente. A sus seguidores se les solicita que limpien el mundo, examinando a todos sus habitantes en busca de rastros de maldad que deba ser eliminada. Los seguidores de El Resplandeciente pueden convertirse en seguidores de Elyvilon o de Zin conservando algo de piedad."
        },
        powers: {
            en: "Followers of the Shining One are surrounded by a halo that reveals their enemies to them. Followers will gain power by killing evil beings, and with growing piety their life force will be protected. The Shining One will keep summoned and charmed allies on their side longer, should the allies prove worthy of the crusade. Followers will gain use of a divine shield to protect them in battle. Later, they can channel blasts of cleansing flame that are particularly damaging to unholy beings, and can call upon powerful divine beings as temporary allies. Highly pious followers may request the Shining One's blessing upon a weapon. The Shining One may occasionally directly intervene to save a follower's life.",
            es: null
        },
        wrath: {
            en: "The Shining One's wrath is straightforward and unmistakable. Its victims find themselves smitten with holy fire and beset with holy warriors. Sinners will be silenced, and the Shining One will also shout to alert the victim's foes.",
            es: null
        }
    },
    {
        name: "Trog",
        title: "the Wrathful",
        description: {
            en: "Trog is an ancient god of anger and violence. Followers are expected to kill in Trog's name, and especially to slay wizards. In return, worshippers of Trog gain the ability to go berserk at will in combat, and will be granted assistance in the form of powerful weapons and mighty allies. Followers are absolutely forbidden the use of spell magic.",
            es: "Trog es un antiguo dios de furia y violencia. Sus seguidores han de matar en nombre de Trog y sacrificar a los muertos para obtener poder durante las batallas y ocasionalmente alguna recompensa. Quienes adoran a Trog pueden entrar en un estado de furia a voluntad. Trog odia a todos los magos y le encanta ver sus libros arder. Sus seguidores tienen prohibido el uso de hechizos."
        },
        powers: {
            en: "Trog offers various powers to help followers in battle. Followers will gain the ability to go berserk at will, and Trog will extend the duration of their berserk rage on killing foes. Trog will grant followers the ability to rapidly heal their wounds while fortifying their willpower, and later the ability to call in powerful raging allies. Eventually, Trog will gift followers with weapons, often with antimagic effects.",
            es: null
        },
        wrath: {
            en: "Trog's wrath is incandescent. Offenders find themselves swarmed by berserkers – from packs of bears to, for the most powerful, mobs of giants and trolls. Otherwise, those who anger Trog will regularly lose both their strength and self-control as they thoughtlessly thrash in place.",
            es: null
        }
    },
    {
        name: "Uskayaw",
        title: "the Reveller",
        description: {
            en: "Uskayaw the Reveller is a god of ecstatic dance. In the dungeon, Uskayaw appreciates the passion and rhythm of combat, rewarding followers for each strike they deliver and for the damage they deal their foes. The longer the dance continues, the greater powers Uskayaw offers. When the dance ends, Uskayaw quickly loses interest.",
            es: null
        },
        powers: {
            en: "Worshippers of Uskayaw can stomp to damage foes around them, and rapidly move through a line of creatures while confusing them. When a worshipper's dance reaches a certain point, Uskayaw will immediately stop all foes so that the dancer may take a solo. As the dance continues, Uskayaw will link the emotions of foes, forcing them to share their pain. The duration of these effects will increase with Invocations skill, and as long as the intensity of the dance is sufficient they may be repeated after a short time. If the dance continues further, Uskayaw allows worshippers to end it by melding with and then violently exploding from a foe, killing it instantly.",
            es: null
        },
        wrath: {
            en: "Uskayaw's wrath turns the powers of the dance against the offender. The prude will find their foes going berserk and will be forced to helplessly watch as foes execute their own solos. When the dance is getting too slow, Uskayaw will cause noise to attract more revellers.",
            es: null
        }
    },
    {
        name: "Vehumet",
        title: "",
        description: {
            en: "Vehumet is a god of the destructive powers of magic. Followers will gain divine assistance in commanding the hermetic arts, and the most favoured stand to gain access to some of the fearsome spells in Vehumet's library. One's devotion to Vehumet can be proven by the causing of as much carnage and destruction as possible.",
            es: "Vehumet es un dios de los poderes destructivos de la magia. Los seguidores ganan varios poderes útiles para mejorar su maestría en las artes herméticas y los más favorecidos consiguen acceso a algunos de los terribles hechizos de la biblioteca de Vehumet. La devoción a Vehumet se logra causando cuanta más masacre y destrucción posible."
        },
        powers: {
            en: "Worshippers of Vehumet will quickly be able to recover their magical energy upon killing beings. As they gain favour, they will also gain enhancements to their destructive spells — first assistance in casting such spells and then increased range for conjurations. Vehumet will offer followers the knowledge of increasingly powerful destructive spells as they gain piety.",
            es: "Los adoradores de Vehumet pronto serán capaces de recuperar su mana matando criaturas. A medida que ganen favor, también ganarán varias mejoras en sus hechizos destructivos — en primer lugar, asistencia a la hora de recitar tales hechizos; luego se incrementará la distancia de sus conjuros; y finalmente un coste menor para lanzar hechizos destructivos de alto nivel. Con el tiempo, Vehumet otorgará a sus seguidores raros libros de magia destructiva."
        },
        wrath: {
            en: "Those that anger Vehumet find destruction amply heaped upon them. Novices are struck by flame and frost; archmages by crystal spears and firestorms. Their own conjurations, too, are wont to misfire at the worst possible moments.",
            es: null
        }
    },
    {
        name: "Wu Jian",
        title: "the Wu Jian Council",
        description: {
            en: "The Wu Jian Council is a congregation of martial monks, ascended to divinity after battling their way out of the afterlife. Disciples of the Council are able to execute acrobatic martial maneuvers, such as wall jumps, spinning attacks and punishing lunges. They will eventually become able to request help in the form of a storm of heavenly clouds.",
            es: null
        },
        powers: {
            en: "Disciples of the Council learn to perform three martial techniques while moving around in combat. They will also be taught to move at unfathomable speeds for short distances, and become able to summon a storm of golden clouds to increase their precision and damage for as long as they keep using martial attacks.",
            es: null
        },
        wrath: {
            en: "Those who turn against the Council must be prepared to endure death by a thousand cuts. No hiding place is secure, no disguise perfect enough to avoid the sudden spring of traps, the flying daggers and the armies of animated weapons that will ambush the betrayer.",
            es: null
        }
    },
    {
        name: "Xom",
        title: "of Chaos",
        description: {
            en: "Xom is a wild and unpredictable god of chaos, who seeks not worshippers but playthings with which to toy. Many choose to follow Xom in the hope of receiving fabulous rewards and mighty powers, but Xom is nothing if not capricious. There is nothing a follower can do to influence Xom's mood.",
            es: "Xom es un dios extravagante e impredecible del caos, quien no busca seguidores, sino juguetes con que jugar. Muchos deciden seguir a Xom con la esperanza de recibir regalos fabulosos y grandes poderes, pero Xom es extremadamente caprichoso. Nada de lo que hagan sus seguidores puede cambiar el humor de Xom."
        },
        powers: {
            en: "To worship Xom is to live riskily. In a good mood Xom may shower worshippers with gifts, while at other times this capricious god could decide to \"spice things up a little\" and send worshippers to their doom. If such toys of Xom prove to be interesting, so much the better; if not, well, there'll be other playthings...",
            es: "Adorar a Xom es vivir con riesgo. De buen humor, Xom puede obsequiarte con una lluvia de regalos, mientras que en otras ocasiones este dios caprichoso puede decidir poner «algo de salsa» y acabar por condenarte. Si te muestras como el más fuerte, tanto mejor; si no, bueno, siempre habrá otros con quien jugar..."
        },
        wrath: {
            en: "Unfaithful ex-followers will find themselves suffering through Xom's bad moods for so long as Xom can be bothered to remember about them. Still, Xom's caprice remains; the unfaithful are rewarded just as the faithful are punished.",
            es: null
        }
    },
    {
        name: "Yredelemnul",
        title: "the Fallen",
        description: {
            en: "Cast down by the good gods eons ago, Yredelemnul seeks to despoil their creations and chain all living souls within their inexorable grip. Followers who would conquer in Yredelemnul's name are granted the power to reap an army of the dead and bind powerful souls into eternal service - provided they can sweep across the land in a tide as inexorable as their god.",
            es: "Yredelemnul el Oscuro es un dios malvado adorado por los que buscan poderes sobre la muerte y los no-muertos. Los seguidores, que deben oponerse a todas las cosas sagradas, pueden alzar legiones de serviles no-muertos, y ganar varios poderes útiles (si bien desagradables). Yredelemnul aprecia las muertes, pero prefiere que los cadáveres sean usados en lugar de sacrificados. Destruir seres artificiales también se ve favorecido, ya que no son seres vivos ni sujetos a la muerte o a la no-muerte."
        },
        powers: {
            en: "Followers of Yredelemnul carry the Black Torch, allowing them to gather souls and surround themselves in darkness. They can raise foes who die in the light of the torch as mindless servants, hurl torchlight to scour the living and empower the dead, and bind especially noteworthy souls to fight for them in death with the full capacities they held in life. Especially devout worshippers can even call down the inescapable grip of the Fallen directly, binding foes helplessly in place as the very life is sucked from them. Yredelemnul will also dispatch undead servants to aid followers at the start of each new conquest.",
            es: null
        },
        wrath: {
            en: "Those who anger Yredelemnul find themselves beset by legions of the dead. Sometimes, the god will also intervene directly, binding the unfaithful in inescapable chains as Yredelemnul's dark army demonstrates the price of betrayal.",
            es: null
        }
    },
    {
        name: "Zin",
        title: "the Law-Giver",
        description: {
            en: "Zin is a god of discipline. Followers must remain pure of body and soul, refraining from dark magic and chaotic acts. They must also tithe a fraction of all gold gained, preferably followed by donations of more. In exchange, worshippers may invoke Zin's wrath upon sinners, and eventually gain various divine protections. Zin's followers can convert to Elyvilon or the Shining One while keeping some piety.",
            es: "Zin es un dios de la disciplina. Sus seguidores deben permanecer puros de cuerpo y alma, absteniéndose de magia oscura y actos caóticos, y nunca consumir la carne de seres inteligentes. Ellos deben diezmar una fracción de todo el dinero ganado, preferiblemente seguido de donaciones mayores. A cambio, sus seguidores podrán invocar la ira de Zin contra los pecadores, y eventualmente ganar varias protecciones divinas. Los seguidores de Zin se pueden convertir a Elyvilon o a El Resplandeciente conservando una parte de su piedad."
        },
        powers: {
            en: "Zin grants followers the ability to preach to the unenlightened masses, and powers to vitalise their bodies, protecting them from various afflictions. Later, followers gain the ability to imprison their foes temporarily. Followers can eventually find temporary safety in a divine refuge. As piety grows, followers will be protected from mutation and the Hells, and Zin may even occasionally directly intervene to save a follower's life.",
            es: "Zin concede a sus seguidores la habilidad de predicar a las masas, y poderes para revitalizar sus cuerpos y ganar resistencia divina, protegiéndoles de variadas aflicciones además de dar sustento al hambriento. Más adelante, sus seguidores ganan la habilidad de aprisionar a sus enemigos de forma temporal. Al final, sus seguidores pueden encontrar seguridad en un refugio divino por algo de tiempo. A medida que la piedad crece, sus seguidores se verán protegidos de mutaciones, y Zin puede incluso ocasionalmente intervenir de forma directa para salvarle la vida a un seguidor."
        },
        wrath: {
            en: "Those under Zin's wrath will find their beneficial mutations stripped away, their enemies alerted, and their senses confounded by the axioms of Law; confusion, fainting, blindness and complete paralysis will be their lot.",
            es: null
        }
    }
];

// ============================================
// PROPER NOUNS LIST - Terms that stay in English
//
// Categories:
// - God names (27 total)
// - Fantasy/sci-fi terms
// - Game-specific mechanics
// ============================================
const properNouns = [
    // God names
    "Ashenzari", "Beogh", "Cheibriados", "Dithmenos", "Elyvilon",
    "Fedhas", "Gozag", "Hepliaklqana", "Ignis", "Jiyva",
    "Kikubaaqudgha", "Lugonu", "Makhleb", "Nemelex", "Xobeh",
    "Okawaru", "Pakellas", "Qazlal", "Ru", "Sif Muna",
    "Trog", "Uskayaw", "Vehumet", "Wu Jian", "Xom",
    "Yredelemnul", "Zin", "the Shining One", "the Wu Jian Council",
    "Madash", "Stormbringer", "Ym Sagoz",

    // Fantasy/sci-fi terms
    "Abyss", "naga", "orc", "demon", "lich", "necromancer",
    "berserk", "piety", "invocations", "spellbooks", "chaos",
    "necromancy", "divine", "holy", "unholy", "torment",

    // Game mechanics
    "Invocations", "piety", "berserk", "mutations"
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Calculate translation status for a god
function getTranslationStatus(god) {
    let total = 0;
    let translated = 0;

    // Check description
    total++;
    if (god.description.es) translated++;

    // Check powers
    total++;
    if (god.powers.es) translated++;

    // Check wrath
    total++;
    if (god.wrath.es) translated++;

    if (translated === total) return 'complete';
    if (translated > 0) return 'partial';
    return 'none';
}

// Highlight proper nouns in text
function highlightText(text) {
    if (!text) return '';
    let highlighted = text;

    // Sort proper nouns by length (longest first) to avoid partial matches
    const sortedNouns = [...properNouns].sort((a, b) => b.length - a.length);

    sortedNouns.forEach(noun => {
        const regex = new RegExp(`\\b${noun}\\b`, 'gi');
        highlighted = highlighted.replace(regex, `<span class="proper-noun">${noun}</span>`);
    });

    return highlighted;
}

// Calculate overall progress
function calculateProgress() {
    let totalEntries = 0;
    let translatedEntries = 0;

    godsData.forEach(god => {
        totalEntries += 3; // description, powers, wrath
        if (god.description.es) translatedEntries++;
        if (god.powers.es) translatedEntries++;
        if (god.wrath.es) translatedEntries++;
    });

    return { total: totalEntries, translated: translatedEntries };
}

// ============================================
// RENDER FUNCTIONS
// ============================================

// Render a single god card
function renderGodCard(god) {
    const status = getTranslationStatus(god);
    const titleText = god.title ? `${god.title}` : '';

    return `
                <div class="god-card ${status}" data-god="${god.name.toLowerCase()}">
                    <h3 class="god-name">${god.name}</h3>
                    ${titleText ? `<div class="god-title">${titleText}</div>` : ''}

                    <div class="section-title">Descripción</div>
                    <div class="text-block">
                        <div class="english-text">${highlightText(god.description.en)}</div>
                        ${god.description.es
            ? `<div class="spanish-text">${highlightText(god.description.es)}</div>`
            : `<div class="no-translation">(sin traducción)</div>`
        }
                    </div>

                    <div class="section-title">Poderes</div>
                    <div class="text-block">
                        <div class="english-text">${highlightText(god.powers.en)}</div>
                        ${god.powers.es
            ? `<div class="spanish-text">${highlightText(god.powers.es)}</div>`
            : `<div class="no-translation">(sin traducción)</div>`
        }
                    </div>

                    <div class="section-title">Ira</div>
                    <div class="text-block">
                        <div class="english-text">${highlightText(god.wrath.en)}</div>
                        ${god.wrath.es
            ? `<div class="spanish-text">${highlightText(god.wrath.es)}</div>`
            : `<div class="no-translation">(sin traducción)</div>`
        }
                    </div>
                </div>
            `;
}

// Render all god cards
function renderAllGods(gods) {
    const container = document.getElementById('god-cards');
    const noResults = document.getElementById('no-results');

    if (gods.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
        container.innerHTML = gods.map(renderGodCard).join('');
    }
}

// Update progress display
function updateProgress() {
    const progress = calculateProgress();
    const percentage = Math.round((progress.translated / progress.total) * 100);

    document.getElementById('progress-fill').style.width = `${percentage}%`;
    document.getElementById('progress-text').textContent =
        `${progress.translated}/${progress.total} entradas traducidas (${percentage}%)`;
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function searchGods(query) {
    if (!query.trim()) {
        return godsData;
    }

    const lowerQuery = query.toLowerCase();

    return godsData.filter(god => {
        // Search in name
        if (god.name.toLowerCase().includes(lowerQuery)) return true;

        // Search in title
        if (god.title && god.title.toLowerCase().includes(lowerQuery)) return true;

        // Search in English text
        if (god.description.en.toLowerCase().includes(lowerQuery)) return true;
        if (god.powers.en.toLowerCase().includes(lowerQuery)) return true;
        if (god.wrath.en.toLowerCase().includes(lowerQuery)) return true;

        // Search in Spanish text (if exists)
        if (god.description.es && god.description.es.toLowerCase().includes(lowerQuery)) return true;
        if (god.powers.es && god.powers.es.toLowerCase().includes(lowerQuery)) return true;
        if (god.wrath.es && god.wrath.es.toLowerCase().includes(lowerQuery)) return true;

        return false;
    });
}

// ============================================
// EVENT LISTENERS
// ============================================

document.getElementById('search-input').addEventListener('input', (e) => {
    const query = e.target.value;
    const filteredGods = searchGods(query);
    renderAllGods(filteredGods);
});

// ============================================
// INITIALIZATION
// ============================================

// Initial render
renderAllGods(godsData);
updateProgress();
