
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });

  const timelineContainer = document.getElementById('timeline-container');

  timelineData.forEach((item, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'relative pl-8';
    timelineItem.innerHTML = `
                    <div class="absolute left-[-9px] w-4 h-4 rounded-full" style="background-color: var(--text-accent);top:40%;"></div>
                    <div class="${index < timelineData.length - 1 ? 'pb-12' : ''}">
                        <div class="p-6 rounded-2xl shadow-md card-hover" style="background-color: var(--card-bg); color: var(--text-primary);">
                            <p class="font-bold text-lg" style="color: var(--text-accent);">${item.year}</p>
                            <p class="font-semibold">${item.title}</p>
                            <p class="text-sm italic" style="color: var(--text-secondary);">${item.institution}</p>
                            <p class="text-sm mt-2" style="color: var(--text-secondary);">${item.description}</p>
                        </div>
                    </div>
                `;
    timelineContainer.appendChild(timelineItem);
  });

  const researchSidebar = document.getElementById('research-sidebar');
  const researchContentContainer = document.getElementById('research-content-container');

  Object.keys(researchData).forEach((key, index) => {
    const button = document.createElement('button');
    button.className = 'sidebar-link w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors';
    button.style.backgroundColor = 'var(--card-bg)';
    button.style.color = 'var(--text-accent)';
    button.textContent = key;
    button.dataset.tab = key;
    if (index === 0) button.classList.add('active');

    button.addEventListener('click', () => {
      document.querySelectorAll('.sidebar-link').forEach(btn => {
        btn.classList.remove('active');
        btn.style.backgroundColor = 'var(--card-bg)';
        btn.style.color = 'var(--text-accent)';
      });
      button.classList.add('active');
      button.style.backgroundColor = 'var(--text-accent)';
      button.style.color = 'var(--bg-primary)';

      const data = researchData[key];
      let linksHtml = data.links.map(link => `
                        <a href="${link.url}" target="_blank" class="inline-block px-4 py-2 rounded-full text-sm hover:opacity-90 transition-opacity" style="background-color: var(--bg-secondary); color: var(--text-accent);">${link.name} &rarr;</a>
                    `).join('');

      let visualHtml = '';
      if (data.image) {
        visualHtml += `<img src="${data.image}" alt="${data.title}" class="research-visual rounded-xl shadow-md w-full h-auto object-cover">`;
      }
      if (data.cifUrl) {
        visualHtml += `<div id="mol-viewer" class="research-visual rounded-xl shadow-md w-full h-96 relative" style="${data.image ? 'display: none;' : ''}"></div>`;
      }

      let toggleButtonHtml = '';
      if (data.image && data.cifUrl) {
        toggleButtonHtml = `<button id="visual-toggle" class="mt-4 px-4 py-2 rounded-full text-sm" style="background-color: var(--bg-secondary); color: var(--text-accent);">Show Crystal Structure</button>`;
      }

      researchContentContainer.innerHTML = `
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 class="text-2xl font-bold mb-4" style="color: var(--text-secondary);">${data.title}</h3>
                                <p class="mb-6" style="color: var(--text-primary);">${data.content}</p>
                                <div class="flex flex-wrap gap-3">
                                    ${linksHtml}
                                </div>
                            </div>
                            <div class="relative">
                                ${visualHtml}
                                ${toggleButtonHtml}
                            </div>
                        </div>
                    `;

      let viewerInitialized = false;
      const molViewerDiv = document.getElementById('mol-viewer');

      function create3DViewer(element, cifUrl) {
        if (!element) return;
        element.innerHTML = `<div class="absolute inset-0 flex items-center justify-center"><div class="animate-spin rounded-full h-16 w-16 border-b-2" style="border-color: var(--text-accent);"></div></div>`;

        setTimeout(() => {
          try {
            let bgColor = document.documentElement.classList.contains('dark') ? '#242424' : '#ffffff';
            let config = { backgroundColor: bgColor };
            let viewer = $3Dmol.createViewer(element, config);
            $.get(cifUrl, function(cifData) {
              viewer.addModel(cifData, "cif");
              viewer.setStyle({}, {stick: {}});
              viewer.zoomTo();
              viewer.render();
              viewer.zoom(1.2, 1000);
              viewerInitialized = true;
            }).fail(function() {
              element.innerHTML = '<p class="my-5 text-center text-red-500">Could not load crystal data.</p>';
            });
          } catch (e) {
            element.innerHTML = '<p class="my-5 text-center text-red-500">Failed to initialize 3D viewer.</p>';
          }
        }, 100);
      }

      if (data.cifUrl && !data.image) {
        create3DViewer(molViewerDiv, data.cifUrl);
      }

      if (data.image && data.cifUrl) {
        const toggleButton = document.getElementById('visual-toggle');
        const visuals = researchContentContainer.querySelectorAll('.research-visual');
        let isImageVisible = true;
        toggleButton.addEventListener('click', () => {
          isImageVisible = !isImageVisible;
          visuals.forEach(v => v.style.display = 'none');
          if (isImageVisible) {
            visuals[0].style.display = 'block';
            toggleButton.textContent = 'Show Crystal Structure';
          } else {
            visuals[1].style.display = 'block';
            if (!viewerInitialized) {
              create3DViewer(document.getElementById('mol-viewer'), data.cifUrl);
            }
            toggleButton.textContent = 'Show Image';
          }
        });
      }
    });
    researchSidebar.appendChild(button);
  });
  document.querySelector('.sidebar-link').click();

  const publicationList = document.getElementById('publication-list');
  const publicationSearch = document.getElementById('publication-search');

  function renderPublications(filter = '') {
    publicationList.innerHTML = '';
    const filtered = publicationsData.filter(p =>
      p.title.toLowerCase().includes(filter) ||
      p.journalFullName.toLowerCase().includes(filter) ||
      p.authors.toLowerCase().includes(filter) ||
      p.year.toString().includes(filter)
    );

    if (filtered.length === 0) {
      publicationList.innerHTML = `<p class="text-center" style="color: var(--text-primary);">No publications found.</p>`;
      return;
    }

    filtered.forEach(pub => {
      const pubCard = document.createElement('div');
      pubCard.className = 'p-6 rounded-2xl border card-hover';
      pubCard.style.backgroundColor = 'var(--bg-secondary)';
      pubCard.style.borderColor = 'var(--border-color)';
      pubCard.innerHTML = `
                        <p class="font-semibold text-lg" style="color: var(--text-secondary);">${pub.title}</p>
                        <p class="text-sm mt-1" style="color: var(--text-primary);">${pub.authors}</p>
                        <p class="text-sm mt-2" style="color: var(--text-primary);"><em>${pub.journalFullName}</em>, ${pub.year}</p>
                        <p class="text-sm mt-3" style="color: var(--text-primary);">${pub.description}</p>
                        <a href="${pub.doi}" target="_blank" class="inline-block mt-3 text-sm font-semibold hover:underline" style="color: var(--text-accent);">Read More</a>
                    `;
      publicationList.appendChild(pubCard);
    });
  }

  publicationSearch.addEventListener('input', (e) => {
    renderPublications(e.target.value.toLowerCase());
  });

  renderPublications();

  const currentTeamGrid = document.getElementById('current-team-grid');
  const alumniTeamGrid = document.getElementById('alumni-team-grid');

  function createMemberCard(member) {
    const memberCard = document.createElement('div');
    memberCard.className = 'p-6 rounded-2xl shadow-md text-center flex flex-col card-hover';
    memberCard.style.backgroundColor = 'var(--card-bg)';

    const initials = member.name.split(' ').map(n => n[0]).join('');
    const fallbackAvatarHTML = `<div class='w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 flex-shrink-0' style='background-color: var(--bg-secondary);'><span class='text-3xl' style='color: var(--text-accent);'>${initials}</span></div>`;

    memberCard.innerHTML = `
                    <img src="${member.avatar}" alt="${member.name}" class="w-24 h-24 mx-auto rounded-full object-cover mb-4 flex-shrink-0" onerror="this.onerror=null; this.outerHTML = '${fallbackAvatarHTML.replace(/'/g, "\\'")}';">
                    <div class="flex-grow">
                        <h4 class="text-xl font-bold" style="color: var(--text-secondary);">${member.name}</h4>
                        <p class="mb-1" style="color: var(--text-accent);">${member.role}</p>
                        <p class="text-xs mb-2" style="color: var(--text-primary);">${member.period}</p>
                        <p class="text-sm mt-2" style="color: var(--text-primary);">${member.focus}</p>
                    </div>
                    <a href="mailto:${member.email}" class="text-sm break-all mt-4 hover:underline" style="color: var(--text-accent);">${member.email}</a>
                `;
    return memberCard;
  }

  currentMembersData.forEach(member => {
    currentTeamGrid.appendChild(createMemberCard(member));
  });

  alumniData.forEach(member => {
    alumniTeamGrid.appendChild(createMemberCard(member));
  });

  // Theme toggle logic
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    themeToggleDarkIcon.classList.remove('hidden');
  }

  themeToggleBtn.addEventListener('click', function() {
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  });
});
