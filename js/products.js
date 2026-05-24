// ============================================================
// DIAMONDHAIR — Catalogue produits avec variantes couleur
// ============================================================

const PRODUCTS = [

  // ── CAT 1 : Soins & Huiles (pas de variante couleur) ──────
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
    description: "Formulé avec de l'extrait de romarin et de la biotine, ce shampooing spécialisé stimule la microcirculation du cuir chevelu pour une pousse accélérée.",
    benefits: ['Romarin + biotine', 'Stimule la microcirculation', 'Croissance accélérée', 'Cuir chevelu purifié'],
    img: 'images/dh08_shampoing_croissance.jpg',
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
    img: 'images/dh10_masque_argan.jpg',
    stripe: 'https://buy.stripe.com/28E7sD1Mv98d9jt6rQcfK3X'
  },
  {
    id: 'dh11', cat: 'soins',
    name: 'Masque Protéines Kératine',
    subtitle: '200ml — Reconstruction',
    price: 11,
    description: "Ce masque protéiné à la kératine est conçu pour les cheveux très abîmés, décolorés ou surtraités. Il reconstruit la structure interne de la fibre capillaire, élimine le casse et restaure l'élasticité.",
    benefits: ['Reconstruction intense', 'Pour cheveux décolorés', 'Élimine le casse', "Restaure l'élasticité"],
    img: 'images/dh11_masque_keratine.jpg',
    stripe: 'https://buy.stripe.com/aFaeV53UD3NT9jtg2qcfK3Y'
  },
  {
    id: 'dh12', cat: 'soins',
    name: 'Leave-in Crème Hydratante',
    subtitle: '200ml — Sans rinçage',
    price: 9,
    description: "Ce leave-in s'applique sur cheveux humides après le shampooing, sans rincer. Il scelle l'hydratation, facilite le coiffage et protège des agressions extérieures tout au long de la journée.",
    benefits: ['Sans rinçage', "Scelle l'hydratation", 'Facilite le coiffage', 'Protection quotidienne'],
    img: 'images/dh12_leavein.jpg',
    stripe: 'https://buy.stripe.com/5kQ00bgHpckp0MX8zYcfK3Z'
  },
  {
    id: 'dh13', cat: 'soins',
    name: 'Sérum Croissance Romarin + Caféine',
    subtitle: '50ml — Booster repousse',
    price: 8,
    description: "Le duo romarin + caféine est la combinaison la plus efficace pour stimuler la croissance capillaire. Ce sérum concentré s'applique directement sur le cuir chevelu. Résultats visibles en 6 semaines.",
    benefits: ['Romarin + caféine', 'Appliqué sur cuir chevelu', 'Résultats en 6 semaines', 'Concentration maximale'],
    img: 'images/dh13_serum_romarin.jpg',
    stripe: 'https://buy.stripe.com/28E7sD2Qzdot3Z96rQcfK40'
  },
  {
    id: 'dh14', cat: 'soins',
    name: 'Spray Hydratant Sans Rinçage',
    subtitle: '200ml — Hydratation express',
    price: 8,
    description: "Un spray quotidien léger pour hydrater et rafraîchir les cheveux entre les lavages. Sa formule à base d'aloe vera et d'extraits végétaux réhydrate instantanément les cheveux bouclés, texturés ou en locks.",
    benefits: ['Usage quotidien', 'Aloe vera + extraits végétaux', 'Idéal entre les lavages', 'Légère et non grasse'],
    img: 'images/dh14_spray_hydratant.jpg',
    stripe: 'https://buy.stripe.com/8x29AL3UD5W1eDN4jIcfK41'
  },
  {
    id: 'dh15', cat: 'soins',
    name: 'Huile Tea Tree Cuir Chevelu',
    subtitle: '30ml — Antipelliculaire',
    price: 7,
    description: "L'huile essentielle de tea tree est reconnue pour ses propriétés antibactériennes et antifongiques. Elle combat efficacement les pellicules, les démangeaisons et purifie le cuir chevelu.",
    benefits: ['Antipelliculaire naturel', 'Anti-démangeaisons', 'Purifie le cuir chevelu', 'Propriétés antifongiques'],
    img: 'images/dh15_teatree.jpg',
    stripe: 'https://buy.stripe.com/eVq7sDfDlgAFcvFaI6cfK42'
  },

  // ── CAT 2 : Extensions (avec variantes couleur) ────────────
  {
    id: 'dh16', cat: 'extensions',
    name: 'Extension Clip-in Cheveux Humains 50cm',
    subtitle: '7 clips — Volume instantané',
    price: 24,
    description: "Set de 7 extensions à clips en cheveux humains Remy 50cm. Pose et retrait en moins de 5 minutes sans colle ni chaleur. Colorables et coiffables comme vos propres cheveux.",
    benefits: ['Cheveux humains Remy', 'Pose en 5 minutes', 'Sans colle ni dommage', 'Colorable et coiffable'],
    img: 'images/dh16_extension_clip.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/aFa5kv0Ir3NTdzJ9E2cfL1A' },
      { couleur: '#2 — Brun très foncé', hex: '#2c1a0e', stripe: 'https://buy.stripe.com/7sY6ozezhfwB2V55nMcfL1B' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/aFa3cncr91FLeDNbMacfL1C' },
      { couleur: '#6 — Brun châtain',    hex: '#5c3317', stripe: 'https://buy.stripe.com/00w28j2Qz7059jtg2qcfL1D' },
      { couleur: '#8 — Brun clair',      hex: '#7b4a20', stripe: 'https://buy.stripe.com/7sY7sD1MvbgleDN4jIcfL1E' },
      { couleur: '#27 — Blond fraise',   hex: '#c8922a', stripe: 'https://buy.stripe.com/bJe9ALaj1bgl1R17vUcfL1F' },
      { couleur: '#33 — Auburn cuivré',  hex: '#8b2500', stripe: 'https://buy.stripe.com/fZubITcr94RXfHR6rQcfL1G' },
      { couleur: '#613 — Blond clair',   hex: '#e8d5a3', stripe: 'https://buy.stripe.com/8x228jcr9fwB8fp6rQcfL1H' },
    ]
  },
  {
    id: 'dh17', cat: 'extensions',
    name: 'Extension Clip-in Cheveux Humains 40cm',
    subtitle: '7 clips — Look naturel',
    price: 19,
    description: "Set de 7 extensions clip-in en cheveux humains Remy 40cm pour un look naturel et volumisé. La longueur idéale pour les débutantes.",
    benefits: ['Cheveux humains Remy', 'Longueur idéale débutantes', 'Look naturel garanti', '7 clips inclus'],
    img: 'images/dh17_extension_40cm.jpg',
    variants: [
      { couleur: '#1 — Noir jais',       hex: '#050505', stripe: 'https://buy.stripe.com/00w7sD0Ir84967h9E2cfL1I' },
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/eVq5kvfDl1FL8fp4jIcfL1J' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/eVqbIT8aT98danx6rQcfL1K' },
      { couleur: '#6 — Brun châtain',    hex: '#5c3317', stripe: 'https://buy.stripe.com/3cI8wH1MvgAF2V5cQecfL1L' },
      { couleur: '#18 — Blond miel',     hex: '#c8a35a', stripe: 'https://buy.stripe.com/14AbITezhfwBcvF7vUcfL1M' },
      { couleur: '#30 — Auburn moyen',   hex: '#7a2f1a', stripe: 'https://buy.stripe.com/5kQ14f4YHdot8fp17wcfL1N' },
      { couleur: '#60 — Blond platine',  hex: '#f0e6c8', stripe: 'https://buy.stripe.com/5kQeV5dvd1FL53d5nMcfL1O' },
    ]
  },
  {
    id: 'dh18', cat: 'extensions',
    name: 'Extension Tape-in Remy 40cm',
    subtitle: '20 bandes — Semi-permanente',
    price: 31,
    description: "20 bandes tape-in en cheveux humains Remy 40cm. La méthode préférée des salons professionnels : invisible, ultra-plate et très naturelle. Durée 2-3 mois.",
    benefits: ['Ultra-plates et invisibles', 'Durée 2-3 mois', 'Qualité salon pro', 'Réutilisables'],
    img: 'images/dh18_extension_tapein.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',       hex: '#1a1a1a', stripe: 'https://buy.stripe.com/14AaEP8aT2JP7blcQecfL1P' },
      { couleur: '#4 — Brun chocolat',       hex: '#3d2009', stripe: 'https://buy.stripe.com/4gM14f8aT3NT67hcQecfL1Q' },
      { couleur: '#6 — Brun châtain',        hex: '#5c3317', stripe: 'https://buy.stripe.com/00w6oz1Mvdot3Z903scfL1R' },
      { couleur: '#18 — Blond miel',         hex: '#c8a35a', stripe: 'https://buy.stripe.com/8x2eV51MvgAFanx17wcfL1S' },
      { couleur: '#1B/#27 — Ombré noir→blond fraise', hex: 'ombre', stripe: 'https://buy.stripe.com/3cI5kv9eXesx9jt03scfL1T' },
      { couleur: '#1B/#60 — Ombré noir→platine',      hex: 'ombre', stripe: 'https://buy.stripe.com/aFa14f0Ir3NTgLVg2qcfL1U' },
    ]
  },
  {
    id: 'dh19', cat: 'extensions',
    name: 'Extension Kératine Bonds Remy 50cm',
    subtitle: 'Pose à la kératine — Semi-permanente',
    price: 35,
    description: "Extensions à bonds de kératine en cheveux humains Remy 50cm. La méthode la plus naturelle et durable. Chaque mèche est fixée individuellement à la kératine fondue. Durée de tenue 3-6 mois.",
    benefits: ['Mèches individuelles', 'Durée 3-6 mois', 'Résultat le plus naturel', 'Cheveux humains Remy'],
    img: 'images/dh19_extension_keratine.jpg',
    variants: [
      { couleur: '#1 — Noir jais',       hex: '#050505', stripe: 'https://buy.stripe.com/28E3cn4YHachgLV17wcfL1W' },
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/5kQ00bcr998d53d3fEcfL1X' },
      { couleur: '#2 — Brun foncé',      hex: '#2c1a0e', stripe: 'https://buy.stripe.com/7sY14fdvdckpfHR7vUcfL1Y' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/cNi5kv0Irbgl2V52bAcfL1Z' },
      { couleur: '#6 — Brun châtain',    hex: '#5c3317', stripe: 'https://buy.stripe.com/14A00bezhgAF2V5cQecfL20' },
      { couleur: '#8 — Brun clair',      hex: '#7b4a20', stripe: 'https://buy.stripe.com/dRm00bezhach9jt4jIcfL21' },
      { couleur: '#27 — Blond fraise',   hex: '#c8922a', stripe: 'https://buy.stripe.com/8x2fZ9aj12JP53d17wcfL22' },
      { couleur: '#33 — Auburn cuivré',  hex: '#8b2500', stripe: 'https://buy.stripe.com/aFadR11Mv849anxeYmcfL23' },
    ]
  },
  {
    id: 'dh20', cat: 'extensions',
    name: 'Extension Weft à Coudre Remy 50cm',
    subtitle: '100g — Tissage naturel',
    price: 22,
    description: "Trame de cheveux humains Remy 50cm 100g pour tissage. La méthode classique pour les tissages cousus sur tresses. Dense, durable et compatible avec tous les types de tissage.",
    benefits: ['100g de cheveux Remy', 'Pour tissage cousu', 'Colorable', 'Dense et durable'],
    img: 'images/dh20_extension_weft.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/eVq4gr0Ir2JP8fpg2qcfL24' },
      { couleur: '#2 — Brun foncé',      hex: '#2c1a0e', stripe: 'https://buy.stripe.com/aFa4gr62L7050MX6rQcfL25' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/3cI14f2QzacheDN2bAcfL26' },
      { couleur: '#27 — Blond fraise',   hex: '#c8922a', stripe: 'https://buy.stripe.com/5kQ9AL1Mvach53deYmcfL27' },
      { couleur: '#33 — Auburn cuivré',  hex: '#8b2500', stripe: 'https://buy.stripe.com/3cI28jbn584953d17wcfL28' },
      { couleur: '#99J — Bordeaux',      hex: '#4a0010', stripe: 'https://buy.stripe.com/28E7sD62L4RXgLV2bAcfL29' },
    ]
  },
  {
    id: 'dh21', cat: 'extensions',
    name: 'Extension Nano Ring Invisible 50cm',
    subtitle: 'Sans colle ni chaleur',
    price: 27,
    description: "Extensions nano ring en cheveux humains 50cm. La méthode la plus douce : chaque mèche est fixée par un minuscule anneau métallique, sans colle ni chaleur. Invisible même avec une queue de cheval haute.",
    benefits: ['Sans colle ni chaleur', 'Nano anneaux invisibles', 'Préserve vos cheveux', 'Très naturel'],
    img: 'images/dh21_extension_nanoring.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',              hex: '#1a1a1a', stripe: 'https://buy.stripe.com/aFa28jcr9ckpanx9E2cfL2a' },
      { couleur: '#4 — Brun chocolat',              hex: '#3d2009', stripe: 'https://buy.stripe.com/bJeeV562Ldot0MX4jIcfL2b' },
      { couleur: '#1B/#27 — Ombré noir→blond',      hex: 'ombre',   stripe: 'https://buy.stripe.com/8x23cn0Ir4RX2V517wcfL2c' },
      { couleur: '#1B/#30 — Ombré noir→auburn',     hex: 'ombre',   stripe: 'https://buy.stripe.com/5kQ00baj12JPbrB2bAcfL2d' },
      { couleur: '#1B/#60 — Ombré noir→platine',    hex: 'ombre',   stripe: 'https://buy.stripe.com/bJe9ALgHp849brBcQecfL2e' },
      { couleur: '#2/#6 — Ombré brun→châtain',      hex: 'ombre',   stripe: 'https://buy.stripe.com/eVq5kv3UDfwB7blaI6cfL2f' },
    ]
  },
  {
    id: 'dh22', cat: 'extensions',
    name: 'Rajout Cheveux Humains Naturels 100g',
    subtitle: 'Pour tresse et tissage',
    price: 17,
    description: "100g de cheveux humains naturels en vrac, idéaux pour les tresses, tissages et extensions au crochet. Doux, résistants et naturels.",
    benefits: ['100g cheveux humains', 'Pour tresses et tissages', 'Doux et résistants', 'Noir naturel'],
    img: 'images/dh22_rajout_vrac.jpg',
    variants: [
      { couleur: '#1 — Noir jais',       hex: '#050505', stripe: 'https://buy.stripe.com/9B6fZ91Mv705eDN2bAcfL2g' },
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/00w5kv8aT5W1cvF4jIcfL2h' },
      { couleur: '#2 — Brun foncé',      hex: '#2c1a0e', stripe: 'https://buy.stripe.com/6oUfZ9gHpesxfHR8zYcfL2i' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/cNicMX8aT0BH3Z95nMcfL2j' },
      { couleur: '#33 — Auburn cuivré',  hex: '#8b2500', stripe: 'https://buy.stripe.com/8x2aEP9eXdot9jt9E2cfL2k' },
      { couleur: '#350 — Gingembre',     hex: '#b84a00', stripe: 'https://buy.stripe.com/7sYbIT8aTfwB7blbMacfL2l' },
    ]
  },
  {
    id: 'dh23', cat: 'extensions',
    name: 'Extension Halo Wire Volumisante 40cm',
    subtitle: 'Fil invisible — Pose express',
    price: 29,
    description: "L'extension halo se porte avec un fil invisible autour de la tête. Aucune fixation permanente, aucun dommage. Se pose en 30 secondes, se retire en 10.",
    benefits: ['Fil invisible', 'Pose en 30 secondes', 'Aucun dommage', 'Occasions et quotidien'],
    img: 'images/dh23_extension_halo.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',              hex: '#1a1a1a', stripe: 'https://buy.stripe.com/00w9ALezhckpfHReYmcfL2m' },
      { couleur: '#4 — Brun chocolat',              hex: '#3d2009', stripe: 'https://buy.stripe.com/fZu7sDfDl5W17bl9E2cfL2n' },
      { couleur: '#6 — Brun châtain',               hex: '#5c3317', stripe: 'https://buy.stripe.com/8x25kv0IrbglbrBeYmcfL2o' },
      { couleur: '#18 — Blond miel',                hex: '#c8a35a', stripe: 'https://buy.stripe.com/9B63cn9eX3NT0MX7vUcfL2p' },
      { couleur: '#613 — Blond clair',              hex: '#e8d5a3', stripe: 'https://buy.stripe.com/00wfZ9gHp98dbrBaI6cfL2q' },
      { couleur: '#1B/#27 — Ombré noir→blond',      hex: 'ombre',   stripe: 'https://buy.stripe.com/3cIbITgHp5W12V517wcfL2r' },
      { couleur: '#4/#27 — Ombré chocolat→blond',   hex: 'ombre',   stripe: 'https://buy.stripe.com/28E8wH4YHbgldzJdUicfL2s' },
    ]
  },
  {
    id: 'dh24', cat: 'extensions',
    name: 'Queue de Cheval Clip-in Cheveux Humains',
    subtitle: '50cm — Élégance instantanée',
    price: 19,
    description: "Une queue de cheval en cheveux humains Remy 50cm avec clip de fixation discret. Se pose en 2 minutes pour une queue de cheval longue, volumineuse et 100% naturelle.",
    benefits: ['Cheveux humains Remy', 'Pose en 2 minutes', 'Clip discret', 'Look sophistiqué'],
    img: 'images/dh24_extension_ponytail.jpg',
    variants: [
      { couleur: '#1 — Noir jais',                  hex: '#050505', stripe: 'https://buy.stripe.com/8x2fZ9bn52JP9jt3fEcfL2t' },
      { couleur: '#1B — Noir naturel',              hex: '#1a1a1a', stripe: 'https://buy.stripe.com/4gMfZ90Irckp7bl6rQcfL2u' },
      { couleur: '#2 — Brun foncé',                 hex: '#2c1a0e', stripe: 'https://buy.stripe.com/8x25kvgHp5W1anx5nMcfL2v' },
      { couleur: '#4 — Brun chocolat',              hex: '#3d2009', stripe: 'https://buy.stripe.com/dRm28j9eX7057bldUicfL2w' },
      { couleur: '#60 — Blond platine',             hex: '#f0e6c8', stripe: 'https://buy.stripe.com/aFa3cnfDlgAFdzJaI6cfL2x' },
      { couleur: '#1B/#60 — Ombré noir→platine',    hex: 'ombre',   stripe: 'https://buy.stripe.com/aFa7sDfDlfwB53deYmcfL2y' },
      { couleur: '#1B/#613 — Ombré noir→blond',     hex: 'ombre',   stripe: 'https://buy.stripe.com/7sYbIT4YHckp3Z94jIcfL2z' },
    ]
  },
  {
    id: 'dh25', cat: 'extensions',
    name: 'Extension Clip-in Bouclés 40cm',
    subtitle: '7 clips — Boucles naturelles',
    price: 26,
    description: "Set de 7 extensions clip-in bouclées en cheveux humains Remy 40cm. Idéales pour les femmes aux cheveux naturellement bouclés ou frisés qui veulent ajouter du volume et de la longueur.",
    benefits: ['Texture bouclée naturelle', 'Cheveux humains Remy', '7 clips discrets', 'Compatible cheveux naturels'],
    img: 'images/dh25_extension_bouclees.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',              hex: '#1a1a1a', stripe: 'https://buy.stripe.com/00w7sDaj1fwB9jtg2qcfL2A' },
      { couleur: '#2 — Brun foncé',                 hex: '#2c1a0e', stripe: 'https://buy.stripe.com/5kQeV576Pesx67h8zYcfL2B' },
      { couleur: '#4 — Brun chocolat',              hex: '#3d2009', stripe: 'https://buy.stripe.com/bJe4gr62L5W11R1g2qcfL2C' },
      { couleur: '#33 — Auburn cuivré',             hex: '#8b2500', stripe: 'https://buy.stripe.com/14A00bgHp8492V52bAcfL2D' },
      { couleur: '#4/#27 — Ombré chocolat→blond',   hex: 'ombre',   stripe: 'https://buy.stripe.com/28E6oz4YH0BH9jtg2qcfL2E' },
      { couleur: '#1B/#30 — Ombré noir→auburn',     hex: 'ombre',   stripe: 'https://buy.stripe.com/6oUbIT1Mvckp0MXdUicfL2F' },
    ]
  },

  // ── CAT 3 : Perruques (avec variantes couleur) ─────────────
  {
    id: 'dh26', cat: 'perruques',
    name: 'Perruque Lace Front 13x4 Lisse 16"',
    subtitle: 'Cheveux humains — Ligne naturelle',
    price: 49,
    description: "Perruque lace front 13x4 en cheveux humains brésiliens lisses, 16 pouces, densité 150%. La lace 13x4 permet un coiffé naturel avec raie partout à l'avant. Glueless, pré-épilée avec cheveux bébé.",
    benefits: ['Cheveux humains brésiliens', 'Lace 13x4 — raie partout', 'Sans colle possible', 'Densité 150%'],
    img: 'images/dh26_perruque_lace_lisse.jpg',
    variants: [
      { couleur: '#1 — Noir jais',       hex: '#050505', stripe: 'https://buy.stripe.com/eVqfZ9bn50BH7bl03scfL2G' },
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/28E8wH4YH0BH7blaI6cfL2H' },
      { couleur: '#2 — Brun foncé',      hex: '#2c1a0e', stripe: 'https://buy.stripe.com/3cI4gr8aTbgldzJ2bAcfL2I' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/4gMdR1ezh8498fpcQecfL2J' },
      { couleur: '#6 — Brun châtain',    hex: '#5c3317', stripe: 'https://buy.stripe.com/8x25kv8aT1FL3Z97vUcfL2K' },
      { couleur: '#18 — Blond miel',     hex: '#c8a35a', stripe: 'https://buy.stripe.com/8x2aEPfDl849anx03scfL2L' },
      { couleur: '#613 — Blond clair',   hex: '#e8d5a3', stripe: 'https://buy.stripe.com/4gM00b8aT0BH8fpcQecfL2M' },
    ]
  },
  {
    id: 'dh27', cat: 'perruques',
    name: 'Perruque Lace Front 13x4 Bouclée 18"',
    subtitle: 'Cheveux humains — Boucles naturelles',
    price: 59,
    description: "Perruque lace front 13x4 bouclée en cheveux humains 18 pouces, densité 150%. Des boucles souples et naturelles. Glueless, coiffable au fer et colorable.",
    benefits: ['Boucles souples et naturelles', '18 pouces / 45cm', 'Colorable', 'Glueless confort'],
    img: 'images/dh27_perruque_bouclée.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/bJe8wH62LgAF1R1bMacfL2N' },
      { couleur: '#2 — Brun foncé',      hex: '#2c1a0e', stripe: 'https://buy.stripe.com/14AbITezhfwB53d2bAcfL2O' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/aFaeV5aj1esxdzJcQecfL2P' },
      { couleur: '#33 — Auburn cuivré',  hex: '#8b2500', stripe: 'https://buy.stripe.com/aFabITbn50BHeDN17wcfL2Q' },
      { couleur: '#1B/#30 — Ombré noir→auburn',  hex: 'ombre', stripe: 'https://buy.stripe.com/28E3cn76P3NTcvF17wcfL2R' },
      { couleur: '#4/#27 — Ombré chocolat→blond',hex: 'ombre', stripe: 'https://buy.stripe.com/5kQ28jcr94RX2V503scfL2S' },
    ]
  },
  {
    id: 'dh28', cat: 'perruques',
    name: 'Perruque Lace Front 13x4 Ondulée 20"',
    subtitle: 'Cheveux humains — Ondulations glamour',
    price: 61,
    description: "Perruque lace front 13x4 ondulée body wave en cheveux humains 20 pouces, densité 150%. Les ondulations body wave donnent un volume naturel spectaculaire.",
    benefits: ['Body wave polyvalente', '20 pouces glamour', 'Volume naturel', 'Tous styles possibles'],
    img: 'images/dh28_perruque_bodywave.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',               hex: '#1a1a1a', stripe: 'https://buy.stripe.com/aFadR13UD5W17bl8zYcfL2T' },
      { couleur: '#4 — Brun chocolat',               hex: '#3d2009', stripe: 'https://buy.stripe.com/eVqdR1aj1ckpeDN17wcfL2U' },
      { couleur: '#6 — Brun châtain',                hex: '#5c3317', stripe: 'https://buy.stripe.com/14A9AL76P849fHR8zYcfL2V' },
      { couleur: '#18 — Blond miel',                 hex: '#c8a35a', stripe: 'https://buy.stripe.com/eVqfZ99eX84953dbMacfL2W' },
      { couleur: '#1B/#27 — Ombré noir→blond fraise',hex: 'ombre',   stripe: 'https://buy.stripe.com/14A7sDdvd1FLdzJ7vUcfL2Y' },
      { couleur: '#1B/#613 — Ombré noir→blond',      hex: 'ombre',   stripe: 'https://buy.stripe.com/28E8wH62L2JP8fp6rQcfL2Z' },
      { couleur: '#2/#6 — Ombré brun→châtain',       hex: 'ombre',   stripe: 'https://buy.stripe.com/8x2fZ9aj1ckpeDNbMacfL30' },
    ]
  },
  {
    id: 'dh29', cat: 'perruques',
    name: 'Perruque Full Lace Courte Pixie Cut',
    subtitle: 'Cheveux humains — Coupe courte',
    price: 54,
    description: "Perruque full lace pixie cut en cheveux humains. La full lace permet de coiffer dans toutes les directions, faire une queue de cheval haute ou des tresses.",
    benefits: ['Full lace 360°', 'Coupe pixie tendance', 'Queue de cheval possible', 'Look sophistiqué'],
    img: 'images/dh29_perruque_pixie.jpg',
    variants: [
      { couleur: '#1 — Noir jais',       hex: '#050505', stripe: 'https://buy.stripe.com/fZu14f2Qz0BH1R103scfL31' },
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/dRm5kv8aT0BH8fpbMacfL32' },
      { couleur: '#2 — Brun foncé',      hex: '#2c1a0e', stripe: 'https://buy.stripe.com/8x2cMX4YH5W10MXcQecfL33' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/dRm14fbn50BH53d17wcfL34' },
      { couleur: '#33 — Auburn cuivré',  hex: '#8b2500', stripe: 'https://buy.stripe.com/8x24gr9eXachanxdUicfL35' },
      { couleur: '#613 — Blond clair',   hex: '#e8d5a3', stripe: 'https://buy.stripe.com/aFa3cnbn5bgl2V5eYmcfL36' },
    ]
  },
  {
    id: 'dh30', cat: 'perruques',
    name: 'Perruque Lace Front Kinky Curly 20"',
    subtitle: 'Cheveux humains — Frisé naturel',
    price: 61,
    description: "Perruque lace front kinky curly en cheveux humains 20 pouces. La texture kinky curly reproduit parfaitement les cheveux naturellement frisés et afro.",
    benefits: ['Texture kinky curly', 'Ressemble à vos cheveux', '20 pouces de volume', 'Identité naturelle'],
    img: 'images/dh30_perruque_kinky.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',              hex: '#1a1a1a', stripe: 'https://buy.stripe.com/bJe8wHezhdot2V56rQcfL37' },
      { couleur: '#2 — Brun foncé',                 hex: '#2c1a0e', stripe: 'https://buy.stripe.com/5kQ6oz3UD849gLV6rQcfL38' },
      { couleur: '#4 — Brun chocolat',              hex: '#3d2009', stripe: 'https://buy.stripe.com/28E8wH76P705anx5nMcfL39' },
      { couleur: '#1B/#30 — Ombré noir→auburn',     hex: 'ombre',   stripe: 'https://buy.stripe.com/aFa00b0Ir98danxdUicfL3a' },
      { couleur: '#1B/#27 — Ombré noir→blond fraise',hex:'ombre',   stripe: 'https://buy.stripe.com/aFafZ93UD0BH53d03scfL3b' },
    ]
  },
  {
    id: 'dh31', cat: 'perruques',
    name: 'Perruque HD Lace Glueless 22"',
    subtitle: 'HD Lace invisible — Sans colle',
    price: 74,
    description: "Perruque HD lace front glueless 22 pouces en cheveux humains. La HD lace ultra-fine devient invisible sur tous les teints. Port sans colle pour le confort maximal.",
    benefits: ['HD Lace ultra-invisible', 'Sans colle — confort max', '22 pouces luxueux', "S'adapte à tous les teints"],
    img: 'images/dh31_perruque_hd.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',               hex: '#1a1a1a', stripe: 'https://buy.stripe.com/7sYdR1cr93NTbrB9E2cfL3c' },
      { couleur: '#2 — Brun foncé',                  hex: '#2c1a0e', stripe: 'https://buy.stripe.com/aFabIT76P5W11R1dUicfL3d' },
      { couleur: '#4 — Brun chocolat',               hex: '#3d2009', stripe: 'https://buy.stripe.com/eVq5kvgHp1FL2V517wcfL3e' },
      { couleur: '#6 — Brun châtain',                hex: '#5c3317', stripe: 'https://buy.stripe.com/14AeV54YHbgl0MXaI6cfL3f' },
      { couleur: '#18 — Blond miel',                 hex: '#c8a35a', stripe: 'https://buy.stripe.com/dRm8wH1MvesxgLV7vUcfL3g' },
      { couleur: '#1B/#27 — Ombré noir→blond fraise',hex: 'ombre',   stripe: 'https://buy.stripe.com/eVqeV5cr9esx2V503scfL3h' },
      { couleur: '#1B/#613 — Ombré noir→blond',      hex: 'ombre',   stripe: 'https://buy.stripe.com/3cI5kvezh1FL1R1g2qcfL3j' },
    ]
  },
  {
    id: 'dh32', cat: 'perruques',
    name: 'Perruque 360 Lace Frontale Ondulée',
    subtitle: '360° de liberté de coiffage',
    price: 84,
    description: "La perruque 360 lace offre une lace tout autour de la tête. En cheveux humains ondulés, densité 180%. Le summum de la liberté capillaire.",
    benefits: ['Lace 360° tout autour', 'Coiffage illimité', 'Densité 180%', 'Cheveux humains ondulés'],
    img: 'images/dh32_perruque_360.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',               hex: '#1a1a1a', stripe: 'https://buy.stripe.com/00waEP9eXfwB2V5eYmcfL3k' },
      { couleur: '#4 — Brun chocolat',               hex: '#3d2009', stripe: 'https://buy.stripe.com/9B6cMX3UD0BHcvF8zYcfL3l' },
      { couleur: '#1B/#27 — Ombré noir→blond fraise',hex: 'ombre',   stripe: 'https://buy.stripe.com/9B6dR19eXbgldzJg2qcfL3m' },
      { couleur: '#1B/#30 — Ombré noir→auburn',      hex: 'ombre',   stripe: 'https://buy.stripe.com/cNicMX2Qz0BHbrB4jIcfL3n' },
      { couleur: '#1B/#60 — Ombré noir→platine',     hex: 'ombre',   stripe: 'https://buy.stripe.com/aFaaEPcr91FLfHR3fEcfL3o' },
      { couleur: '#2/#24 — Ombré brun→blond doré',   hex: 'ombre',   stripe: 'https://buy.stripe.com/4gM5kvgHpbgl9jtdUicfL3p' },
    ]
  },
  {
    id: 'dh33', cat: 'perruques',
    name: 'Perruque Bob Courte Lace Front',
    subtitle: 'Bob naturel — Tendance',
    price: 47,
    description: "Perruque bob courte lace front en cheveux humains. La coupe bob est indémodable et flatteuse pour tous les visages. Légère, facile à coiffer et à entretenir.",
    benefits: ['Bob flatteuse tous visages', 'Légère et confortable', "Facile d'entretien", 'Cheveux humains'],
    img: 'images/dh33_perruque_bob.jpg',
    variants: [
      { couleur: '#1 — Noir jais',       hex: '#050505', stripe: 'https://buy.stripe.com/fZu8wH0IrgAFbrBdUicfL3q' },
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/dRmaEP0Irach1R1dUicfL3r' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/14A14fezhckpdzJ4jIcfL3s' },
      { couleur: '#18 — Blond miel',     hex: '#c8a35a', stripe: 'https://buy.stripe.com/fZu4grdvdach3Z9cQecfL3t' },
      { couleur: '#613 — Blond clair',   hex: '#e8d5a3', stripe: 'https://buy.stripe.com/8x26oz3UD5W13Z917wcfL3u' },
      { couleur: '#33 — Auburn cuivré',  hex: '#8b2500', stripe: 'https://buy.stripe.com/eVqfZ99eX4RX8fp3fEcfL3v' },
    ]
  },
  {
    id: 'dh34', cat: 'perruques',
    name: 'Perruque Ombré Lace Front 18"',
    subtitle: 'Dégradé naturel — Tendance',
    price: 64,
    description: "Perruque lace front en cheveux humains avec effet ombré naturel. 18 pouces, densité 150%. L'ombré donne un effet soleil naturel sans coloration agressive.",
    benefits: ['Ombré naturel tendance', 'Effet soleil sans colorant', '18 pouces — longueur idéale', 'Densité 150%'],
    img: 'images/dh34_perruque_ombre.jpg',
    variants: [
      { couleur: '#1B/#27 — Noir→blond fraise',     hex: 'ombre', stripe: 'https://buy.stripe.com/fZu6oz0Ir1FL7bl2bAcfL3w' },
      { couleur: '#1B/#30 — Noir→auburn',           hex: 'ombre', stripe: 'https://buy.stripe.com/dRmbITezhckpdzJ2bAcfL3x' },
      { couleur: '#1B/#60 — Noir→platine',          hex: 'ombre', stripe: 'https://buy.stripe.com/aFa6oz8aTbglfHR03scfL3y' },
      { couleur: '#1B/#613 — Noir→blond',           hex: 'ombre', stripe: 'https://buy.stripe.com/4gM28jbn54RX8fp03scfL3z' },
      { couleur: '#2/#6 — Brun foncé→châtain',      hex: 'ombre', stripe: 'https://buy.stripe.com/28E5kvaj14RX7bl9E2cfL3A' },
      { couleur: '#2/#24 — Brun→blond doré',        hex: 'ombre', stripe: 'https://buy.stripe.com/5kQfZ91Mv98dcvFdUicfL3B' },
      { couleur: '#4/#27 — Chocolat→blond fraise',  hex: 'ombre', stripe: 'https://buy.stripe.com/7sY8wHcr9ach0MX03scfL3C' },
      { couleur: '#6/#20 — Châtain→blond doré',     hex: 'ombre', stripe: 'https://buy.stripe.com/3cI9ALdvddotanx8zYcfL3D' },
    ]
  },
  {
    id: 'dh35', cat: 'perruques',
    name: 'Perruque Highlight Lace Front',
    subtitle: 'Mèches naturelles — Look salon',
    price: 69,
    description: "Perruque lace front avec mèches highlight naturelles en cheveux humains. Les reflets chaleureux donnent du relief et de la profondeur, créant l'illusion d'une couleur réalisée en salon.",
    benefits: ['Mèches highlight naturelles', 'Relief et profondeur', 'Look salon sans effort', 'Cheveux humains'],
    img: 'images/dh35_perruque_highlight.jpg',
    variants: [
      { couleur: '#1B/#4/#27 — Noir+Chocolat+Blond', hex: 'ombre', stripe: 'https://buy.stripe.com/7sYeV58aTgAF7blcQecfL3E' },
      { couleur: '#4/#27 — Chocolat→blond fraise',   hex: 'ombre', stripe: 'https://buy.stripe.com/cNi7sD2QzbgldzJ03scfL3F' },
      { couleur: '#2/#6 — Brun foncé→châtain',       hex: 'ombre', stripe: 'https://buy.stripe.com/fZu00b76Pdot0MXdUicfL3G' },
      { couleur: '#1B/#6 — Noir→châtain',            hex: 'ombre', stripe: 'https://buy.stripe.com/cNicMX2Qzdot8fp4jIcfL3H' },
      { couleur: '#12/#613 — Brun clair→blond',      hex: 'ombre', stripe: 'https://buy.stripe.com/14A7sD0Irckp67hg2qcfL3I' },
    ]
  },

  // ── CAT 4 : Faux Locks (avec variantes couleur) ────────────
  {
    id: 'dh36', cat: 'locks-faux',
    name: 'Faux Locks Crochet 24"',
    subtitle: 'Pack x6 — Pose rapide',
    price: 13,
    description: "Pack de 6 mèches de faux locks crochet 24 pouces pour créer une coiffure de faux dreadlocks en quelques heures. Fibre synthétique douce et légère, aspect naturel.",
    benefits: ['Pack x6 mèches', 'Technique crochet', 'Aspect naturel', 'Pose en quelques heures'],
    img: 'images/dh36_faux_locks.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/4gMaEP1MvgAFeDN17wcfL3J' },
      { couleur: '#2 — Brun foncé',      hex: '#2c1a0e', stripe: 'https://buy.stripe.com/fZucMXezh3NT2V5bMacfL3K' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/fZu4graj1ach9jtg2qcfL3L' },
      { couleur: '#33 — Auburn cuivré',  hex: '#8b2500', stripe: 'https://buy.stripe.com/9B600b62LgAF3Z9cQecfL3M' },
      { couleur: '#99J — Bordeaux',      hex: '#4a0010', stripe: 'https://buy.stripe.com/7sY28j62L2JPeDN03scfL3N' },
      { couleur: '#350 — Gingembre',     hex: '#b84a00', stripe: 'https://buy.stripe.com/00w14f3UD1FLeDN7vUcfL3O' },
    ]
  },
  {
    id: 'dh37', cat: 'locks-faux',
    name: 'Faux Locks Goddess Bouclés 20"',
    subtitle: 'Pack x6 — Style déesse',
    price: 14,
    description: "Pack de 6 mèches goddess locs bouclées 20 pouces. Les goddess locs ont des bouts bouclés et ondulés qui donnent un aspect bohème et romantique.",
    benefits: ['Bouts bouclés bohèmes', 'Style goddess tendance', 'Pack x6', 'Coiffure protectrice'],
    img: 'images/dh37_goddess_locs.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/5kQ8wH9eX7052V53fEcfL3P' },
      { couleur: '#2 — Brun foncé',      hex: '#2c1a0e', stripe: 'https://buy.stripe.com/cNi00b1Mvckp2V517wcfL3Q' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/14AfZ9bn5bgl1R103scfL3R' },
      { couleur: '#30 — Auburn moyen',   hex: '#7a2f1a', stripe: 'https://buy.stripe.com/8x2dR1dvd4RX7bl5nMcfL3S' },
      { couleur: '#99J — Bordeaux',      hex: '#4a0010', stripe: 'https://buy.stripe.com/eVq4grcr9esx1R1g2qcfL3T' },
      { couleur: '#350 — Gingembre',     hex: '#b84a00', stripe: 'https://buy.stripe.com/bJe3cngHp849dzJdUicfL3U' },
    ]
  },
  {
    id: 'dh38', cat: 'locks-faux',
    name: 'Faux Locks Distressed 36"',
    subtitle: 'Pack x4 — Effet naturel vieilli',
    price: 15,
    description: "Pack de 4 mèches faux locks distressed 36 pouces très longues. L'effet distressed reproduit l'aspect naturel des vraies dreadlocks avec de légères irrégularités pour un rendu authentique.",
    benefits: ['Très longues 36 pouces', 'Effet naturel authentique', 'Aspect dreadlocks vraies', 'Pack x4'],
    img: 'images/dh38_distressed_locs.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/fZu00b0Ir8499jt8zYcfL3V' },
      { couleur: '#2 — Brun foncé',      hex: '#2c1a0e', stripe: 'https://buy.stripe.com/8x228j9eX705cvFaI6cfL3W' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/28E5kv0IrgAF0MX4jIcfL3X' },
      { couleur: '#33 — Auburn cuivré',  hex: '#8b2500', stripe: 'https://buy.stripe.com/dRm5kvaj13NTgLVaI6cfL3Y' },
      { couleur: '#99J — Bordeaux',      hex: '#4a0010', stripe: 'https://buy.stripe.com/fZufZ94YHach3Z98zYcfL3Z' },
    ]
  },
  {
    id: 'dh39', cat: 'locks-faux',
    name: 'Faux Locks Boho Hippie 28"',
    subtitle: 'Pack x6 — Esprit libre',
    price: 13,
    description: "Pack de 6 mèches faux locks boho 28 pouces avec fils de couleur et perles intégrés pour un look hippie chic. La coiffure protectrice idéale pour l'été et les festivals.",
    benefits: ['Style boho hippie', 'Fils colorés décoratifs', 'Pack x6', "Parfait pour l'été"],
    img: 'images/dh39_boho_locs.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/3cIdR10Ir5W153d03scfL40' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/6oU00b1MvesxanxdUicfL41' },
      { couleur: '#33 — Auburn cuivré',  hex: '#8b2500', stripe: 'https://buy.stripe.com/28E3cn1Mv1FL3Z96rQcfL42' },
      { couleur: 'Mix tie-dye coloré',   hex: 'ombre',   stripe: 'https://buy.stripe.com/eVq00b1MvgAF3Z9bMacfL43' },
    ]
  },
  {
    id: 'dh40', cat: 'locks-faux',
    name: 'Soft Locs Crochet Pré-bouclés 18"',
    subtitle: 'Pack x6 — Douceur et légèreté',
    price: 12,
    description: "Pack de 6 mèches soft locs pré-bouclées 18 pouces. Les soft locs sont plus légères et plus douces que les faux locks classiques. Leur texture cotonneuse en fait la coiffure protectrice la plus confortable.",
    benefits: ['Ultra-légères et douces', 'Pré-bouclées express', 'Pack x6', 'Coiffure la plus confortable'],
    img: 'images/dh40_soft_locs.jpg',
    variants: [
      { couleur: '#1 — Noir jais',       hex: '#050505', stripe: 'https://buy.stripe.com/eVqaEPbn598d8fpbMacfL44' },
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/bJe7sDcr9gAFgLVg2qcfL45' },
      { couleur: '#2 — Brun foncé',      hex: '#2c1a0e', stripe: 'https://buy.stripe.com/3cI28jezhckpbrB03scfL46' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/5kQ7sDfDl0BH67hg2qcfL47' },
      { couleur: '#33 — Auburn cuivré',  hex: '#8b2500', stripe: 'https://buy.stripe.com/4gM4gr3UD1FL2V517wcfM00' },
      { couleur: '#99J — Bordeaux',      hex: '#4a0010', stripe: 'https://buy.stripe.com/00w5kv2QzckpfHR8zYcfM01' },
    ]
  },
  {
    id: 'dh41', cat: 'locks-faux',
    name: 'Passion Twist 18"',
    subtitle: 'Pack x6 — Twists soyeux',
    price: 11,
    description: "Pack de 6 mèches passion twist 18 pouces. Les passion twists ont une texture soyeuse et brillante très élégante. Coiffure protectrice tendance et facile à poser.",
    benefits: ['Texture soyeuse unique', 'Entre twist et locks', 'Aspect brillant élégant', 'Pack x6'],
    img: 'images/dh41_passion_twist.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/8x27sD3UD98dgLV03scfM02' },
      { couleur: '#2 — Brun foncé',      hex: '#2c1a0e', stripe: 'https://buy.stripe.com/bJebITaj14RX1R1g2qcfM03' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/dRm9ALfDlfwBeDNaI6cfM04' },
      { couleur: '#30 — Auburn moyen',   hex: '#7a2f1a', stripe: 'https://buy.stripe.com/5kQ4grcr998dbrBg2qcfM05' },
      { couleur: '#99J — Bordeaux',      hex: '#4a0010', stripe: 'https://buy.stripe.com/28EeV5cr90BHanx9E2cfM06' },
      { couleur: '#350 — Gingembre',     hex: '#b84a00', stripe: 'https://buy.stripe.com/dRm00baj13NT2V53fEcfM07' },
    ]
  },
  {
    id: 'dh42', cat: 'locks-faux',
    name: 'Spring Twist Court 10"',
    subtitle: 'Pack x6 — Coiffure courte',
    price: 10,
    description: "Pack de 6 mèches spring twist courts 10 pouces. Les spring twists ont une texture spiralée unique et très légère. Le format court est idéal pour une coiffure protectrice décontractée au quotidien.",
    benefits: ['Format court pratique', 'Texture spiralée légère', 'Pack x6', 'Idéal au quotidien'],
    img: 'images/dh42_spring_twist.jpg',
    variants: [
      { couleur: '#1 — Noir jais',       hex: '#050505', stripe: 'https://buy.stripe.com/14A9ALaj1dot53d6rQcfM08' },
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/28E9AL76Pckp7blaI6cfM09' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/28E5kv76Pbgl9jt2bAcfM0a' },
      { couleur: '#33 — Auburn cuivré',  hex: '#8b2500', stripe: 'https://buy.stripe.com/5kQeV5ezh2JP8fpdUicfM0b' },
      { couleur: '#99J — Bordeaux',      hex: '#4a0010', stripe: 'https://buy.stripe.com/aFa28jfDlesxcvFg2qcfM0c' },
    ]
  },
  {
    id: 'dh43', cat: 'locks-faux',
    name: 'Butterfly Locs Crochet 20"',
    subtitle: 'Pack x6 — Papillon tendance',
    price: 14,
    description: "Pack de 6 mèches butterfly locs 20 pouces. Les butterfly locs sont caractérisées par leurs boucles désordonnées et légères qui évoquent des ailes de papillon. LA coiffure tendance des réseaux sociaux.",
    benefits: ['LA coiffure tendance', 'Boucles légères papillon', 'Viral sur réseaux sociaux', 'Pack x6'],
    img: 'images/dh43_butterfly_locs.jpg',
    variants: [
      { couleur: '#1B — Noir naturel',   hex: '#1a1a1a', stripe: 'https://buy.stripe.com/00w6ozbn50BHanx7vUcfM0d' },
      { couleur: '#2 — Brun foncé',      hex: '#2c1a0e', stripe: 'https://buy.stripe.com/aFa00baj15W19jt9E2cfM0e' },
      { couleur: '#4 — Brun chocolat',   hex: '#3d2009', stripe: 'https://buy.stripe.com/3cI7sD1Mv8490MX17wcfM0f' },
      { couleur: '#33 — Auburn cuivré',  hex: '#8b2500', stripe: 'https://buy.stripe.com/5kQ4grezh0BH53daI6cfM0g' },
      { couleur: '#99J — Bordeaux',      hex: '#4a0010', stripe: 'https://buy.stripe.com/5kQ3cn4YHckp7blcQecfM0h' },
      { couleur: '#350 — Gingembre',     hex: '#b84a00', stripe: 'https://buy.stripe.com/cNieV50IrachbrB5nMcfM0i' },
    ]
  },

  // ── CAT 5 : Soins Locks (pas de variante couleur) ──────────
  { id: 'dh44', cat: 'locks-soin', name: 'Cire Locks Naturelle Démarrage', subtitle: '125ml — Pour débuter les locks', price: 10, description: "La cire naturelle pour locks est l'outil indispensable pour démarrer et maintenir ses dreadlocks. Sa formule à base de cires végétales torsade les cheveux proprement sans résidus.", benefits: ['Démarrage des locks', 'Sans résidus', 'Cires végétales naturelles', 'Locks bien formées'], img: 'images/dh44_cire_locks.jpg', stripe: 'https://buy.stripe.com/bJeeV54YH98d7blg2qcfL0n' },
  { id: 'dh45', cat: 'locks-soin', name: 'Gel Démarrage Locks Sans Résidu', subtitle: '200ml — Tenue sans dépôt', price: 11, description: "Gel spécialisé pour démarrer et retightener ses locks sans laisser de résidus blancs. Sa formule légère resserre les nouvelles pousses et garde les locks propres.", benefits: ['Zéro résidu blanc', 'Retightening facile', 'Resserre les pousses', 'Entre les retouches'], img: 'images/dh45_gel_locks.jpg', stripe: 'https://buy.stripe.com/bJeeV5fDlckp3Z92bAcfL0o' },
  { id: 'dh46', cat: 'locks-soin', name: 'Spray Hydratant Locks Quotidien', subtitle: '200ml — Hydratation entre lavages', price: 9, description: "Spray quotidien léger pour hydrater et rafraîchir les locks entre les lavages. Sa formule à base d'aloe vera, d'eau de coco et d'huiles légères nourrit sans alourdir.", benefits: ['Usage quotidien', "Aloe vera + eau de coco", "N'alourdit pas les locks", 'Anti-moisissures'], img: 'images/dh46_spray_locks.jpg', stripe: 'https://buy.stripe.com/eVq9AL62LckpcvF5nMcfL0p' },
  { id: 'dh47', cat: 'locks-soin', name: 'Huile Ricin + Argan pour Locks', subtitle: '100ml — Brillance et force', price: 9, description: "Mélange premium d'huile de ricin et d'argan spécialement formulé pour les locks. L'huile de ricin nourrit et épaissit, l'argan apporte brillance et protection.", benefits: ['Ricin + argan premium', 'Locks plus épaisses', 'Brillance intense', 'Cuir chevelu nourri'], img: 'images/dh47_huile_locks.jpg', stripe: 'https://buy.stripe.com/aFa8wHbn5fwBcvF7vUcfL0q' },
  { id: 'dh48', cat: 'locks-soin', name: 'Shampooing Purifiant Locks', subtitle: '300ml — Nettoyage profond', price: 10, description: "Shampooing spécialement formulé pour les locks : nettoie en profondeur sans laisser de résidus dans les mèches. Sa formule clarifiante élimine les dépôts de produits accumulés.", benefits: ['Élimine les dépôts', 'Aucun résidu dans les locks', 'Clarifiant profond', 'Locks propres et légères'], img: 'images/dh48_shampoing_locks.jpg', stripe: 'https://buy.stripe.com/3cI6ozaj1gAF1R17vUcfL0r' },
  { id: 'dh49', cat: 'locks-soin', name: 'Beurre de Karité Locks Nourrissant', subtitle: '150ml — Nutrition intense', price: 10, description: "Beurre de karité pur pour locks, formulé pour nourrir en profondeur les mèches sèches et les pointes abîmées. Sa texture riche pénètre la fibre pour une hydratation durable.", benefits: ['Karité pur pour locks', 'Nourrit pointes abîmées', 'Hydratation durable', 'Souplesse retrouvée'], img: 'images/dh49_beurre_locks.jpg', stripe: 'https://buy.stripe.com/aFabITcr9ckp3Z92bAcfL0s' },
  { id: 'dh50', cat: 'locks-soin', name: 'Sérum Brillance et Protection Locks', subtitle: '50ml — Finition éclatante', price: 9, description: "Sérum léger de finition pour les locks. Quelques gouttes suffisent pour apporter une brillance éclatante, sceller l'humidité et protéger les locks des agressions extérieures.", benefits: ['Brillance éclatante', "Scelle l'humidité", 'Protection UV', 'Quelques gouttes suffisent'], img: 'images/dh50_serum_locks.jpg', stripe: 'https://buy.stripe.com/aFa14f62L98dcvFaI6cfL0t' },

  // ── CAT 6 : Accessoires (pas de variante couleur) ──────────
  { id: 'dh51', cat: 'accessoires', name: 'Bonnet Satin Anti-casse Nuit', subtitle: 'Protection nocturne — Incontournable', price: 5, description: "Le bonnet en satin est l'accessoire numéro 1 de toute personne aux cheveux naturels. Le satin réduit les frottements nocturnes, préserve l'hydratation et évite la casse.", benefits: ['Réduit les frottements', "Préserve l'hydratation", 'Anti-casse nocturne', 'Maintient le coiffé'], img: 'images/dh51_bonnet_satin.jpg', stripe: 'https://buy.stripe.com/9B68wH3UD3NT1R14jIcfL0u' },
  { id: 'dh52', cat: 'accessoires', name: 'Serviette Microfibre Turban Cheveux', subtitle: 'Séchage doux sans frisottis', price: 5, description: "La serviette microfibre est indispensable pour les cheveux bouclés et naturels. Elle absorbe l'eau sans frotter ni créer de frisottis. Le turban se pose en 5 secondes.", benefits: ['Aucun frisotti', 'Absorption rapide', 'Turban auto-maintenu', 'Pour cheveux bouclés'], img: 'images/dh52_serviette_microfibre.jpg', stripe: 'https://buy.stripe.com/8x27sDdvd849brB6rQcfL0v' },
  { id: 'dh53', cat: 'accessoires', name: 'Brosse Masseur Cuir Chevelu Silicone', subtitle: 'Stimule la circulation', price: 5, description: "Ce masseur de cuir chevelu en silicone stimule la microcirculation sanguine pour une pousse accélérée. Il s'utilise pendant le shampooing pour masser et exfolier.", benefits: ['Stimule la circulation', 'Utilisation sous la douche', 'Exfolie le cuir chevelu', 'Silicone doux'], img: 'images/dh53_brosse_masseur.jpg', stripe: 'https://buy.stripe.com/dRm8wH1Mvckp53dg2qcfL0w' },
  { id: 'dh54', cat: 'accessoires', name: 'Peigne Démêlant Grandes Dents', subtitle: 'Sans casse ni douleur', price: 4, description: "Peigne à grandes dents spécialement conçu pour démêler les cheveux bouclés, frisés et naturels sans casse ni douleur. Ses dents larges et espacées glissent à travers les nœuds.", benefits: ['Sans casse ni douleur', 'Grandes dents espacées', 'Pour cheveux bouclés', 'Outil de base essentiel'], img: 'images/dh54_peigne_dents.jpg', stripe: 'https://buy.stripe.com/bJe9ALbn5ckp53dcQecfL0x' },
  { id: 'dh55', cat: 'accessoires', name: 'Aiguille Crochet Locks et Tresses', subtitle: 'Outil de pose et entretien', price: 4, description: "Aiguille crochet indispensable pour la pose des coiffures crochet braids, faux locks, twists et pour l'entretien des vraies locks. Sa forme en crochet permet d'insérer les mèches avec précision.", benefits: ['Pose des faux locks', 'Entretien des vraies locks', 'Rentrer les bouts', 'Outil précis et pratique'], img: 'images/dh55_aiguille_crochet.jpg', stripe: 'https://buy.stripe.com/28E6ozdvd4RXdzJcQecfL0y' },
];

const CATEGORIES = [
  { id: 'all',        label: '✨ Tous les produits' },
  { id: 'soins',      label: '💧 Soins & Huiles' },
  { id: 'extensions', label: '💇 Extensions' },
  { id: 'perruques',  label: '👑 Perruques' },
  { id: 'locks-faux', label: '🔒 Faux Locks' },
  { id: 'locks-soin', label: '🌿 Soins Locks' },
  { id: 'accessoires',label: '🪮 Accessoires' },
];
