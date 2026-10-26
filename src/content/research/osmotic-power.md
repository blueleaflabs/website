---
title: OsmoFlux
kind: project
status: Active
order: 1
summary: "A design framework and screening tool for sizing and operating reverse electrodialysis on desalination concentrate — treating brine and generating electricity under membrane and dilute-water constraints."
question: "When a desalination plant must meet separate concentrate and dilute outlet limits, how much membrane, dilute water and electrical load does a reverse-electrodialysis stack need — and does the load that maximizes power also minimize concentrate salinity?"
methods: "One-dimensional axial RED stack model (NaCl-equivalent transport, water transport, pumping losses); conservation bounds and a local operating-point law; 4,353-design computational survey with mesh refinement to 640–2,560 segments; Morris sensitivity screening; paired techno-economic comparison over 4,000 cost draws; unfitted benchmark against published stack measurements."
dataSources: "Manufacturer membrane data (Fumatech FAS/FKS); transport measurements from the RED literature (Veerman, Kingsbury); Hulme et al. 2021 stack measurements and public workbook; Carlsbad Desalination Plant supplier and permit records; standard seawater composition."
outputs: "Peer-review manuscript (submitted); SSRN preprint; reproducible simulation pipeline and analysis notebooks (GitHub); deposited run data and figures (Zenodo); interactive design screener; Carlsbad-informed module case."
repo: "https://github.com/blueleaflabs/osmoflux"
highlights:
  - "4,353 stack designs screened; 90 % of peak power moves 21.5 % more salt"
  - "Same outlet duty with 23 cell pairs instead of 36–37"
  - "Carlsbad-informed case: 29–33 % less membrane"
videos:
  - label: "Student Impact Challenge"
    url: "https://youtube.com/shorts/EjO7-D8VfWw"
publications:
  - label: "Preprint (SSRN), 2026"
    url: "https://doi.org/10.2139/ssrn.7181678"
  - label: "Society of Actuaries ARCH, 2026"
    url: "https://www.soa.org/globalassets/assets/files/static-pages/research/arch/2026/arch-2026-iss-2-blue-leaf-labs.pdf"
  - label: "Simulation data and reproducible analysis (Zenodo)"
    url: "https://doi.org/10.5281/zenodo.23353868"
awards:
  - title: "Presented to the FUHSD District Board and the Climate Collective"
    venue: "Fremont Union High School District"
    year: "Oct 2026"
    kind: talk
  - title: "Manuscript submitted for peer review"
    venue: "Results in Engineering (Elsevier)"
    year: "Oct 2026"
    kind: paper
  - title: "Presented to the plant management team"
    venue: "Carlsbad Desalination Plant"
    year: "Sep 2026"
    kind: talk
  - title: "Research grant for the next prototype"
    venue: "National Geographic"
    year: "Aug 2026"
    kind: grant
  - title: "Bronze Medalist"
    venue: "International Genius Olympiad"
    year: "Jun 2026"
    kind: award
  - title: "2nd Place, National ($15,000 scholarship)"
    venue: "Modeling the Future Challenge"
    year: "2026"
    kind: award
  - title: "National Finalist, Climate Resilience Award"
    venue: "Modeling the Future Challenge"
    year: "2026"
    kind: award
  - title: "Second Award"
    venue: "Synopsys Science Fair"
    year: "2026"
    kind: award
  - title: "Research Grant"
    venue: "Monta Vista IRPD"
    year: "2026"
    kind: grant
published: true
---

Reverse electrodialysis (RED) moves salt from desalination concentrate into a dilute stream and generates electricity while doing it. OsmoFlux asks the design question a plant engineer would ask: given separate outlet limits on both streams, how much membrane, how much dilute water, and which electrical load? The answer is a design sequence, and a screening tool built on it.

<p><a class="btn btn-primary" href="/tools/osmoflux-screener.html">Open the RED Design Screener →</a></p>

- **What the model found:** the electrical load that maximizes power does not minimize concentrate salinity. Across 4,353 stack designs, operating at 90 % of peak power raises salt transfer by a median 21.5 % but lowers concentrate salinity by only 1.20 g/L, because water transport offsets most of the extra salt at the outlet.
- **Where treatment comes from:** adding membrane or dilute water outranks rearranging the same resources into stages, whose pumping losses exceed their gain — the order holds in all 30 matched comparisons.
- **What it changes:** selecting hardware and load together meets the same outlet duty with 23 cell pairs instead of 36–37, and lowers the avoided-treatment value needed to justify the stack by 34 %, even when the stack imports electricity.
- **A real feed:** a module case built from the Carlsbad Desalination Plant's published feed and permit data shows the same hardware saving (29–33 %) and a second regime: when dilute water is scarce, the dilute outlet binds and the preferred load adjustment reverses.

**The screener** turns the framework into a tool. Set the two outlet limits, the dilute-supply ratio, the membrane budget and the retained-power rule; it checks water feasibility from conservation, looks up the design in the survey, reports the fewest pairs that meet both limits, and ranks the four levers — power, water, membrane, rearrangement — by what each buys next. Every number it shows is read from the deposited run.

**How it is built.** The simulation pipeline is written in Python (`physics.py`, `experiment.py`, `economics.py`, with NumPy, SciPy and pandas) and launched from a reproducibility notebook that records every input hash; an analysis notebook regenerates all figures and tables from the saved run. The screener is a single self-contained HTML page (Chart.js) whose data layer is extracted from that run; its front-end code was written with AI assistance and is disclosed as such. Code is public at github.com/blueleaflabs/osmoflux; data and figures are deposited on Zenodo.

These are model predictions, not plant validation: the transport model is NaCl-equivalent, and published-stack comparisons bound absolute power rather than calibrate it. The next step is a physical test of the predicted hardware reduction and control choices.
