# VFS Global Website

A complete, functional replica of the VFS Global website for individuals. This project recreates the design, layout, and functionality of https://www.vfsglobal.com/en/individuals/index.html

## 📋 Project Overview

This is a static website that replicates the VFS Global platform, featuring:
- Responsive design matching the original website
- Service discovery tool (Origin/Destination selector)
- Service cards for visa, passport, attestation, verification, and tourism services
- Optional add-on services showcase
- Global statistics and reach information
- Customer testimonials
- Professional footer with links and information

## 📁 Project Structure

```
VFS-Global/
├── index.html              # Main homepage
├── css/
│   ├── styles.css          # Main stylesheet
│   ├── responsive.css      # Mobile and tablet styles
│   └── variables.css       # CSS custom properties/variables
├── js/
│   ├── main.js             # Main JavaScript file
│   ├── service-selector.js # Service selection functionality
│   └── interactions.js     # Interactive elements
├── assets/
│   ├── images/            # Image files
│   ├── icons/             # SVG and icon files
│   └── fonts/             # Custom fonts
├── pages/
│   ├── visa-services.html
│   ├── passport-services.html
│   ├── attestation.html
│   ├── verification.html
│   └── tourism.html
├── package.json           # Project dependencies
├── .gitignore            # Git ignore rules
└── README.md             # This file

```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\```
bash
git clone https://github.com/freelancerinfonoreply-bit/VFS-Global.git
cd VFS-Global
\```

2. Install dependencies:
\```
bash
npm install
\```

3. Start the development server:
\```
bash
npm run dev
\```

4. Open your browser and visit:
\```
http://localhost:8000
\```

## 📄 Pages

### Homepage (index.html)
The main landing page featuring:
- Header with navigation
- Search/selection tool for origin and destination
- Service category cards
- Optional add-on services
- Statistics section
- Testimonials
- Footer

### Service Pages
- **Visa Services** - Information about visa applications
- **Passport Services** - Passport-related services
- **Attestation & Legalisation** - Document attestation services
- **Verification Services** - Verification solutions
- **Tourism Services** - Tourism-related services

## 🎨 Design Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Color Scheme** - Professional colors matching VFS Global branding
- **Typography** - Clean, readable fonts for optimal user experience
- **Interactive Elements** - Smooth transitions and hover effects
- **Accessibility** - WCAG compliant markup and semantics

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Styling and layout (Flexbox, Grid)
- **Vanilla JavaScript** - No framework dependencies
- **Live Server** - Development server with hot reload

## 📦 Scripts

- `npm run dev` - Start development server with live reload
- `npm run start` - Start HTTP server
- `npm run build` - Build preparation (future use)
- `npm run test` - Run tests (future use)

## 🔄 Development Workflow

1. Create a feature branch from `develop`
2. Make your changes
3. Test thoroughly
4. Submit a pull request
5. Code review and merge

## 🤝 Contributing

Contributions are welcome! Please follow the development workflow above.

## 📝 Issues & Tasks

See the GitHub Issues tab for detailed tasks and feature requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This is a functional replica for educational and demonstration purposes.