// Custom Disease API Service
export interface CustomDisease {
  id: number;
  name: string;
  icdCode: string;
  namaste: string;
  symptoms: string[];
}

// Your comprehensive disease database
export const customDiseases: CustomDisease[] = [
  {
    id: 1,
    name: "Chicken pox",
    icdCode: "1E90",
    namaste: "chaechak",
    symptoms: ["fever", "rash", "itching", "fatigue"],
  },
  {
    id: 2,
    name: "Goiter",
    icdCode: "5A01.Z",
    namaste: "Ghengh",
    symptoms: ["neck swelling", "difficulty swallowing", "cough", "hoarseness"],
  },
  {
    id: 3,
    name: "Hypertension",
    icdCode: "BA00.0",
    namaste: "Rakta Gata Vata",
    symptoms: ["Headache", "Breathlessness", "Nosebleed", "Dizziness"],
  },
  {
    id: 4,
    name: "Psoriasis",
    icdCode: "EB05.1",
    namaste: "Eka Kushtha",
    symptoms: ["Itching", "Scaling", "Cracks", "Swelling"],
  },
  {
    id: 5,
    name: "Arthritis",
    icdCode: "FA01.0",
    namaste: "Sandhivata",
    symptoms: ["Pain", "Swelling", "Stiffness", "Immobility"],
  },
  {
    id: 6,
    name: "Chronic Sinusitis",
    icdCode: "CA0C.1",
    namaste: "Dushta Pratishyaya",
    symptoms: ["Congestion", "Discharge", "Facialpain", "Fatigue"],
  },
  {
    id: 7,
    name: "Migraine",
    icdCode: "8A80",
    namaste: "Ardhavabhedaka",
    symptoms: ["Headache", "Nausea", "Light", "Vision"],
  },
  {
    id: 8,
    name: "Allergic Rhinitis",
    icdCode: "CA08",
    namaste: "Pratishyaya",
    symptoms: ["Sneezing", "Runny", "Itchy", "Watery"],
  },
  {
    id: 9,
    name: "Diabetes Type 2",
    icdCode: "5A11",
    namaste: "Madhumeha",
    symptoms: ["Thirst", "Urination", "Hunger", "Fatigue"],
  },
  {
    id: 10,
    name: "Asthma",
    icdCode: "CA23",
    namaste: "Tamaka Shwasa",
    symptoms: ["Breathless", "Wheeze", "Cough", "Tightness"],
  },
  {
    id: 12,
    name: "Tuberculosis",
    icdCode: "1B11",
    namaste: "Rajayakshma",
    symptoms: ["Cough", "Blood", "Fever", "Weightloss"],
  },
  {
    id: 13,
    name: "Anemia",
    icdCode: "3A00",
    namaste: "Pandu Roga",
    symptoms: ["Fatigue", "Pallor", "Dizziness", "Coldness"],
  },
  {
    id: 14,
    name: "Jaundice",
    icdCode: "DB90",
    namaste: "Kamala",
    symptoms: ["Yellow", "Urine", "Nausea", "Pain"],
  },
  {
    id: 15,
    name: "Tumour",
    icdCode: "2C23.10",
    namaste: "Arbuda",
    symptoms: ["Sorethroat", "Lump", "Dysphagia", "Hoarseness"],
  },
  {
    id: 16,
    name: "Abscess",
    icdCode: "CA0K0",
    namaste: "Vidradhi",
    symptoms: ["Fever", "Stiffness", "Drooling", "Dyspnea"],
  },
  {
    id: 17,
    name: "Hoarseness",
    icdCode: "MA82.10",
    namaste: "Svarabheda",
    symptoms: ["Raspy", "Pitch", "Fatigue", "Irritation"],
  },
  {
    id: 18,
    name: "Voice Disorder",
    icdCode: "MA82.1Z",
    namaste: "Vak Vikara",
    symptoms: ["Slurred", "Unclear", "Tone", "Clarity"],
  },
  {
    id: 19,
    name: "Inflammation",
    icdCode: "CA05.1",
    namaste: "Shotha",
    symptoms: ["Pain", "Fever", "Swelling", "Redness"],
  },
  {
    id: 20,
    name: "Pharyngitis",
    icdCode: "CA02.Z",
    namaste: "Galashundi",
    symptoms: ["Sorethroat", "Fever", "Nodes", "Cough"],
  },
  {
    id: 21,
    name: "Tonsillitis",
    icdCode: "CA03.Z",
    namaste: "Galagraha",
    symptoms: ["Swelling", "Pus", "Pain", "Fever"],
  },
  {
    id: 22,
    name: "Speech Disorder",
    icdCode: "6A01.Z",
    namaste: "Vak Dosha",
    symptoms: ["Speaking", "Slurred", "Quality", "Articulation"],
  },
  {
    id: 23,
    name: "Lymphadenitis",
    icdCode: "MG22.Z",
    namaste: "Granthi",
    symptoms: ["Swelling", "Lumps", "Pain", "Fever"],
  },
  {
    id: 24,
    name: "Laryngitis",
    icdCode: "CA05.0",
    namaste: "Kantha Shotha",
    symptoms: ["Hoarseness", "Cough", "Dryness", "Fever"],
  },
  {
    id: 25,
    name: "Chronic Kidney Disease",
    icdCode: "GB61",
    namaste: "Vrikka Roga",
    symptoms: ["Swelling", "Nausea", "Reduced-urine", "Fatigue"],
  },
  {
    id: 26,
    name: "Ischemic Heart Disease",
    icdCode: "BA40-BA6Z",
    namaste: "Hridaya Roga",
    symptoms: ["Chest-pain", "Fatigue", "Breathlessness", "Sweating"],
  },
  {
    id: 27,
    name: "Stroke (CVA)",
    icdCode: "8B11",
    namaste: "Pakshaghata",
    symptoms: ["Weakness", "Speech-problems", "Vision-changes", "Paralysis"],
  },
  {
    id: 28,
    name: "COPD",
    icdCode: "CA22",
    namaste: "Swasa Roga",
    symptoms: ["Cough", "Wheezing", "Breathing-difficulty", "Phlegm"],
  },
  {
    id: 29,
    name: "Rheumatoid Arthritis",
    icdCode: "FA00.0",
    namaste: "Amavata",
    symptoms: ["Joint-pain", "Stiffness", "Swelling", "Morning-stiffness"],
  },
  {
    id: 30,
    name: "Osteoarthritis",
    icdCode: "FA01.1",
    namaste: "Sandhigata Vata",
    symptoms: ["Joint-pain", "Reduced-mobility", "Bone-friction", "Stiffness"],
  },
  {
    id: 31,
    name: "Gastritis",
    icdCode: "DA40",
    namaste: "Amlapitta",
    symptoms: ["Stomach-pain", "Nausea", "Bloating", "Acid-reflux"],
  },
  {
    id: 32,
    name: "Peptic Ulcer",
    icdCode: "DA63",
    namaste: "Parinamashula",
    symptoms: ["Burning-pain", "Nausea", "Loss-of-appetite", "Bloating"],
  },
  {
    id: 33,
    name: "Constipation",
    icdCode: "ME05",
    namaste: "Vibandha",
    symptoms: ["Hard-stools", "Straining", "Incomplete-evacuation", "Bloating"],
  },
  {
    id: 34,
    name: "Diarrhea",
    icdCode: "ME05.1",
    namaste: "Atisara",
    symptoms: ["Loose-stools", "Frequency", "Cramping", "Dehydration"],
  },
  {
    id: 35,
    name: "Insomnia",
    icdCode: "7A00",
    namaste: "Anidra",
    symptoms: ["Sleep-difficulty", "Restlessness", "Fatigue", "Irritability"],
  },
  {
    id: 36,
    name: "Depression",
    icdCode: "6A70",
    namaste: "Vishada",
    symptoms: ["Sadness", "Loss-of-interest", "Fatigue", "Hopelessness"],
  },
  {
    id: 37,
    name: "Anxiety",
    icdCode: "6B00",
    namaste: "Chinta",
    symptoms: ["Worry", "Restlessness", "Tension", "Rapid-heartbeat"],
  },
  {
    id: 38,
    name: "Obesity",
    icdCode: "5B80",
    namaste: "Sthaulya",
    symptoms: ["Excess-weight", "Fatigue", "Joint-pain", "Breathlessness"],
  },
  {
    id: 39,
    name: "Malnutrition",
    icdCode: "5B50",
    namaste: "Karshya",
    symptoms: ["Weight-loss", "Weakness", "Muscle-wasting", "Fatigue"],
  },
  {
    id: 40,
    name: "Fever of Unknown Origin",
    icdCode: "MG50",
    namaste: "Jwara",
    symptoms: ["High-temperature", "Chills", "Weakness", "Sweating"],
  },
];

