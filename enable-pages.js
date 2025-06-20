// Habilitar GitHub Pages para el repositorio
const enableGitHubPages = async () => {
  const response = await fetch('https://api.github.com/repos/ChelabsWeb/compra-hogar/pages', {
    method: 'POST',
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': 'Bearer ' + process.env.GITHUB_TOKEN,
      'X-GitHub-Api-Version': '2022-11-28'
    },
    body: JSON.stringify({
      source: {
        branch: 'main',
        path: '/'
      }
    })
  });
  
  if (response.ok) {
    const data = await response.json();
    console.log('GitHub Pages habilitado:', data.html_url);
  } else {
    console.error('Error habilitando GitHub Pages:', response.status);
  }
};

// Ejecutar solo si es necesario
// enableGitHubPages();