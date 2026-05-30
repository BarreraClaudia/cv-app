# CV Builder

A React application that lets users build and download a professional CV through a clean, interactive form-based interface.

![CV Builder](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-8-purple) ![Lucide](https://img.shields.io/badge/Lucide_React-1.16-orange)

## Features

- **5 form sections** — Name & Title, Contact, Summary, Education, and Work Experience
- **Live CV preview** — updates as forms are submitted
- **Form validation** — required fields are enforced with per-field error messages
- **Edit & delete entries** — pencil and trash icons on every saved education and work entry
- **Reorder entries** — up and down arrows to rearrange education entries, work entries, and job detail bullet points
- **Add detail bullet points** — dynamically add, edit, reorder, and delete bullet points for each work experience
- **Print / Download PDF** — prints only the CV preview, hiding the editor UI
- **Accordion navigation** — one panel open at a time with animated open/close transitions and a rotating chevron
- **Responsive layout** — stacks to a single column on smaller screens

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vitejs.dev/)
- [Lucide React](https://lucide.dev/) — icons
- [Google Fonts](https://fonts.google.com/) — Inter (body) + Playfair Display (CV name)
- Vanilla CSS

## Project Structure

```
src/
├── components/
│   ├── App.jsx                # Root component, holds all CV state
│   ├── Accordion.jsx          # Accordion + Panel components
│   ├── CVPreview.jsx          # Live CV preview + print styles
│   ├── Header.jsx             # App header with Print CV button
│   └── forms/
│       ├── Input.jsx          # Reusable controlled input component
│       ├── NameForm.jsx       # Full name + professional title
│       ├── ContactForm.jsx    # Email, phone, website
│       ├── SummaryForm.jsx    # Profile summary
│       ├── EducationForm.jsx  # Degree, school, year
│       └── WorkForm.jsx       # Job title, company, years, detail bullets
├── styles/
│   ├── App.css
│   ├── Accordion.css
│   ├── CVPreview.css
│   ├── Forms.css
│   └── Header.css
└── index.css                  # CSS reset + global variables
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/your-username/cv-app.git
cd cv-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

## How to Use

1. Open the app and fill in each section using the accordion forms on the left
2. Click **Submit** on each form to update the CV preview on the right
3. Use the **pencil icon** to edit a saved entry — it pulls the data back into the form
4. Use the **trash icon** to delete a saved entry
5. Use the **arrow icons** to reorder education entries, work entries, and job detail bullet points
6. Click **Print CV** in the header to open the print dialog and save as PDF

## Key Design Decisions

- **State lives in `App`** — `cvData` and `activeIndex` are lifted to the common parent so both the accordion and CV preview can access them
- **Local draft state in forms** — each form holds its own draft state while the user types; `cvData` only updates on submit
- **Arrays for education and work** — both support multiple entries, each with a `crypto.randomUUID()` id for stable React keys
- **Work details as `{ id, text }` objects** — gives each bullet point a stable id for reordering and editing without relying on array index
