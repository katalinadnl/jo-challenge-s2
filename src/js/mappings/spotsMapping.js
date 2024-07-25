const spotsMapping = {
  "Para Triathlon (PTRI)": {
      id: 1,
      image: "../../styles/images/spots/FLC.webp",
      spot: "La Felicità",
      content: "La Felicità est un immense food-market en direct producteurs où tout est 100% fait maison. Venez vous balader dans les allées, humer le fumet fou des pizzas napolitaines, et kiffez l'ambiance festive.",
      horaires: "Ouvert tous les jours de 8h à 2h",
      coordonnees: {"lat": "48.8566", "lon": "2.3522"},
  },
  "Football (FBL)": {
      id: 2,
      image: "../../styles/images/spots/BDX.jpg",
      spot: "écrans géants",
      content: "Stadium XYZ est le lieu incontournable pour les amateurs de football. Profitez des écrans géants pour suivre les matchs en direct avec une ambiance électrique.",
      horaires: "Ouvert du Mardi au Dimanche de 10h à 23h",
      coordonnees: {"lat": "48.8602", "lon": "2.3285"}
  },
  "Volley-ball de plage (VBV)": {
      id: 3,
      image: "../../styles/images/spots/STE.jpg",
      spot: "Vue sur le stade de la Tour Eiffel",
      content: "Notre toit terrasse est l'endroit idéal pour vivre les matchs de volley-ball de plage en direct, avec une vue imprenable sur la Tour Eiffel.",
      horaires: "Ouvert tous les jours de 9h à 22h",
      coordonnees: {"lat": "48.8639", "lon": "2.3317"}
  },
  "Escrime fauteuil (PWFE), Para Taekwondo (PTKW)": {
      id: 4,
      image: "../../styles/images/spots/GPP.jpg",
      spot: "Arena DEF",
      content: "Arena DEF propose des retransmissions des compétitions d'escrime et de para taekwondo dans une atmosphère sportive et conviviale.",
      horaires: "Ouvert du Mardi au Dimanche de 10h à 23h",
      coordonnees: {"lat": "48.8615", "lon": "2.3348"}
  },
  "Basketball fauteuil (PWBK)": {
      id: 5,
      image: "../../styles/images/spots/BCY.jpg",
      spot: "Parc de Bercy",
      content: "Le parc de Bercy est le spot parfait pour les fans de basketball fauteuil, avec des retransmissions en direct sur écrans géants installés pour l'occasion, venez profiter des épreuves au grand air.",
      horaires: "Ouvert tous les jours de 10h à 23h",
      coordonnees: {"lat": "48.8570", "lon": "2.3419"}
  },
  "Athlétisme - arrivée Marathon (ATM), Cyclisme sur route - départ Contre-la-montre (CRD), Tir à l'arc (ARC)": {
      id: 6,
      image: "../../styles/images/spots/LCN.jpg",
      spot: "Vue sur l'arrivée marathon",
      content: "Ce balcon vous offre une vue imprenable sur les épreuves d'athlétisme et de cyclisme.",
      horaires: "Ouvert tous les jours de 8h à 22h",
      coordonnees: {"lat": "48.8650", "lon": "2.3466"}
  },
  "Escalade (CLB)": {
      id: 7,
      image: "../../styles/images/spots/CLB.jpg",
      spot: "The Wall",
      content: "the Wall est le spot incontournable pour les passionnés d'escalade, pendant les épreuves profitez des retransmissions des compétitions en direct et des ateliers d'initiation.",
      horaires: "Ouvert tous les jours de 7h à 23h",
      coordonnees: {"lat": "48.8590", "lon": "2.3520"}
  },
  "Skateboard (SKB)": {
      id: 8,
      image: "../../styles/images/spots/EGP.avif",
      spot: "EGP18",
      content: "L’Espace Glisse de Paris 18 ou EGP18 est un skatepark couvert se situant à Paris. D’une surface de 3 500 m², il s’agit du plus grand skatepark en béton couvert de France. Il est situé dans le 18e arrondissement de Paris. Il a été inauguré en février 2008. L'EGP vous ouvre exceptionnelement ses portes dès 8h pour regarder les directs et les rediffusions des compétitions de skateboard, avec des démonstrations en live et une ambiance urbaine.",
      horaires: "Ouvert tous les jours de 8h à 22h",
      coordonnees: {"lat": "48.8585", "lon": "2.3545"}
  },
  "Parc Urbain la Concorde (FCO)": {
      id: 9,
      image: "../../styles/images/spots/LCC.jpg",
      spot: "Balcon place de la Concorde",
      content: "Ce balcon vous offre une vue imprenable sur les épreuves d'athlétisme et de cyclisme.",
      horaires: "Ouvert tous les jours de 7h à 22h",
      coordonnees: {"lat": "48.8568", "lon": "2.3621"}
  },
  "Boxe (BOX), Pentathlon moderne (MDN)": {
      id: 10,
      image: "../../styles/images/spots/104.jpg",
      spot: "Le 104",
      content: "Situé dans le 19e arrondissement de Paris, le CENTQUATRE-PARIS est un espace de résidences artistiques, de production et de diffusion d'arts pour les publics et les artistes du monde entier. Pensé comme une plateforme collaborative, il donne accès à l’ensemble des arts actuels : spectacles, concerts, expositions, ateliers et rencontres se croisent au travers d’une programmation résolument populaire, contemporaine et exigeante.",
      horaires: "Ouvert tous les jours de 8h à 22h",
      coordonnees: {"lat": "48.8640", "lon": "2.3333"}
  },
  "Canoë-kayak slalom (CSL)": {
      id: 11,
      image: "../../styles/images/spots/VSM.jpg",
      spot: "Rives de Vaires-sur-Marne",
      content: "Rendez-vous à Vaires-sur-Marne pour profiter des épreuves nautiques tout au long de la rive.",
      horaires: "Ouvert tous les jours de 9h à 21h",
      coordonnees: {}
  },
  "Cérémonie d'ouverture Paralympique (POC)": {
      id: 12,
      image: "../../styles/images/spots/POC.avif",
      spot: "Pont de l'Alma",
      content: "Opening Arena est le lieu de rendez-vous pour vivre la cérémonie d'ouverture des Jeux Paralympiques en direct avec une ambiance festive.",
      horaires: "Ouvert tous les jours de 8h à minuit",
      coordonnees: {}
  },
  "Golf (GLF)": {
      id: 13,
      image: "../../styles/images/spots/TGN.jpg",
      spot: "Golf Club Paris",
      content: "Golf Club Paris retransmet les compétitions de golf dans un cadre élégant et serein, idéal pour les amateurs de ce sport.",
      horaires: "Ouvert Lundi - Dimanche : 7h - 21h",
      coordonnees: {}
  },
  "Basketball (BKB), Handball (HBL)": {
      id: 14,
      image: "../../styles/images/spots/CPN.jpeg",
      spot: "Le chopp'ing",
      content: "Le chopp'ing est le bar Lillois de référence pour ceux qui aiment transpirer, s’enflammer, vibrer avec leur équipe préféré. Plus qu’un bar et loin du PMU, le chopp'ing est un bar multisport qui contente les passionnés de sport dans les grandes largesses. Retrouvez les épreuves de Handball et de Basketball en direct.",
      horaires: "Ouvert tous les jours de 8h à 22h",
      coordonnees: {"lat": "50.6964", "lon": "3.0500"}
  },
  "Tennis de table (TTE)": {
      id: 15,
      image: "../../styles/images/spots/RDF.webp",
      spot: "Ping Pong Arena",
      content: "Ping Pong Arena diffuse les compétitions de tennis de table dans un cadre moderne et animé.",
      horaires: "Ouvert tous les jours de 8h à 22h",
      coordonnees: {}
  },
  "Tennis de table para (PTTE)": {
      id: 16,
      image: "../../styles/images/spots/RDF.webp",
      spot: "Para Ping Pong Center",
      content: "Para Ping Pong Center offre des retransmissions des compétitions de tennis de table para avec des installations adaptées.",
      horaires: "Ouvert tous les jours de 10h à 21h",
      coordonnees: {}
  },
  "Handball (HBL), Haltérophilie (WLF)": {
      id: 17,
      image: "../../styles/images/spots/APN.jpg",
      spot: "Arena Porte de la Chapelle",
      content: "L'Arena Porte de la Chapelle est une salle récente et moderne, accueillant divers événements sportifs et culturels. Découvrez des performances inoubliables dans ce lieu à l'architecture contemporaine.",
      horaires: "Ouvert tous les jours de 8h à 22h",
      coordonnees: {}
  },
  "Para Athlétisme (PATH), Cérémonie de clôture Paralympique (PCC)": {
      id: 18,
      image: "../../styles/images/spots/SDF.jpg",
      spot: "Stade de France",
      content: "Le Stade de France est le plus grand stade du pays, accueillant les plus grands événements sportifs et concerts. Immergez-vous dans l'excitation des matchs de football et des performances musicales de renommée mondiale.",
      horaires: "Ouvert tous les jours de 8h à minuit",
      coordonnees: {}
  },
  "Aviron (ROW), Canoë - course en ligne (CSP)": {
      id: 19,
      image: "../../styles/images/spots/VSM.jpg",
      spot: "Berges de Vaires-sur-Marne",
      content: "Rendez-vous à Vaires-sur-Marne pour profiter des épreuves nautiques tout au long de la rive.",
      horaires: "Ouvert tous les jours 24h/24",
      coordonnees: {}
  },
  "Hockey (HOC)": {
      id: 20,
      image: "../../styles/images/spots/GCT.jpeg",
      spot: "Ground Control",
      content: "Situé à proximité de la gare de Lyon, dans une ancienne halle de tri postal appartenant à la SNCF, c’est un espace de 6500m² où les gens se rencontrent, où les idées se brassent, où les solutions nouvelles peuvent apparaître.Lieu d’expérimentation et d’expression, la culture, la planète, la solidarité, les acteurs du changement en sont les sujets privilégiés. Nous les abordons de multiples façons avec des invités variés, artistes, chercheurs, entrepreuneurs, … à même de nous faire avancer, ensemble.On aime y nourrir une certaine approche de la convivialité qui passe par le bien manger, la fête mais aussi les rencontres dans le monde réel autour d’un café, au pied d’un olivier, devant une exposition ou dans le cockpit d’un avion. Pour les jeux Olympiques on vous propose une retransmission en direct des épreuves de hockey sur gazon.",
      horaires: "Ouvert du Lundi au Dimance de 9h à 22h",
      coordonnees: {}
  },
  "Cyclisme sur route - arrivée Contre-la-montre (CRD), Natation marathon (OWS), Triathlon (TRI)": {
      id: 21,
      image: "../../styles/images/spots/PA3.jpg",
      spot: "Pont Alexandre III",
      content: "Le pont Alexandre III est un pont franchissant la Seine entre le 7ᵉ et le 8ᵉ arrondissement de Paris. Il vous offre la vue idéale pour observer les épreuves de cyclisme, natation marathon et triathlon.",
      horaires: "Tous les jours de 8h à 20h",
      coordonnees: {"lat": "48.5149", "lon": "2.1849"}
  },
  "Basketball (BKB), Gymnastique artistique (GAR), Gymnastique trampoline (GTR)": {
      id: 22,
      image: "../../styles/images/spots/BCY.jpg",
      spot: "Parc de Bercy",
      content: "Le parc de Bercy est le spot parfait pour les fans de basketball fauteuil, avec des retransmissions en direct sur écrans géants installés pour l'occasion, venez profiter des épreuves au grand air.",
      horaires: "Tous les jours de 9h à 23h",
      coordonnees: {}
  },
  "Judo (JUD), Lutte (WRE)": {
      id: 23,
      image: "../../styles/images/spots/TEV.jpg",
      spot: "Arena Champ de Mars",
      content: "L'Arena Champ de Mars est un lieu emblématique pour des événements culturels et sportifs, avec une vue imprenable sur la Tour Eiffel. Venez profiter de spectacles et de compétitions dans un cadre unique.",
      horaires: "Ouvert tous les jours de 8h à 22h",
      coordonnees: {}
  },
  "Badminton (BDM), Gymnastique rythmique (GRY)": {
      id: 24,
      image: "../../styles/images/spots/APN.jpg",
      spot: "Arena Porte de la Chapelle",
      content: "L'Arena Porte de la Chapelle est une salle récente et moderne, accueillant divers événements sportifs et culturels. Découvrez des performances inoubliables dans ce lieu à l'architecture contemporaine.",
      horaires: "Ouvert tous les jours de 9h à 21h",
      coordonnees: {}
  },
  "Para badminton (PBDM), Para Haltérophilie (PPWL)": {
      id: 25,
      image: "../../styles/images/spots/APN.jpg",
      spot: "Arena Porte de la Chapelle",
      content: "L'Arena Porte de la Chapelle est une salle récente et moderne, accueillant divers événements sportifs et culturels. Découvrez des performances inoubliables dans ce lieu à l'architecture contemporaine.",
      horaires: "Ouvert tous les jours de 10h à 21h",
      coordonnees: {}
  },
  "Para cyclisme sur route (PCRD)": {
      id: 26,
      image: "../../styles/images/spots/LCN.jpg",
      spot: "Para Cycling Track",
      content: "Para Cycling Track propose une expérience immersive pour suivre les compétitions de para cyclisme sur route avec des écrans géants.",
      horaires: "Ouvert tous les jours de 8h à 20h",
      coordonnees: {}
  },
  "Para Tir Sportif (PSHO)": {
      id: 27,
      image: "../../styles/images/spots/CNT.jpg",
      spot: "Centre national de tir de Châteauroux",
      content: "Le Centre national de tir de Châteauroux est un lieu dédié aux sports de tir, offrant des installations de classe mondiale pour les compétitions et l'entraînement. Vivez l'intensité et la précision des sports de tir.",
      horaires: "Ouvert tous les jours de 9h à 19h",
      coordonnees: {}
  },
  "Para Natation (PSWM)": {
      id: 28,
      image: "../../styles/images/spots/LDA.avif",
      spot: "Tour esplanade de la Défense",
      content: "La Défense Arena est une immense salle de spectacles et de sports, offrant des événements variés allant des concerts aux matchs de rugby. Venez vivre des moments inoubliables dans une ambiance électrique et festive.",
      horaires: "Ouvert tous les jours de 9h à 19h",
      coordonnees: {}
  },
  "Cécifoot (PFBB)": {
      id: 29,
      image: "../../styles/images/spots/LCC.jpg",
      spot: "Balcon parisien",
      content: "Balcon positionné idéalement avec vue sur la tour Eiffel et proches des les quais de Seine, le balcon parisien vous offre une vue imprenable sur les épreuves de cécifoot. Venez profiter de l'ambiance festive et des animations en direct.",
      horaires: "Ouvert tous les jours de 9h à 20h",
      coordonnees: {}
  },
  "Escrime (FEN), Taekwondo (TKW)": {
      id: 30,
      image: "../../styles/images/spots/GPP.jpg",
      spot: "Duel Arena",
      content: "Duel Arena diffuse les compétitions d'escrime et de taekwondo dans une atmosphère compétitive et énergique.",
      horaires: "Ouvert tous les jours de 8h à 22h",
      coordonnees: {}
  },
  "Voile (SAL)": {
      id: 31,
      image: "../../styles/images/spots/MAM.jpg",
      spot: "Marina de Marseille",
      content: "La Marina de Marseille est un port magnifique où se mêlent yachts de luxe et bateaux de plaisance. Promenez-vous le long des quais, admirez les vues spectaculaires et ressentez l'atmosphère maritime unique.",
      horaires: "Ouvert tous les jours de 8h à 19h",
      coordonnees: {}
  },
  "Volleyball assis (PVBS)": {
      id: 32,
      image: "../../styles/images/spots/APN.jpg",
      spot: "Para Volley Arena",
      content: "Para Volley Arena propose des retransmissions des compétitions de volleyball assis avec une ambiance inclusive et dynamique.",
      horaires: "Ouvert tous les jours de 9h à 21h",
      coordonnees: {}
  },
  "Tennis fauteuil (PWTE)": {
      id: 33,
      image: "../../styles/images/spots/RLG.jpg",
      spot: "Stade Roland Garros",
      content: "Le Stade Roland Garros est le temple du tennis, accueillant chaque année le prestigieux tournoi de Roland Garros. Venez assister à des matchs légendaires et admirez les prouesses des plus grands joueurs.",
      horaires: "Ouvert tous les jours de 10h à 21h",
      coordonnees: {}
  },
  "Tennis (TEN), Boxe (BOX)": {
      id: 34,
      image: "../../styles/images/spots/RLG.jpg",
      spot: "Stade Roland Garros",
      content: "Le Stade Roland Garros est le temple du tennis, accueillant chaque année le prestigieux tournoi de Roland Garros. Venez assister à des matchs légendaires et admirez les prouesses des plus grands joueurs.",
      horaires: "Ouvert tous les jours de 9h à 23h",
      coordonnees: {}
  },
  "Volley-ball (VVO)": {
      id: 35,
      image: "../../styles/images/spots/PMS.jpg",
      spot: "Parc Montsouris",
content: "Le parc Montsouris est un jardin public situé dans le quartier du même nom, dans le sud de Paris, dans le 14ᵉ arrondissement. Pendant méridional du parc des Buttes-Chaumont, ce parc à l'anglaise aménagé à la fin du XIXᵉ siècle s'étend sur 15 hectares. Retrouvez des animations et des diffusions en direct des épreuves de volley-ball." ,    
horaires: "Ouvert tous les jours de 10h à 22h",
      coordonnees: {"lat": "48.8223", "lon": "2.3405"}
  },
  "Boccia (PBOC)": {
      id: 36,
      image: "../../styles/images/spots/RDF.webp",
      spot: "Boccia Center",
      content: "Boccia Center propose des retransmissions des compétitions de boccia avec des installations adaptées et une atmosphère conviviale.",
      horaires: "Ouvert tous les jours de 9h à 20h",
      coordonnees: {}
  },
  "Surf (SRF)": {
      id: 37,
      image: "../../styles/images/spots/BTH.jpg",
      spot: "Surf Club",
      content: "Surf Club diffuse les compétitions de surf avec une ambiance détendue et des activités aquatiques pour tous.",
      horaires: "Ouvert Lundi - Dimanche : 7h - 19h",
      coordonnees: {}
  },
  "Para Cyclisme sur piste (PCTR)": {
      id: 38,
      image: "../../styles/images/spots/VLD.jpg",
      spot: "Velodrome",
      content: "Velodrome propose des retransmissions des compétitions de para cyclisme sur piste avec une atmosphère dynamique et sportive.",
      horaires: "Ouvert tous les jours de 9h à 21h",
      coordonnees: {}
  },
  "Sports équestres - dressage (EQD), Sports équestres - concours complet (EQE), Sports équestres - saut d'obstacles (EQJ), Pentathlon moderne (MPN)": {
      id: 39,
      image: "../../styles/images/spots/VRS.jpg",
      spot: "Château de Versailles",
      content: "Le Château de Versailles est une merveille architecturale et historique, entourée de jardins somptueux. Explorez les salles opulentes, les œuvres d'art magnifiques et plongez dans l'histoire royale française.",
      horaires: "Ouvert tous les jours de 7h à 20h",
      coordonnees: {}
  },
  "Para Equitation (PEQU)": {
      id: 40,
      image: "../../styles/images/spots/VRS.jpg",
      spot: "Château de Versailles",
      content: "Le Château de Versailles est une merveille architecturale et historique, entourée de jardins somptueux. Explorez les salles opulentes, les œuvres d'art magnifiques et plongez dans l'histoire royale française.",
      horaires: "Ouvert tous les jours de 8h à 19h",
      coordonnees: {}
  },
  "Para Aviron (PROW), Para Canoë (PCSP)": {
      id: 41,
      image: "../../styles/images/spots/VSM.jpg",
      spot: "Rives de Vaires-sur-Marne",
      content: "Rendez-vous à Vaires-sur-Marne pour profiter des épreuves nautiques tout au long de la rive.",
      horaires: "Ouvert tous les jours de 7h à 21h",
      coordonnees: {}
  },
  "Natation artistique (SWA), Plongeon (DIV), Water-polo (WPO)": {
      id: 42,
      image: "../../styles/images/spots/PA3.jpg",
      spot: "Pont Alexandre III",
      content: "Aquatic Arts Center offre des retransmissions des compétitions de natation artistique, plongeon et water-polo dans une ambiance festive.",
      horaires: "Ouvert tous les jours de 8h à 22h",
      coordonnees: {}
  },
  "Para Judo (PJUD), Rugby fauteuil (PWRU)": {
      id: 43,
      image: "../../styles/images/spots/CDM.avif",
      spot: "Arena Champ de Mars",
      content: "L'Arena Champ de Mars est un lieu emblématique pour des événements culturels et sportifs, avec une vue imprenable sur la Tour Eiffel. Venez profiter de spectacles et de compétitions dans un cadre unique.",
      horaires: "Ouvert tous les jours de 9h à 21h",
      coordonnees: {}
  },
  "Tir (SHO)": {
      id: 44,
      image: "../../styles/images/spots/CNT.jpg",
      spot: "Shooting Arena",
      content: "Shooting Arena diffuse les compétitions de tir dans une atmosphère calme et concentrée, idéale pour les amateurs de précision.",
      horaires: "Ouvert tous les jours de 8h à 18h",
      coordonnees: {}
  },
  "Natation (SWM), Water-polo (WPO)": {
      id: 45,
      image: "../../styles/images/spots/LDA.avif",
      spot: "Tour esplanade de la Défense",
      content: "La Défense Arena est une immense salle de spectacles et de sports, offrant des événements variés allant des concerts aux matchs de rugby. Venez vivre des moments inoubliables dans une ambiance électrique et festive.",
      horaires: "Ouvert tous les jours de 7h à 21h",
      coordonnees: {}
  },
  "Cyclisme VTT (MTB)": {
      id: 46,
      image: "../../styles/images/spots/CEL.webp",
      spot: "Colline d'Élancourt",
      content: "La Colline d'Élancourt est un espace naturel offrant des panoramas époustouflants et des sentiers de randonnée. Profitez d'une escapade en plein air, respirez l'air frais et admirez la vue imprenable sur les environs.",
      horaires: "Ouvert tous les jours 24h/24",
      coordonnees: {}
  },
  "Para Tir à l'arc (PARC), Para Athlétisme - arrivée Marathon (PATM)": {
      id: 47,
      image: "../../styles/images/spots/INV.jpg",
      spot: "Balcon vue sur les Invalides",
      content: "Ce balcon est un lieu où l'on peut se retrouver pour regarder les compétitions dans une ambiance conviviale.",
      horaires: "Ouvert tous les jours de 9h à 21h",
      coordonnees: {}
  },
  "BMX freestyle (BMF)": {
      id: 48,
      image: "../../styles/images/spots/LCC.jpg",
      spot: "La Loggia",
      content: "La Loggia est un lieu de vie et de partage, où l'on peut se retrouver pour regarder les compétitions de BMX freestyle dans une ambiance conviviale depuis ses balcons.",
      horaires: "Ouvert tous les jours de 9h à 19h",
      coordonnees: {}
  },
  "Para Athlétisme - départ Marathon (PATM)": {
      id: 49,
      image: "../../styles/images/spots/LCN.jpg",
      spot: "Vue sur le départ du marathon",
      content: "Ce balcon vous offre une vue imprenable sur le marathon des épreuves d'athlétisme.",
      horaires: "Ouvert tous les jours de 7h à 14h",
      coordonnees: {}
  },
  "default": {
      id: 50,
      image: "../../styles/images/spots/LCC.jpg",
      spot: "Vue sur la concorde",
      content: "Ce spot sur la Concorde vous permet de profiter des épreuves dans une ambiance festive et conviviale.",
      horaires: "Ouvert tous les jours de 8h à 22h",
      coordonnees: {}
  },
  "Goalball (PGBL)": {
      id: 51,
      image: "../../styles/images/spots/PEX.webp",
      spot: "Parc des Expositions",
      content: "Situé au Sud du 15e arrondissement de la capitale, à environ 15 minutes de la Tour Eiffel, le Paris Expo Porte de Versailles constitue l’un des plus vastes équipements du genre en Europe, avec plus de 216 000 m² d’espace d’exposition, 7 pavillons, sans compter également une salle de congrès de 5 200 places assises.",
      horaires: "Ouvert tous les jours de 9h à 20h",
      coordonnees: {}
  },
  "Athlétisme (ATH), Rugby à 7 (RU7), Cérémonie de clôture (OCC)": {
      id: 52,
      image: "../../styles/images/spots/SDF.jpg",
      spot: "Tour vue sur le stade de France",
      content: "Cette tou offre une expérience immersive pour suivre les compétitions d'athlétisme, de rugby à 7 et la cérémonie de clôture dans une ambiance festive.",
      horaires: "Ouvert tous les jours de 9h à minuit",
      coordonnees: {}
  },
  "Athlétisme marche (ATW), Cyclisme sur route - Course sur route (CRD)": {
      id: 53,
      image: "../../styles/images/spots/TCD.jpg",
      spot: "Balcon vue cyclisme",
      content: "Ce balcon propose des retransmissions des compétitions de marche athlétique et de cyclisme sur route avec des installations modernes.",
      horaires: "Ouvert tous les jours de 8h à 20h",
      coordonnees: {}
  },
  "Cyclisme sur piste (CTR)": {
      id: 54,
      image: "../../styles/images/spots/VLD.jpg",
      spot: "Track Cycling Arena",
      content: "Sensations fortes assurées sur l'une des seules pistes de Cyclisme couvertes en Europe ! Le Cyclisme sur piste est un sport physique, technique et très spectaculaire. Admirez les performances des athlètes de cyclisme sur piste depuis le champ du vélodrome.",
      horaires: "Ouvert tous les jours de 9h à 21h",
      coordonnees: {}
  },
  "BMX Racing (BMX)": {
      id: 55,
      image: "../../styles/images/spots/VLD.jpg",
      spot: "Champ du vélodrome",
      content: "Sensations fortes assurées sur l'une des seules pistes de BMX couvertes en Europe ! Le BMX est un sport physique, technique et très spectaculaire. Admirez les performances des athlètes de BMX Racing depuis le champ du vélodrome.",
      horaires: "Ouvert tous les jours de 9h à 19h",
      coordonnees: {}
  }
};

export default spotsMapping;
