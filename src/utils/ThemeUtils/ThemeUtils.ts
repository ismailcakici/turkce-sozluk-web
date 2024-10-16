export const setTheme = (theme: 'light' | 'dark'): void => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };
  
  export const getTheme = (): 'light' | 'dark' => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  };
  