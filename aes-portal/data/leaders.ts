// Historical Pan-African Leaders Data for Agent AI Educational Chatbot

export interface Leader {
  id: string;
  name: string;
  fullName: string;
  role: string;
  country: string;
  countryFlag: string;
  era: string;
  birthYear: number;
  deathYear?: number;
  imageUrl: string;
  keyThemes: string[];
  biography: string;
  quotes: Quote[];
  achievements: Achievement[];
  topics: Topic[];
}

export interface Quote {
  text: string;
  context?: string;
  year?: number;
}

export interface Achievement {
  title: string;
  description: string;
  year?: number;
  icon?: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  category: 'politics' | 'economics' | 'military' | 'culture' | 'pan-africanism';
}

export const leaders: Leader[] = [
  {
    id: "sankara",
    name: "Thomas Sankara",
    fullName: "Thomas Isidore Noël Sankara",
    role: "President of Burkina Faso",
    country: "Burkina Faso",
    countryFlag: "🇧🇫",
    era: "1983-1987",
    birthYear: 1949,
    deathYear: 1987,
    imageUrl: "/aes/AES/ThomasSankara.jpg",
    keyThemes: ["Revolution", "Self-Sufficiency", "Women's Rights", "Anti-Imperialism"],
    biography: `Thomas Sankara was a Burkinabè military officer and revolutionary who served as President of Burkina Faso from 1983 until his assassination in 1987. Often called "Africa's Che Guevara," he led one of the most ambitious experiments in African socialism.

He renamed Upper Volta to Burkina Faso ("Land of Incorruptible People"), launched nationwide literacy campaigns, vaccinated 2.5 million children against meningitis, yellow fever, and measles, planted over 10 million trees to combat desertification, and banned female genital mutilation and forced marriages.

Sankara refused foreign aid that came with strings attached, advocated for African self-reliance, and lived a modest lifestyle—cycling to work and limiting his salary. His government achieved food self-sufficiency and dramatically improved literacy rates.`,
    quotes: [
      {
        text: "While revolutionaries as individuals can be murdered, you cannot kill ideas.",
        context: "On the immortality of revolutionary thought",
        year: 1987
      },
      {
        text: "Imperialism often occurs in more subtle forms, a loan, food aid, blackmail. We are fighting this system that allows a handful of men on Earth to rule all of humanity.",
        context: "On neo-colonialism and economic imperialism",
        year: 1984
      },
      {
        text: "He who feeds you, controls you.",
        context: "On food sovereignty and self-reliance"
      },
      {
        text: "The enemies of a people are those who keep them in ignorance.",
        context: "On education and literacy"
      },
      {
        text: "A soldier without any political or ideological training is a potential criminal.",
        context: "On military education"
      }
    ],
    achievements: [
      {
        title: "National Literacy Campaign",
        description: "Launched a massive education program that increased literacy from 13% to 73% in just four years",
        year: 1984,
        icon: "book"
      },
      {
        title: "Vaccination of 2.5 Million Children",
        description: "Organized one of the largest vaccination campaigns in African history, protecting children from meningitis, yellow fever, and measles",
        year: 1984,
        icon: "heart"
      },
      {
        title: "Women's Rights Revolution",
        description: "Banned forced marriages and female genital mutilation, appointed women to major government positions, and promoted gender equality",
        year: 1983,
        icon: "users"
      },
      {
        title: "Food Self-Sufficiency",
        description: "Achieved national food self-sufficiency within four years through agricultural reforms and land redistribution",
        year: 1986,
        icon: "wheat"
      },
      {
        title: "Environmental Protection",
        description: "Planted over 10 million trees to combat desertification and promote environmental sustainability",
        year: 1985,
        icon: "tree"
      }
    ],
    topics: [
      {
        id: "sankara-revolution",
        title: "Sankara's Revolution",
        description: "Learn about the four-year transformation that changed Burkina Faso forever",
        category: "politics"
      },
      {
        id: "sankara-economics",
        title: "Economic Self-Reliance",
        description: "How Sankara rejected foreign aid and achieved food sovereignty",
        category: "economics"
      },
      {
        id: "sankara-women",
        title: "Women's Liberation",
        description: "Sankara's groundbreaking policies for gender equality",
        category: "culture"
      }
    ]
  },
  {
    id: "lumumba",
    name: "Patrice Lumumba",
    fullName: "Patrice Émery Lumumba",
    role: "First Prime Minister of the DRC",
    country: "Democratic Republic of the Congo",
    countryFlag: "🇨🇩",
    era: "1960",
    birthYear: 1925,
    deathYear: 1961,
    imageUrl: "/aes/AES/lumumba-stamp-ussr.jpg",
    keyThemes: ["Independence", "Anti-Colonialism", "African Unity", "Sovereignty"],
    biography: `Patrice Lumumba was a Congolese politician and independence leader who became the first democratically elected Prime Minister of the Republic of the Congo in 1960. He is widely regarded as a martyr for Pan-African liberation.

A powerful orator and passionate nationalist, Lumumba founded the Mouvement National Congolais (MNC), the first nationwide Congolese political party. His fiery independence day speech, delivered in the presence of Belgian King Baudouin, electrified Africa and alarmed colonial powers.

Lumumba sought to maintain Congo's territorial integrity and control over its vast mineral resources—particularly uranium and copper. His determination to keep Congo united and truly independent led to his overthrow in a coup backed by Belgium and the CIA, and his subsequent assassination in January 1961.

His death galvanized the Pan-African movement and remains a symbol of the violent lengths to which colonial powers would go to maintain control over African resources.`,
    quotes: [
      {
        text: "The day will come when history will speak. But it will not be the history which will be taught in Brussels, Paris, Washington or the United Nations... Africa will write its own history.",
        context: "On African historiography",
        year: 1960
      },
      {
        text: "We are not alone. Africa, Asia, and the free and liberated peoples from all corners of the world will always be found at the side of the Congolese.",
        context: "On international solidarity",
        year: 1960
      },
      {
        text: "We have known ironies and insults. We have had to submit to blows morning, noon, and night, because we were Negroes.",
        context: "Independence Day speech",
        year: 1960
      },
      {
        text: "Without dignity there is no liberty, without justice there is no dignity, and without independence there are no free men.",
        context: "On the meaning of true freedom"
      }
    ],
    achievements: [
      {
        title: "Founded the MNC",
        description: "Created the first nationwide political movement in Congo that transcended ethnic divisions",
        year: 1958,
        icon: "users"
      },
      {
        title: "Led Independence Movement",
        description: "Negotiated and secured Congo's independence from Belgium after nearly 80 years of colonial rule",
        year: 1960,
        icon: "flag"
      },
      {
        title: "Historic Independence Speech",
        description: "Delivered a powerful unscripted speech that articulated the suffering of colonialism and the promise of freedom",
        year: 1960,
        icon: "mic"
      },
      {
        title: "Symbol of Pan-Africanism",
        description: "His martyrdom inspired generations of African liberation movements and remains a rallying cry for sovereignty",
        year: 1961,
        icon: "star"
      }
    ],
    topics: [
      {
        id: "lumumba-independence",
        title: "The Fight for Independence",
        description: "How Lumumba led Congo to freedom in 1960",
        category: "politics"
      },
      {
        id: "lumumba-speech",
        title: "The Independence Day Speech",
        description: "The powerful address that shocked the world",
        category: "politics"
      },
      {
        id: "lumumba-assassination",
        title: "The Assassination",
        description: "The tragic conspiracy that ended Lumumba's life",
        category: "politics"
      }
    ]
  },
  {
    id: "keita",
    name: "Modibo Keïta",
    fullName: "Modibo Keïta",
    role: "First President of Mali",
    country: "Mali",
    countryFlag: "🇲🇱",
    era: "1960-1968",
    birthYear: 1915,
    deathYear: 1977,
    imageUrl: "/aes/AES/sahel-mao.jpg",
    keyThemes: ["Pan-Africanism", "Socialism", "Federation", "Non-Alignment"],
    biography: `Modibo Keïta was the first President of Mali, serving from 1960 to 1968. A schoolteacher who became a revolutionary, he was one of the founding fathers of both Malian independence and the broader Pan-African movement.

Keïta was instrumental in founding the Rassemblement Démocratique Africain (RDA), a major independence movement across French West Africa. He briefly led the Mali Federation, an attempt to unite Senegal and Mali, demonstrating his commitment to African unity.

As President, Keïta pursued socialist economic policies, nationalized key industries, and maintained a non-aligned foreign policy during the Cold War. He strengthened ties with the Soviet Union, China, and other socialist nations while maintaining Mali's independence.

Though overthrown in a 1968 coup, Keïta's vision of African unity and self-determination continues to inspire contemporary leaders in the Sahel, including those now leading the Alliance of Sahel States.`,
    quotes: [
      {
        text: "Africa must unite or perish.",
        context: "On the necessity of African unity"
      },
      {
        text: "We must achieve economic independence as the foundation of our political independence.",
        context: "On economic sovereignty"
      },
      {
        text: "The colonial era is over, but the fight for true independence continues.",
        context: "On neo-colonialism"
      },
      {
        text: "Education is the cornerstone of development. An educated people is a free people.",
        context: "On the importance of education"
      }
    ],
    achievements: [
      {
        title: "Founder of the RDA",
        description: "Co-founded the Rassemblement Démocratique Africain, uniting independence movements across French West Africa",
        year: 1946,
        icon: "users"
      },
      {
        title: "Mali Federation",
        description: "Led the short-lived but visionary federation between Senegal and Mali as a model for African unity",
        year: 1959,
        icon: "globe"
      },
      {
        title: "Economic Nationalization",
        description: "Nationalized key industries including banking and mining to ensure Malian control over national resources",
        year: 1962,
        icon: "building"
      },
      {
        title: "Non-Aligned Movement",
        description: "Positioned Mali as a leader in the Non-Aligned Movement, maintaining independence from Cold War blocs",
        year: 1961,
        icon: "balance"
      }
    ],
    topics: [
      {
        id: "keita-federation",
        title: "The Mali Federation",
        description: "The ambitious attempt to unite Senegal and Mali",
        category: "pan-africanism"
      },
      {
        id: "keita-socialism",
        title: "Malian Socialism",
        description: "Keïta's economic vision for Mali",
        category: "economics"
      },
      {
        id: "keita-rda",
        title: "The RDA Movement",
        description: "Building the independence movement across French West Africa",
        category: "politics"
      }
    ]
  },
  {
    id: "nkrumah",
    name: "Kwame Nkrumah",
    fullName: "Kwame Nkrumah",
    role: "First President of Ghana",
    country: "Ghana",
    countryFlag: "🇬🇭",
    era: "1957-1966",
    birthYear: 1909,
    deathYear: 1972,
    imageUrl: "/aes/AES/leaders-aes.jpg",
    keyThemes: ["African Unity", "Pan-Africanism", "Development", "Anti-Neocolonialism"],
    biography: `Kwame Nkrumah was the first President of Ghana and a leading figure in the Pan-African movement. He led the Gold Coast's drive for independence from Britain and became the first Prime Minister of an independent Ghana in 1957—the first sub-Saharan African country to gain independence from European colonialism.

An intellectual and visionary, Nkrumah studied in the United States and Britain, where he developed his ideas on African liberation and unity. His book "Neo-Colonialism: The Last Stage of Imperialism" analyzed how former colonial powers maintained economic control over newly independent nations.

Nkrumah was a founding member of the Organisation of African Unity (OAU) and advocated for a United States of Africa—a single continental government. He believed that only through unity could Africa achieve true independence and development.

His policies included rapid industrialization, the construction of the Akosombo Dam, and massive investments in education. Though overthrown in 1966, his vision of African unity remains central to contemporary Pan-African thought.`,
    quotes: [
      {
        text: "We face neither East nor West; we face forward.",
        context: "On African non-alignment and independent path",
        year: 1960
      },
      {
        text: "I am not African because I was born in Africa but because Africa was born in me.",
        context: "On African identity"
      },
      {
        text: "Seek ye first the political kingdom, and all other things shall be added unto you.",
        context: "On the priority of political independence"
      },
      {
        text: "The forces that unite us are intrinsic and greater than the superimposed influences that keep us apart.",
        context: "On African unity"
      },
      {
        text: "Divided we are weak; united, Africa could become one of the greatest forces for good in the world.",
        context: "On the potential of a united Africa"
      }
    ],
    achievements: [
      {
        title: "Ghana's Independence",
        description: "Led the Gold Coast to become the first sub-Saharan African country to gain independence from European colonial rule",
        year: 1957,
        icon: "flag"
      },
      {
        title: "Organisation of African Unity",
        description: "Founding member and driving force behind the OAU, predecessor to the African Union",
        year: 1963,
        icon: "globe"
      },
      {
        title: "Akosombo Dam",
        description: "Constructed one of the largest man-made lakes in the world to power Ghana's industrialization",
        year: 1965,
        icon: "zap"
      },
      {
        title: "Pan-African Congresses",
        description: "Organized and hosted Pan-African conferences that united liberation movements across the continent",
        year: 1958,
        icon: "users"
      },
      {
        title: "Educational Revolution",
        description: "Established free and compulsory education, building hundreds of schools and expanding universities",
        year: 1961,
        icon: "graduation-cap"
      }
    ],
    topics: [
      {
        id: "nkrumah-unity",
        title: "United States of Africa",
        description: "Nkrumah's vision for continental unity",
        category: "pan-africanism"
      },
      {
        id: "nkrumah-neocolonialism",
        title: "Neo-Colonialism",
        description: "Understanding the new face of colonial exploitation",
        category: "economics"
      },
      {
        id: "nkrumah-independence",
        title: "Ghana's Independence",
        description: "The first victory for African liberation",
        category: "politics"
      }
    ]
  }
];

