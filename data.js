const timelineData = [
  { year: '2013-Present', title: 'Assistant Professor', institution: 'Jawaharlal Nehru University, New Delhi', description: 'Established an independent research group focusing on the design and synthesis of functional inorganic materials, including Polyoxometalates (POMs) and Metal-Organic Frameworks (MOFs).' },
  { year: '2011-13', title: 'Dr. D. S. Kothari Postdoctoral Fellow', institution: 'University of Hyderabad', description: 'Awarded a prestigious national fellowship from the UGC to conduct advanced independent research in inorganic chemistry.' },
  { year: '2007-10', title: 'Postdoctoral Fellow', institution: 'The Ohio State University, USA', description: 'Conducted research on applied materials science, including the development of silver-zeolite antimicrobial films, bridging fundamental chemistry with practical applications.' },
  { year: '2007', title: 'Ph.D. in Chemistry', institution: 'University of Hyderabad', description: 'Completed doctoral research on metal-organic complexes, supramolecular chemistry, and solid-state transformations, including pioneering work on reversible single-crystal-to-single-crystal transformations.' }
];

const researchData = {
  'POM Architecture': {
    title: 'The Architecture of Polyoxometalates (POMs)',
    content: 'Polyoxometalates (POMs) are a remarkable class of metal-oxide nanoclusters, often described as "molecular metal oxides." Our group uses these versatile, nano-sized building blocks—like the classic Keggin and Preyssler structures, and the giant spherical Keplerates—to construct complex, functional materials. By attaching other molecules to their surfaces, we create novel hybrid materials for photocatalysis, photochromism, and energy applications. This approach allows us to fine-tune material properties at the molecular level for specific tasks.',
    image: 'https://chemistry-europe.onlinelibrary.wiley.com/cms/asset/e37a3cc0-3e36-4555-8c71-d9ed4a5f3c41/ejic202000889-toc-0001-m.jpg',
    links: [
      { name: 'Proton Conductivity in Keplerates', url: 'https://doi.org/10.1002/ejic.202000889' },
      { name: 'Photochromism of Keplerates', url: 'https://doi.org/10.1039/D1DT00947A' }
    ]
  },
  'Supramolecular Engineering': {
    title: 'Supramolecular Engineering of Hybrid Materials',
    content: 'We employ a "bottom-up" approach using molecular self-assembly to build sophisticated organic-inorganic hybrid materials. By combining POMs with designed organic molecules, we create materials with emergent properties. A key success is the fabrication of mesoporous "molecular sponges" where the inorganic POMs form a robust framework and organic groups line the pores, allowing for the selective capture of pollutants like iodine. We also engineer responsive metallogels that can switch between liquid and semi-solid states.',
    image: 'https://placehold.co/600x400/e8e8e8/6d5f53?text=Self-Assembly',
    links: [
      { name: 'Mesoporous Materials for Guest Capture', url: 'https://doi.org/10.1039/D1MA01092A' }
    ]
  },
  'Dynamic Crystals': {
    title: 'Dynamic Crystals and Solid-State Reactivity',
    content: 'Our group specializes in studying chemical reactions that occur directly within the highly ordered environment of a crystal lattice. We investigate fascinating phenomena like single-crystal-to-single-crystal (SCSC) transformations, where a crystal can undergo a chemical reaction while maintaining its integrity. This allows us to observe chemistry in motion with atomic precision. We also explore complex in-situ ligand formation, where we orchestrate multi-step reactions within a single pot to create dynamic and responsive crystalline materials.',
    image: 'https://placehold.co/600x400/e8e8e8/6d5f53?text=Crystal+Transformation',
    links: [
      { name: 'Reversible SCSC Transformation', url: 'https://doi.org/10.1021/ja067572p' },
      { name: 'In-Situ Ligand Formation', url: 'https://doi.org/10.1021/acsomega.2c03795' }
    ]
  },
  'Applications': {
    title: 'Applications of Advanced Materials',
    content: 'A central goal is to translate our fundamental discoveries into tangible solutions. Our work targets key areas including light-responsive systems (photochromism for smart windows and data storage), clean energy materials (proton conductors for fuel cells), and environmental remediation. By embedding photo-active POMs in robust frameworks like MOFs, we create solid-state molecular switches. Our work on catalysis focuses on using POM-based hybrids to degrade hazardous organic pollutants in wastewater, contributing to a cleaner environment.',
    image: 'https://placehold.co/600x400/e8e8e8/6d5f53?text=Functional+Applications',
    links: [
      { name: 'Photocatalytic Dye Degradation', url: 'https://doi.org/10.1021/acs.inorgchem.5c01739' },
      { name: 'Antimicrobial Surfaces', url: 'https://doi.org/10.1016/j.micromeso.2010.06.020' }
    ]
  }
};