// Custom API service class that mimics real API behavior
export class CustomDiseaseAPI {
  private static instance: CustomDiseaseAPI;
  private diseases: CustomDisease[] = customDiseases;

  static getInstance(): CustomDiseaseAPI {
    if (!CustomDiseaseAPI.instance) {
      CustomDiseaseAPI.instance = new CustomDiseaseAPI();
    }
    return CustomDiseaseAPI.instance;
  }

  // Simulate API delay for realistic behavior
  private async delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Enhanced search with symptom-based matching and scoring
  async searchDiseases(
    query: string,
    limit: number = 10
  ): Promise<CustomDisease[]> {
    await this.delay(200); // Simulate API delay

    if (!query || query.length < 1) {
      return [];
    }

    const searchTerm = query.toLowerCase().trim();
    const queryWords = searchTerm
      .split(/\s+/)
      .filter((word) => word.length > 2);

    return this.diseases
      .map((disease) => {
        let score = 0;
        let matchType = "";

        // Exact name match (highest priority)
        if (disease.name.toLowerCase() === searchTerm) {
          score = 1000;
          matchType = "exact_name";
        }
        // Name starts with query
        else if (disease.name.toLowerCase().startsWith(searchTerm)) {
          score = 900;
          matchType = "name_start";
        }
        // Name contains query
        else if (disease.name.toLowerCase().includes(searchTerm)) {
          score = 800;
          matchType = "name_partial";
        }
        // ICD code match
        else if (disease.icdCode.toLowerCase().includes(searchTerm)) {
          score = 700;
          matchType = "icd_code";
        }
        // Namaste name match
        else if (disease.namaste.toLowerCase().includes(searchTerm)) {
          score = 600;
          matchType = "namaste";
        }
        // Symptom matches
        else {
          const symptomMatches = disease.symptoms.filter((symptom) => {
            const symptomLower = symptom.toLowerCase();
            // Exact symptom match
            if (symptomLower === searchTerm) return true;
            // Symptom contains search term
            if (symptomLower.includes(searchTerm)) return true;
            // Multi-word symptom matching
            return queryWords.some((word) => symptomLower.includes(word));
          });

          if (symptomMatches.length > 0) {
            // Score based on number and quality of symptom matches
            score = 400 + symptomMatches.length * 50;
            matchType = `symptoms_${symptomMatches.length}`;
          }
        }

        return { ...disease, score, matchType };
      })
      .filter((disease) => disease.score > 0)
      .sort((a, b) => {
        // Sort by score (highest first), then alphabetically
        if (a.score !== b.score) return b.score - a.score;
        return a.name.localeCompare(b.name);
      })
      .slice(0, limit)
      .map(({ score, matchType, ...disease }) => disease);
  }

