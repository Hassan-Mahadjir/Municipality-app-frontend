// generateAvatar.ts

export const generateRandomAvatarUrl = (): string => {
    const baseUrl = 'https://api.dicebear.com/6.x/avataaars/svg?seed=';
    const randomString = Math.random().toString(36).substring(7);
    return `${baseUrl}${randomString}`;
  };
  
  const randomAvatarUrl = generateRandomAvatarUrl();
  
  console.log('Generated Avatar URL:', randomAvatarUrl);  // Should display the generated URL
  
  