// Educational topics for the chatbot
export const educationalTopics = [
  {
    id: "independence-movements",
    title: "Independence Movements",
    description: "Explore how African nations fought for and won their freedom",
    icon: "flag",
    leaderIds: ["lumumba", "nkrumah", "keita"]
  },
  {
    id: "economic-sovereignty",
    title: "Economic Sovereignty",
    description: "Learn about African efforts to control their own resources",
    icon: "building",
    leaderIds: ["sankara", "nkrumah", "keita"]
  },
  {
    id: "pan-african-vision",
    title: "Pan-African Vision",
    description: "The dream of African unity from Nkrumah to today",
    icon: "globe",
    leaderIds: ["nkrumah", "keita", "lumumba", "sankara"]
  },
  {
    id: "revolutionary-policies",
    title: "Revolutionary Policies",
    description: "Bold reforms that transformed nations",
    icon: "sparkles",
    leaderIds: ["sankara", "nkrumah"]
  },
  {
    id: "legacy-today",
    title: "Legacy in AES Today",
    description: "How these leaders inspire the Alliance of Sahel States",
    icon: "link",
    leaderIds: ["sankara", "lumumba", "keita", "nkrumah"]
  }
];

// Helper function to get leader by ID
export function getLeaderById(id: string): Leader | undefined {
  return leaders.find(leader => leader.id === id);
}

// Helper function to get random quote
export function getRandomQuote(): { quote: Quote; leader: Leader } {
  const leader = leaders[Math.floor(Math.random() * leaders.length)];
  const quote = leader.quotes[Math.floor(Math.random() * leader.quotes.length)];
  return { quote, leader };
}
