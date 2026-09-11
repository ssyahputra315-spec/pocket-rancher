export const currencies = ["IDR", "USD", "EUR", "GBP", "AUD", "SGD", "MYR", "THB", "JPY", "CNY", "INR"] as const;
export const species = ["Cattle", "Goat", "Sheep", "Horse", "Chicken", "Duck", "Pig", "Other"] as const;
export const animalStatuses = ["Healthy", "Sick", "Pregnant", "Sold", "Deceased", "Other"] as const;

export type Currency = (typeof currencies)[number];
export type Settings = { farmName: string; currency: Currency; weightUnit: string; language: string; dateFormat: string };
export type Animal = { id: string; name: string; species: string; breed: string; gender: string; birthDate: string; age: string; acquisitionDate: string; acquisitionCost: number; currency: Currency; weight: number; weightUnit: string; status: string; photo?: string; notes: string; createdAt: string };
export type Batch = { id: string; species: string; breed: string; startingQuantity: number; currentQuantity: number; startDate: string; acquisitionCost: number; currency: Currency; averageWeight: number; weightUnit: string; status: string; notes: string; createdAt: string };
export type WeightRecord = { id: string; animalId: string; date: string; weight: number; unit: string; notes: string };
export type HealthRecord = { id: string; animalId: string; type: string; date: string; nextDate: string; treatment: string; notes: string };
export type FeedItem = { id: string; name: string; category: string; quantity: number; lowStockAt: number; unit: string; purchasePrice: number; currency: Currency; purchaseDate: string; notes: string };
export type FeedUsage = { id: string; feedId: string; date: string; quantity: number; unit: string; animalId: string; notes: string };
export type Expense = { id: string; date: string; category: string; description: string; amount: number; currency: Currency; animalId: string; notes: string };
export type Sale = { id: string; date: string; type: string; description: string; animalId: string; quantity: number; amount: number; currency: Currency; buyer: string; notes: string };
export type Breeding = { id: string; femaleId: string; maleId: string; breedingDate: string; method: string; expectedBirthDate: string; actualBirthDate: string; offspring: number; notes: string };
export type FarmTask = { id: string; name: string; date: string; repeat: string; animalId: string; notes: string; completed: boolean };
export type FarmData = { version: 1; settings: Settings; animals: Animal[]; batches: Batch[]; weights: WeightRecord[]; health: HealthRecord[]; feed: FeedItem[]; feedUsage: FeedUsage[]; expenses: Expense[]; sales: Sale[]; breeding: Breeding[]; tasks: FarmTask[] };

export const emptyFarmData = (): FarmData => ({
  version: 1,
  settings: { farmName: "My Farm", currency: "IDR", weightUnit: "kg", language: "English", dateFormat: "DD/MM/YYYY" },
  animals: [], batches: [], weights: [], health: [], feed: [], feedUsage: [], expenses: [], sales: [], breeding: [], tasks: [],
});