const publicationsData = [
  {
    year: 2023,
    title: 'Preyssler Polyoxometalate Supported Transition Metal Bipyridine Coordination Complexes',
    journal: 'Inorg. Chem.',
    authors: 'Tripathi, A. et al.',
    journalFullName: 'Inorganic Chemistry',
    description: 'This work reports novel hybrid photocatalysts created by attaching transition metal complexes to Preyssler POMs, demonstrating efficient degradation of organic dyes.',
    doi: 'https://doi.org/10.1021/acs.inorgchem.5c01739'
  },
  {
    year: 2024,
    title: 'Inorganic-organic hybrids of the phosphotungstate Keggin anion and a Schiff base cation',
    journal: 'Dalton Trans.',
    authors: 'Mishra, N. K. et al.',
    journalFullName: 'Dalton Transactions',
    description: 'Presents the synthesis and characterization of new hybrid materials combining phosphotungstate anions with Schiff base cations, expanding the library of functional POM-based hybrids.',
    doi: 'https://doi.org/10.1039/D3DT03932A'
  },
  {
    year: 2023,
    title: 'Photochemical and gas adsorption studies of Keggin polyoxometalate functionalized porous material',
    journal: 'Dalton Trans.',
    authors: 'Tripathi, A. et al.',
    journalFullName: 'Dalton Transactions',
    description: 'Developed a novel light-sensitive hybrid material by immobilizing a Keggin anion in a porous organic framework for gas capture applications.',
    doi: 'https://doi.org/10.1039/d3dt02294c'
  },
  {
    year: 2022,
    title: 'Keggin based self-assembled mesoporous materials for the capture of selective guest molecules',
    journal: 'Mater. Adv.',
    authors: 'Tandekar, K. et al.',
    journalFullName: 'Materials Advances',
    description: 'Engineered hydrophobic pores in a self-assembled material for the selective and reversible capture of iodine and other non-polar pollutants.',
    doi: 'https://doi.org/10.1039/D1MA01092A'
  },
  {
    year: 2022,
    title: 'Polyoxometalate-Supported Copper(I)–Pyrazole Complex: Unusual Stability, Geometrical Isomers...',
    journal: 'ACS Omega',
    authors: 'Mishra, N. K. et al.',
    journalFullName: 'ACS Omega',
    description: 'Demonstrated in-situ ligand synthesis and solid-state isomerism in a complex POM-supported coordination compound, showcasing high-level synthetic control.',
    doi: 'https://doi.org/10.1021/acsomega.2c03795'
  },
  {
    year: 2021,
    title: 'Proton Conductivity in {Mo72Fe30}-Type Keplerate',
    journal: 'Eur. J. Inorg. Chem.',
    authors: 'Tandekar, K. et al.',
    journalFullName: 'European Journal of Inorganic Chemistry',
    description: 'Discovered significant proton conductivity in a giant Keplerate cluster, opening a new avenue for POM-based energy materials.',
    doi: 'https://doi.org/10.1002/ejic.202000889'
  },
  {
    year: 2021,
    title: 'Solvent Mediated Reversible Solid State Photochromism of {Mo72Fe30} Keplerate',
    journal: 'Dalton Trans.',
    authors: 'Tandekar, K. et al.',
    journalFullName: 'Dalton Transactions',
    description: 'Investigated the fascinating light-responsive (photochromic) behavior of giant Keplerate clusters, crucial for developing smart materials.',
    doi: 'https://doi.org/10.1039/D1DT00947A'
  },
  {
    year: 2011,
    title: 'Silver nanoparticles embedded in zeolite membranes: release of silver ions and mechanism of antibacterial action',
    journal: 'Int. J. Nanomedicine',
    authors: 'Nagy, A. et al.',
    journalFullName: 'International Journal of Nanomedicine',
    description: 'A key paper from Dr. Sabbani\'s postdoctoral work, demonstrating the application of materials science to create effective antimicrobial surfaces.',
    doi: 'https://doi.org/10.2147/IJN.S24019'
  },
  {
    year: 2010,
    title: 'Synthesis of silver-zeolite films on micropatterned porous alumina...',
    journal: 'Micropor. Mesopor. Mater.',
    authors: 'Sabbani, S. et al.',
    journalFullName: 'Microporous and Mesoporous Materials',
    description: 'Fabricated patterned silver nanoparticle-zeolite films and demonstrated their efficacy as a potent antimicrobial substrate for biomedical applications.',
    doi: 'https://doi.org/10.1016/j.micromeso.2010.06.020'
  },
  {
    year: 2007,
    title: 'Reversible Single Crystal to Single Crystal Transformation through Fe-O(H)Me/Fe-OH₂ Bond Formation...',
    journal: 'J. Am. Chem. Soc.',
    authors: 'Supriya, S. & Das, S. K.',
    journalFullName: 'Journal of the American Chemical Society',
    description: 'A seminal work providing one of the first clear demonstrations of a reversible gas-solid reaction within a single crystal at ambient conditions.',
    doi: 'https://doi.org/10.1021/ja067572p'
  }
];

