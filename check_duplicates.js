// Script to check for duplicates in disease data
const diseases = [
  { id: 1, name: "Chicken pox", icdCode: "1E90", namaste: "chaechak" },
  { id: 2, name: "Goiter", icdCode: "5A01.Z", namaste: "Ghengh" },
  {
    id: 3,
    name: "Hypertension",
    icdCode: "BA00.0",
    namaste: "Rakta Gata Vata",
  },
  { id: 4, name: "Psoriasis", icdCode: "EB05.1", namaste: "Eka Kushtha" },
  { id: 5, name: "Arthritis", icdCode: "FA01.0", namaste: "Sandhivata" },
  {
    id: 6,
    name: "Chronic Sinusitis",
    icdCode: "CA0C.1",
    namaste: "Dushta Pratishyaya",
  },
  { id: 7, name: "Migraine", icdCode: "8A80", namaste: "Ardhavabhedaka" },
  { id: 8, name: "Allergic Rhinitis", icdCode: "CA08", namaste: "Pratishyaya" },
  { id: 9, name: "Diabetes Type 2", icdCode: "5A11", namaste: "Madhumeha" },
  { id: 10, name: "Asthma", icdCode: "CA23", namaste: "Tamaka Shwasa" },
  { id: 11, name: "Tuberculosis", icdCode: "1B11", namaste: "Rajayakshma" },
  { id: 12, name: "Anemia", icdCode: "3A00", namaste: "Pandu Roga" },
  { id: 13, name: "Jaundice", icdCode: "DB90", namaste: "Kamala" },
  { id: 14, name: "Tumour", icdCode: "2C23.10", namaste: "Arbuda" },
  { id: 15, name: "Abscess", icdCode: "CA0K0", namaste: "Vidradhi" },
  { id: 16, name: "Hoarseness", icdCode: "MA82.10", namaste: "Svarabheda" },
  { id: 17, name: "Voice Disorder", icdCode: "MA82.1Z", namaste: "Vak Vikara" },
  { id: 18, name: "Inflammation", icdCode: "CA05.1", namaste: "Shotha" },
  { id: 19, name: "Pharyngitis", icdCode: "CA02.Z", namaste: "Galashundi" },
  { id: 20, name: "Tonsillitis", icdCode: "CA03.Z", namaste: "Galagraha" },
  { id: 21, name: "Speech Disorder", icdCode: "6A01.Z", namaste: "Vak Dosha" },
  { id: 22, name: "Lymphadenitis", icdCode: "MG22.Z", namaste: "Granthi" },
  { id: 23, name: "Laryngitis", icdCode: "CA05.0", namaste: "Kantha Shotha" },
  {
    id: 24,
    name: "Chronic Kidney Disease",
    icdCode: "GB61",
    namaste: "Vrikka Roga",
  },
  {
    id: 25,
    name: "Ischemic Heart Disease",
    icdCode: "BA40-BA6Z",
    namaste: "Hridaya Roga",
  },
  { id: 26, name: "Stroke (CVA)", icdCode: "8B11", namaste: "Pakshaghata" },
  { id: 27, name: "COPD", icdCode: "CA22", namaste: "Swasa Roga" },
  { id: 28, name: "Rheumatoid Arthritis", icdCode: "FA20", namaste: "Amavata" },
  { id: 29, name: "Epilepsy", icdCode: "8A60-8A6Z", namaste: "Apasmara" },
  { id: 30, name: "Pneumonia", icdCode: "J18*", namaste: "Kaphaja Jwara" },
  { id: 31, name: "Malaria", icdCode: "B50-B54*", namaste: "Vishama Jwara" },
  { id: 32, name: "Dengue Fever", icdCode: "A90*", namaste: "Dandaka Jwara" },
  {
    id: 33,
    name: "COVID-19 (Viral Pneumonia)",
    icdCode: "U07.1*",
    namaste: "Sankramaka Jwara",
  },
  { id: 34, name: "Hepatitis B", icdCode: "B16*", namaste: "Yakrit Shotha" },
  {
    id: 35,
    name: "Cervical Cancer",
    icdCode: "C53*",
    namaste: "Garbhashaya Arbuda",
  },
  { id: 36, name: "Breast Cancer", icdCode: "C50*", namaste: "Stana Arbuda" },
  {
    id: 37,
    name: "Gastric Ulcer (Peptic Ulcer)",
    icdCode: "K25*",
    namaste: "Parinaamashula",
  },
  { id: 38, name: "Cataract", icdCode: "H25*", namaste: "Timira" },
  { id: 39, name: "Appendicitis", icdCode: "K35*", namaste: "Antra Vriddhi" },
  {
    id: 40,
    name: "Osteoarthritis (Hip)",
    icdCode: "FA01.1",
    namaste: "Kati Sandhigata Vata",
  },
  {
    id: 41,
    name: "Osteoarthritis (Knee)",
    icdCode: "FA01.2",
    namaste: "Janu Sandhigata Vata",
  },
];

