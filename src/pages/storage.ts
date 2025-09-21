// utils/storage.ts

export interface UserType {
  fullName: string;
  email: string;
  phone: string;
  bloodGroup: string;
  location: string;
  password: string;
}

// Save user to localStorage in CSV-like format
export const saveUser = (user: UserType) => {
  const usersCSV = localStorage.getItem("usersCSV") || "fullName,email,phone,bloodGroup,location,password\n";
  const newLine = `${user.fullName},${user.email},${user.phone},${user.bloodGroup},${user.location},${user.password}\n`;
  localStorage.setItem("usersCSV", usersCSV + newLine);
};

// Get all users
export const getUsers = (): UserType[] => {
  const csv = localStorage.getItem("usersCSV");
  if (!csv) return [];
  const lines = csv.split("\n").slice(1).filter(Boolean);
  return lines.map(line => {
    const [fullName, email, phone, bloodGroup, location, password] = line.split(",");
    return { fullName, email, phone, bloodGroup, location, password };
  });
};

// Find a user by email
export const findUserByEmail = (email: string) => {
  return getUsers().find(u => u.email === email);
};
