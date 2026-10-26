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
tool:
  label: "Open the RED Design Screener"
  url: "/tools/osmoflux-screener.html"
  note: "Set outlet limits, dilute supply, membrane budget and retained power — see what each design lever buys."
layout: wide
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
  - title: "Presented to the FUHSD Board and Climate Collective"
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
    year: "Apr 2026"
    kind: award
  - title: "National Finalist, Climate Resilience Award"
    venue: "Modeling the Future Challenge"
    year: "Apr 2026"
    kind: award
  - title: "Second Award"
    venue: "Synopsys Science Fair"
    year: "Mar 2026"
    kind: award
  - title: "Research Grant"
    venue: "Monta Vista IRPD"
    year: "Feb 2026"
    kind: grant
  - title: "First code commit"
    venue: "github.com/blueleaflabs/osmoflux"
    year: "Jan 2026"
    kind: code
published: true
---

Reverse electrodialysis (RED) moves salt from desalination concentrate into a dilute stream and generates electricity while doing it. OsmoFlux asks the design question a plant engineer would ask: given separate outlet limits on both streams, how much membrane, how much dilute water, and which electrical load? The answer is a design sequence, and a screening tool built on it.

- **What the model found:** the load that maximizes power and the load that minimizes concentrate salinity are different. Across 4,353 stack designs, operating at 90 % of peak power raises salt transfer by a median 21.5 % while lowering concentrate salinity by 1.20 g/L, because water leaves the concentrate along with the salt and offsets much of the salinity gain.
- **Where treatment comes from:** adding membrane or dilute water outranks rearranging the same resources into stages.
- **What it changes:** selecting hardware and load together meets the same outlet duty with 23 cell pairs instead of 36–37, and lowers the avoided-treatment value needed to justify the stack by 34 %, even when the stack imports electricity.
- **A real feed:** a module case built from the Carlsbad Desalination Plant's published feed and permit data shows the same hardware saving (29–33 %). When dilute water is scarce, the dilute outlet becomes the binding condition and the preferred load adjustment reverses.

OsmoFlux offers desalination plants a screener to explore optimal design configurations. A plant would set the two outlet limits, the dilute-supply ratio, the membrane budget and the retained-power rule. OsmoFlux checks water feasibility from conservation, looks up the design in the survey, reports the fewest pairs that meet both limits, and ranks the four levers - power, water, membrane, rearrangement - by the benefit provided.