  // Dedicated symptom-based search
  async searchBySymptoms(
    symptoms: string[],
    limit: number = 15
  ): Promise<CustomDisease[]> {
    await this.delay(300); // Simulate API delay

    if (!symptoms || symptoms.length === 0) {
      return [];
    }

    const normalizedSymptoms = symptoms
      .map((s) => s.toLowerCase().trim())
      .filter((s) => s.length > 2);

    if (normalizedSymptoms.length === 0) {
      return [];
    }

    return this.diseases
      .map((disease) => {
        const matchingSymptoms = disease.symptoms.filter((symptom) =>
          normalizedSymptoms.some((userSymptom) => {
            const symptomLower = symptom.toLowerCase();
            return (
              symptomLower.includes(userSymptom) ||
              userSymptom.includes(symptomLower) ||
              this.calculateSimilarity(symptomLower, userSymptom) > 0.7
            );
          })
        );

        return {
          ...disease,
          matchingSymptoms,
          matchCount: matchingSymptoms.length,
          matchPercentage:
            (matchingSymptoms.length / normalizedSymptoms.length) * 100,
        };
      })
      .filter((disease) => disease.matchCount > 0)
      .sort((a, b) => {
        // Sort by match percentage first, then by match count
        if (a.matchPercentage !== b.matchPercentage) {
          return b.matchPercentage - a.matchPercentage;
        }
        if (a.matchCount !== b.matchCount) {
          return b.matchCount - a.matchCount;
        }
        return a.name.localeCompare(b.name);
      })
      .slice(0, limit)
      .map(
        ({ matchingSymptoms, matchCount, matchPercentage, ...disease }) =>
          disease
      );
  }

