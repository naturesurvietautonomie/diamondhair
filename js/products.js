const PRODUCTS = [
  // CAT 1 — Soins & Huiles
  {
    id: 'dh01', cat: 'soins',
    name: 'Huile de Romarin Croissance',
    subtitle: '100ml — Stimule la pousse',
    price: 7,
    description: "L'huile de romarin est le secret capillaire numéro 1 des femmes aux cheveux naturels. Cliniquement reconnue pour stimuler les follicules pileux, elle favorise une pousse visible dès 4 semaines. Idéale en massage du cuir chevelu 2× par semaine.",
    benefits: ['Stimule la croissance', 'Réduit la chute', 'Nourrit le cuir chevelu', '100% pure et naturelle'],
    img: 'images/dh01_huile_romarin.jpg',
    stripe: 'https://buy.stripe.com/cNi6ozaj17051R1eYmcfK3O'
  },
  {
    id: 'dh02', cat: 'soins',
    name: 'Huile Argan Pure Brillance',
    subtitle: '100ml — Brillance & douceur',
    price: 8,
    description: "Surnommée « l'or liquide du Maroc », l'huile d'argan pure nourrit en profondeur, apporte une brillance exceptionnelle et dompte les frisottis. Convient à tous types de cheveux, du plus sec au plus fragile.",
    benefits: ['Brillance intense', 'Anti-frisottis', 'Nourrit les pointes', 'Protège de la chaleur'],
    img: 'images/dh02_huile_argan.jpg',
    stripe: 'https://buy.stripe.com/fZu3cn0Ir849fHR5nMcfK3P'
  },
  {
    id: 'dh03', cat: 'soins',
    name: 'Huile de Ricin Noire Jamaïcaine',
    subtitle: '150ml — Épaississement & force',
    price: 7,
    description: "La Black Jamaican Castor Oil est un incontournable des routines cheveux naturels et locks. Riche en acide ricinoléique, elle épaissit les tiges, renforce les racines et accélère la pousse. Parfaite pour les bords fins.",
    benefits: ['Épaissit les tiges', 'Renforce les racines', 'Pousse des bords', 'Idéale pour les locks'],
    img: 'images/dh03_huile_ricin.jpg',
    stripe: 'https://buy.stripe.com/8x2cMXdvd849brB5nMcfK3Q'
  },
  {
    id: 'dh04', cat: 'soins',
    name: 'Huile de Jojoba Bio',
    subtitle: '50ml — Équilibre & hydratation',
    price: 7,
    description: "L'huile de jojoba bio mime le sébum naturel du cuir chevelu. Elle régule la production de gras, hydrate sans alourdir et convient parfaitement aux cheveux fins ou aux cuirs chevelus sensibles.",
    benefits: ['Hydrate sans alourdir', 'Équilibre le sébum', 'Pour cheveux fins', 'Certifiée Bio'],
    img: 'images/dh04_huile_jojoba.jpg',
    stripe: 'https://buy.stripe.com/cNibIT9eXfwB1R18zYcfK3R'
  },
  {
    id: 'dh05', cat: 'soins',
    name: 'Cocktail 7 Huiles Capillaires',
    subtitle: '100ml — Le soin ultime',
    price: 12,
    description: "Un concentré de 7 huiles précieuses : argan, ricin, jojoba, avocat, noix de coco, amande douce et romarin. Ce cocktail tout-en-un nourrit, fortifie, stimule la pousse et apporte un éclat remarquable à tous types de cheveux.",
    benefits: ['7 huiles en 1', 'Soin complet', 'Pousse + force + brillance', 'Tous types de cheveux'],
    img: 'images/dh05_cocktail_huiles.jpg',
    stripe: 'https://buy.stripe.com/fZucMXgHp2JP9jtcQecfK3S'
  },
  {
    id: 'dh06', cat: 'soins',
    name: 'Shampooing Sans Sulfate Argan',
    subtitle: '400ml — Nettoyage doux',
    price: 9,
    description: "Un shampooing doux sans sulfates ni parabènes, enrichi à l'huile d'argan. Nettoie en profondeur sans dessécher, préserve les couleurs et convient parfaitement aux cheveux naturels, bouclés et traités.",
    benefits: ['Sans sulfate ni paraben', 'Préserve les couleurs', 'Pour cheveux bouclés', 'Enrichi argan'],
    img: 'images/dh06_shampoing_argan.jpg',
    stripe: 'https://buy.stripe.com/4gM4grcr98497bl3fEcfK3T'
  },
  {
    id: 'dh07', cat: 'soins',
    name: 'Shampooing Kératine Réparateur',
    subtitle: '500ml — Cheveux abîmés',
    price: 10,
    description: "Ce shampooing à la kératine restructure les cheveux abîmés, cassants ou surtraités. Les protéines comblent les manques de la fibre capillaire, lissent les écailles et redonnent force et souplesse dès le premier lavage.",
    benefits: ['Restructure la fibre', 'Anti-casse', 'Cheveux lissés', 'Résultats dès 1 lavage'],
    img: 'images/dh07_shampoing_keratine.jpg',
    stripe: 'https://buy.stripe.com/00wfZ9dvddot7bleYmcfK3U'
  },
  {
    id: 'dh08', cat: 'soins',
    name: 'Shampooing Croissance Romarin',
    subtitle: '300ml — Stimule la pousse',
    price: 10,
    description: "Formulé avec de l'extrait de romarin et de la biotine, ce shampooing spécialisé stimule la microcirculation du cuir chevelu pour une pousse accélérée. Convient aux cheveux à croissance lente ou clairsemés.",
    benefits: ['Romarin + biotine', 'Stimule la microcirculation', 'Croissance accélérée', 'Cuir chevelu purifié'],
    img: 'images/dh01_huile_romarin.jpg',
    stripe: 'https://buy.stripe.com/28EbITgHpach1R1cQecfK3V'
  },
  {
    id: 'dh09', cat: 'soins',
    name: 'Après-Shampooing Beurre de Karité',
    subtitle: '400ml — Hydratation intense',
    price: 9,
    description: "Le beurre de karité est le roi de l'hydratation pour les cheveux naturels et texturés. Cet après-shampooing riche démêle en douceur, nourrit en profondeur et laisse les cheveux souples, brillants et faciles à coiffer.",
    benefits: ['Démêlant puissant', 'Hydratation intense', 'Pour cheveux naturels', 'Sans silicones'],
    img: 'images/dh09_apres_shampoing.jpg',
    stripe: 'https://buy.stripe.com/eVq8wH2Qz5W11R1eYmcfK3W'
  },
  {
    id: 'dh10', cat: 'soins',
    name: 'Masque Argan Réparateur',
    subtitle: '300ml — Soin hebdomadaire',
    price: 10,
    description: "Un masque professionnel à l'huile d'argan pour des soins hebdomadaires en profondeur. Laissé 15-20 minutes sous une charlotte chauffante, il pénètre la fibre pour réparer, nourrir et redonner de la vie aux cheveux ternes.",
    benefits: ['Soin en profondeur', 'Répare et nourrit', 'Brillance intense', 'Usage hebdomadaire'],
    img: 'images/dh02_huile_argan.jpg',
    stripe: 'https://buy.stripe.com/28E7sD1Mv98d9jt6rQcfK3X'
  },
  {
    id: 'dh11', cat: 'soins',
    name: 'Masque Protéines Kératine',
    subtitle: '200ml — Reconstruction',
    price: 11,
    description: "Ce masque protéiné à la kératine est conçu pour les cheveux très abîmés, décolorés ou surtraités. Il reconstruit la structure interne de la fibre capillaire, élimine le casse et restaure l'élasticité des cheveux.",
    benefits: ['Reconstruction intense', 'Pour cheveux décolorés', 'Élimine le casse', 'Restaure l\'élasticité'],
    img: 'images/dh07_shampoing_keratine.jpg',
    stripe: 'https://buy.stripe.com/aFaeV53UD3NT9jtg2qcfK3Y'
  },
  {
    id: 'dh12', cat: 'soins',
    name: 'Leave-in Crème Hydratante',
    subtitle: '200ml — Sans rinçage',
    price: 9,
    description: "Ce leave-in s'applique sur cheveux humides après le shampooing, sans rincer. Il scelle l'hydratation, facilite le coiffage, réduit le temps de séchage et protège des agressions extérieures tout au long de la journée.",
    benefits: ['Sans rinçage', 'Scelle l\'hydratation', 'Facilite le coiffage', 'Protection quotidienne'],
    img: 'images/dh09_apres_shampoing.jpg',
    stripe: 'https://buy.stripe.com/5kQ00bgHpckp0MX8zYcfK3Z'
  },
  {
    id: 'dh13', cat: 'soins',
    name: 'Sérum Croissance Romarin + Caféine',
    subtitle: '50ml — Booster repousse',
    price: 8,
    description: "Le duo romarin + caféine est la combinaison la plus efficace pour stimuler la croissance capillaire. Ce sérum concentré s'applique directement sur le cuir chevelu et agit en profondeur sur les follicules pileux. Résultats visibles en 6 semaines.",
    benefits: ['Romarin + caféine', 'Appliqué sur cuir chevelu', 'Résultats en 6 semaines', 'Concentration maximale'],
    img: 'images/dh13_serum_romarin.jpg',
    stripe: 'https://buy.stripe.com/28E7sD2Qzdot3Z96rQcfK40'
  },
  {
    id: 'dh14', cat: 'soins',
    name: 'Spray Hydratant Sans Rinçage',
    subtitle: '200ml — Hydratation express',
    price: 8,
    description: "Un spray quotidien léger pour hydrater et rafraîchir les cheveux entre les lavages. Sa formule à base d'aloe vera et d'extraits végétaux réhydrate instantanément les cheveux bouclés, texturés ou en locks sans les alourdir.",
    benefits: ['Usage quotidien', 'Aloe vera + extraits végétaux', 'Idéal entre les lavages', 'Légère et non grasse'],
    img: 'images/dh06_shampoing_argan.jpg',
    stripe: 'https://buy.stripe.com/8x29AL3UD5W1eDN4jIcfK41'
  },
  {
    id: 'dh15', cat: 'soins',
    name: 'Huile Tea Tree Cuir Chevelu',
    subtitle: '30ml — Antipelliculaire',
    price: 7,
    description: "L'huile essentielle de tea tree (arbre à thé) est reconnue pour ses propriétés antibactériennes et antifongiques. Elle combat efficacement les pellicules, les démangeaisons et purifie le cuir chevelu pour des cheveux sains à la racine.",
    benefits: ['Antipelliculaire naturel', 'Anti-démangeaisons', 'Purifie le cuir chevelu', 'Propriétés antifongiques'],
    img: 'images/dh04_huile_jojoba.jpg',
    stripe: 'https://buy.stripe.com/eVq7sDfDlgAFcvFaI6cfK42'
  },

  // CAT 2 — Extensions
  {
    id: 'dh16', cat: 'extensions',
    name: 'Extension Clip-in Cheveux Humains 50cm',
    subtitle: '7 clips — Volume instantané',
    price: 26,
    description: "Set de 7 extensions à clips en cheveux humains Remy 50cm. Pose et retrait en moins de 5 minutes sans colle ni chaleur. Colorables et coiffables comme vos propres cheveux. Idéal pour ajouter longueur et volume instantanément.",
    benefits: ['Cheveux humains Remy', 'Pose en 5 minutes', 'Sans colle ni dommage', 'Colorable et coiffable'],
    img: 'images/dh16_extension_clip.jpg',
    stripe: 'https://buy.stripe.com/28E9AL0IrfwB7blg2qcfK43'
  },
  {
    id: 'dh17', cat: 'extensions',
    name: 'Extension Clip-in Cheveux Humains 40cm',
    subtitle: '7 clips — Look naturel',
    price: 22,
    description: "Set de 7 extensions clip-in en cheveux humains Remy 40cm pour un look naturel et volumisé. La longueur idéale pour les débutantes. Invisible une fois en place, se mélange parfaitement à vos cheveux naturels.",
    benefits: ['Cheveux humains Remy', 'Longueur idéale débutantes', 'Look naturel garanti', '7 clips inclus'],
    img: 'images/dh16_extension_clip.jpg',
    stripe: 'https://buy.stripe.com/8x2aEPcr9gAF3Z9dUicfK44'
  },
  {
    id: 'dh18', cat: 'extensions',
    name: 'Extension Tape-in Remy 40cm',
    subtitle: '20 bandes — Semi-permanente',
    price: 35,
    description: "20 bandes tape-in en cheveux humains Remy 40cm. La méthode préférée des salons professionnels : invisible, ultra-plate et très naturelle. Durée 2-3 mois. Peut être réposée après repose en salon.",
    benefits: ['Ultra-plates et invisibles', 'Durée 2-3 mois', 'Qualité salon pro', 'Réutilisables'],
    img: 'images/dh16_extension_clip.jpg',
    stripe: 'https://buy.stripe.com/bJeeV53UDach9jt9E2cfK45'
  },
  {
    id: 'dh19', cat: 'extensions',
    name: 'Extension Kératine Bonds Remy 50cm',
    subtitle: 'Pose à la kératine — Semi-permanente',
    price: 39,
    description: "Extensions à bonds de kératine en cheveux humains Remy 50cm. La méthode la plus naturelle et durable. Chaque mèche est fixée individuellement à la kératine fondue. Durée de tenue 3-6 mois avec un entretien adapté.",
    benefits: ['Mèches individuelles', 'Durée 3-6 mois', 'Résultat le plus naturel', 'Cheveux humains Remy'],
    img: 'images/dh16_extension_clip.jpg',
    stripe: 'https://buy.stripe.com/dRm14f2Qzesx53d4jIcfK46'
  },
  {
    id: 'dh20', cat: 'extensions',
    name: 'Extension Weft à Coudre Remy 50cm',
    subtitle: '100g — Tissage naturel',
    price: 25,
    description: "Trame de cheveux humains Remy 50cm 100g pour tissage. La méthode classique pour les tissages cousus sur tresses. Dense, durable et compatible avec tous les types de tissage. Colorable et coiffable au fer.",
    benefits: ['100g de cheveux Remy', 'Pour tissage cousu', 'Colorable', 'Dense et durble'],
    img: 'images/dh16_extension_clip.jpg',
    stripe: 'https://buy.stripe.com/7sY14f2Qz70553dbMacfK47'
  },
  {
    id: 'dh21', cat: 'extensions',
    name: 'Extension Nano Ring Invisible 50cm',
    subtitle: 'Sans colle ni chaleur',
    price: 30,
    description: "Extensions nano ring en cheveux humains 50cm. La méthode la plus douce : chaque mèche est fixée par un minuscule anneau métallique, sans colle ni chaleur. Invisible même avec une queue de cheval haute.",
    benefits: ['Sans colle ni chaleur', 'Nano anneaux invisibles', 'Préserve vos cheveux', 'Très naturel'],
    img: 'images/dh16_extension_clip.jpg',
    stripe: 'https://buy.stripe.com/eVq7sDbn5achcvF7vUcfL00'
  },
  {
    id: 'dh22', cat: 'extensions',
    name: 'Rajout Cheveux Humains Naturels 100g',
    subtitle: 'Pour tresse et tissage',
    price: 19,
    description: "100g de cheveux humains naturels en vrac, idéaux pour les tresses, tissages et extensions au crochet. Doux, résistants et naturels. Disponibles en noir naturel, compatibles avec tous types de tresses.",
    benefits: ['100g cheveux humains', 'Pour tresses et tissages', 'Doux et résistants', 'Noir naturel'],
    img: 'images/dh16_extension_clip.jpg',
    stripe: 'https://buy.stripe.com/bJe5kv1Mv705brBdUicfL01'
  },
  {
    id: 'dh23', cat: 'extensions',
    name: 'Extension Halo Wire Volumisante 40cm',
    subtitle: 'Fil invisible — Pose express',
    price: 33,
    description: "L'extension halo se porte avec un fil invisible autour de la tête. Aucune fixation permanente, aucun dommage. Se pose en 30 secondes, se retire en 10. Idéale pour les occasions spéciales ou le port quotidien sans engagement.",
    benefits: ['Fil invisible', 'Pose en 30 secondes', 'Aucun dommage', 'Occasions et quotidien'],
    img: 'images/dh16_extension_clip.jpg',
    stripe: 'https://buy.stripe.com/5kQ00b9eXesx2V55nMcfL02'
  },
  {
    id: 'dh24', cat: 'extensions',
    name: 'Queue de Cheval Clip-in Cheveux Humains',
    subtitle: '50cm — Élégance instantanée',
    price: 22,
    description: "Une queue de cheval en cheveux humains Remy 50cm avec clip de fixation discret. Se pose en 2 minutes pour une queue de cheval longue, volumineuse et 100% naturelle. Parfaite pour les jours où vous voulez un look sophistiqué.",
    benefits: ['Cheveux humains Remy', 'Pose en 2 minutes', 'Clip discret', 'Look sophistiqué'],
    img: 'images/dh16_extension_clip.jpg',
    stripe: 'https://buy.stripe.com/3cI8wHezhbglcvF3fEcfL03'
  },
  {
    id: 'dh25', cat: 'extensions',
    name: 'Extension Clip-in Bouclés 40cm',
    subtitle: '7 clips — Boucles naturelles',
    price: 29,
    description: "Set de 7 extensions clip-in bouclées en cheveux humains Remy 40cm. Idéales pour les femmes aux cheveux naturellement bouclés ou frisés qui veulent ajouter du volume et de la longueur tout en gardant leur texture naturelle.",
    benefits: ['Texture bouclée naturelle', 'Cheveux humains Remy', '7 clips discrets', 'Compatible cheveux naturels'],
    img: 'images/dh16_extension_clip.jpg',
    stripe: 'https://buy.stripe.com/4gM7sDcr94RX9jt7vUcfL04'
  },

  // CAT 3 — Perruques
  {
    id: 'dh26', cat: 'perruques',
    name: 'Perruque Lace Front 13x4 Lisse 16"',
    subtitle: 'Cheveux humains — Ligne naturelle',
    price: 53,
    description: "Perruque lace front 13x4 en cheveux humains brésiliens lisses, 16 pouces, densité 150%. La lace 13x4 permet un coiffé naturel avec raie partout à l'avant. Glueless, pré-épilée avec cheveux bébé. Résultat 100% naturel.",
    benefits: ['Cheveux humains brésiliens', 'Lace 13x4 — raie partout', 'Sans colle possible', 'Densité 150%'],
    img: 'images/dh26_perruque_lace_lisse.jpg',
    stripe: 'https://buy.stripe.com/fZubIT2QzgAFeDN8zYcfL05'
  },
  {
    id: 'dh27', cat: 'perruques',
    name: 'Perruque Lace Front 13x4 Bouclée 18"',
    subtitle: 'Cheveux humains — Boucles naturelles',
    price: 62,
    description: "Perruque lace front 13x4 bouclée en cheveux humains 18 pouces, densité 150%. Des boucles souples et naturelles qui ressemblent à des cheveux naturellement bouclés. Glueless, coiffable au fer et colorable.",
    benefits: ['Boucles souples et naturelles', '18 pouces / 45cm', 'Colorable', 'Glueless confort'],
    img: 'images/dh27_perruque_bouclée.jpg',
    stripe: 'https://buy.stripe.com/aFa3cn2Qz98deDN6rQcfL06'
  },
  {
    id: 'dh28', cat: 'perruques',
    name: 'Perruque Lace Front 13x4 Ondulée 20"',
    subtitle: 'Cheveux humains — Ondulations glamour',
    price: 65,
    description: "Perruque lace front 13x4 ondulée body wave en cheveux humains 20 pouces, densité 150%. Les ondulations body wave sont les plus polyvalentes : elles s'adaptent à tous les styles et donnent un volume naturel spectaculaire.",
    benefits: ['Body wave polyvalente', '20 pouces glamour', 'Volume naturel', 'Tous styles possibles'],
    img: 'images/dh26_perruque_lace_lisse.jpg',
    stripe: 'https://buy.stripe.com/3cI6oz8aTckpfHR7vUcfL07'
  },
  {
    id: 'dh29', cat: 'perruques',
    name: 'Perruque Full Lace Courte Pixie Cut',
    subtitle: 'Cheveux humains — Coupe courte',
    price: 57,
    description: "Perruque full lace pixie cut en cheveux humains. La full lace permet de coiffer dans toutes les directions, faire une queue de cheval haute ou des tresses. La coupe pixie est tendance, facile à porter et donne un look sophistiqué.",
    benefits: ['Full lace 360°', 'Coupe pixie tendance', 'Queue de cheval possible', 'Look sophistiqué'],
    img: 'images/dh26_perruque_lace_lisse.jpg',
    stripe: 'https://buy.stripe.com/fZu9ALezhach7blcQecfL08'
  },
  {
    id: 'dh30', cat: 'perruques',
    name: 'Perruque Lace Front Kinky Curly 20"',
    subtitle: 'Cheveux humains — Frisé naturel',
    price: 65,
    description: "Perruque lace front kinky curly en cheveux humains 20 pouces. La texture kinky curly reproduit parfaitement les cheveux naturellement frisés et afro. Parfaite pour les femmes qui veulent une perruque qui ressemble à leurs propres cheveux.",
    benefits: ['Texture kinky curly', 'Ressemble à vos cheveux', '20 pouces de volume', 'Identité naturelle'],
    img: 'images/dh27_perruque_bouclée.jpg',
    stripe: 'https://buy.stripe.com/eVq8wH4YHfwB2V5bMacfL09'
  },
  {
    id: 'dh31', cat: 'perruques',
    name: 'Perruque HD Lace Glueless 22"',
    subtitle: 'HD Lace invisible — Sans colle',
    price: 79,
    description: "Perruque HD lace front glueless 22 pouces en cheveux humains. La HD lace (haute définition) est la lace la plus fine et transparente du marché : elle devient invisible sur tous les teints. Port sans colle pour le confort maximal.",
    benefits: ['HD Lace ultra-invisible', 'Sans colle — confort max', '22 pouces luxueux', 'S\'adapte à tous les teints'],
    img: 'images/dh31_perruque_hd.jpg',
    stripe: 'https://buy.stripe.com/aFaaEPezh849dzJ17wcfL0a'
  },
  {
    id: 'dh32', cat: 'perruques',
    name: 'Perruque 360 Lace Frontale Ondulée',
    subtitle: '360° de liberté de coiffage',
    price: 90,
    description: "La perruque 360 lace offre une lace tout autour de la tête pour un coiffage total : queue de cheval haute, chignon, tresses — tout est possible. En cheveux humains ondulés, densité 180%. Le summum de la liberté capillaire.",
    benefits: ['Lace 360° tout autour', 'Coiffage illimité', 'Densité 180%', 'Cheveux humains ondulés'],
    img: 'images/dh31_perruque_hd.jpg',
    stripe: 'https://buy.stripe.com/00waEP3UDdot53d5nMcfL0b'
  },
  {
    id: 'dh33', cat: 'perruques',
    name: 'Perruque Bob Courte Lace Front',
    subtitle: 'Bob naturel — Tendance',
    price: 50,
    description: "Perruque bob courte lace front en cheveux humains. La coupe bob est indémodable et flatteuse pour tous les visages. Légère, facile à coiffer et à entretenir. Idéale pour un look chic et naturel au quotidien.",
    benefits: ['Bob flatteuse tous visages', 'Légère et confortable', 'Facile d\'entretien', 'Cheveux humains'],
    img: 'images/dh26_perruque_lace_lisse.jpg',
    stripe: 'https://buy.stripe.com/fZu7sD3UD5W1anxeYmcfL0c'
  },
  {
    id: 'dh34', cat: 'perruques',
    name: 'Perruque Ombré Lace Front 18"',
    subtitle: 'Dégradé naturel — Tendance',
    price: 69,
    description: "Perruque lace front en cheveux humains avec effet ombré naturel (noir aux racines, dégradé châtain/blond doré en pointes). 18 pouces, densité 150%. L'ombré donne un effet soleil naturel sans coloration agressive.",
    benefits: ['Ombré naturel tendance', 'Effet soleil sans colorant', '18 pouces — longueur idéale', 'Densité 150%'],
    img: 'images/dh27_perruque_bouclée.jpg',
    stripe: 'https://buy.stripe.com/00wcMX8aT3NTcvF8zYcfL0d'
  },
  {
    id: 'dh35', cat: 'perruques',
    name: 'Perruque Highlight Lace Front',
    subtitle: 'Mèches naturelles — Look salon',
    price: 75,
    description: "Perruque lace front avec mèches highlight naturelles en cheveux humains. Les reflets chaleureux donnent du relief et de la profondeur, créant l'illusion d'une couleur réalisée en salon. Résultat sophistiqué sans effort.",
    benefits: ['Mèches highlight naturelles', 'Relief et profondeur', 'Look salon sans effort', 'Cheveux humains'],
    img: 'images/dh31_perruque_hd.jpg',
    stripe: 'https://buy.stripe.com/bJe00b1MvfwB67h7vUcfL0e'
  },

  // CAT 4 — Faux Locks
  {
    id: 'dh36', cat: 'locks-faux',
    name: 'Faux Locks Crochet 24"',
    subtitle: 'Pack x6 — Pose rapide',
    price: 15,
    description: "Pack de 6 mèches de faux locks crochet 24 pouces pour créer une coiffure de faux dreadlocks en quelques heures. Fibre synthétique douce et légère, aspect naturel. Compatible avec la technique crochet braids.",
    benefits: ['Pack x6 mèches', 'Technique crochet', 'Aspect naturel', 'Pose en quelques heures'],
    img: 'images/dh36_faux_locks.jpg',
    stripe: 'https://buy.stripe.com/eVqaEP2Qz1FL2V52bAcfL0f'
  },
  {
    id: 'dh37', cat: 'locks-faux',
    name: 'Faux Locks Goddess Bouclés 20"',
    subtitle: 'Pack x6 — Style déesse',
    price: 16,
    description: "Pack de 6 mèches goddess locs bouclées 20 pouces. Les goddess locs ont des bouts bouclés et ondulés qui donnent un aspect bohème et romantique. La coiffure protectrice la plus tendance du moment.",
    benefits: ['Bouts bouclés bohèmes', 'Style goddess tendance', 'Pack x6', 'Coiffure protectrice'],
    img: 'images/dh36_faux_locks.jpg',
    stripe: 'https://buy.stripe.com/6oUaEPgHp849fHR8zYcfL0g'
  },
  {
    id: 'dh38', cat: 'locks-faux',
    name: 'Faux Locks Distressed 36"',
    subtitle: 'Pack x4 — Effet naturel vieilli',
    price: 17,
    description: "Pack de 4 mèches faux locks distressed 36 pouces très longues. L'effet distressed (\"usé\") reproduit l'aspect naturel des vraies dreadlocks avec de légères irrégularités pour un rendu authentique et organique.",
    benefits: ['Très longues 36 pouces', 'Effet naturel authentique', 'Aspect dreadlocks vraies', 'Pack x4'],
    img: 'images/dh36_faux_locks.jpg',
    stripe: 'https://buy.stripe.com/9B68wH62L98d2V52bAcfL0h'
  },
  {
    id: 'dh39', cat: 'locks-faux',
    name: 'Faux Locks Boho Hippie 28"',
    subtitle: 'Pack x6 — Esprit libre',
    price: 15,
    description: "Pack de 6 mèches faux locks boho 28 pouces avec fils de couleur et perles intégrés pour un look hippie chic. La coiffure protectrice idéale pour l'été, les festivals et tous ceux qui veulent afficher leur personnalité.",
    benefits: ['Style boho hippie', 'Fils colorés décoratifs', 'Pack x6', 'Parfait pour l\'été'],
    img: 'images/dh36_faux_locks.jpg',
    stripe: 'https://buy.stripe.com/28E4gr1Mv98d2V56rQcfL0i'
  },
  {
    id: 'dh40', cat: 'locks-faux',
    name: 'Soft Locs Crochet Pré-bouclés 18"',
    subtitle: 'Pack x6 — Douceur et légèreté',
    price: 14,
    description: "Pack de 6 mèches soft locs pré-bouclées 18 pouces. Les soft locs sont plus légères et plus douces que les faux locks classiques. Leur texture cotonneuse et leur légèreté en font la coiffure protectrice la plus confortable.",
    benefits: ['Ultra-légères et douces', 'Pré-bouclées express', 'Pack x6', 'Coiffure la plus confortable'],
    img: 'images/dh36_faux_locks.jpg',
    stripe: 'https://buy.stripe.com/3cI7sD4YH1FLgLV03scfL0j'
  },
  {
    id: 'dh41', cat: 'locks-faux',
    name: 'Passion Twist 18"',
    subtitle: 'Pack x6 — Twists soyeux',
    price: 13,
    description: "Pack de 6 mèches passion twist 18 pouces. Les passion twists ont une texture unique, entre le twist et les locks, avec un aspect soyeux et brillant très élégant. Coiffure protectrice tendance et facile à poser.",
    benefits: ['Texture soyeuse unique', 'Entre twist et locks', 'Aspect brillant élégant', 'Pack x6'],
    img: 'images/dh36_faux_locks.jpg',
    stripe: 'https://buy.stripe.com/6oU28j62L3NT3Z99E2cfL0k'
  },
  {
    id: 'dh42', cat: 'locks-faux',
    name: 'Spring Twist Court 10"',
    subtitle: 'Pack x6 — Coiffure courte',
    price: 12,
    description: "Pack de 6 mèches spring twist courts 10 pouces. Les spring twists ont une texture spiralée unique et très légère. Le format court 10 pouces est idéal pour une coiffure protectrice décontractée et facile à porter au quotidien.",
    benefits: ['Format court pratique', 'Texture spiralée légère', 'Pack x6', 'Idéal au quotidien'],
    img: 'images/dh36_faux_locks.jpg',
    stripe: 'https://buy.stripe.com/dRm00b8aTbgl67heYmcfL0l'
  },
  {
    id: 'dh43', cat: 'locks-faux',
    name: 'Butterfly Locs Crochet 20"',
    subtitle: 'Pack x6 — Papillon tendance',
    price: 16,
    description: "Pack de 6 mèches butterfly locs 20 pouces. Les butterfly locs sont caractérisées par leurs boucles désordonnées et légères qui évoquent des ailes de papillon. LA coiffure tendance des réseaux sociaux en 2024-2025.",
    benefits: ['LA coiffure tendance', 'Boucles légères papillon', 'Viral sur réseaux sociaux', 'Pack x6'],
    img: 'images/dh36_faux_locks.jpg',
    stripe: 'https://buy.stripe.com/dRmbIT76Pdot0MX5nMcfL0m'
  },

  // CAT 5 — Entretien Locks
  {
    id: 'dh44', cat: 'locks-soin',
    name: 'Cire Locks Naturelle Démarrage',
    subtitle: '125ml — Pour débuter les locks',
    price: 10,
    description: "La cire naturelle pour locks est l'outil indispensable pour démarrer et maintenir ses dreadlocks. Sa formule à base de cires végétales et d'huiles naturelles torsade les cheveux proprement sans résidus, pour des locks bien formées dès le départ.",
    benefits: ['Démarrage des locks', 'Sans résidus', 'Cires végétales naturelles', 'Locks bien formées'],
    img: 'images/dh44_cire_locks.jpg',
    stripe: 'https://buy.stripe.com/bJeeV54YH98d7blg2qcfL0n'
  },
  {
    id: 'dh45', cat: 'locks-soin',
    name: 'Gel Démarrage Locks Sans Résidu',
    subtitle: '200ml — Tenue sans dépôt',
    price: 11,
    description: "Gel spécialisé pour démarrer et retightener ses locks sans laisser de résidus blancs. Sa formule légère donne de la tenue, resserre les nouvelles pousses et garde les locks propres et bien définies entre les retouches.",
    benefits: ['Zéro résidu blanc', 'Retightening facile', 'Resserre les pousses', 'Entre les retouches'],
    img: 'images/dh44_cire_locks.jpg',
    stripe: 'https://buy.stripe.com/bJeeV5fDlckp3Z92bAcfL0o'
  },
  {
    id: 'dh46', cat: 'locks-soin',
    name: 'Spray Hydratant Locks Quotidien',
    subtitle: '200ml — Hydratation entre lavages',
    price: 9,
    description: "Spray quotidien léger pour hydrater et rafraîchir les locks entre les lavages. Sa formule à base d'aloe vera, d'eau de coco et d'huiles légères nourrit les locks sans les alourdir ni favoriser les moisissures.",
    benefits: ['Usage quotidien', 'Aloe vera + eau de coco', 'N\'alourdit pas les locks', 'Anti-moisissures'],
    img: 'images/dh44_cire_locks.jpg',
    stripe: 'https://buy.stripe.com/eVq9AL62LckpcvF5nMcfL0p'
  },
  {
    id: 'dh47', cat: 'locks-soin',
    name: 'Huile Ricin + Argan pour Locks',
    subtitle: '100ml — Brillance et force',
    price: 9,
    description: "Mélange premium d'huile de ricin et d'argan spécialement formulé pour les locks. L'huile de ricin nourrit et épaissit, l'argan apporte brillance et protection. À appliquer sur les locks et le cuir chevelu pour un résultat éclatant.",
    benefits: ['Ricin + argan premium', 'Locks plus épaisses', 'Brillance intense', 'Cuir chevelu nourri'],
    img: 'images/dh44_cire_locks.jpg',
    stripe: 'https://buy.stripe.com/aFa8wHbn5fwBcvF7vUcfL0q'
  },
  {
    id: 'dh48', cat: 'locks-soin',
    name: 'Shampooing Purifiant Locks',
    subtitle: '300ml — Nettoyage profond',
    price: 10,
    description: "Shampooing spécialement formulé pour les locks : nettoie en profondeur sans laisser de résidus dans les mèches. Sa formule clarifiante élimine les dépôts de produits, la pollution et les résidus de cire accumulés au fil du temps.",
    benefits: ['Élimine les dépôts', 'Aucun résidu dans les locks', 'Clarifiant profond', 'Locks propres et légères'],
    img: 'images/dh44_cire_locks.jpg',
    stripe: 'https://buy.stripe.com/3cI6ozaj1gAF1R17vUcfL0r'
  },
  {
    id: 'dh49', cat: 'locks-soin',
    name: 'Beurre de Karité Locks Nourrissant',
    subtitle: '150ml — Nutrition intense',
    price: 10,
    description: "Beurre de karité pur pour locks, formulé pour nourrir en profondeur les mèches sèches et les pointes abîmées. Sa texture riche et fondante pénètre la fibre des locks pour une hydratation durable et une souplesse retrouvée.",
    benefits: ['Karité pur pour locks', 'Nourrit pointes abîmées', 'Hydratation durable', 'Souplesse retrouvée'],
    img: 'images/dh44_cire_locks.jpg',
    stripe: 'https://buy.stripe.com/aFabITcr9ckp3Z92bAcfL0s'
  },
  {
    id: 'dh50', cat: 'locks-soin',
    name: 'Sérum Brillance et Protection Locks',
    subtitle: '50ml — Finition éclatante',
    price: 9,
    description: "Sérum léger de finition pour les locks. Quelques gouttes suffisent pour apporter une brillance éclatante, sceller l'humidité et protéger les locks des agressions extérieures (UV, pollution, sécheresse). Le touche finale d'une routine locks parfaite.",
    benefits: ['Brillance éclatante', 'Scelle l\'humidité', 'Protection UV', 'Quelques gouttes suffisent'],
    img: 'images/dh44_cire_locks.jpg',
    stripe: 'https://buy.stripe.com/aFa14f62L98dcvFaI6cfL0t'
  },

  // CAT 6 — Accessoires
  {
    id: 'dh51', cat: 'accessoires',
    name: 'Bonnet Satin Anti-casse Nuit',
    subtitle: 'Protection nocturne — Incontournable',
    price: 7,
    description: "Le bonnet en satin est l'accessoire numéro 1 de toute personne aux cheveux naturels. La satin réduit les frottements nocturnes, préserve l'hydratation, évite la casse et maintient le coiffé. Un incontournable absolu.",
    benefits: ['Réduit les frottements', 'Préserve l\'hydratation', 'Anti-casse nocturne', 'Maintient le coiffé'],
    img: 'images/dh51_bonnet_satin.jpg',
    stripe: 'https://buy.stripe.com/9B68wH3UD3NT1R14jIcfL0u'
  },
  {
    id: 'dh52', cat: 'accessoires',
    name: 'Serviette Microfibre Turban Cheveux',
    subtitle: 'Séchage doux sans frisottis',
    price: 6,
    description: "La serviette microfibre est indispensable pour les cheveux bouclés et naturels. Contrairement aux serviettes classiques, elle absorbe l'eau sans frotter ni créer de frisottis. Le turban se pose en 5 secondes et se maintient seul.",
    benefits: ['Aucun frisotti', 'Absorption rapide', 'Turban auto-maintenu', 'Pour cheveux bouclés'],
    img: 'images/dh51_bonnet_satin.jpg',
    stripe: 'https://buy.stripe.com/8x27sDdvd849brB6rQcfL0v'
  },
  {
    id: 'dh53', cat: 'accessoires',
    name: 'Brosse Masseur Cuir Chevelu Silicone',
    subtitle: 'Stimule la circulation',
    price: 5,
    description: "Ce masseur de cuir chevelu en silicone stimule la microcirculation sanguine pour une pousse accélérée. Il s'utilise pendant le shampooing pour masser le cuir chevelu, répartir les produits et exfolier les cellules mortes.",
    benefits: ['Stimule la circulation', 'Utilisation sous la douche', 'Exfolie le cuir chevelu', 'Silicone doux'],
    img: 'images/dh51_bonnet_satin.jpg',
    stripe: 'https://buy.stripe.com/dRm8wH1Mvckp53dg2qcfL0w'
  },
  {
    id: 'dh54', cat: 'accessoires',
    name: 'Peigne Démêlant Grandes Dents',
    subtitle: 'Sans casse ni douleur',
    price: 4,
    description: "Peigne à grandes dents spécialement conçu pour démêler les cheveux bouclés, frisés et naturels sans casse ni douleur. Ses dents larges et espacées glissent à travers les nœuds en douceur. L'outil de base indispensable.",
    benefits: ['Sans casse ni douleur', 'Grandes dents espacées', 'Pour cheveux bouclés', 'Outil de base essentiel'],
    img: 'images/dh51_bonnet_satin.jpg',
    stripe: 'https://buy.stripe.com/bJe9ALbn5ckp53dcQecfL0x'
  },
  {
    id: 'dh55', cat: 'accessoires',
    name: 'Aiguille Crochet Locks et Tresses',
    subtitle: 'Outil de pose et entretien',
    price: 4,
    description: "Aiguille crochet indispensable pour la pose des coiffures crochet braids, faux locks, twists et pour l'entretien des vraies locks. Sa forme en crochet permet d'insérer les mèches de façon précise et de rentrer les bouts rebelles.",
    benefits: ['Pose des faux locks', 'Entretien des vraies locks', 'Rentrer les bouts', 'Outil précis et pratique'],
    img: 'images/dh51_bonnet_satin.jpg',
    stripe: 'https://buy.stripe.com/28E6ozdvd4RXdzJcQecfL0y'
  },
];

const CATEGORIES = [
  { id: 'all', label: '✨ Tous les produits' },
  { id: 'soins', label: '💧 Soins & Huiles' },
  { id: 'extensions', label: '💇 Extensions' },
  { id: 'perruques', label: '👑 Perruques' },
  { id: 'locks-faux', label: '🔒 Faux Locks' },
  { id: 'locks-soin', label: '🌿 Soins Locks' },
  { id: 'accessoires', label: '🪮 Accessoires' },
];