const currentMembersData = [
  { name: 'Sangeeta', role: 'Ph.D. Scholar', period: '2020 - Present', email: 'sangeeta@example.com', focus: 'Exploring new synthetic routes for functional inorganic-organic hybrid materials.', avatar: 'assets/img/sangeeta.jpg' },
  { name: 'Ruchi', role: 'Ph.D. Scholar', period: '2021 - Present', email: 'ruchi@example.com', focus: 'Investigating the catalytic properties of novel polyoxometalate systems.', avatar: 'assets/img/ruchi.jpg' },
  { name: 'Jyoti Dalal', role: 'Ph.D. Scholar', period: '2021 - Present', email: 'jyoti.d@example.com', focus: 'Computational and experimental studies on solid-state transformations.', avatar: 'assets/img/jyoti_dalal.jpg' },
  { name: 'Yogesh Kumar', role: 'Ph.D. Scholar', period: '2022 - Present', email: 'yogesh.k@example.com', focus: 'Developing porous materials for selective gas adsorption and separation.', avatar: 'assets/img/yogesh_kumar.jpg' },
  { name: 'Vishakha Meena', role: 'M.Sc. Scholar', period: '2021 - Present', email: 'vishakha.m@example.com', focus: 'M.Sc. dissertation project.', avatar: 'assets/img/vishakha_meena.jpg' },
  { name: 'Manish Chandra', role: 'M.Sc. Scholar', period: '2021 - Present', email: 'manish.c@example.com', focus: 'M.Sc. dissertation project.', avatar: 'assets/img/manish_chandra.jpg' }
];

const alumniData = [
  { name: 'Kesar Tandekar', role: 'Ph.D. Scholar', period: '2018 - 2023', email: 'kesar.t@example.com', focus: 'Research on giant POM clusters (Keplerates), photochromism, and proton conductivity.', avatar: 'assets/img/kesar_tandekar.jpg' },
  { name: 'Anjali Tripathi', role: 'Ph.D. Scholar', period: '2019 - 2024', email: 'anjali.t@example.com', focus: 'Synthesis of novel POM-based hybrid materials for photocatalysis and light-responsive applications.', avatar: 'assets/img/anjali_tripathi.jpg' },
  { name: 'Neeraj Kumar Mishra', role: 'Ph.D. Scholar', period: '2019 - 2024', email: 'neeraj.m@example.com', focus: 'Advanced coordination chemistry, crystallography, and in-situ ligand synthesis.', avatar: 'assets/img/neeraj_mishra.jpg' },
  { name: 'Raju Mekala', role: 'Ph.D.', period: '2015 - 2020', email: 'raju.m@example.com', focus: 'Contributed to the understanding of giant {Mo72Fe30} Keplerate clusters and their transformations.', avatar: 'assets/img/raju_mekala.jpg' },
  { name: 'Shreyansh Pandey', role: 'Ph.D.', period: '2016 - 2021', email: 'shreyansh.p@example.com', focus: 'Focused on the synthesis and characterization of novel metal-organic frameworks.', avatar: 'assets/img/shreyansh_pandey.jpg' },
  { name: 'Harshita', role: 'M.Sc. Scholar', period: '2020 - 2022', email: 'harshita@example.com', focus: 'Completed M.Sc. dissertation project in the area of inorganic materials chemistry.', avatar: 'assets/img/harshita.jpg' },
  { name: 'Mahima', role: 'M.Sc. Scholar', period: '2021 - 2023', email: 'mahima@example.com', focus: 'Completed M.Sc. dissertation project in the area of inorganic materials chemistry.', avatar: 'assets/img/mahima.jpg' },
  { name: 'Abhishek Bartwal', role: 'M.Sc. Scholar', period: '2021 - 2023', email: 'abhishek.b@example.com', focus: 'Completed M.Sc. dissertation project in the area of inorganic materials chemistry.', avatar: 'assets/img/abhishek_bartwal.jpg' }
];
