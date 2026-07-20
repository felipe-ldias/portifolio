const GITHUB_USERNAME = 'felipe-ldias';

async function fetchGithubProjects() {
    const container = document.getElementById('github-projects');

    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
        
        if (!response.ok) {
            throw new Error('Não foi possível carregar os projetos');
        }

        const repos = await response.json();

        const myRepos = repos.filter(repo => !repo.fork);

        if (myRepos.length === 0) {
            container.innerHTML = '<p style="color: var(--color-text-light);">Nenhum projeto encontrado.</p>';
            return;
        }

        container.innerHTML = myRepos.map(repo => {

            const formattedName = repo.name.replace(/[-_]/g, ' ');

            return `
                <div class="main_card project_card">
                    <div class="info_section">
                        <h2 class="title" style="font-size: 1.4rem; text-align: left; color: var(--color-text); text-transform: capitalize;">
                            ${formattedName}
                        </h2>
                        
                        <p style="color: var(--color-text-light); text-align: left; margin: 10px 0; font-size: 0.95rem; line-height: 1.5;">
                            ${repo.description ? repo.description : 'Projeto desenvolvido e hospedado no GitHub.'}
                        </p>

                        <div class="project_tags" style="display: flex; gap: 15px; margin-top: 15px; font-size: 0.9rem;">
                            <span style="color: var(--color-highlight); font-weight: bold;">
                                • ${repo.language || 'HTML/CSS'}
                            </span>
                            <span style="color: var(--color-text-light);">
                                ⭐ ${repo.stargazers_count}
                            </span>
                        </div>

                        <div class="project_links" style="margin-top: 15px; text-align: left; display: flex; gap: 10px; flex-wrap: wrap;">
                            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="bton-submit" style="display: inline-block; text-decoration: none; padding: 8px 16px; font-size: 0.85rem; width: auto;">
                                Ver no GitHub →
                            </a>

                            ${repo.homepage ? `
                                <a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" class="bton-submit" style="display: inline-block; text-decoration: none; padding: 8px 16px; font-size: 0.85rem; width: auto; background-color: transparent; border: 1px solid var(--color-highlight);">
                                    Ver Aplicação 🚀
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

    } catch (error) {
        console.error('Erro ao procurar projetos do GitHub:', error);
        container.innerHTML = '<p style="color: #ff4d4d;">Erro ao carregar projetos. Tente novamente mais tarde.</p>';
    }
}

document.addEventListener('DOMContentLoaded', fetchGithubProjects);