// Check for duplicate names
const nameMap = new Map();
const nameDuplicates = [];

diseases.forEach((disease) => {
  const name = disease.name.toLowerCase();
  if (nameMap.has(name)) {
    nameDuplicates.push({
      original: nameMap.get(name),
      duplicate: disease,
    });
  } else {
    nameMap.set(name, disease);
  }
});

// Check for duplicate ICD codes
const icdMap = new Map();
const icdDuplicates = [];

diseases.forEach((disease) => {
  const icd = disease.icdCode;
  if (icdMap.has(icd)) {
    icdDuplicates.push({
      original: icdMap.get(icd),
      duplicate: disease,
    });
  } else {
    icdMap.set(icd, disease);
  }
});

// Check for duplicate namaste names
const namasteMap = new Map();
const namasteDuplicates = [];

diseases.forEach((disease) => {
  const namaste = disease.namaste.toLowerCase();
  if (namasteMap.has(namaste)) {
    namasteDuplicates.push({
      original: namasteMap.get(namaste),
      duplicate: disease,
    });
  } else {
    namasteMap.set(namaste, disease);
  }
});

console.log("=== DUPLICATE ANALYSIS ===");
console.log("\n1. DUPLICATE DISEASE NAMES:");
if (nameDuplicates.length > 0) {
  nameDuplicates.forEach((dup) => {
    console.log(
      `- "${dup.original.name}" (ID: ${dup.original.id}) vs "${dup.duplicate.name}" (ID: ${dup.duplicate.id})`
    );
  });
} else {
  console.log("No duplicate names found.");
}

console.log("\n2. DUPLICATE ICD CODES:");
if (icdDuplicates.length > 0) {
  icdDuplicates.forEach((dup) => {
    console.log(
      `- ${dup.original.icdCode}: "${dup.original.name}" (ID: ${dup.original.id}) vs "${dup.duplicate.name}" (ID: ${dup.duplicate.id})`
    );
  });
} else {
  console.log("No duplicate ICD codes found.");
}

console.log("\n3. DUPLICATE NAMASTE NAMES:");
if (namasteDuplicates.length > 0) {
  namasteDuplicates.forEach((dup) => {
    console.log(
      `- "${dup.original.namaste}": "${dup.original.name}" (ID: ${dup.original.id}) vs "${dup.duplicate.name}" (ID: ${dup.duplicate.id})`
    );
  });
} else {
  console.log("No duplicate namaste names found.");
}

console.log("\n=== SUMMARY ===");
console.log(`Total diseases: ${diseases.length}`);
console.log(`Duplicate names: ${nameDuplicates.length}`);
console.log(`Duplicate ICD codes: ${icdDuplicates.length}`);
console.log(`Duplicate namaste names: ${namasteDuplicates.length}`);
