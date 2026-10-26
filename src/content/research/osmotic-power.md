---
title: OsmoFlux
kind: project
status: Active
order: 1
summary: "Cleaner desalination for global drought resilience: a design framework and screening tool for treating desalination brine with reverse electrodialysis while generating electricity."
question: "Cleaner desalination for global drought resilience."
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
  - "4,353 designs screened; 90 % of peak power moves 21.5 % more salt"
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

Only 0.5% of Earth's water is usable freshwater, and over four billion people live in water-stressed regions. Desalination is the resilient answer: over 300 million people rely on water from 22,000 plants for their daily survival needs. Yet those plants discharge 142 million m³ of brine a day, most of it straight to the sea, enough to bury Florida a foot deep every year. At nearly twice the salinity of seawater, brine sinks and spreads across the seafloor, draining oxygen at the base of fragile coastal ecosystems, every day the plant runs. In 2022 a $1.4 billion California plant was denied its permit partly over brine.

OsmoFlux offers desalination plants a new way to get an engineering answer to the brine question. Reverse electrodialysis (RED) is a membrane technology studied mainly as a way to generate electricity. OsmoFlux is a screening tool for plant engineers to evaluate RED to dilute discharge while recovering power. A plant enters its own flows, brine chemistry, and permit limits, and OsmoFlux returns the optimal RED stack design for meeting that limit, along with what it costs to build and run.

- **What the model found:** the load that maximizes power and the load that minimizes concentrate salinity are different. Across 4,353 stack designs, operating at 90 % of peak power raises salt transfer by a median 21.5 % while lowering concentrate salinity by 1.20 g/L, because water leaves the concentrate along with the salt and offsets much of the salinity gain.
- **Where treatment comes from:** adding membrane or dilute water outranks rearranging the same resources into stages.
- **What it changes:** selecting hardware and load together meets the same outlet duty with 23 cell pairs instead of 36–37, and lowers the avoided-treatment value needed to justify the stack by 34 %, even when the stack imports electricity.
- **A real feed:** a module case built from the Carlsbad Desalination Plant's published feed and permit data shows the same hardware saving (29–33 %). When dilute water is scarce, the dilute outlet becomes the binding condition and the preferred load adjustment reverses.

OsmoFlux offers desalination plants a screener to explore optimal design configurations. A plant would set the two outlet limits, the dilute-supply ratio, the membrane budget and the retained-power rule. OsmoFlux checks water feasibility from conservation, looks up the design in the survey, reports the fewest pairs that meet both limits, and ranks the four levers - power, water, membrane, rearrangement - by the benefit provided.