  // Get all unique symptoms for autocomplete/suggestion
  getAllSymptoms(): string[] {
    const allSymptoms = new Set<string>();
    this.diseases.forEach((disease) => {
      disease.symptoms.forEach((symptom) => {
        allSymptoms.add(symptom);
      });
    });
    return Array.from(allSymptoms).sort();
  }

  // Calculate string similarity (simple implementation)
  private calculateSimilarity(str1: string, str2: string): number {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;

    if (longer.length === 0) return 1.0;

    const distance = this.levenshteinDistance(longer, shorter);
    return (longer.length - distance) / longer.length;
  }

  // Levenshtein distance calculation
  private levenshteinDistance(str1: string, str2: string): number {
    const matrix = [];

    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }

    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }

    return matrix[str2.length][str1.length];
  }

  // Get disease by ID
  async getDiseaseById(id: number): Promise<CustomDisease | null> {
    await this.delay(100);
    return this.diseases.find((disease) => disease.id === id) || null;
  }

  // Get disease by ICD code
  async getDiseaseByCode(code: string): Promise<CustomDisease | null> {
    await this.delay(100);
    return this.diseases.find((disease) => disease.icdCode === code) || null;
  }

  // Get disease suggestions based on symptoms
  async getDiseasesBySymptoms(symptoms: string[]): Promise<CustomDisease[]> {
    await this.delay(250);

    if (!symptoms.length) return [];

    const normalizedSymptoms = symptoms.map((s) => s.toLowerCase());

    return this.diseases
      .filter((disease) => {
        const matchingSymptoms = disease.symptoms.filter((symptom) =>
          normalizedSymptoms.some(
            (userSymptom) =>
              symptom.toLowerCase().includes(userSymptom) ||
              userSymptom.includes(symptom.toLowerCase())
          )
        );
        return matchingSymptoms.length > 0;
      })
      .sort((a, b) => {
        // Sort by number of matching symptoms (descending)
        const aMatches = a.symptoms.filter((symptom) =>
          normalizedSymptoms.some(
            (userSymptom) =>
              symptom.toLowerCase().includes(userSymptom) ||
              userSymptom.includes(symptom.toLowerCase())
          )
        ).length;

        const bMatches = b.symptoms.filter((symptom) =>
          normalizedSymptoms.some(
            (userSymptom) =>
              symptom.toLowerCase().includes(userSymptom) ||
              userSymptom.includes(symptom.toLowerCase())
          )
        ).length;

        return bMatches - aMatches;
      })
      .slice(0, 10);
  }
}

// Export singleton instance
export const diseaseAPI = CustomDiseaseAPI.getInstance();
