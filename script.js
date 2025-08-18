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
    const isLeft = 1; //index % 2 === 0;
    const timelineItem = document.createElement('div');
    timelineItem.className = `flex items-center ${isLeft ? 'flex-row-reverse' : ''}`;
    timelineItem.innerHTML = `
                    <div class="w-5/12">
                        <div class="p-6 rounded-2xl shadow-md card-hover" style="background-color: var(--card-bg); color: var(--text-primary); text-align: ${!isLeft ? 'right' : 'left'};">
                            <p class="font-bold text-lg" style="color: var(--text-accent);">${item.year}</p>
                            <p class="font-semibold">${item.title}</p>
                            <p class="text-sm italic" style="color: var(--text-secondary);">${item.institution}</p>
                            <p class="text-sm mt-2" style="color: var(--text-secondary);">${item.description}</p>
                        </div>
                    </div>
                    <div class="w-2/12 flex justify-center">
                        <div class="w-7 h-7 rounded-full" style="background-color: var(--text-accent); z-index: 1"></div>
                    </div>
                    <div class="w-5/12"></div>
                `;
    timelineContainer.appendChild(timelineItem);
  });

  const researchTabsContainer = document.getElementById('research-tabs-container');
  const researchContentContainer = document.getElementById('research-content-container');

  Object.keys(researchData).forEach((key, index) => {
    const button = document.createElement('button');
    button.className = 'tab-button px-5 py-2.5 text-sm font-medium rounded-full transition-colors';
    button.style.backgroundColor = 'var(--card-bg)';
    button.style.color = 'var(--text-accent)';
    button.textContent = key;
    button.dataset.tab = key;
    if (index === 0) button.classList.add('active');
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-button').forEach(btn => {
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

      researchContentContainer.innerHTML = `
                   <div class="flex flex-col md:flex-row gap-3 items-center">
    <img src="${data.image}" alt="${data.title}" class="rounded-xl">
    <div>
        <h3 class="text-2xl font-bold mb-4" style="color: var(--text-secondary);">${data.title}</h3>
        <p class="mb-6" style="color: var(--text-primary);">${data.content}</p>
        <div class="flex flex-wrap gap-3">
            ${linksHtml}
        </div>
    </div>
</div>
                    `;
    });
    researchTabsContainer.appendChild(button);
  });
  document.querySelector('.tab-button').click();

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
                        <a href="${pub.doi}" target="_blank" class="inline-block mt-3 text-sm font-semibold hover:underline" style="color: var(--text-accent);">Read More (DOI) &rarr;</a>
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

    memberCard.innerHTML = `

          <img src="${member.avatar}" alt="${member.name}" class="w-36 h-36 mx-auto rounded-full object-cover mb-4 flex-shrink-0" onerror="this.onerror=null; this.outerHTML = \`<div class='w-48 h-48 mx-auto rounded-full flex items-center justify-center mb-4' style='background-color: var(--bg-secondary);'><span class='text-6xl' style='color: var(--text-accent);'>${initials}</span></div>\`">


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
