function toggleTheme() {
      const root = document.documentElement;
      const isDark = root.classList.toggle('dark-theme');

      if (isDark) {
        root.style.setProperty('--bg-color', '#121212');
        root.style.setProperty('--text-color', '#e0e0e0');
        root.style.setProperty('--nav-bg', '#1e1e1e');
        root.style.setProperty('--nav-text', '#ffffff');
        root.style.setProperty('--button-bg', '#3a82f7');
        root.style.setProperty('--button-hover', '#1a60d9');
        root.style.setProperty('--section-bg', '#1c1c1c');
      } else {
        root.style.setProperty('--bg-color', '#f4f4f4');
        root.style.setProperty('--text-color', '#333');
        root.style.setProperty('--nav-bg', '#222');
        root.style.setProperty('--nav-text', '#fff');
        root.style.setProperty('--button-bg', '#007acc');
        root.style.setProperty('--button-hover', '#005f99');
        root.style.setProperty('--section-bg', '#fff');
      }
    }